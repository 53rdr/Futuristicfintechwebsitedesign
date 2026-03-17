import { motion } from 'motion/react';
import { Send, Instagram, Twitter } from 'lucide-react';
import rebatrixLogo from 'figma:asset/3fd8a311219ce03084de2c5f72fa0380fc29aecf.png';

export function Footer() {
  const socialLinks = [
    { icon: Send, label: 'Telegram', href: 'https://t.me/Rebatrix' },
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: Twitter, label: 'X (Twitter)', href: '#' }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-[#0f0f1a] to-[#0a0a0f] border-t border-[#00B7FF]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <img src={rebatrixLogo} alt="Rebatrix" className="w-10 h-10" />
              <span className="text-xl text-white">Rebatrix Club</span>
            </div>
            <p className="text-sm text-[#BFBFBF] leading-relaxed">
              Automated forex rebate system. Trade smarter, earn more.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['How It Works', 'Brokers', 'Activate Rebates', 'Join Community'].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-[#BFBFBF] hover:text-[#00B7FF] transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-white mb-4">Connect With Us</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-lg border border-[#00B7FF]/20 bg-[#00B7FF]/5 hover:bg-[#00B7FF]/10 hover:border-[#00B7FF]/40 flex items-center justify-center transition-all group"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-[#BFBFBF] group-hover:text-[#00B7FF] transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Disclaimer */}
        <motion.div
          className="pt-8 border-t border-[#00B7FF]/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="p-6 rounded-xl bg-[#00B7FF]/5 border border-[#00B7FF]/10 mb-8">
            <p className="text-xs text-[#BFBFBF] leading-relaxed">
              <strong className="text-white">Legal Disclaimer:</strong> Rebatrix is not a broker and does not provide investment advice. 
              Rebates are distributed from broker partner commissions. Trading foreign exchange on margin carries a high level of risk 
              and may not be suitable for all investors. Past performance is not indicative of future results.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[#BFBFBF]">
              © 2025 Rebatrix Club. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-[#BFBFBF] hover:text-[#00B7FF] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-[#BFBFBF] hover:text-[#00B7FF] transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom glow effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#00B7FF]/50 to-transparent" />
    </footer>
  );
}
