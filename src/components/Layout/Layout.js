import Head from "next/head";
import React from "react";
import styles from "./Layout.module.css";
import Logo from './Logo'


const Layout = ({ children, title="World Ranks" }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <Logo />
      </header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>Kamil Orwat</footer>
    </div>
  );
};

export default Layout;
