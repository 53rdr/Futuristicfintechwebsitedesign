import { motion } from 'motion/react';
import { MousePointerClick, FileText, TrendingUp, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function HowItWorks() {
  const { t } = useLanguage();
  
  const steps = [
    {
      icon: MousePointerClick,
      title: t.howItWorks.steps.choose.title,
      description: t.howItWorks.steps.choose.description,
      color: '#00B7FF'
    },
    {
      icon: FileText,
      title: t.howItWorks.steps.submit.title,
      description: t.howItWorks.steps.submit.description,
      color: '#00B7FF'
    },
    {
      icon: TrendingUp,
      title: t.howItWorks.steps.earn.title,
      description: t.howItWorks.steps.earn.description,
      color: '#00B7FF'
    }
  ];

  return (
    <section id="how-it-works" className="relative py-24 bg-gradient-to-b from-[#0a0a0f] to-[#0f0f1a] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00B7FF] rounded-full blur-[150px] opacity-20" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00B7FF] rounded-full blur-[150px] opacity-20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl sm:text-6xl mb-4 bg-gradient-to-r from-white to-[#BFBFBF] bg-clip-text text-transparent">
            {t.howItWorks.title}
          </h2>
          <p className="text-xl text-[#BFBFBF] max-w-2xl mx-auto">
            {t.howItWorks.subtitle}
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 -translate-y-1/2">
            <motion.div
              className="h-full bg-gradient-to-r from-transparent via-[#00B7FF]/50 to-transparent"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.3 }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="relative group">
                  {/* Card */}
                  <div className="relative p-8 rounded-2xl border border-[#00B7FF]/20 bg-gradient-to-br from-[#00B7FF]/10 to-transparent backdrop-blur-sm hover:border-[#00B7FF]/40 transition-all duration-300">
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00B7FF]/0 to-[#00B7FF]/0 group-hover:from-[#00B7FF]/20 group-hover:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
                    
                    {/* Step number */}
                    <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-br from-[#00B7FF] to-[#0090cc] flex items-center justify-center border-4 border-[#0f0f1a]">
                      <span className="text-white">{index + 1}</span>
                    </div>

                    {/* Icon */}
                    <motion.div
                      className="relative mb-6 w-16 h-16 rounded-xl bg-gradient-to-br from-[#00B7FF]/20 to-transparent border border-[#00B7FF]/30 flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <step.icon className="w-8 h-8 text-[#00B7FF]" />
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-2xl mb-3 text-white">
                      {step.title}
                    </h3>
                    <p className="text-[#BFBFBF] leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow connector (desktop only) */}
                  {index < steps.length - 1 && (
                    <motion.div
                      className="hidden lg:block absolute top-1/2 -right-4 -translate-y-1/2 translate-x-1/2 z-20"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                    >
                      <ArrowRight className="w-8 h-8 text-[#00B7FF]" />
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-[#BFBFBF] text-lg">
            {t.howItWorks.cta}
          </p>
        </motion.div>
      </div>
    </section>
  );
}