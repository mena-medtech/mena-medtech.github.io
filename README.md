# MENA MedTech - Professional Website

Professional website for MENA MedTech - Medical Device Engineering & Regulatory Expertise

## 🎯 About

MENA MedTech is a specialized consulting firm with **15+ years of expertise** in medical device and pharmaceutical development, focusing on:

- **R&D Engineering** - Device concept to prototype development
- **Manufacturing Engineering** - Process design, optimization, and scale-up
- **Regulatory Affairs** - FDA 510(k), CE Mark, and regional submissions
- **Quality Engineering** - ISO 13485 implementation and compliance
- **Post-Market Surveillance** - Adverse event management and CAPA systems
- **Risk Management** - ISO 14971 compliance and documentation
- **DHF Remediation** - Design History File recovery and improvement

## 🏢 Company Profile

The homepage includes a **Company Profile** section (`#company`) stating that:

- MENA MedTech is a legally registered Limited Liability Company (LLC) in the United States.
- Ahmad Ali Krayem is the CEO and owner of MENA MedTech.
- MENA MedTech maintains a network of 20 qualified resources available to support client projects.

These statements are presented as general business representations. No registration numbers, state of formation, banking details, or other unsupported specifics are included.

## 🌍 Service Regions

- **Gulf Cooperation Council (GCC)** - Saudi Arabia, UAE, Qatar, Kuwait, Bahrain, Oman
- **Lebanon & Levant Region**
- **United States** - FDA pathway expertise
- **European Union** - CE Mark & MDR compliance

## 📋 Key Achievements

- 15+ years of industry experience
- 100+ projects completed
- 50+ medical devices commercialized
- Multi-regulatory expertise (FDA, CE Mark, regional bodies)

## 💳 Payment Section

The homepage includes a **Pay for Services** navigation tab and a payment section (`#payment`) that explains how clients can pay for consulting services:

- **Card payments** — Visa, Mastercard, and American Express, processed through a secure, hosted third-party payment provider (Stripe-ready).
- **Bank payment / direct deposit (ACH)** — available once enabled in the payment provider's dashboard.

**Important:** This static site does **not** collect or store card numbers, bank account numbers, routing numbers, or any other sensitive financial data. All payment processing is intended to be handled entirely by a secure, PCI-compliant provider such as Stripe using hosted Checkout or Payment Links.

### Configuring the payment provider

The payment buttons currently fall back to a `mailto:` contact link because no live provider account/links were supplied. To enable real payments:

1. Create Payment Links (or Checkout Sessions) in your payment provider's dashboard (e.g., Stripe) for card payments, and enable ACH/direct deposit for bank payments.
2. Open `script.js` and set the `PAYMENT_LINKS.card` and `PAYMENT_LINKS.bank` values to the hosted URLs provided by your payment provider.
3. Once set, the "Pay with Card" and "Request Bank Payment" buttons will automatically open the provider's secure hosted payment page in a new tab instead of the contact email fallback.

## 🛠️ Technical Stack

- **HTML5** - Semantic markup
- **CSS3** - Responsive design with modern features
- **JavaScript (Vanilla)** - Interactive functionality
- **Font Awesome** - Icon library
- **GitHub Pages** - Hosting

## 📁 File Structure

```
mena-medtech.github.io/
├── index.html          # Main homepage
├── styles.css          # CSS styling
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## ✨ Features

- **Responsive Design** - Mobile, tablet, and desktop optimized
- **Professional Branding** - Modern color scheme and typography
- **Interactive Navigation** - Smooth scrolling and section navigation
- **Contact Form** - Email integration for inquiries
- **Service Cards** - Detailed service descriptions
- **Portfolio Section** - Featured project categories
- **Regional Focus** - Market-specific information
- **Payment Options** - Card and bank/direct-deposit payment CTAs (Stripe-ready)
- **Animations** - Smooth transitions and scroll effects

## 🎨 Customization

### Colors
Edit color variables in `styles.css`:
```css
:root {
    --primary-color: #003d82;      /* Dark blue */
    --secondary-color: #0066cc;    /* Medium blue */
    --accent-color: #ff6b35;       /* Orange */
}
```

### Contact Information
Update in `index.html` contact section:
- Phone/WhatsApp: `+1 (508) 410-4492`
- Email: `services@mena-medtech.com`

## 📱 Responsive Breakpoints

- Desktop: 1200px+ (full width)
- Tablet: 768px - 1199px (adjusted grid)
- Mobile: < 768px (single column)

## 🚀 Deployment

This site is automatically deployed to GitHub Pages at:
**https://mena-medtech.github.io**

Changes pushed to the `main` branch are automatically published.

## 📞 Contact

- **WhatsApp/Phone**: +1 (508) 410-4492
- **Email**: services@mena-medtech.com
- **Service Regions**: Gulf Region (GCC) • Lebanon • USA • Europe

## 📄 License

© 2024-2025 MENA MedTech. All rights reserved.

---

**Professional Medical Device Engineering & Regulatory Excellence**
