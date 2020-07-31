import React from "react";
import Head from "next/head";
import { Nav } from "../components/Nav";
import Main from "../components/Main";

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog of Chris</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />

      <Main>
        <h1>Blog</h1>
      </Main>
    </>
  );
}
