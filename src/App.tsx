import { Analytics } from '@vercel/analytics/react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { RebateCalculator } from './components/RebateCalculator';
import { BrokerCards } from './components/BrokerCards';
import { RebateForm } from './components/RebateForm';
import { TelegramSection } from './components/TelegramSection';
import { CampaignsSection } from './components/CampaignsSection';
import { Footer } from './components/Footer';
import { FloatingSupport } from './components/FloatingSupport';
import { LanguageProvider } from './contexts/LanguageContext';
import './styles/globals.css';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#0a0a0f] text-white font-['Inter',sans-serif] antialiased">
        <Navigation />
        <Hero />
        <HowItWorks />
        <RebateCalculator />
        <BrokerCards />
        <RebateForm />
        <CampaignsSection />
        <TelegramSection />
        <Footer />
        <FloatingSupport />
        <Analytics />
      </div>
    </LanguageProvider>
  );
}