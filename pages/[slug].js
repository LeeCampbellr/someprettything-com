import React, {useEffect} from "react";
import Head from "next/head"
import Image from 'next/image'
import styled from "styled-components"
import Layout from "components/layout"
import { gql } from "graphql-request"


import { Heading } from "@atoms/typography"
import PostHeader from "@molecules/post/postHeader"
import PostContent from "@molecules/post/postContent"
import ScrollMem from  "@utils/scrollPos.js"
import cms from "@utils/cms"

export default function Post({ data, preview }) {
  const { postHeader, postContent } = data
  console.log(preview)

  useEffect(() => {

  }, [])

  return (
    <Layout>
      <Head>
        <title>Post Title</title>
      </Head>
      <main>
        <PostHeader postHeader={postHeader} />
        <PostContent postBlocks={postContent} />
      </main>
    </Layout>
  )
}

export async function getStaticPaths() {
  const postsQuery = gql`
    query getPosts {
      entries(section: "posts") {
        slug
        uid
      }
    }
  `;

  const { entries } = await cms(postsQuery);

  return {
    paths: entries?.map((post) => ({
      params: {
        slug: post.slug
      }
  })) ,
    fallback: false
  };
}

export async function getStaticProps(context) {

  const postQuery = gql`
    query getPost($slug: [String]) {
      postHeader: entry(slug: $slug) {
        ... on posts_post_Entry {
          title
          headerLayout
          headerFontSize
          postDate
          featuredImage {
            height
            title
            url
            width
          }
          categories {
            title
          }
        }
      }
     postContent: entry(slug: $slug) {
       ... on posts_post_Entry {
        title
        postContent {
          ... on postContent_brandBlock_BlockType {
            typeHandle
            id
            brand {
              ... on brand_BlockType {
                id
                linkUrl
                image {
                  title
                  width
                  height
                  url
                }
              }
            }
          }
          ... on postContent_contentCenter_BlockType {
            typeHandle
            id
            paragraph
            sectionId
          }
          ... on postContent_contentIntroIndex_BlockType {
            typeHandle
            id
            paragraph
            sections {
              title
              sectionId
            } 
          }
          ... on postContent_contentIntroShop_BlockType {
            typeHandle
            id
            paragraph
            sectionId
            shopIndex {
              itemTitle
              link
            }
          }
          ... on postContent_contentIntroSponsored_BlockType {
            typeHandle
            id
            paragraph
            sectionId
            sponsoredContent
            sponsoredLogo {
              title
              url
            }
          }
          ... on postContent_contentSplit_BlockType {
            typeHandle
            id
            paragraphRight
            paragraphLeft
            sectionId
          }
          ... on postContent_contentSplitImage_BlockType {
            alignment
            id
            imageSize
            image {
              title
              url
              kind
            }
            layout
            paragraph
            sectionId
            typeHandle
          }
          ... on postContent_image_BlockType {
            id
            image {
              title
              url
              kind
            }
            imageSize
            sectionId
            typeHandle
          }
          ... on postContent_imageGallery_BlockType {
            typeHandle
            id
            alignment
            gallery {
              title
              url
              kind
            }
            sectionId
          }
          ... on postContent_imageSplit_BlockType {
            alignment
            id
            imageLeft {
              url
              title
              kind
            }
            imageLeftSize
            imageRight {
              url
              title
              kind
            }
            imageRightSize
            sectionId
            typeHandle
          }
          ... on postContent_quote_BlockType {
            typeHandle
            id
            sectionId
            quote
          }
          ... on postContent_widget_BlockType {
            typeHandle
            id
            embed
          }
        }
       }
     }
    }
  `;

  const preview = context.preview ? true : false;

  const data = context.preview
    ? await cms(postQuery, { slug: context.params.slug }, context.previewData.token)
    : await cms(postQuery, { slug: context.params.slug });

  return {
    props: { data, preview },
  };
}
