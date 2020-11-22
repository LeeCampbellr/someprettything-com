import React from "react";
import Head from "next/head";
import styled from "styled-components";
import cms from "@utils/cms";
import Layout from "components/layout";

export default function Home({ data }) {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>{data.entry.previewTest}</h1>
      </div>
    </Layout>
  );
}

export async function getStaticProps(context) {
  console.log(context)
  
  const { data } = await cms(
    `
    {
      entry(title: "Home")  {
        url
        uri
        ... on home_home_Entry {
          title
          previewTest
        }
      }
    }
    `,
    context.preview ? context.previewData?.previewToken : undefined
  );

  return {
    props: {
      data
    }
  }
}
