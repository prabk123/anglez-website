import Head from "next/head";
import { useRouter } from "next/router";
import CookiePopup from "./CookiePopup";
import { Footer } from "./Footer";
import { Header } from "./Header";

export default function Layout({ children, title, description }) {
  const router = useRouter();

  return (
    <>
      <div style={{ contain: "paint" }}>
        <Head>
          <title>{title} | anglez.io</title>
          <meta name="description" content={description} />
          <meta property="og:title" content={`${title} | anglez.io`} />
          <meta property="og:description" content={description} />
          <meta
            property="og:image"
            content={`${process.env.NEXT_PUBLIC_BASE_URL}/og-image.png`}
          />
          <meta
            property="og:url"
            content={`${process.env.NEXT_PUBLIC_BASE_URL}${router.pathname}`}
          />
          <link rel="shortcut icon" href="/favicon.ico" />
        </Head>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
      <CookiePopup />
    </>
  );
}
