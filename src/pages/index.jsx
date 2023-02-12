import Head from "next/head";

import { CallToAction } from "@/components/CallToAction";
import { Faqs } from "@/components/Faqs";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import Features from "../components/Features";
import { Pricing } from "../components/Pricing";
import { SecondaryFeatures } from "../components/SecondaryFeatures";
import { PrimaryFeatures } from "../components/PrimaryFeatures";

export default function Home() {
  return (
    <>
      <Head>
        <title>TaxPal - Accounting made simple for small businesses</title>
        <meta
          name="description"
          content="Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <Features />
        <PrimaryFeatures />
        <Pricing />
        <Faqs />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
