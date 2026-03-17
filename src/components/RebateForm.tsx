import { motion } from 'motion/react';
import { CheckCircle2, Shield, Zap } from 'lucide-react';

export function RebateForm() {
  return (
    <section id="activate" className="relative py-24 bg-gradient-to-b from-[#0a0a0f] to-[#0f0f1a] overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#00B7FF] rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl sm:text-6xl mb-4 bg-gradient-to-r from-white to-[#BFBFBF] bg-clip-text text-transparent">
            Activate Your Rebates
          </h2>
          <p className="text-xl text-[#BFBFBF] max-w-2xl mx-auto">
            Submit your trading account details to start receiving automatic rebates
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {[
            { icon: Zap, text: 'Instant activation' },
            { icon: Shield, text: 'Secure & encrypted' },
            { icon: CheckCircle2, text: 'Auto-verified' }
          ].map((feature, index) => (
            <motion.div
              key={feature.text}
              className="flex items-center gap-3 justify-center lg:justify-start"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00B7FF]/20 to-transparent border border-[#00B7FF]/30 flex items-center justify-center">
                <feature.icon className="w-5 h-5 text-[#00B7FF]" />
              </div>
              <span className="text-[#BFBFBF]">{feature.text}</span>
            </motion.div>
          ))}
        </div>

        {/* Form container */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Glassmorphism card */}
          <div className="relative p-8 sm:p-12 rounded-3xl border border-[#00B7FF]/30 bg-gradient-to-br from-[#1a1a2e]/60 to-[#0f0f1a]/60 backdrop-blur-xl">
            {/* Inner glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#00B7FF]/5 to-transparent" />

            <div className="relative">
              {/* Google Form Embed */}
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSfu5moxMdr9YP1SlJw5ALpnC7C-hMFBY4rZWrzFFuvE878baA/viewform?embedded=true"
                width="100%"
                height="1822"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                className="rounded-xl"
                title="Rebatrix Account Activation Form"
              >
                Loading…
              </iframe>
            </div>
          </div>
        </motion.div>

        {/* Note */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="inline-flex items-start gap-2 px-6 py-3 rounded-xl bg-[#00B7FF]/5 border border-[#00B7FF]/20">
            <Shield className="w-5 h-5 text-[#00B7FF] flex-shrink-0 mt-0.5" />
            <p className="text-sm text-[#BFBFBF] text-left">
              Rebates are paid automatically once your account is verified under Rebatrix Club
            </p>
          </div>
        </motion.div>

        {/* Google Form embed note */}
        <motion.div
          className="mt-6 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <p className="text-xs text-[#BFBFBF]/60">
            This form connects to Google Forms for secure data collection
          </p>
        </motion.div>
      </div>
    </section>
  );
}
