import Head from "next/head";
import CookiePopup from "./CookiePopup";
import { Footer } from "./Footer";
import { Header } from "./Header";

export default function Layout({ children, title, description }) {
  return (
    <div>
      <Head>
        <title>{title} | Anglez</title>
        <meta name="description" content={description} />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
      <CookiePopup />
    </div>
  );
}
