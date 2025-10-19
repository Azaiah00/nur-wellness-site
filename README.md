# Nur Wellness Co. - Official Website

> **Wellness is your birthright.**

A beautiful, modern single-page website for Nur Wellness Co., a holistic wellness brand focused on natural health products and mind-body-spirit balance.

## 🌿 Brand Colors

- **Ivory:** `#FDFDF6` - Light, clean, welcoming background
- **Emerald Green:** `#044343` - Deep, rich, grounding primary color
- **Gold:** `#B48A3A` - Warm, luxurious accent color

## 🎨 Design Philosophy

This website embodies the Nur Wellness brand values:
- **Simple & Clear:** 3rd-4th grade reading level for maximum accessibility
- **Natural & Authentic:** Clean design with ample white space
- **Conversion-Focused:** Multiple "Shop Now" CTAs throughout the experience
- **Accessible:** Semantic HTML5, ARIA labels, keyboard navigation

## 📁 File Structure

```
nur-wellness-co-site/
├── index.html       # Main HTML structure and content
├── styles.css       # Custom CSS with brand colors and components
├── script.js        # All JavaScript functionality (Vanilla JS)
├── CONTEXT.md       # Project requirements and brand guidelines
└── README.md        # This file
```

## 🚀 Quick Start

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/Azaiah00/nur-wellness-site.git
   cd nur-wellness-site
   ```

2. Open `index.html` in your browser:
   ```bash
   # On Windows
   start index.html
   
   # On Mac
   open index.html
   
   # Or use a local server (recommended)
   npx serve .
   ```

3. That's it! No build process needed. Pure HTML, CSS, and JavaScript.

## 🌐 Deployment to Netlify

### Option 1: Deploy from GitHub (Recommended)

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit: Nur Wellness Co. website"
   git push origin main
   ```

2. **Connect to Netlify:**
   - Go to [Netlify](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect to your GitHub account
   - Select the `nur-wellness-site` repository
   - Configure build settings:
     - **Build command:** Leave empty (no build needed)
     - **Publish directory:** `.` (root directory)
   - Click "Deploy site"

3. **Your site is live!** Netlify will give you a URL like `https://your-site-name.netlify.app`

### Option 2: Drag and Drop Deploy

1. Go to [Netlify Drop](https://app.netlify.com/drop)
2. Drag your entire project folder into the upload area
3. Your site will be live instantly!

### Custom Domain Setup (Optional)

1. In Netlify, go to **Site settings** → **Domain management**
2. Click **Add custom domain**
3. Follow the instructions to connect your domain

## 🛠 Features

### ✅ Implemented Features

- **Responsive Design:** Works perfectly on mobile, tablet, and desktop
- **Sticky Navigation:** Header stays visible while scrolling
- **Mobile Menu:** Hamburger menu for mobile devices
- **Tab System:** Mind, Body, Spirit philosophy sections with smooth transitions
- **Testimonial Slider:** Auto-rotating customer testimonials with manual controls
- **Product Showcase:** Beautiful product cards with hover effects
- **AI Chatbot Widget:** Front-end chatbot interface ready for backend integration
- **Smooth Scrolling:** Natural navigation between sections
- **SEO Optimized:** Semantic HTML, meta tags, proper heading hierarchy
- **Accessibility:** ARIA labels, keyboard navigation, focus management

### 🔧 Customization Before Launch

**Important:** Update these placeholders before going live:

1. **Shopify Store URL** (appears multiple times):
   - Find: `https://your-shopify-store.com`
   - Replace with your actual Shopify store URL

2. **Product Image URLs:**
   - Replace all `https://placehold.co/...` URLs with real product photos

3. **Lifestyle Image URLs:**
   - Replace placeholder lifestyle images with actual brand photography

4. **Contact Email:**
   - Update `hello@nurwellness.com` and `support@nurwellness.com` with real emails

5. **Social Media Links:**
   - Update footer social media links (currently placeholder `#`)

### 🤖 Chatbot Backend Integration

The chatbot UI is fully functional on the front-end. To connect it to OpenAI with RAG:

1. **Set up a backend API** (Node.js, Python, etc.)
2. **Install OpenAI SDK** and configure with your API key
3. **Create a RAG database** with product info and website content
4. **Update the API call** in `script.js` (lines ~380-395)
5. **Uncomment the fetch code** and remove the demo response function

Example backend endpoint needed:
```javascript
POST /api/chat
Request: { "message": "user question here" }
Response: { "response": "bot answer here" }
```

## 📝 Content Strategy

All copy follows these principles:
- **Benefit-driven:** Focus on how products make customers feel
- **Simple language:** Clear, conversational, easy to understand
- **Authentic tone:** Warm, supportive, and authoritative in wellness
- **SEO keywords:** Natural integration of search terms

## 🎯 SEO Checklist

- ✅ Semantic HTML5 structure
- ✅ Meta description and keywords
- ✅ Proper heading hierarchy (H1 → H2 → H3)
- ✅ Alt text for all images
- ✅ Fast load time (no heavy dependencies)
- ✅ Mobile responsive
- ✅ HTTPS (automatic with Netlify)
- 📝 **TODO:** Add Google Analytics
- 📝 **TODO:** Submit sitemap to Google Search Console
- 📝 **TODO:** Add real product images with descriptive filenames

## 🔍 Browser Support

Tested and working on:
- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📊 Performance

- **No external dependencies** except Tailwind CDN and Google Fonts
- **Fast load times** - minimal CSS and JS
- **Optimized for mobile** - responsive images and layouts
- **No jQuery** - Pure Vanilla JavaScript for better performance

## 🤝 Contributing

This is a client project. If you need to make updates:

1. Create a new branch: `git checkout -b feature/your-feature`
2. Make your changes
3. Test thoroughly on all devices
4. Commit: `git commit -m "Description of changes"`
5. Push: `git push origin feature/your-feature`
6. Create a Pull Request

## 📧 Support

For questions or issues:
- Email: hello@nurwellness.com
- GitHub Issues: [Create an issue](https://github.com/Azaiah00/nur-wellness-site/issues)

## 📄 License

© 2025 Nur Wellness Co. All rights reserved.

---

**Built with ❤️ using HTML, CSS (Tailwind), and Vanilla JavaScript**

*Wellness is your birthright.* 🌿

