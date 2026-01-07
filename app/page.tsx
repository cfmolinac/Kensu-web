import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import HeroSection from '@/components/sections/HeroSection';
import dynamic from 'next/dynamic';

// Lazy load de secciones below-the-fold
const FeaturesSection = dynamic(() => import('@/components/sections/FeaturesSection'), {
  loading: () => null,
});
const HowItWorksSection = dynamic(() => import('@/components/sections/HowItWorksSection'), {
  loading: () => null,
});
const BenefitsSection = dynamic(() => import('@/components/sections/BenefitsSection'), {
  loading: () => null,
});
const CTASection = dynamic(() => import('@/components/sections/CTASection'), {
  loading: () => null,
});

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <BenefitsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
