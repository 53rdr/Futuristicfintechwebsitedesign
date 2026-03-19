import { motion } from 'motion/react';
import { ArrowRight, TrendingUp } from 'lucide-react';
import rebatrixLogo from 'figma:asset/3fd8a311219ce03084de2c5f72fa0380fc29aecf.png';
import { useLanguage } from '../contexts/LanguageContext';

export function Hero() {
  const { t } = useLanguage();
  
  const scrollToBrokers = () => {
    document.getElementById('brokers')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0a0a0f] via-[#0f0f1a] to-[#0a0a0f]">
      {/* Animated background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00B7FF] rounded-full opacity-20 blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Logo background */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <img src={rebatrixLogo} alt="" className="w-full h-full object-contain" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          

          <h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight mb-6 bg-gradient-to-r from-white via-[#BFBFBF] to-white bg-clip-text text-transparent"><span className="font-bold italic">{t.hero.title}</span></h1>

          
          
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#00B7FF]/20 to-[#FFD700]/20 border border-[#00B7FF]/40 mb-12"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <TrendingUp className="w-5 h-5 text-[#00B7FF]" />
            <span className="bg-gradient-to-r from-[#00B7FF] to-[#FFD700] bg-clip-text text-transparent">
              {t.hero.highestRebates}
            </span>
          </motion.div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              onClick={scrollToBrokers}
              className="group relative px-8 py-4 bg-gradient-to-r from-[#00B7FF] to-[#0090cc] rounded-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#00B7FF] to-[#0090cc] opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
              <span className="relative flex items-center gap-2 text-white">
                {t.hero.chooseBroker}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>

            <motion.a
              href="#telegram"
              className="group px-8 py-4 border-2 border-[#00B7FF]/50 hover:border-[#00B7FF] rounded-lg backdrop-blur-sm bg-[#00B7FF]/5 hover:bg-[#00B7FF]/10 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-white flex items-center gap-2">
                {t.hero.joinTelegram}
              </span>
            </motion.a>
          </div>
        </motion.div>

        {/* Floating stats */}
        <motion.div
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {[
            { label: t.hero.stats.rebate, value: '92%' },
            { label: t.hero.stats.paidOut, value: '9.2M$+' },
            { label: t.hero.stats.withdrawals, value: '24/7' },
         <div className="grid grid-cols-3 gap-3 md:gap-6 mt-8 md:mt-16">
  <div className="p-3 md:p-8 rounded-xl md:rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
    <div className="text-2xl md:text-5xl font-bold text-center">92%</div>
    <div className="text-[10px] md:text-sm text-center mt-1 md:mt-2 text-gray-400 leading-tight">Highest Rebate in the World</div>
  </div>
  
  <div className="p-3 md:p-8 rounded-xl md:rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
    <div className="text-2xl md:text-5xl font-bold text-center">9.2M$+</div>
    <div className="text-[10px] md:text-sm text-center mt-1 md:mt-2 text-gray-400 leading-tight">Paid Out</div>
  </div>
  
  <div className="p-3 md:p-8 rounded-xl md:rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
    <div className="text-2xl md:text-5xl font-bold text-center">24/7</div>
    <div className="text-[10px] md:text-sm text-center mt-1 md:mt-2 text-gray-400 leading-tight">24/7 Instant Withdrawals</div>
  </div>
</div>

        <div className="p-3 md:p-8 rounded-lg md:rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
          <div className="text-2xl md:text-5xl font-bold text-center">9.2M$+</div>
          <div className="text-[10px] md:text-sm text-center mt-1 md:mt-2 text-gray-400 leading-tight">Paid Out</div>
        </div>

        <div className="p-3 md:p-8 rounded-lg md:rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
          <div className="text-2xl md:text-5xl font-bold text-center">24/7</div>
          <div className="text-[10px] md:text-sm text-center mt-1 md:mt-2 text-gray-400 leading-tight">24/7 Instant Withdrawals</div>
        </div>
      </div>


      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-[#00B7FF]/50 rounded-full p-1">
          <motion.div
            className="w-1.5 h-1.5 bg-[#00B7FF] rounded-full mx-auto"
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
