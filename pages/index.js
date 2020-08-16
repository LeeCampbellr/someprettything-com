import React from "react";
import Head from "next/head";
import styled from "styled-components";
import fetch from "@utils/fetch";
import Layout from "components/layout";

export default function Home({ data }) {
  console.log(data);
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
  const { data } = await fetch(
    `
    {
      entry(title: "Home")  {
        url
        ... on home_home_Entry {
          title
          previewTest
          sourceUid
        }
      }
    }
    `,
    context.preview ? context.previewData?.previewToken : undefined
  );

  return {
    props: {
      data,
    },
  };
}
