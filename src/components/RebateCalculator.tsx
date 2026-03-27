import { motion } from 'motion/react';
import { TrendingUp, Info, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const brokerRates = {
  Exness: { Standard: 6.0, Raw: 3.0 },
  'IC Markets': { Standard: 5.5, Raw: 2.75 },
  XM: { Standard: 8.5, Raw: 4.25 },
};

const presets = [
  { label: 'Light', lots: 20, desc: '~1 trade/day' },
  { label: 'Active', lots: 80, desc: '~4 trades/day' },
  { label: 'Heavy', lots: 200, desc: '~10 trades/day' },
  { label: 'Pro', lots: 500, desc: '~25 trades/day' },
];

export function RebateCalculator() {
  const { t } = useLanguage();
  const [broker, setBroker] = useState('Exness');
  const [accountType, setAccountType] = useState('Standard');
  const [lots, setLots] = useState('');

  const currentRate = brokerRates[broker as keyof typeof brokerRates][accountType as 'Standard' | 'Raw'];
  const lotsNum = parseFloat(lots) || 0;
  const monthly = (lotsNum * currentRate).toFixed(2);
  const yearly = (lotsNum * currentRate * 12).toFixed(2);
  const daily = (lotsNum * currentRate / 30).toFixed(2);

  return (
    <section id="calculator" className="relative py-24 bg-gradient-to-b from-[#0a0a0f] to-[#0f0f1a] overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#00B7FF] rounded-full opacity-10 blur-[120px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00B7FF]/30 bg-[#00B7FF]/5 mb-6">
            <Sparkles className="w-4 h-4 text-[#00B7FF]" />
            <span className="text-sm text-[#BFBFBF]">Rebate Estimator</span>
          </div>
          <h2 className="text-5xl sm:text-6xl mb-4 bg-gradient-to-r from-white to-[#BFBFBF] bg-clip-text text-transparent">
            How Much Will You Earn?
          </h2>
          <p className="text-xl text-[#BFBFBF] max-w-2xl mx-auto">
            I trade <span className="text-[#00B7FF] font-semibold">X lots/month</span> → I earn <span className="text-[#00B7FF] font-semibold">$Y in rebates</span>
          </p>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative p-8 sm:p-12 rounded-3xl border border-[#00B7FF]/30 bg-gradient-to-br from-[#1a1a2e]/80 to-[#0f0f1a]/80 backdrop-blur-xl">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#00B7FF]/10 to-transparent pointer-events-none" />

            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left - Inputs */}
              <div className="space-y-6">
                {/* Broker */}
                <div>
                  <label className="block text-sm text-[#BFBFBF] mb-3">Select Broker</label>
                  <div className="grid grid-cols-3 gap-3">
                    {Object.keys(brokerRates).map((b) => (
                      <motion.button
                        key={b}
                        onClick={() => setBroker(b)}
                        className={`px-3 py-3 rounded-lg border transition-all text-sm ${
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

                {/* Account type */}
                <div>
                  <label className="block text-sm text-[#BFBFBF] mb-3">Account Type</label>
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

                {/* Volume presets */}
                <div>
                  <label className="block text-sm text-[#BFBFBF] mb-3">Monthly Trading Volume</label>
                  <div className="grid grid-cols-4 gap-2 mb-3">
                    {presets.map((p) => (
                      <motion.button
                        key={p.label}
                        onClick={() => setLots(p.lots.toString())}
                        className={`px-2 py-2 rounded-lg border text-center transition-all ${
                          lots === p.lots.toString()
                            ? 'border-[#00B7FF] bg-[#00B7FF]/10 text-white'
                            : 'border-[#00B7FF]/20 bg-[#0a0a0f]/50 text-[#BFBFBF] hover:border-[#00B7FF]/40'
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div className="text-xs font-semibold">{p.label}</div>
                        <div className="text-xs opacity-60">{p.lots}L</div>
                      </motion.button>
                    ))}
                  </div>
                  <div className="relative">
                    <input
                      type="number"
                      value={lots}
                      onChange={(e) => setLots(e.target.value)}
                      placeholder="Or enter custom lots..."
                      min="0"
                      step="0.01"
                      className="w-full px-4 py-4 bg-[#0a0a0f]/50 border border-[#00B7FF]/20 rounded-lg text-white placeholder-[#BFBFBF]/40 focus:outline-none focus:border-[#00B7FF]/60 transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Right - Results */}
              <div className="flex flex-col justify-center">
                <motion.div
                  className="p-8 rounded-2xl bg-gradient-to-br from-[#00B7FF]/10 to-transparent border border-[#00B7FF]/30"
                  animate={{ scale: lots ? [1, 1.02, 1] : 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-1">
                      <TrendingUp className="w-5 h-5 text-[#00B7FF]" />
                      <span className="text-sm text-[#BFBFBF]">Your Rebate Rate</span>
                    </div>
                    <div className="text-3xl text-white">
                      ${currentRate.toFixed(2)}
                      <span className="text-lg text-[#BFBFBF]">/lot</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#00B7FF]/20 mb-4">
                    <div className="text-sm text-[#BFBFBF] mb-1">Monthly Earnings</div>
                    <motion.div
                      className="text-5xl bg-gradient-to-r from-[#00B7FF] to-white bg-clip-text text-transparent font-bold"
                      key={monthly}
                      initial={{ scale: 1.1, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      ${monthly}
                    </motion.div>
                  </div>

                  {lotsNum > 0 && (
                    <motion.div
                      className="grid grid-cols-2 gap-3 pt-4 border-t border-[#00B7FF]/20"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="p-3 rounded-xl bg-[#0a0a0f]/50 border border-[#00B7FF]/10 text-center">
                        <div className="text-xs text-[#BFBFBF] mb-1">Daily</div>
                        <div className="text-lg text-[#00FF87] font-semibold">${daily}</div>
                      </div>
                      <div className="p-3 rounded-xl bg-[#0a0a0f]/50 border border-[#00B7FF]/10 text-center">
                        <div className="text-xs text-[#BFBFBF] mb-1">Yearly</div>
                        <div className="text-lg text-[#FFD700] font-semibold">${yearly}</div>
                      </div>
                    </motion.div>
                  )}

                  {lotsNum > 0 && (
                    <motion.div
                      className="mt-4 pt-4 border-t border-[#00B7FF]/20 text-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <p className="text-xs text-[#BFBFBF]">
                        Trading <span className="text-white">{lots} lots/month</span> with <span className="text-[#00B7FF]">{broker} {accountType}</span>
                      </p>
                    </motion.div>
                  )}
                </motion.div>

                {lotsNum > 0 && (
                  <motion.a
                    href={broker === 'Exness' ? 'https://one.exnessonelink.com/a/2lbawdwz0f' : '#brokers'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 w-full py-3 rounded-xl bg-gradient-to-r from-[#00B7FF] to-[#0090cc] text-white text-center font-semibold flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    Start Earning ${monthly}/month →
                  </motion.a>
                )}
              </div>
            </div>

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