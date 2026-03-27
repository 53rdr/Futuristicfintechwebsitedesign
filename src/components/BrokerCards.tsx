import { motion } from 'motion/react';
import { ExternalLink, Sparkles, Star, Zap, Shield, CheckCircle, XCircle, LayoutGrid, Table2 } from 'lucide-react';
import { useState } from 'react';

const brokers = [
  {
    name: 'Exness',
    tagline: 'Trade Gold • Earn Instantly • Rebates Up to $6 per Lot',
    rebateStandard: 6.0,
    rebateRaw: 3.0,
    minDeposit: '$10',
    payoutSpeed: 'Instant (Auto)',
    regulation: 'FCA, CySEC, FSCA',
    instruments: 'Forex, Gold, Crypto, Indices',
    autoRebate: true,
    recommended: true,
    partnerCode: '2lbawdwz0f',
    link: 'https://one.exnessonelink.com/a/2lbawdwz0f',
    color: '#00B7FF',
  },
  {
    name: 'XM',
    tagline: 'Trusted Worldwide • Rebates Up to $8.50 per Lot',
    rebateStandard: 8.5,
    rebateRaw: 4.25,
    minDeposit: '$5',
    payoutSpeed: 'Weekly',
    regulation: 'ASIC, CySEC, IFSC',
    instruments: 'Forex, Gold, Stocks, Crypto',
    autoRebate: false,
    recommended: false,
    partnerCode: 'VG4RX',
    link: 'https://clicks.pipaffiliates.com/c?c=1116352&l=en&p=0',
    color: '#FFD700',
  },
  {
    name: 'IC Markets',
    tagline: 'Pro Liquidity • Fast Execution • Rebates Up to $5.50 per Lot',
    rebateStandard: 5.5,
    rebateRaw: 2.75,
    minDeposit: '$200',
    payoutSpeed: 'Monthly',
    regulation: 'ASIC, CySEC, FSA',
    instruments: 'Forex, Gold, Commodities, CFDs',
    autoRebate: false,
    recommended: false,
    partnerCode: 'Coming Soon',
    link: '#brokers',
    color: '#00FF87',
  },
];

export function BrokerCards() {
  const [view, setView] = useState<'cards' | 'table'>('cards');

  return (
    <section id="brokers" className="relative py-24 bg-gradient-to-b from-[#0f0f1a] via-[#0a0a0f] to-[#0f0f1a] overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00B7FF] rounded-full opacity-10 blur-[120px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl sm:text-6xl mb-6 bg-gradient-to-r from-white to-[#BFBFBF] bg-clip-text text-transparent">
            Choose Your Broker — Trade and Earn with Rebatrix
          </h2>
          <p className="text-xl text-[#00B7FF] max-w-3xl mx-auto mb-8">
            Exness is our recommended broker for automatic rebates and instant payouts.
          </p>

          {/* View toggle */}
          <div className="inline-flex items-center gap-1 p-1 rounded-xl border border-[#00B7FF]/20 bg-[#1a1a2e]/60">
            <button
              onClick={() => setView('cards')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-all ${
                view === 'cards' ? 'bg-[#00B7FF] text-white' : 'text-[#BFBFBF] hover:text-white'
              }`}
            >
              <LayoutGrid className="w-4 h-4" /> Cards
            </button>
            <button
              onClick={() => setView('table')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-all ${
                view === 'table' ? 'bg-[#00B7FF] text-white' : 'text-[#BFBFBF] hover:text-white'
              }`}
            >
              <Table2 className="w-4 h-4" /> Compare
            </button>
          </div>
        </motion.div>

        {/* CARDS VIEW */}
        {view === 'cards' && (
          <div className="relative flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-6">
            {/* IC Markets */}
            <motion.div
              className="w-full lg:w-80 order-2 lg:order-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative group h-full">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00B7FF]/0 to-[#00B7FF]/0 group-hover:from-[#00B7FF]/20 group-hover:to-transparent blur-xl transition-all duration-500" />
                <div className="relative p-6 rounded-2xl border border-[#00B7FF]/20 bg-gradient-to-br from-[#1a1a2e]/60 to-[#0f0f1a]/60 backdrop-blur-xl group-hover:border-[#00B7FF]/40 transition-all duration-300 h-full flex flex-col">
                  <div className="mb-4">
                    <div className="h-16 rounded-lg bg-gradient-to-br from-[#00FF87]/10 to-transparent border border-[#00FF87]/20 flex items-center justify-center">
                      <span className="text-2xl text-white">IC Markets</span>
                    </div>
                  </div>
                  <p className="text-sm text-[#BFBFBF] mb-4 leading-relaxed">Pro Liquidity • Fast Execution • Rebates Up to $5.50 per Lot</p>
                  <div className="mb-4 space-y-2 flex-grow">
                    <div className="flex justify-between text-xs">
                      <span className="text-[#BFBFBF]">Standard rebate</span>
                      <span className="text-white">$5.50/lot</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-[#BFBFBF]">Min deposit</span>
                      <span className="text-white">$200</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-[#BFBFBF]">Payout</span>
                      <span className="text-white">Monthly</span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#BFBFBF]/10 border border-[#BFBFBF]/30">
                      <Shield className="w-3.5 h-3.5 text-[#BFBFBF]" />
                      <span className="text-xs text-[#BFBFBF]">Manual Rebate Processing</span>
                    </div>
                  </div>
                  <motion.button
                    className="w-full px-6 py-3 rounded-lg bg-[#1a1a2e] border border-[#00B7FF]/30 text-white hover:border-[#00B7FF]/60 hover:bg-[#00B7FF]/10 transition-all duration-300 flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Activate with IC Markets</span>
                    <ExternalLink className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Exness - Center */}
            <motion.div
              className="w-full lg:w-96 order-1 lg:order-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative group">
                <motion.div
                  className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#00B7FF]/30 to-[#00B7FF]/10 blur-2xl"
                  animate={{ opacity: [0.5, 0.7, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                />
                <div className="relative p-8 rounded-3xl border-2 border-[#00B7FF]/60 bg-gradient-to-br from-[#1a1a2e]/90 to-[#0f0f1a]/90 backdrop-blur-xl shadow-2xl shadow-[#00B7FF]/20">
                  <motion.div
                    className="absolute -top-4 left-1/2 -translate-x-1/2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3, type: 'spring' }}
                  >
                    <div className="px-4 py-2 rounded-full bg-gradient-to-r from-[#00B7FF] to-[#0090cc] flex items-center gap-2 shadow-lg shadow-[#00B7FF]/50">
                      <Star className="w-4 h-4 text-white fill-white" />
                      <span className="text-sm text-white">Recommended</span>
                    </div>
                  </motion.div>
                  <div className="mb-6 mt-2">
                    <div className="h-20 rounded-xl bg-gradient-to-br from-[#00B7FF]/20 to-transparent border border-[#00B7FF]/40 flex items-center justify-center">
                      <span className="text-3xl text-white">Exness</span>
                    </div>
                  </div>
                  <p className="text-base text-white mb-4 leading-relaxed text-center">Trade Gold • Earn Instantly • Rebates Up to $6 per Lot</p>
                  <div className="mb-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-[#BFBFBF]">Standard rebate</span>
                      <span className="text-[#00B7FF] font-semibold">$6.00/lot</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-[#BFBFBF]">Min deposit</span>
                      <span className="text-white">$10</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-[#BFBFBF]">Payout</span>
                      <span className="text-[#00FF87] font-semibold">Instant Auto</span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#00B7FF]/20 to-[#00B7FF]/10 border border-[#00B7FF]/50">
                      <Zap className="w-4 h-4 text-[#00B7FF]" />
                      <span className="text-sm text-[#00B7FF]">Automatic Rebate System Enabled</span>
                    </div>
                  </div>
                  <div className="mb-6 p-3 rounded-lg bg-[#0a0a0f]/50 border border-[#00B7FF]/20">
                    <p className="text-xs text-[#BFBFBF] mb-1">Partner Code</p>
                    <p className="text-sm text-white font-mono">2lbawdwz0f</p>
                  </div>
                  <motion.a
                    href="https://one.exnessonelink.com/a/2lbawdwz0f"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn relative block w-full"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#00B7FF] to-[#0090cc] rounded-xl blur-lg opacity-50 group-hover/btn:opacity-75 transition-opacity duration-300" />
                    <div className="relative px-8 py-4 bg-gradient-to-r from-[#00B7FF] to-[#0090cc] rounded-xl flex items-center justify-center gap-2 text-white overflow-hidden">
                      <span className="relative z-10">Activate with Exness</span>
                      <ExternalLink className="w-5 h-5 relative z-10 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </div>
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* XM */}
            <motion.div
              className="w-full lg:w-80 order-3"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative group h-full">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#FFD700]/0 to-[#FFD700]/0 group-hover:from-[#FFD700]/10 group-hover:to-transparent blur-xl transition-all duration-500" />
                <div className="relative p-6 rounded-2xl border border-[#00B7FF]/20 bg-gradient-to-br from-[#1a1a2e]/60 to-[#0f0f1a]/60 backdrop-blur-xl group-hover:border-[#FFD700]/40 transition-all duration-300 h-full flex flex-col">
                  <div className="mb-4">
                    <div className="h-16 rounded-lg bg-gradient-to-br from-[#FFD700]/10 to-transparent border border-[#FFD700]/20 flex items-center justify-center">
                      <span className="text-2xl text-white">XM</span>
                    </div>
                  </div>
                  <p className="text-sm text-[#BFBFBF] mb-4 leading-relaxed">Trusted Worldwide • Rebates Up to $8.50 per Lot</p>
                  <div className="mb-4 space-y-2 flex-grow">
                    <div className="flex justify-between text-xs">
                      <span className="text-[#BFBFBF]">Standard rebate</span>
                      <span className="text-[#FFD700] font-semibold">$8.50/lot</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-[#BFBFBF]">Min deposit</span>
                      <span className="text-white">$5</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-[#BFBFBF]">Payout</span>
                      <span className="text-white">Weekly</span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#BFBFBF]/10 border border-[#BFBFBF]/30">
                      <Shield className="w-3.5 h-3.5 text-[#BFBFBF]" />
                      <span className="text-xs text-[#BFBFBF]">Manual Rebate Processing</span>
                    </div>
                  </div>
                  <div className="mb-4 p-2.5 rounded-lg bg-[#0a0a0f]/50 border border-[#00B7FF]/20">
                    <p className="text-xs text-[#BFBFBF] mb-1">Partner Code</p>
                    <p className="text-sm text-white font-mono">VG4RX</p>
                  </div>
                  <motion.a
                    href="https://clicks.pipaffiliates.com/c?c=1116352&l=en&p=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full px-6 py-3 rounded-lg bg-[#1a1a2e] border border-[#FFD700]/30 text-white hover:border-[#FFD700]/60 hover:bg-[#FFD700]/10 transition-all duration-300 flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Activate with XM</span>
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* TABLE VIEW */}
        {view === 'table' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="overflow-x-auto"
          >
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="text-left p-4 text-[#BFBFBF] text-sm font-normal border-b border-[#00B7FF]/10">Feature</th>
                  {brokers.map((b) => (
                    <th key={b.name} className={`p-4 text-center border-b ${b.recommended ? 'border-[#00B7FF]/40' : 'border-[#00B7FF]/10'}`}>
                      <div className={`text-lg font-bold ${b.recommended ? 'text-[#00B7FF]' : 'text-white'}`}>{b.name}</div>
                      {b.recommended && <div className="text-xs text-[#00B7FF]/70 mt-1">⭐ Recommended</div>}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { label: 'Standard Rebate', key: 'rebateStandard', format: (v: number) => `$${v.toFixed(2)}/lot` },
                  { label: 'Raw/ECN Rebate', key: 'rebateRaw', format: (v: number) => `$${v.toFixed(2)}/lot` },
                  { label: 'Min Deposit', key: 'minDeposit', format: (v: string) => v },
                  { label: 'Payout Speed', key: 'payoutSpeed', format: (v: string) => v },
                  { label: 'Regulation', key: 'regulation', format: (v: string) => v },
                  { label: 'Instruments', key: 'instruments', format: (v: string) => v },
                ].map((row, i) => (
                  <tr key={row.label} className={i % 2 === 0 ? 'bg-[#1a1a2e]/20' : ''}>
                    <td className="p-4 text-[#BFBFBF] text-sm">{row.label}</td>
                    {brokers.map((b) => (
                      <td key={b.name} className={`p-4 text-center text-sm ${b.recommended ? 'text-[#00B7FF] font-semibold' : 'text-white'}`}>
                        {row.format((b as any)[row.key])}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr>
                  <td className="p-4 text-[#BFBFBF] text-sm">Auto Rebates</td>
                  {brokers.map((b) => (
                    <td key={b.name} className="p-4 text-center">
                      {b.autoRebate
                        ? <CheckCircle className="w-5 h-5 text-[#00FF87] mx-auto" />
                        : <XCircle className="w-5 h-5 text-[#BFBFBF]/40 mx-auto" />
                      }
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 text-[#BFBFBF] text-sm">Partner Code</td>
                  {brokers.map((b) => (
                    <td key={b.name} className="p-4 text-center font-mono text-xs text-white">{b.partnerCode}</td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4"></td>
                  {brokers.map((b) => (
                    <td key={b.name} className="p-4 text-center">
                      <motion.a
                        href={b.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm text-white transition-all ${
                          b.recommended
                            ? 'bg-gradient-to-r from-[#00B7FF] to-[#0090cc]'
                            : 'border border-[#00B7FF]/30 hover:border-[#00B7FF]/60 bg-[#1a1a2e]'
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Activate <ExternalLink className="w-3.5 h-3.5" />
                      </motion.a>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </motion.div>
        )}

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-[#BFBFBF] text-sm">
            Click "Activate" to open your broker account with Rebatrix partner links
          </p>
        </motion.div>
      </div>
    </section>
  );
}