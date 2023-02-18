import { CallToAction } from "@/components/CallToAction";
import { Faqs } from "@/components/Faqs";
import { Hero } from "@/components/Hero";
import Features from "../components/Features";
import { Pricing } from "../components/Pricing";
import { PrimaryFeatures } from "../components/PrimaryFeatures";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout
      title="Your creative assistant"
      description="The best ad copy writing tool out there."
    >
      <Hero />
      <Features />
      <PrimaryFeatures />
      <Pricing />
      <Faqs />
      {/* <CallToAction /> */}
    </Layout>
  );
}
