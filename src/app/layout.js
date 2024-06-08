import { Inter } from "next/font/google";
import "./globals.css";
import About from "./pages/about/page.js";
import Navbar from "./pages/navbar/Navbar.js";
import Welcome from "./pages/welcome/Welcome.js";
import Head from "next/head";
// import "pages/card/page.js";
// import "pages/galeria/page.js";
// import "pages/welcom/page.js";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="./images/favicon.ico" />
        <title>Baber_shop</title>
      </Head>
      <Navbar />
      <About />
      <Welcome />
      {/* <html lang="en">
        <body className={inter.className}>{children}</body>
      </html> */}
    </>

  );
}
