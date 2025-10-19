# 🚀 Quick Update Guide - Replace Before Launch

This is your quick reference for all placeholders that MUST be updated before going live.

---

## 🔗 1. Shopify Store URL

**Find and Replace:** `https://your-shopify-store.com`  
**Replace With:** Your actual Shopify store URL  
**File:** `index.html`

**Locations (19 total):**
- Header "Shop Now" button (line ~33)
- Hero "Shop Our Products" button (line ~73)
- Mind tab "Shop Mind Wellness" button (line ~135)
- Body tab "Shop Body Wellness" button (line ~161)
- Spirit tab "Shop Spirit Wellness" button (line ~187)
- Sea Moss product button (line ~216)
- Wellness Shots product button (line ~226)
- Aromatherapy product button (line ~236)
- Body Oils product button (line ~246)
- Herbal Teas product button (line ~256)
- Wellness Bundles button (line ~266)
- "View All Products" button (line ~273)
- "Start Your Journey" button (line ~456)
- "Shop All Products" CTA banner (line ~469)
- Mobile menu "Shop Now" (line ~52)

**How to update:**
```bash
# Use find and replace in your editor:
# Find: https://your-shopify-store.com
# Replace: https://yourstore.myshopify.com
```

---

## 🖼️ 2. Product Images

**Find and Replace:** All `https://placehold.co/...` URLs

### Product Images (6 total)

| Product | Current Placeholder | Recommended Size |
|---------|-------------------|------------------|
| **Sea Moss Gel** | `placehold.co/400x300/044343/FDFDF6?text=Sea+Moss+Gel` | 800x600px |
| **Wellness Shots** | `placehold.co/400x300/044343/FDFDF6?text=Wellness+Shots` | 800x600px |
| **Aromatherapy Oils** | `placehold.co/400x300/044343/FDFDF6?text=Essential+Oils` | 800x600px |
| **Body Oils** | `placehold.co/400x300/044343/FDFDF6?text=Body+Oils` | 800x600px |
| **Herbal Teas** | `placehold.co/400x300/044343/FDFDF6?text=Herbal+Teas` | 800x600px |
| **Wellness Bundles** | `placehold.co/400x300/044343/FDFDF6?text=Wellness+Bundles` | 800x600px |

**File:** `index.html` (lines ~209-267)

**Steps:**
1. Create an `images` folder in your project
2. Add product photos: `images/sea-moss.jpg`, `images/wellness-shots.jpg`, etc.
3. Update URLs in HTML:
   ```html
   <!-- Change from: -->
   <img src="https://placehold.co/400x300/..." alt="...">
   
   <!-- To: -->
   <img src="images/sea-moss.jpg" alt="Organic sea moss gel for gut health">
   ```

---

## 🌄 3. Lifestyle Images

**Find and Replace:** 6 lifestyle section images

| Lifestyle Card | Current Placeholder | Recommended Size |
|---------------|-------------------|------------------|
| **Morning Rituals** | `placehold.co/400x500/.../Morning+Rituals` | 800x1000px |
| **Mindful Movement** | `placehold.co/400x500/.../Mindful+Movement` | 800x1000px |
| **Community Connection** | `placehold.co/400x500/.../Community+Connection` | 800x1000px |
| **Natural Nutrition** | `placehold.co/400x500/.../Natural+Nutrition` | 800x1000px |
| **Rest & Recovery** | `placehold.co/400x500/.../Rest+Recovery` | 800x1000px |
| **Self Care** | `placehold.co/400x500/.../Self+Care` | 800x1000px |

**File:** `index.html` (lines ~284-329)

**Suggested Images:**
- Morning: Person with sea moss smoothie, journal
- Movement: Yoga, stretching, walking
- Community: People together, wellness circle
- Nutrition: Fresh ingredients, whole foods
- Rest: Meditation, peaceful scene
- Self Care: Aromatherapy, bath, oils

---

## 🧠 4. Philosophy Tab Images

**Find and Replace:** 3 tab section images

| Tab | Current Placeholder | Recommended Size |
|-----|-------------------|------------------|
| **Mind** | `placehold.co/600x400/.../Mind+Wellness` | 1200x800px |
| **Body** | `placehold.co/600x400/.../Body+Wellness` | 1200x800px |
| **Spirit** | `placehold.co/600x400/.../Spirit+Wellness` | 1200x800px |

**File:** `index.html` (lines ~118, 144, 170)

**Suggested Images:**
- Mind: Aromatherapy oils, journal, peaceful setting
- Body: Sea moss, wellness shots, fresh ingredients
- Spirit: Movement, yoga, strength training

---

## 📧 5. Contact Emails

**Find and Replace:** Email addresses

| Current Placeholder | Replace With | Locations |
|-------------------|-------------|-----------|
| `hello@nurwellness.com` | Your actual email | Footer (line ~487) |
| `support@nurwellness.com` | Your support email | Footer (line ~488) |

**File:** `index.html`

---

## 📱 6. Social Media Links

**Update:** Footer social media URLs

**File:** `index.html` (lines ~477-492)

**Current:** All set to `#`

**Update to:**
```html
<!-- Instagram -->
<a href="https://instagram.com/yourhandle" ...>

<!-- Facebook -->
<a href="https://facebook.com/yourpage" ...>

<!-- Twitter -->
<a href="https://twitter.com/yourhandle" ...>
```

---

## 🎯 7. Optional Updates

### Google Analytics (Optional)

**Add before `</head>` in index.html:**

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

Replace `GA_MEASUREMENT_ID` with your actual Google Analytics ID.

### Favicon (Optional)

**Add to `<head>` section:**

```html
<link rel="icon" type="image/png" href="images/favicon.png">
<link rel="apple-touch-icon" href="images/apple-touch-icon.png">
```

Create favicon images and add to `images` folder.

---

## ✅ Quick Checklist

Use this for a final check:

- [ ] All Shopify URLs updated (19 locations)
- [ ] All 6 product images replaced
- [ ] All 6 lifestyle images replaced
- [ ] All 3 philosophy tab images replaced
- [ ] Both email addresses updated
- [ ] All 3 social media links updated
- [ ] Images optimized and compressed
- [ ] All images have descriptive alt text
- [ ] Favicon added (optional)
- [ ] Google Analytics added (optional)

---

## 🛠️ Bulk Update Commands

### Using VS Code or Text Editor

1. **Open Find and Replace** (Ctrl+H or Cmd+H)
2. **Enable "Replace All"**
3. **Update each item:**

```
Find: https://your-shopify-store.com
Replace: [YOUR ACTUAL SHOPIFY URL]
Click: Replace All
```

### Using Command Line (Advanced)

**Mac/Linux:**
```bash
# Replace Shopify URL
sed -i '' 's/https:\/\/your-shopify-store.com/https:\/\/yourstore.myshopify.com/g' index.html

# Replace email
sed -i '' 's/hello@nurwellness.com/youremail@domain.com/g' index.html
```

**Windows (PowerShell):**
```powershell
# Replace Shopify URL
(Get-Content index.html) -replace 'https://your-shopify-store.com', 'https://yourstore.myshopify.com' | Set-Content index.html
```

---

## 📸 Image Optimization Tips

Before adding images:

1. **Resize to recommended dimensions**
   - Product images: 800x600px
   - Lifestyle images: 800x1000px
   - Philosophy images: 1200x800px

2. **Compress images:**
   - Use [TinyPNG](https://tinypng.com) or [ImageOptim](https://imageoptim.com)
   - Target: Under 200KB per image

3. **Use WebP format** (optional):
   - Better compression than JPG
   - Supported by all modern browsers
   ```html
   <img src="images/sea-moss.webp" alt="..." loading="lazy">
   ```

4. **Add lazy loading:**
   ```html
   <img src="..." alt="..." loading="lazy">
   ```

---

## 🚨 Critical Before Launch

**These MUST be updated or site won't function properly:**

1. ✅ **Shopify Store URL** - Otherwise "Shop Now" buttons won't work
2. ✅ **Product Images** - Professional photos build trust
3. ✅ **Contact Emails** - So customers can reach you

**Nice to have (but not critical):**

4. Lifestyle images
5. Philosophy images
6. Social media links
7. Favicon

---

## 💡 Pro Tips

1. **Test after each update:**
   - Open index.html in browser
   - Click links to verify they work
   - Check images load correctly

2. **Use relative paths for images:**
   ```html
   ✅ Good: <img src="images/product.jpg">
   ❌ Avoid: <img src="C:/Users/you/images/product.jpg">
   ```

3. **Keep backups:**
   - Save original files before editing
   - Use Git to track changes
   - Test on local server before deploying

4. **Commit after each major update:**
   ```bash
   git add .
   git commit -m "Updated Shopify URLs"
   git push origin main
   ```

---

## 🎉 You're Almost There!

Once all placeholders are updated:

1. ✅ Test locally (see TESTING.md)
2. ✅ Run through PRE-LAUNCH-CHECKLIST.md
3. ✅ Deploy to Netlify (see DEPLOYMENT.md)
4. ✅ Celebrate! 🎊

*Wellness is your birthright.* 🌿

