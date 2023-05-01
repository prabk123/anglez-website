import "focus-visible";
import "@/styles/tailwind.css";
import CrispChat from "../components/CrispChat";
import { initializeTapfiliate } from "../utils/tapfiliate";
import analytics from "../utils/analytics";
import { useRouter } from "next/router";
import { useEffect } from "react";

initializeTapfiliate();

export default function App({ Component, pageProps }) {
  const router = useRouter();

  function trackPage() {
    analytics.page();
  }

  useEffect(() => {
    trackPage();
  }, []);

  useEffect(() => {
    router.events.on("routeChangeComplete", trackPage);
    return () => {
      router.events.off("routeChangeComplete", trackPage);
    };
  }, [router.events]);

  return (
    <>
      <CrispChat />
      <Component {...pageProps} />
    </>
  );
}
