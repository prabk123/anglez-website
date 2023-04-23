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
      title="10x your winning creatives in half the time"
      description="TThe right creative can make millions. Using a combination of expert marketers and AI, we have created the ultimate ad scripting assistant."
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
