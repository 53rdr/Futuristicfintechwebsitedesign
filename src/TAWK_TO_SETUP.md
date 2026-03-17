# Tawk.to AI Chat Integration Setup

## Important: Replace the Tawk.to Property ID

In the file `/components/FloatingSupport.tsx`, you need to replace the placeholder with your actual Tawk.to credentials:

### Line 15:
```javascript
script.src = 'https://embed.tawk.to/YOUR_TAWK_TO_PROPERTY_ID/YOUR_WIDGET_ID';
```

### How to get your Tawk.to credentials:

1. Go to https://www.tawk.to/
2. Sign up or log in to your account
3. Create a new property (your website)
4. Go to Administration > Channels > Chat Widget
5. Copy the script that looks like:
   ```
   https://embed.tawk.to/PROPERTY_ID/WIDGET_ID
   ```
6. Replace `YOUR_TAWK_TO_PROPERTY_ID` and `YOUR_WIDGET_ID` with your actual IDs

### Example:
If your Tawk.to script is:
```
https://embed.tawk.to/6789abc123def456/1h2j3k4l5m
```

Then update line 15 to:
```javascript
script.src = 'https://embed.tawk.to/6789abc123def456/1h2j3k4l5m';
```

## Features Implemented:

✅ 3 contact options in popup:
  - Chat with AI Assistant (Tawk.to)
  - Chat on Telegram  
  - Chat on WhatsApp

✅ Glassmorphism design matching website theme
✅ Smooth fade-in animation
✅ Click outside to close
✅ Pulse animation on floating button
✅ All 8 languages supported (EN, AR, ID, VI, FR, ES, TH, UZ)
✅ RTL support for Arabic

## Testing:
Once you add your Tawk.to credentials, the AI chat widget will open when users click "Chat with AI Assistant".
