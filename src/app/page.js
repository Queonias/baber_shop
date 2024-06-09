import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

import About from "./pages/about/page.js";
import Navbar from "./pages/navbar/Navbar.js";
import Welcome from "./pages/welcome/Welcome.js";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="./images/favicon.ico" />
        <title>Baber_shop</title>
      </Head>
      <Navbar />
      <About />
      <Welcome />
    </>
  );
}
