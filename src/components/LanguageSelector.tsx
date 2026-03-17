import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Language } from '../contexts/translations';

interface LanguageOption {
  code: Language;
  flag: string;
  name: string;
}

const languages: LanguageOption[] = [
  { code: 'en', flag: '🇬🇧', name: 'English' },
  { code: 'ar', flag: '🇸🇦', name: 'عربي' },
  { code: 'id', flag: '🇮🇩', name: 'Indonesia' },
  { code: 'vi', flag: '🇻🇳', name: 'Tiếng Việt' },
  { code: 'fr', flag: '🇫🇷', name: 'Français' },
  { code: 'es', flag: '🇪🇸', name: 'Español' },
  { code: 'th', flag: '🇹🇭', name: 'ไทย' },
  { code: 'uz', flag: '🇺🇿', name: 'O\'zbek' },
];

export function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedLanguage = languages.find(lang => lang.code === language) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageSelect = (lang: LanguageOption) => {
    setLanguage(lang.code);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Trigger Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[#00B7FF]/20 bg-[#00B7FF]/5 backdrop-blur-sm hover:bg-[#00B7FF]/10 hover:border-[#00B7FF]/40 transition-all"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <span className="text-lg">{selectedLanguage.flag}</span>
        <span className="text-[#BFBFBF] text-sm hidden sm:inline">{selectedLanguage.name}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-4 h-4 text-[#00B7FF]" />
        </motion.div>
      </motion.button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full right-0 mt-2 w-56 bg-gradient-to-br from-[#1a1a2e]/95 to-[#0f0f1a]/95 backdrop-blur-xl rounded-xl border border-[#00B7FF]/20 overflow-hidden shadow-xl shadow-[#00B7FF]/10"
          >
            <div className="p-2 max-h-[320px] overflow-y-auto custom-scrollbar">
              {languages.map((language) => (
                <motion.button
                  key={language.code}
                  onClick={() => handleLanguageSelect(language)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    selectedLanguage.code === language.code
                      ? 'bg-[#00B7FF]/20 text-white'
                      : 'text-[#BFBFBF] hover:bg-[#00B7FF]/10 hover:text-white'
                  }`}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="text-2xl">{language.flag}</span>
                  <span className="text-sm font-medium">{language.name}</span>
                  {selectedLanguage.code === language.code && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="ml-auto w-2 h-2 rounded-full bg-[#00B7FF]"
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}