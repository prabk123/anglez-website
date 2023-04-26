import "focus-visible";
import "@/styles/tailwind.css";
import CrispChat from "../components/CrispChat";
import { initializeTapfiliate } from "../utils/tapfiliate";

initializeTapfiliate();

export default function App({ Component, pageProps }) {
  return (
    <>
      <CrispChat />
      <Component {...pageProps} />
    </>
  );
}
