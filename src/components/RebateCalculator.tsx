import { motion } from 'motion/react';
import { Calculator, TrendingUp, Info } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export function RebateCalculator() {
  const { t } = useLanguage();
  const [broker, setBroker] = useState('Exness');
  const [accountType, setAccountType] = useState('Standard');
  const [lots, setLots] = useState('');

  // Rebate rates (XAUUSD, "up to")
  const rates = {
    Exness: { Standard: 6.0, Raw: 3.0 },
    'IC Markets': { Standard: 5.5, Raw: 2.75 },
    XM: { Standard: 8.5, Raw: 4.25 },
  };

  const currentRate = rates[broker as keyof typeof rates][accountType as 'Standard' | 'Raw'];
  const estimatedRebate = lots ? (parseFloat(lots) * currentRate).toFixed(2) : '0.00';

  return (
    <section id="calculator" className="relative py-24 bg-gradient-to-b from-[#0a0a0f] to-[#0f0f1a] overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#00B7FF] rounded-full opacity-10 blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00B7FF]/30 bg-[#00B7FF]/5 mb-6">
            <Calculator className="w-4 h-4 text-[#00B7FF]" />
            <span className="text-sm text-[#BFBFBF]">Estimate Your Earnings</span>
          </div>

          <h2 className="text-5xl sm:text-6xl mb-4 bg-gradient-to-r from-white to-[#BFBFBF] bg-clip-text text-transparent">
            Rebate Calculator
          </h2>
          <p className="text-xl text-[#BFBFBF] max-w-2xl mx-auto">
            Calculate your potential monthly rebates based on trading volume
          </p>
        </motion.div>

        {/* Calculator Card */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Glassmorphism container */}
          <div className="relative p-8 sm:p-12 rounded-3xl border border-[#00B7FF]/30 bg-gradient-to-br from-[#1a1a2e]/80 to-[#0f0f1a]/80 backdrop-blur-xl">
            {/* Inner glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#00B7FF]/10 to-transparent pointer-events-none" />

            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left side - Inputs */}
              <div className="space-y-6">
                {/* Broker Selection */}
                <div>
                  <label className="block text-sm text-[#BFBFBF] mb-3">
                    Select Broker
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {['Exness', 'IC Markets', 'XM'].map((b) => (
                      <motion.button
                        key={b}
                        onClick={() => setBroker(b)}
                        className={`px-4 py-3 rounded-lg border transition-all ${
                          broker === b
                            ? 'border-[#00B7FF] bg-[#00B7FF]/10 text-white'
                            : 'border-[#00B7FF]/20 bg-[#0a0a0f]/50 text-[#BFBFBF] hover:border-[#00B7FF]/40'
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {b}
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Account Type */}
                <div>
                  <label className="block text-sm text-[#BFBFBF] mb-3">
                    Account Type
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {['Standard', 'Raw'].map((type) => (
                      <motion.button
                        key={type}
                        onClick={() => setAccountType(type)}
                        className={`px-4 py-3 rounded-lg border transition-all ${
                          accountType === type
                            ? 'border-[#00B7FF] bg-[#00B7FF]/10 text-white'
                            : 'border-[#00B7FF]/20 bg-[#0a0a0f]/50 text-[#BFBFBF] hover:border-[#00B7FF]/40'
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {type}
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Lots Input */}
                <div>
                  <label className="block text-sm text-[#BFBFBF] mb-3">
                    Lots per Month
                  </label>
                  <div className="relative group">
                    <input
                      type="number"
                      value={lots}
                      onChange={(e) => setLots(e.target.value)}
                      placeholder="e.g., 50"
                      min="0"
                      step="0.01"
                      className="w-full px-4 py-4 bg-[#0a0a0f]/50 border border-[#00B7FF]/20 rounded-lg text-white placeholder-[#BFBFBF]/40 focus:outline-none focus:border-[#00B7FF]/60 transition-all"
                    />
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#00B7FF]/0 to-[#00B7FF]/0 group-focus-within:from-[#00B7FF]/10 group-focus-within:to-transparent pointer-events-none transition-all" />
                  </div>
                </div>
              </div>

              {/* Right side - Results */}
              <div className="flex flex-col justify-center">
                <motion.div
                  className="p-8 rounded-2xl bg-gradient-to-br from-[#00B7FF]/10 to-transparent border border-[#00B7FF]/30"
                  animate={{
                    scale: lots ? [1, 1.02, 1] : 1,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                >
                  {/* Rate Display */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="w-5 h-5 text-[#00B7FF]" />
                      <span className="text-sm text-[#BFBFBF]">Your Rate</span>
                    </div>
                    <div className="text-3xl text-white">
                      ${currentRate.toFixed(2)}
                      <span className="text-lg text-[#BFBFBF]">/lot</span>
                    </div>
                  </div>

                  {/* Estimated Rebate */}
                  <div className="mb-6 pt-6 border-t border-[#00B7FF]/20">
                    <div className="text-sm text-[#BFBFBF] mb-2">
                      Estimated Monthly Rebate
                    </div>
                    <motion.div
                      className="text-5xl bg-gradient-to-r from-[#00B7FF] to-white bg-clip-text text-transparent"
                      key={estimatedRebate}
                      initial={{ scale: 1.1, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      ${estimatedRebate}
                    </motion.div>
                  </div>

                  {/* Yearly Projection */}
                  {lots && parseFloat(lots) > 0 && (
                    <motion.div
                      className="pt-4 border-t border-[#00B7FF]/20"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="text-sm text-[#BFBFBF] mb-1">
                        Yearly Projection
                      </div>
                      <div className="text-2xl text-white">
                        ${(parseFloat(estimatedRebate) * 12).toFixed(2)}
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              </div>
            </div>

            {/* Disclaimer */}
            <motion.div
              className="mt-8 flex items-start gap-3 p-4 rounded-xl bg-[#00B7FF]/5 border border-[#00B7FF]/20"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Info className="w-5 h-5 text-[#00B7FF] flex-shrink-0 mt-0.5" />
              <p className="text-sm text-[#BFBFBF] leading-relaxed">
                <span className="text-white">Note:</span> Rates shown are for XAUUSD and represent "up to" estimates. 
                Actual rebates depend on broker-side reporting and account tagging under Rebatrix.
              </p>
            </motion.div>
          </div>
        </motion.div>


      </div>
    </section>
  );
}