import { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function FloatingSupport() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();
  const popupRef = useRef<HTMLDivElement>(null);

  // Tawk.to integration
  useEffect(() => {
    // Only run on client-side
    if (typeof window === 'undefined') return;

    // Tawk.to Widget Script
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://embed.tawk.to/YOUR_TAWK_TO_PROPERTY_ID/YOUR_WIDGET_ID';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  // Open Tawk.to widget
  const openTawkTo = () => {
    if (typeof window !== 'undefined' && (window as any).Tawk_API) {
      (window as any).Tawk_API.maximize();
    }
    setIsOpen(false);
  };

  // Close popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        const button = document.getElementById('floating-support-button');
        if (button && !button.contains(event.target as Node)) {
          setIsOpen(false);
        }
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const contactOptions = [
    {
      name: t.support?.aiAssistant || 'Chat with AI Assistant',
      icon: Bot,
      action: openTawkTo,
      bgColor: 'bg-gradient-to-br from-[#00B7FF] to-[#0090cc]',
      hoverColor: 'hover:from-[#0090cc] hover:to-[#0070aa]',
      description: t.support?.aiDescription || 'Instant AI support',
    },
    {
      name: t.support?.telegram || 'Chat on Telegram',
      icon: Send,
      url: 'https://t.me/rebatrix',
      bgColor: 'bg-gradient-to-br from-[#0088cc] to-[#00a1e4]',
      hoverColor: 'hover:from-[#006699] hover:to-[#0088cc]',
      description: t.support?.telegramDescription || 'Join our community',
    },
    {
      name: t.support?.whatsapp || 'Chat on WhatsApp',
      icon: MessageCircle,
      url: 'https://wa.me/923495712225',
      bgColor: 'bg-gradient-to-br from-[#25D366] to-[#128C7E]',
      hoverColor: 'hover:from-[#1faa52] hover:to-[#0e6e5c]',
      description: t.support?.whatsappDescription || 'Direct message us',
    },
  ];

  return (
    <div className="fixed bottom-5 right-5 z-[9998]">
      {/* Popup Modal */}
      {isOpen && (
        <div 
          ref={popupRef}
          className="absolute bottom-20 right-0 w-[320px] animate-in fade-in slide-in-from-bottom-4 duration-300"
        >
          <div className="relative bg-[#1a1a2e]/95 backdrop-blur-xl border border-[#00B7FF]/20 rounded-2xl shadow-2xl p-5">
            {/* Glassmorphism overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl pointer-events-none" />
            
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-all shadow-lg z-10 hover:scale-110"
              aria-label="Close"
            >
              <X className="w-4 h-4 text-white" />
            </button>

            {/* Header */}
            <div className="mb-4 relative">
              <h3 className="text-lg font-bold text-white mb-1">
                {t.support?.title || 'Contact Support'}
              </h3>
              <p className="text-sm text-[#BFBFBF]">
                {t.support?.subtitle || 'Choose your preferred platform'}
              </p>
            </div>

            {/* Contact Options */}
            <div className="space-y-3 relative">
              {contactOptions.map((option) => {
                const Icon = option.icon;
                const handleClick = () => {
                  if (option.action) {
                    option.action();
                  } else if (option.url) {
                    window.open(option.url, '_blank', 'noopener,noreferrer');
                    setIsOpen(false);
                  }
                };

                return (
                  <button
                    key={option.name}
                    onClick={handleClick}
                    className="w-full flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-[#00B7FF]/10 hover:border-[#00B7FF]/30 transition-all duration-200 group cursor-pointer"
                  >
                    {/* Icon */}
                    <div className={`w-12 h-12 rounded-xl ${option.bgColor} ${option.hoverColor} flex items-center justify-center flex-shrink-0 transition-all duration-200 shadow-lg`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    {/* Text */}
                    <div className="flex-1 text-left">
                      <p className="font-semibold text-white text-sm">{option.name}</p>
                      <p className="text-xs text-[#BFBFBF]">
                        {option.description}
                      </p>
                    </div>

                    {/* Arrow */}
                    <svg
                      className="w-5 h-5 text-[#00B7FF] group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Floating Button with Pulse Animation */}
      <button
        id="floating-support-button"
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-16 h-16 bg-gradient-to-br from-[#FFD700] to-[#FFA500] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 group"
        aria-label="Contact Support"
      >
        {/* Beautiful Smooth Glow Layers */}
        <span className="absolute inset-0 -inset-4 rounded-full bg-gradient-to-br from-[#FFD700]/40 to-[#FFA500]/40 blur-2xl animate-[glow-pulse_5s_ease-in-out_infinite]"></span>
        <span className="absolute inset-0 -inset-6 rounded-full bg-gradient-to-br from-[#00B7FF]/30 to-[#FFD700]/30 blur-3xl animate-[glow-pulse_5s_ease-in-out_infinite]" style={{ animationDelay: '1.5s' }}></span>
        
        {/* Smooth Pulse Rings */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-[#FFD700]/30 animate-[ping-slow_4s_ease-in-out_infinite]"></span>
        
        {/* Icon */}
        <MessageCircle className="relative w-7 h-7 text-[#0a0a0f] group-hover:rotate-12 transition-transform z-10" />
      </button>
    </div>
  );
}