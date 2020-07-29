import React from "react";
import Head from "next/head";
import { Nav } from "../components/Nav";

const Blog = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <h1>Blog</h1>
    </>
  );
};

export default Blog;
