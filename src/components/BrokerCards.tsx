import { motion } from 'motion/react';
import { ExternalLink, Sparkles, Star, Zap, Shield } from 'lucide-react';

export function BrokerCards() {
  return (
    <section id="brokers" className="relative py-24 bg-gradient-to-b from-[#0f0f1a] via-[#0a0a0f] to-[#0f0f1a] overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00B7FF] rounded-full opacity-10 blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl sm:text-6xl mb-6 bg-gradient-to-r from-white to-[#BFBFBF] bg-clip-text text-transparent">
            Choose Your Broker — Trade and Earn with Rebatrix
          </h2>
          <p className="text-xl text-[#00B7FF] max-w-3xl mx-auto">
            Exness is our recommended broker for automatic rebates and instant payouts.
          </p>
        </motion.div>

        {/* Broker Cards Grid */}
        <div className="relative flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-6">
          
          {/* IC Markets Card - Left Side */}
          <motion.div
            className="w-full lg:w-80 order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative group h-full">
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00B7FF]/0 to-[#00B7FF]/0 group-hover:from-[#00B7FF]/20 group-hover:to-transparent blur-xl transition-all duration-500" />
              
              {/* Card */}
              <div className="relative p-6 rounded-2xl border border-[#00B7FF]/20 bg-gradient-to-br from-[#1a1a2e]/60 to-[#0f0f1a]/60 backdrop-blur-xl group-hover:border-[#00B7FF]/40 transition-all duration-300 h-full flex flex-col">
                {/* Logo area */}
                <div className="mb-4">
                  <div className="h-16 rounded-lg bg-gradient-to-br from-[#00B7FF]/10 to-transparent border border-[#00B7FF]/20 flex items-center justify-center">
                    <span className="text-2xl text-white">IC Markets</span>
                  </div>
                </div>

                {/* Tagline */}
                <p className="text-sm text-[#BFBFBF] mb-4 leading-relaxed">
                  Pro Liquidity • Fast Execution • Rebates Up to $5.50 per Lot
                </p>

                {/* Label */}
                <div className="mb-6 flex-grow">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#BFBFBF]/10 border border-[#BFBFBF]/30">
                    <Shield className="w-3.5 h-3.5 text-[#BFBFBF]" />
                    <span className="text-xs text-[#BFBFBF]">Manual Rebate Processing</span>
                  </div>
                </div>

                {/* CTA Button */}
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

          {/* Exness Card - Center (Recommended) */}
          <motion.div
            className="w-full lg:w-96 order-1 lg:order-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative group">
              {/* Prominent glow for recommended card */}
              <motion.div
                className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#00B7FF]/30 to-[#00B7FF]/10 blur-2xl"
                animate={{
                  opacity: [0.5, 0.7, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Card - Larger and more prominent */}
              <div className="relative p-8 rounded-3xl border-2 border-[#00B7FF]/60 bg-gradient-to-br from-[#1a1a2e]/90 to-[#0f0f1a]/90 backdrop-blur-xl shadow-2xl shadow-[#00B7FF]/20">
                {/* Recommended Badge */}
                <motion.div
                  className="absolute -top-4 left-1/2 -translate-x-1/2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3, type: "spring" }}
                >
                  <div className="px-4 py-2 rounded-full bg-gradient-to-r from-[#00B7FF] to-[#0090cc] flex items-center gap-2 shadow-lg shadow-[#00B7FF]/50">
                    <Star className="w-4 h-4 text-white fill-white" />
                    <span className="text-sm text-white">Recommended</span>
                  </div>
                </motion.div>

                {/* Logo area */}
                <div className="mb-6 mt-2">
                  <div className="h-20 rounded-xl bg-gradient-to-br from-[#00B7FF]/20 to-transparent border border-[#00B7FF]/40 flex items-center justify-center">
                    <span className="text-3xl text-white">Exness</span>
                  </div>
                </div>

                {/* Tagline */}
                <p className="text-base text-white mb-6 leading-relaxed text-center">
                  Trade Gold • Earn Instantly • Rebates Up to $6 per Lot
                </p>

                {/* Label with icon */}
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#00B7FF]/20 to-[#00B7FF]/10 border border-[#00B7FF]/50">
                    <Zap className="w-4 h-4 text-[#00B7FF]" />
                    <span className="text-sm text-[#00B7FF]">Automatic Rebate System Enabled</span>
                  </div>
                </div>

                {/* Partner Code */}
                <div className="mb-6 p-3 rounded-lg bg-[#0a0a0f]/50 border border-[#00B7FF]/20">
                  <p className="text-xs text-[#BFBFBF] mb-1">Partner Code</p>
                  <p className="text-sm text-white font-mono">2lbawdwz0f</p>
                </div>

                {/* CTA Button - More prominent */}
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
                    
                    {/* Shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.6 }}
                    />
                  </div>
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* XM Card - Right Side */}
          <motion.div
            className="w-full lg:w-80 order-3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative group h-full">
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00B7FF]/0 to-[#00B7FF]/0 group-hover:from-[#00B7FF]/20 group-hover:to-transparent blur-xl transition-all duration-500" />
              
              {/* Card */}
              <div className="relative p-6 rounded-2xl border border-[#00B7FF]/20 bg-gradient-to-br from-[#1a1a2e]/60 to-[#0f0f1a]/60 backdrop-blur-xl group-hover:border-[#00B7FF]/40 transition-all duration-300 h-full flex flex-col">
                {/* Logo area */}
                <div className="mb-4">
                  <div className="h-16 rounded-lg bg-gradient-to-br from-[#00B7FF]/10 to-transparent border border-[#00B7FF]/20 flex items-center justify-center">
                    <span className="text-2xl text-white">XM</span>
                  </div>
                </div>

                {/* Tagline */}
                <p className="text-sm text-[#BFBFBF] mb-4 leading-relaxed">
                  Trusted Worldwide • Rebates Up to $8.50 per Lot
                </p>

                {/* Label */}
                <div className="mb-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#BFBFBF]/10 border border-[#BFBFBF]/30">
                    <Shield className="w-3.5 h-3.5 text-[#BFBFBF]" />
                    <span className="text-xs text-[#BFBFBF]">Manual Rebate Processing</span>
                  </div>
                </div>

                {/* Partner Code */}
                <div className="mb-6 p-2.5 rounded-lg bg-[#0a0a0f]/50 border border-[#00B7FF]/20 flex-grow">
                  <p className="text-xs text-[#BFBFBF] mb-1">Partner Code</p>
                  <p className="text-sm text-white font-mono">VG4RX</p>
                </div>

                {/* CTA Button */}
                <motion.a
                  href="https://clicks.pipaffiliates.com/c?c=1116352&l=en&p=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-6 py-3 rounded-lg bg-[#1a1a2e] border border-[#00B7FF]/30 text-white hover:border-[#00B7FF]/60 hover:bg-[#00B7FF]/10 transition-all duration-300 flex items-center justify-center gap-2"
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

        {/* Bottom Note */}
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
