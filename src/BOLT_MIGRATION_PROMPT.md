# Rebatrix Club - Complete Website Migration Prompt for Bolt.new

Copy and paste this entire prompt into Bolt.new to recreate your Rebatrix Club website:

---

## PROJECT BRIEF

Create a modern, futuristic fintech website for **Rebatrix Club**, an automated forex rebate system. The website must be fully functional with:

### Design System
- **Theme**: Dark fintech aesthetic with glassmorphism effects
- **Primary Colors**: Electric Blue (#00B7FF), Metallic Silver (#BFBFBF)
- **Background**: Deep dark (#0a0a0f) with gradient overlays
- **Typography**: Inter font family (primary)
- **Effects**: Glassmorphism cards, smooth gradients, backdrop blur
- **Spacing**: Similar to Binance/Revolut (modern fintech layout)

### Core Features Required
1. **Multilingual System** (8 languages with localStorage persistence):
   - English (en)
   - Arabic (ar) with RTL support
   - Indonesian (id)
   - Vietnamese (vi)
   - French (fr)
   - Spanish (es)
   - Thai (th)
   - Uzbek (uz)

2. **Interactive Rebate Calculator**
3. **Broker Integration** (Exness, IC Markets, XM)
4. **Floating Support Button** (Telegram & WhatsApp)
5. **Campaign Section**
6. **Fully Responsive Design**

---

## DETAILED REQUIREMENTS

### 1. Navigation Bar
- Fixed top navigation with glassmorphism effect
- Logo: "REBATRIX CLUB" with gradient text
- Menu items: How It Works, Calculator, Brokers, Activate, Campaigns, Join Community
- Language selector dropdown (flags + language names)
- Mobile responsive hamburger menu
- RTL support for Arabic

### 2. Hero Section
- Large heading: "Automated Forex Rebates"
- Badge: "Automated Forex Rebate System"
- Subtitle: "Earn automatic forex rebates with no signup — just link your account and start earning."
- Highlight text: "Highest rebates in the industry — Up to 92%"
- Two CTA buttons:
  - Primary: "Choose Broker" (gradient blue)
  - Secondary: "Join Telegram Club" (outline style)
- Stats cards showing:
  - "92%" - Highest Rebate in the World
  - "$10M+" - Paid Out
  - "24/7" - Instant Withdrawals

### 3. How It Works Section
- Title: "How It Works"
- Subtitle: "Three simple steps to start earning automatic rebates"
- Three step cards with icons:
  1. **Choose Broker** - Select from Exness, IC Markets, or XM
  2. **Submit Details** - Fill account ID & payout plan via Google Form
  3. **Start Earning** - Trade & receive automatic rebates
- Bottom text: "No registration required • Fully automated • Start earning today"

### 4. Rebate Calculator (CRITICAL - Interactive Component)
**Requirements:**
- Dropdown: Select Broker (Exness, IC Markets, XM)
- Toggle: Account Type (Standard/Raw)
- Input: Monthly Trading Volume (in lots)
- Live calculation display showing:
  - Rebate per lot
  - Monthly rebate earnings
  - Yearly projection

**Rebate Rates:**
- **Exness Standard**: $6.00/lot | Raw: $3.00/lot
- **IC Markets Standard**: $5.50/lot | Raw: $2.75/lot
- **XM Standard**: $8.50/lot | Raw: $4.25/lot

**Calculation Logic:**
```
Monthly Rebate = Trading Volume (lots) × Rebate Rate
Yearly Projection = Monthly Rebate × 12
```

### 5. Broker Cards Section
Three broker cards with:
- Broker logo/name
- Account types available
- Rebate rates for Standard & Raw accounts
- "Activate Rebate" button (links to Google Form)
- Glassmorphism card design

**Broker Details:**
- **Exness**: Standard $6.00/lot, Raw $3.00/lot
- **IC Markets**: Standard $5.50/lot, Raw $2.75/lot
- **XM**: Standard $8.50/lot, Raw $4.25/lot

### 6. Campaigns Section
Three campaign cards:

**Campaign 1: Welcome Bonus**
- Badge: "Limited Time"
- Title: "Welcome Bonus"
- Description: "Get $50 welcome bonus on your first month"

**Campaign 2: Top Trader Prize**
- Badge: "Volume Contest"
- Title: "Top Trader Prize"
- Description: "Weekly lots competition — Top traders will get $ rewards and luxury international trips"

**Campaign 3: Refer & Earn**
- Badge: "Referral Program"
- Title: "Refer & Earn"
- Description: "Earn 10% of your referrals rebates for lifetime"

### 7. Telegram Community Section
- Large heading: "Join Our Trading Community"
- Description: "Connect with 10,000+ traders, get market insights, and instant rebate updates"
- Features list:
  - Real-time market signals
  - Exclusive trading strategies
  - 24/7 support from experts
  - Weekly webinars & analysis
- "Join Telegram Club" button
- Community stats (members, daily messages, countries)

### 8. Floating Support Button
- Fixed bottom-right corner
- Golden gradient circular button with message icon
- On click: Shows popup with:
  - Telegram contact option (https://t.me/rebatrix)
  - WhatsApp contact option (https://wa.me/923495712225)
- Glassmorphism popup design
- Close button to dismiss
- Matches overall design theme

### 9. Footer
- Rebatrix Club branding
- Description: "Automated forex rebate system helping traders maximize their earnings with instant cashback from top brokers."
- Social links: Telegram, WhatsApp, Instagram, Twitter
- Copyright notice
- Legal links: Terms, Privacy, Risk Disclosure

---

## TECHNICAL SPECIFICATIONS

### Technology Stack
- React 18 with TypeScript
- Tailwind CSS v4
- Lucide React (for icons)
- React Context API (for language management)
- localStorage (for language persistence)

### Language Context Architecture
Create a `LanguageContext` with:
- State: current language (default: 'en')
- localStorage persistence
- RTL detection for Arabic
- Translation object access via `t` function
- Language switcher with flags

### Translations Structure
All text must be translatable in these 8 languages:
- English (en)
- Arabic (ar) - with RTL support
- Indonesian (id)
- Vietnamese (vi)
- French (fr)
- Spanish (es)
- Thai (th)
- Uzbek (uz)

### RTL Support for Arabic
When language is Arabic:
- Set `dir="rtl"` on html element
- Reverse flex directions
- Mirror padding/margins
- Flip text alignment

### Styling Guidelines
- Use Tailwind CSS exclusively
- Glassmorphism: `backdrop-blur-xl bg-white/5 border border-white/10`
- Gradients: `bg-gradient-to-br from-[#00B7FF] to-[#0090cc]`
- Shadows: `shadow-2xl shadow-[#00B7FF]/20`
- Hover effects: `hover:scale-105 transition-transform duration-300`
- Smooth animations throughout

### Component Structure
```
/src
  /components
    - Navigation.tsx
    - Hero.tsx
    - HowItWorks.tsx
    - RebateCalculator.tsx
    - BrokerCards.tsx
    - CampaignsSection.tsx
    - TelegramSection.tsx
    - FloatingSupport.tsx
    - Footer.tsx
    - LanguageSelector.tsx
  /contexts
    - LanguageContext.tsx
    - translations.ts
  /styles
    - globals.css
  - App.tsx
```

---

## IMPORTANT DETAILS

### Google Form Links (for "Activate Rebate" buttons)
- Exness: https://docs.google.com/forms/d/e/1FAIpQLSexample1
- IC Markets: https://docs.google.com/forms/d/e/1FAIpQLSexample2
- XM: https://docs.google.com/forms/d/e/1FAIpQLSexample3

### Contact Information
- Telegram: https://t.me/rebatrix
- WhatsApp: https://wa.me/923495712225

### Key Messages to Emphasize
- "No account creation needed"
- "Fully automated system"
- "92% rebate to clients"
- "Instant withdrawals 24/7"
- "No hidden fees"

### Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

---

## SAMPLE TRANSLATIONS (Key Sections)

### English (en)
```javascript
{
  nav: {
    howItWorks: 'How It Works',
    calculator: 'Calculator',
    brokers: 'Brokers',
    activate: 'Activate',
    campaigns: 'Campaigns',
    joinCommunity: 'Join Community',
  },
  hero: {
    badge: 'Automated Forex Rebate System',
    title: 'Automated Forex Rebates',
    subtitle: 'Earn automatic forex rebates with no signup — just link your account and start earning.',
    highestRebates: 'Highest rebates in the industry — Up to 92%',
    chooseBroker: 'Choose Broker',
    joinTelegram: 'Join Telegram Club',
  },
  calculator: {
    title: 'Rebate Calculator',
    subtitle: 'Calculate your monthly rebates based on trading volume',
    selectBroker: 'Select Broker',
    accountType: 'Account Type',
    standard: 'Standard',
    raw: 'Raw',
    monthlyVolume: 'Monthly Trading Volume',
    lots: 'lots',
    results: {
      rebatePerLot: 'Rebate per Lot',
      monthlyRebate: 'Monthly Rebate',
      yearlyProjection: 'Yearly Projection',
    }
  },
  campaigns: {
    title: 'Active Campaigns',
    subtitle: 'Exclusive offers for Rebatrix Club members',
    campaign1: {
      badge: 'Limited Time',
      title: 'Welcome Bonus',
      description: 'Get $50 welcome bonus on your first month'
    },
    campaign2: {
      badge: 'Volume Contest',
      title: 'Top Trader Prize',
      description: 'Weekly lots competition — Top traders will get $ rewards and luxury international trips'
    },
    campaign3: {
      badge: 'Referral Program',
      title: 'Refer & Earn',
      description: 'Earn 10% of your referrals rebates for lifetime'
    }
  },
  support: {
    title: 'Contact Support',
    subtitle: 'Choose your preferred platform',
    available: 'Available 24/7'
  }
}
```

### Arabic (ar) - RTL
```javascript
{
  nav: {
    howItWorks: 'كيف يعمل',
    calculator: 'حاسبة',
    brokers: 'الوسطاء',
    activate: 'تفعيل',
    campaigns: 'الحملات',
    joinCommunity: 'انضم',
  },
  hero: {
    badge: 'نظام استرداد نقدي تلقائي للفوركس',
    title: 'استرداد نقدي تلقائي للفوركس',
    subtitle: 'احصل على استرداد نقدي تلقائي للفوركس بدون تسجيل — فقط اربط حسابك وابدأ في الكسب.',
    highestRebates: 'أعلى معدلات استرداد في الصناعة — تصل إلى 92%',
    chooseBroker: 'اختر الوسيط',
    joinTelegram: 'انضم إلى نادي تليجرام',
  }
  // ... continue for all sections
}
```

**Note:** Please create complete translations for all 8 languages (English, Arabic, Indonesian, Vietnamese, French, Spanish, Thai, Uzbek) covering all sections.

---

## ADDITIONAL REQUIREMENTS

1. **Smooth Scrolling**: Enable smooth scroll behavior
2. **Custom Scrollbar**: Electric blue (#00B7FF) scrollbar on dark background
3. **Loading States**: Add subtle loading animations
4. **Form Validation**: Basic validation for calculator inputs
5. **Error Handling**: Graceful error states
6. **Performance**: Optimize images, lazy load components
7. **SEO**: Meta tags for title, description, keywords
8. **Accessibility**: ARIA labels, keyboard navigation

---

## FINAL CHECKLIST

Before completing, ensure:
- [ ] All 8 languages are fully translated
- [ ] RTL works correctly for Arabic
- [ ] Language persists in localStorage
- [ ] Calculator calculates correctly with all brokers
- [ ] Floating support button works and shows Telegram/WhatsApp
- [ ] All buttons link to correct URLs
- [ ] Responsive on mobile, tablet, desktop
- [ ] Glassmorphism effects render properly
- [ ] Smooth animations throughout
- [ ] Custom scrollbar visible
- [ ] No console errors

---

## START BUILDING

Please create this complete fintech website with all features, components, translations, and styling as specified above. Make it production-ready, fully functional, and visually stunning with the glassmorphism dark theme aesthetic.
