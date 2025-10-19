# 🚀 Deployment Guide - Nur Wellness Co.

This guide will walk you through deploying the Nur Wellness Co. website to Netlify.

## Prerequisites

- ✅ Git installed on your computer
- ✅ GitHub account created
- ✅ Netlify account (free tier is perfect)

## Step-by-Step Deployment

### 1️⃣ Push to GitHub

First, let's get your code on GitHub:

```bash
# Navigate to your project directory
cd nur-wellness-co-site

# Initialize Git (if not already done)
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit: Nur Wellness Co. website ready for deployment"

# Add your GitHub repository as remote
git remote add origin https://github.com/Azaiah00/nur-wellness-site.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 2️⃣ Deploy to Netlify

#### Option A: Automatic Deploy from GitHub (Recommended)

1. **Go to Netlify:**
   - Visit [https://app.netlify.com](https://app.netlify.com)
   - Sign in or create a free account

2. **Import Your Project:**
   - Click **"Add new site"** → **"Import an existing project"**
   - Choose **"Deploy with GitHub"**
   - Authorize Netlify to access your GitHub account

3. **Select Repository:**
   - Find and select `nur-wellness-site`

4. **Configure Build Settings:**
   ```
   Build command:   [Leave empty - no build needed]
   Publish directory:   .
   ```

5. **Deploy:**
   - Click **"Deploy site"**
   - Wait 30-60 seconds for deployment to complete
   - Your site is now live! 🎉

#### Option B: Manual Deploy (Drag & Drop)

1. **Go to Netlify Drop:**
   - Visit [https://app.netlify.com/drop](https://app.netlify.com/drop)

2. **Upload Your Site:**
   - Drag the entire `nur-wellness-co-site` folder into the upload area
   - Wait for upload to complete

3. **Done!**
   - Your site is instantly live

### 3️⃣ Custom Domain Setup (Optional)

If you have a custom domain like `nurwellness.com`:

1. **In Netlify Dashboard:**
   - Go to **Site settings** → **Domain management**
   - Click **"Add custom domain"**
   - Enter your domain name (e.g., `nurwellness.com`)

2. **Configure DNS:**
   - If your domain is at a DNS provider (GoDaddy, Namecheap, etc.):
     - Add these Netlify DNS records:
       ```
       Type: A     Name: @     Value: 75.2.60.5
       Type: CNAME Name: www   Value: [your-site].netlify.app
       ```
   
   - Or use Netlify DNS (recommended):
     - Click **"Set up Netlify DNS"**
     - Copy the nameservers
     - Update nameservers at your domain registrar

3. **Enable HTTPS:**
   - Netlify automatically provides free SSL certificates
   - Enable **"Force HTTPS"** in Domain settings

### 4️⃣ Pre-Launch Checklist

Before going live, update these items in your code:

- [ ] **Shopify Store URL**
  - Find all instances of `https://your-shopify-store.com`
  - Replace with your actual Shopify store URL
  - Files to update: `index.html`

- [ ] **Product Images**
  - Replace all `https://placehold.co/...` URLs
  - Use real, high-quality product photos
  - Optimize images (use WebP format, compress)

- [ ] **Lifestyle Images**
  - Replace placeholder lifestyle images
  - Use authentic brand photography

- [ ] **Contact Emails**
  - Update `hello@nurwellness.com`
  - Update `support@nurwellness.com`
  - Files to update: `index.html`

- [ ] **Social Media Links**
  - Update footer social media URLs
  - Currently set to `#` placeholder
  - Add actual Instagram, Facebook, Twitter links

- [ ] **Test on All Devices**
  - Desktop (Chrome, Firefox, Safari, Edge)
  - Mobile (iOS Safari, Chrome Mobile)
  - Tablet (iPad, Android tablets)

- [ ] **SEO Setup**
  - Verify meta description in `index.html`
  - Add Google Analytics (optional)
  - Submit sitemap to Google Search Console

### 5️⃣ Continuous Deployment

Once connected to GitHub, Netlify automatically deploys when you push changes:

```bash
# Make your changes to files
# Then commit and push:

git add .
git commit -m "Update: description of your changes"
git push origin main

# Netlify will automatically rebuild and deploy!
```

## 🔄 Making Updates After Launch

1. **Edit locally:**
   - Make changes to `index.html`, `styles.css`, or `script.js`
   - Test in your browser

2. **Commit changes:**
   ```bash
   git add .
   git commit -m "Update: [describe what you changed]"
   ```

3. **Push to GitHub:**
   ```bash
   git push origin main
   ```

4. **Automatic deployment:**
   - Netlify detects the push
   - Rebuilds and deploys automatically
   - Live in 30-60 seconds

## 🐛 Troubleshooting

### Issue: Site not loading CSS/JS

**Solution:** Check file paths in `index.html`:
```html
<!-- Should be: -->
<link rel="stylesheet" href="styles.css">
<script src="script.js"></script>
```

### Issue: Images not showing

**Solution:** 
- Check image URLs are correct
- Ensure images are in the repository
- Verify image file names match exactly (case-sensitive)

### Issue: Custom domain not working

**Solution:**
- Wait 24-48 hours for DNS propagation
- Clear browser cache
- Check nameservers at your domain registrar
- Verify DNS records in Netlify

### Issue: Forms not submitting

**Solution:**
- Add Netlify form attributes:
  ```html
  <form name="contact" method="POST" data-netlify="true">
  ```

## 📊 Post-Launch Monitoring

### Netlify Analytics (Optional)

1. Go to your site in Netlify
2. Click **"Analytics"** tab
3. Enable analytics (paid feature)

### Google Analytics (Free)

1. Create Google Analytics account
2. Get tracking code
3. Add to `index.html` before `</head>`:
   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_MEASUREMENT_ID');
   </script>
   ```

## 🎯 Performance Optimization

Your site is already optimized, but for future improvements:

1. **Optimize Images:**
   - Use WebP format
   - Compress images (TinyPNG, ImageOptim)
   - Use appropriate sizes (no 4K images for thumbnails)

2. **Add Loading States:**
   - Lazy load images below fold
   - Add skeleton screens

3. **Minify Assets:**
   - Minify CSS and JS for production
   - Use build tools if needed

## 🔐 Security

Your site includes security headers via `netlify.toml`:
- ✅ XSS Protection
- ✅ Clickjacking Protection
- ✅ MIME Sniffing Protection
- ✅ Content Security Policy

## 📧 Need Help?

- **Netlify Docs:** [docs.netlify.com](https://docs.netlify.com)
- **GitHub Issues:** [Create an issue](https://github.com/Azaiah00/nur-wellness-site/issues)
- **Email Support:** support@nurwellness.com

---

**Ready to launch? Let's go! 🚀**

*Wellness is your birthright.* 🌿

