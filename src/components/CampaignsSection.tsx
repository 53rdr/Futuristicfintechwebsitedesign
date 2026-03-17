import { motion } from 'motion/react';
import { Flame, Palmtree, Trophy, ArrowRight } from 'lucide-react';

export function CampaignsSection() {
  const campaigns = [
    {
      icon: Flame,
      emoji: '🔥',
      title: 'Weekly Volume Challenge',
      description: 'Trade 100 lots and earn a $25 bonus',
      gradient: 'from-orange-500/20 to-red-500/20',
      borderGradient: 'from-orange-500/40 to-red-500/40'
    },
    {
      icon: Palmtree,
      emoji: '🏝️',
      title: 'Dubai Trader Trip',
      description: 'Win an all-expenses-paid luxury experience',
      gradient: 'from-[#00B7FF]/20 to-cyan-500/20',
      borderGradient: 'from-[#00B7FF]/40 to-cyan-500/40'
    },
    {
      icon: Trophy,
      emoji: '🏆',
      title: 'Monthly Trading Contest',
      description: 'Top 10 traders share $5,000 prize pool',
      gradient: 'from-yellow-500/20 to-amber-500/20',
      borderGradient: 'from-yellow-500/40 to-amber-500/40'
    }
  ];

  return (
    <section id="campaigns" className="relative py-24 bg-gradient-to-b from-[#0a0a0f] to-[#0f0f1a] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-orange-500 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-[#00B7FF] rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00B7FF]/30 bg-[#00B7FF]/5 mb-6">
            <Trophy className="w-4 h-4 text-[#00B7FF]" />
            <span className="text-sm text-[#BFBFBF]">Active Campaigns</span>
          </div>

          <h2 className="text-5xl sm:text-6xl mb-4 bg-gradient-to-r from-white to-[#BFBFBF] bg-clip-text text-transparent">
            Exclusive Campaigns
          </h2>
          <p className="text-xl text-[#BFBFBF] max-w-2xl mx-auto">
            Participate in exciting challenges and win amazing rewards
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {campaigns.map((campaign, index) => (
            <motion.div
              key={campaign.title}
              className="relative group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="relative h-full">
                {/* Hover glow */}
                <motion.div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${campaign.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}
                />

                {/* Card */}
                <div className="relative h-full p-8 rounded-2xl border border-[#00B7FF]/20 bg-gradient-to-br from-[#1a1a2e]/60 to-[#0f0f1a]/60 backdrop-blur-xl group-hover:border-[#00B7FF]/40 transition-all duration-300">
                  {/* Icon */}
                  <motion.div
                    className={`mb-6 w-16 h-16 rounded-xl bg-gradient-to-br ${campaign.gradient} border bg-gradient-to-br ${campaign.borderGradient} flex items-center justify-center text-4xl`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {campaign.emoji}
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-2xl mb-3 text-white">
                    {campaign.title}
                  </h3>
                  <p className="text-[#BFBFBF] mb-6 leading-relaxed">
                    {campaign.description}
                  </p>

                  {/* Learn more link */}
                  <motion.div
                    className="flex items-center gap-2 text-[#00B7FF] group-hover:gap-3 transition-all cursor-pointer"
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-sm">Learn more</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.a
            href="#telegram"
            className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-[#00B7FF]/50 hover:border-[#00B7FF] rounded-lg backdrop-blur-sm bg-[#00B7FF]/5 hover:bg-[#00B7FF]/10 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-white">View All Campaigns in Telegram</span>
            <ArrowRight className="w-5 h-5 text-[#00B7FF] group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
