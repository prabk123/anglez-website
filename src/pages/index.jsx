import Head from "next/head";
import { CallToAction } from "@/components/CallToAction";
import { Faqs } from "@/components/Faqs";
import { Hero } from "@/components/Hero";
import Features from "../components/Features";
import { Pricing } from "../components/Pricing";
import { PrimaryFeatures } from "../components/PrimaryFeatures";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Anglez - Accounting made simple for small businesses</title>
        <meta
          name="description"
          content="Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited."
        />
      </Head>
      <Layout>
        <Hero />
        <Features />
        <PrimaryFeatures />
        <Pricing />
        <Faqs />
        <CallToAction />
      </Layout>
    </>
  );
}
