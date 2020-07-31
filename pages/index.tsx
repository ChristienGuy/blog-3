import Head from "next/head";
import styles from "../styles/index.module.css";
import { Nav } from "../components/Nav";
import Main from "../components/Main";

export default function Home() {
  return (
    <>
      <Head>
        <title>Chris Guy Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />

      <Main>
        <h1>Home</h1>
        <div className={styles.gridContainer}>
          {[1, 1, 1].map(() => {
            return (
              <div
                style={{
                  background: "orange",
                  height: "100px",
                }}
              />
            );
          })}
        </div>
      </Main>
    </>
  );
}
