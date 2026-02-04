import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { Features } from "@/components/home/Features";
import { Reviews } from "@/components/home/Reviews";
import { FAQ } from "@/components/home/FAQ";
import { CTA } from "@/components/home/CTA";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Services />
      <Features />
      <Reviews />
      <FAQ />
      <CTA />
    </Layout>
  );
};

export default Index;