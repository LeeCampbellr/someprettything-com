import React from "react";
import Head from "next/head";
import styled from "styled-components";
import fetch from "@utils/fetch";
import Layout from "components/layout";

export default function Home({ data }) {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>Some Pretty Thing</h1>
      </div>
    </Layout>
  );
}

export async function getStaticProps(context) {
  const { data } = await fetch(
    `
    {
      entry {
        title
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
