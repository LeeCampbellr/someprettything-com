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
    query getDraft($entryUid: [String]) {
        entry(uid: $entryUid)  {
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
    ? await cms(query, context.previewData.entryUid, context.previewData.token)
    : await cms(query, '743e3820-138c-497d-8c87-108e0364d79f');
 
  return {
    props: { entry }
  };

}
