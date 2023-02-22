import { Faqs } from "@/components/Faqs";
import { Hero } from "@/components/Hero";
import Benefits from "../components/Benefits";
import { Pricing } from "../components/Pricing";
import Layout from "../components/Layout";
import Features from "../components/Features";
import Standout from "../components/Standout";

export default function Home() {
  return (
    <Layout
      title="Your creative assistant"
      description="The best ad copy writing tool out there."
    >
      <Hero />
      <Benefits />
      <Features />
      <Standout />
      <Pricing />
      <Faqs />
    </Layout>
  );
}
