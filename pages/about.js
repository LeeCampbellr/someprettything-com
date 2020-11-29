import React from "react";
import Head from "next/head";
import styled from "styled-components";
import { gql } from 'graphql-request';
import Layout from "components/layout";

import cms from "@utils/cms";

export default function About({ entry }) {

  return (
    <Layout>
      <Head>
        <title>About Some Pretty Thing</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>{entry.title}</h1>
        <img src={entry.aboutImage[0].url}/>
      </main>
    </Layout>
  )
}

export async function getStaticProps(context) {

  const query = gql`
    query getAbout {
        entry(title: "about")  {
          url
          uri
          ... on about_about_Entry {
            title
            previewTest
            metaImage {
              url
            }
            aboutImage {
              url
            }
          }
        }
      }
  `;

  const { entry } = context.preview 
    ? await cms(query, undefined, context.previewData.token)
    : await cms(query);
 
  return {
    props: { entry }
  };

}

