import React from "react";
import Head from "next/head";
import styled from "styled-components";
import cms from "@utils/cms";
import Layout from "components/layout";

export default function About({ data }) {
  return (
    <Layout>
      <Head>
        <title>About Some Pretty Thing</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>{data.entry.previewTest}</h1>
      </main>
    </Layout>
  )
}

export async function getStaticProps(context) {
  console.log(context)

  const { data } = await cms(
    `
    {
      entry(title: "About")  {
        url
        uri
        ... on about_about_Entry {
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
