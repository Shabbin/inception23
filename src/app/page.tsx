import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Capabilities } from '@/components/home/Capabilities';
import { Team } from '@/components/home/Team';
import { Proof, InquiryForm, Methodology } from '@/components/home/Sections';
import { HeroWrapper } from '@/components/home/HeroWrapper';
import { CoreValues } from '@/components/home/CoreValues';
import { IndustriesMarquee } from '@/components/home/IndustriesMarquee';
import { Insights } from '@/components/home/Insights';
import { Testimonials } from '@/components/home/Testimonials';
import { Careers } from '@/components/home/Careers';
import { GlobalPresence } from '@/components/home/GlobalPresence';

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-brand-700 selection:text-white overflow-x-hidden bg-white dark:bg-night-950">
      <Header />
      <HeroWrapper />
      <Methodology />
      <Capabilities />
      <CoreValues />
      <IndustriesMarquee />
      <Insights />
      <Proof />
      <Testimonials />
      <Team />
      <Careers />
      <GlobalPresence />
      <InquiryForm />
      <Footer />
    </main>
  );
}