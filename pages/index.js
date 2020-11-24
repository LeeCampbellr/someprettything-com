import React from "react";
import Head from "next/head";
import styled from "styled-components";
import Layout from "components/layout";
import { gql } from 'graphql-request';
import cms from '@utils/cms';

export default function Home({ entry }) {

  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>{entry.previewTest}</h1>
      </div>
    </Layout>
  );
}

export async function getStaticProps(context) {

  const query = gql`
    query getHome {
        entry(title: "Home")  {
          url
          uri
          ... on home_home_Entry {
            title
            previewTest
          }
        }
      }
  `;

  const { entry } = context.preview 
    ? await cms(query, null, context.previewData.token)
    : await cms(query);
 
  return {
    props: { entry }
  };

}
