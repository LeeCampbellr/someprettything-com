import React from "react";
import Head from "next/head"
import styled from "styled-components"
import Layout from "components/layout"
import { gql } from "graphql-request"
import cms from "@utils/cms"

export default function Post({ entry }) {
  return (
    <Layout>
      <Head>
        <title>{entry.title}</title>
      </Head>
      <main>
        <h1>{entry.title}</h1>
      </main>
    </Layout>
  )
}

export async function getStaticPaths() {
  const postsQuery = gql`
    query getPosts {
      entries(section: "posts", status: "Live", limit: 10) {
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
      entry(slug: $slug) {
        title
      }
    }
  `;

  const { entry } = context.preview
    ? await cms(postQuery, { slug: context.params.slug })
    : await cms(postQuery, { slug: context.params.slug }, context.previewData.token);

  return {
    props: { entry },
  };
}
