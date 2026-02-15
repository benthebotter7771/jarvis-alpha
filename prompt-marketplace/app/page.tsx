import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-gray-900 dark:to-gray-950">
      <Header />
      <main className="animate-fade-in">
        <Hero />
        <Features />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}