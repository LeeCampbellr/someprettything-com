import React from "react";
import Head from "next/head";
import styled from "styled-components";
import cms from "@utils/cms";
import { gql } from 'graphql-request';
import Layout from "components/layout";

export default function About({ entry }) {
  console.log(entry);
  return (
    <Layout>
      <Head>
        <title>About Some Pretty Thing</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>{entry.previewTest}</h1>
      </main>
    </Layout>
  )
}

export async function getStaticProps(context) {

  const query = gql`
    query getAbout {
        entry(title: "About")  {
          url
          uri
          ... on about_about_Entry {
            previewTest
          }
        }
      }
  `;

  const { entry } = context.preview
    ? await cms(query, context.previewData.token)
    : await cms(query);

  return {
    props: { entry }
  };

}
