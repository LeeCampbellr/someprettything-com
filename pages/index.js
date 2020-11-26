import React from "react";
import Head from "next/head";
import styled from "styled-components";
import Layout from "components/layout";
import { gql } from 'graphql-request';
import cms from '@utils/cms';

export default function Home({ entry, entries }) {

  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <h1>{entry.previewTest}</h1>
        </div>
        <div>
          <ul>
            {entries.map((post) => (
              <li>
                <a href={post.slug}>{post.title}</a></li>
            ))}
          </ul>
        </div>
      </main>
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
        entries(section: "posts", status: "Live", limit: 10) {
          title 
          slug
        }
      }
  `;

  const { entry, entries } = context.preview 
    ? await cms(query, context.previewData.token)
    : await cms(query);
 
  return {
    props: { entry, entries }
  };

}
