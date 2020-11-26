import React from "react";
import Head from "next/head"
import styled from "styled-components"
import Layout from "components/layout"
import { gql } from "graphql-request"
import cms from "@utils/cms"

export default function Post({ post }) {
  return (
    <Layout>
      <Head>
        <title>This is a post... hopefully</title>
      </Head>
      <main>
        <h1></h1>
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
        slug: post.slug,
        uid: post.uid,
      },
  })) ,
    fallback: false
  };
}

export async function getStaticProps(context) {
  console.log(context.params)
  // const postQuery = gql`
  //   query getPost($uid: [String]) {
  //     entry(uid: $uid) {
  //       title
  //     }
  //   }
  // `;

  // const { post } = await cms(postQuery, params.uid);

  return {
    props: {},
  };
}
