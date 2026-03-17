import { motion } from 'motion/react';
import { Send, Bell, Users, Gift } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function TelegramSection() {
  const { t } = useLanguage();
  
  return (
    <section id="telegram" className="relative py-24 bg-gradient-to-b from-[#0f0f1a] to-[#0a0a0f] overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full"
          style={{
            background: 'radial-gradient(circle, #00B7FF20, transparent 70%)'
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00B7FF]/30 bg-[#00B7FF]/5 mb-6">
              <Users className="w-4 h-4 text-[#00B7FF]" />
              <span className="text-sm text-[#BFBFBF]">{t.telegram.badge}</span>
            </div>

            <h2 className="text-5xl sm:text-6xl mb-6 bg-gradient-to-r from-white to-[#BFBFBF] bg-clip-text text-transparent">
              {t.telegram.title}
            </h2>

            <p className="text-xl text-[#BFBFBF] mb-8 leading-relaxed">
              {t.telegram.subtitle}
            </p>

            {/* Benefits */}
            <div className="space-y-4 mb-8">
              {[
                { icon: Bell, text: t.telegram.benefits.notifications },
                { icon: Gift, text: t.telegram.benefits.campaigns },
                { icon: Users, text: t.telegram.benefits.support },
                { icon: Send, text: t.telegram.benefits.access }
              ].map((benefit, index) => (
                <motion.div
                  key={benefit.text}
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#00B7FF]/20 to-transparent border border-[#00B7FF]/30 flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-[#00B7FF]" />
                  </div>
                  <span className="text-[#BFBFBF]">{benefit.text}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.a
              href="https://t.me/Rebatrix"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#00B7FF] to-[#0090cc] rounded-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#00B7FF] to-[#0090cc] opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
              <Send className="w-5 h-5 text-white relative z-10" />
              <span className="relative z-10 text-white">{t.telegram.cta}</span>
            </motion.a>
          </motion.div>

          {/* Right side - Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Telegram icon visualization */}
            <div className="relative">
              {/* Outer rings */}
              <motion.div
                className="absolute inset-0 rounded-full border border-[#00B7FF]/20"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0, 0.5]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeOut"
                }}
              />
              <motion.div
                className="absolute inset-0 rounded-full border border-[#00B7FF]/20"
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.5, 0, 0.5]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: 1
                }}
              />

              {/* Center card */}
              <div className="relative aspect-square max-w-md mx-auto p-12 rounded-3xl border border-[#00B7FF]/30 bg-gradient-to-br from-[#1a1a2e]/80 to-[#0f0f1a]/80 backdrop-blur-xl">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#00B7FF]/10 to-transparent" />
                
                {/* Telegram icon */}
                <motion.div
                  className="relative w-full h-full flex items-center justify-center"
                  animate={{
                    y: [0, -10, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#00B7FF] to-[#0090cc] flex items-center justify-center shadow-2xl shadow-[#00B7FF]/50">
                    <Send className="w-16 h-16 text-white" />
                  </div>
                </motion.div>

                {/* Floating notification badges */}
                {[
                  { x: -40, y: -20, delay: 0, text: '🎉' },
                  { x: 40, y: 30, delay: 1, text: '💰' },
                  { x: -30, y: 50, delay: 2, text: '🚀' }
                ].map((badge, index) => (
                  <motion.div
                    key={index}
                    className="absolute w-16 h-16 rounded-xl bg-gradient-to-br from-[#00B7FF]/30 to-transparent border border-[#00B7FF]/40 backdrop-blur-sm flex items-center justify-center"
                    style={{
                      left: `calc(50% + ${badge.x}px)`,
                      top: `calc(50% + ${badge.y}px)`
                    }}
                    animate={{
                      y: [0, -15, 0],
                      rotate: [0, 5, 0, -5, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: badge.delay
                    }}
                  >
                    <span className="text-[36px] text-[48px]">{badge.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}