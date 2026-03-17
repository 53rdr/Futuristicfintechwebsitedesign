import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import rebatrixLogo from 'figma:asset/3fd8a311219ce03084de2c5f72fa0380fc29aecf.png';
import { LanguageSelector } from './LanguageSelector';
import { useLanguage } from '../contexts/LanguageContext';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.howItWorks, href: '#how-it-works' },
    { name: t.nav.calculator, href: '#calculator' },
    { name: t.nav.brokers, href: '#brokers' },
    { name: t.nav.activate, href: '#activate' },
    { name: t.nav.campaigns, href: '#campaigns' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-[#00B7FF]/10'
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.a
              href="#"
              className="flex items-center gap-3 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-[#00B7FF] rounded-lg blur-lg opacity-0 group-hover:opacity-50 transition-opacity" />
                <img
                  src={rebatrixLogo}
                  alt="Rebatrix Club"
                  className="w-10 h-10 relative z-10"
                />
              </div>
              <div>
                <span className="text-xl text-white group-hover:text-[#00B7FF] transition-colors">
                  Rebatrix
                </span>
                <span className="text-xl text-[#BFBFBF] ml-1">Club</span>
              </div>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="text-[#BFBFBF] hover:text-[#00B7FF] transition-colors relative group"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#00B7FF] to-transparent group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
            </div>

            {/* Language Selector & CTA Button */}
            <div className="hidden md:flex items-center gap-4">
              <LanguageSelector />
              
              <motion.a
                href="#telegram"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#telegram');
                }}
                className="group relative px-6 py-2.5 bg-gradient-to-r from-[#00B7FF] to-[#0090cc] rounded-lg overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#00B7FF] to-[#0090cc] opacity-0 group-hover:opacity-100 transition-opacity blur-lg" />
                <span className="relative text-white">{t.nav.joinCommunity}</span>
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg border border-[#00B7FF]/20 bg-[#00B7FF]/5 hover:bg-[#00B7FF]/10 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-[#00B7FF]" />
              ) : (
                <Menu className="w-6 h-6 text-[#00B7FF]" />
              )}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        className="fixed inset-0 z-40 md:hidden"
        initial={{ opacity: 0, pointerEvents: 'none' }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          pointerEvents: isMobileMenuOpen ? 'auto' : 'none',
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-[#0a0a0f]/95 backdrop-blur-xl"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Content */}
        <motion.div
          className="absolute top-20 left-0 right-0 p-6"
          initial={{ y: -20, opacity: 0 }}
          animate={{
            y: isMobileMenuOpen ? 0 : -20,
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="bg-gradient-to-br from-[#1a1a2e]/90 to-[#0f0f1a]/90 backdrop-blur-xl rounded-2xl border border-[#00B7FF]/20 overflow-hidden">
            <div className="p-6 space-y-4">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="block px-4 py-3 rounded-lg text-[#BFBFBF] hover:text-white hover:bg-[#00B7FF]/10 transition-all"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{
                    opacity: isMobileMenuOpen ? 1 : 0,
                    x: isMobileMenuOpen ? 0 : -20,
                  }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  {link.name}
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: isMobileMenuOpen ? 1 : 0,
                  x: isMobileMenuOpen ? 0 : -20,
                }}
                transition={{ duration: 0.3, delay: 0.5 }}
                className="pt-2"
              >
                <LanguageSelector />
              </motion.div>

              <motion.a
                href="#telegram"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#telegram');
                }}
                className="block px-4 py-3 mt-4 bg-gradient-to-r from-[#00B7FF] to-[#0090cc] rounded-lg text-white text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: isMobileMenuOpen ? 1 : 0,
                  y: isMobileMenuOpen ? 0 : 20,
                }}
                transition={{ duration: 0.3, delay: 0.6 }}
              >
                {t.nav.joinCommunity}
              </motion.a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}