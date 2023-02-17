import "focus-visible";
import "@/styles/tailwind.css";
import CrispChat from "../components/CrispChat";

export default function App({ Component, pageProps }) {
  return (
    <>
      <CrispChat />
      <Component {...pageProps} />
    </>
  );
}
