import React from "react";
import Head from "next/head"
import Image from 'next/image'
import styled from "styled-components"
import Layout from "components/layout"
import { gql } from "graphql-request"

import { Heading } from "@atoms/typography"
import PostHeader from "@molecules/post/postHeader"
import cms from "@utils/cms"

export default function Post({ data }) {
  const { postHeader, postContent } = data

  return (
    <Layout>
      <Head>
        <title>Post Title</title>
      </Head>
      <main>
        <PostHeader postHeader={postHeader} />
        {/* <PostContent postContent={postContent} /> */}
      </main>
    </Layout>
  )
}

export async function getStaticPaths() {
  const postsQuery = gql`
    query getPosts {
      entries(section: "posts", status: "Live") {
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
       }
     }
    }
  `;

  const data = context.preview
    ? await cms(postQuery, { slug: context.params.slug }, context.previewData.token)
    : await cms(postQuery, { slug: context.params.slug });

  return {
    props: { data },
  };
}
