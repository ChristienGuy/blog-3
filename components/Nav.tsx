import React from "react";
import Link from "next/link";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <>
      <nav>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/">
              <a className={styles.navLink}>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a className={styles.navLink}>Blog</a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export { Nav };
