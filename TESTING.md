# 🧪 Testing Guide - Nur Wellness Co.

This guide helps you test all features of the Nur Wellness Co. website before deployment.

## Quick Test (5 Minutes)

Run through these essential tests quickly:

### 1. Open the Site
```bash
# Open index.html in your browser
# Windows:
start index.html

# Mac:
open index.html

# Or use a local server (recommended):
npx serve .
```

### 2. Visual Check
- [ ] Page loads completely
- [ ] Brand colors look correct (Emerald, Ivory, Gold)
- [ ] All sections are visible
- [ ] No broken images

### 3. Navigation Test
- [ ] Click each navigation link
- [ ] Verify smooth scroll to correct section
- [ ] Check mobile menu (resize window)

### 4. Interactive Elements
- [ ] Click each tab (Mind, Body, Spirit)
- [ ] Test testimonial slider arrows
- [ ] Open chatbot and send a message
- [ ] Click "Shop Now" buttons

---

## Complete Test (30 Minutes)

### 📱 Responsive Design Testing

#### Mobile Testing (375px)

1. **Resize browser to 375px width** (iPhone SE)
2. **Test:**
   - [ ] Mobile menu icon appears
   - [ ] Clicking menu icon opens navigation
   - [ ] All menu links work
   - [ ] Hero text is readable
   - [ ] Buttons are easily tappable
   - [ ] Tab buttons stack vertically
   - [ ] Product cards stack in single column
   - [ ] Testimonials display correctly
   - [ ] Chatbot fits on screen
   - [ ] Footer is readable

#### Tablet Testing (768px)

1. **Resize browser to 768px width** (iPad)
2. **Test:**
   - [ ] Navigation switches to desktop mode
   - [ ] Two-column product grid displays
   - [ ] Tab buttons in horizontal row
   - [ ] Images scale appropriately
   - [ ] White space looks good

#### Desktop Testing (1440px)

1. **Full screen on desktop**
2. **Test:**
   - [ ] Content doesn't stretch too wide
   - [ ] Navigation fully visible
   - [ ] Three-column product grid
   - [ ] Hero section looks impressive
   - [ ] Lifestyle cards in 3 columns

---

### 🖱️ Interactive Features Testing

#### Navigation

**Sticky Header:**
1. Scroll down the page
2. [ ] Header stays at top
3. [ ] Header shadow appears when scrolling
4. [ ] "Shop Now" button always visible

**Smooth Scroll:**
1. Click each navigation link
2. [ ] Philosophy scrolls smoothly
3. [ ] Products scrolls smoothly
4. [ ] Lifestyle scrolls smoothly
5. [ ] Community scrolls smoothly
6. [ ] About scrolls smoothly

**Mobile Menu:**
1. Resize window to mobile
2. Click hamburger icon
3. [ ] Menu slides open
4. [ ] Click a link
5. [ ] Menu closes automatically

#### Tabs (Philosophy Section)

1. **Click "Mind" tab**
   - [ ] Content changes to Mind information
   - [ ] Tab highlights in emerald green
   - [ ] Transition is smooth
   - [ ] Image loads correctly

2. **Click "Body" tab**
   - [ ] Content changes to Body information
   - [ ] Tab highlights
   - [ ] Previous tab unhighlights
   - [ ] Image loads correctly

3. **Click "Spirit" tab**
   - [ ] Content changes to Spirit information
   - [ ] Tab highlights
   - [ ] Content fades in smoothly

#### Testimonial Slider

1. **Auto-advance:**
   - [ ] Wait 5 seconds
   - [ ] Slider advances automatically
   - [ ] Transition is smooth
   - [ ] Dots update correctly

2. **Manual controls:**
   - [ ] Click "Next" arrow
   - [ ] Slider advances
   - [ ] Click "Previous" arrow
   - [ ] Slider goes back
   - [ ] Click each dot
   - [ ] Jumps to correct testimonial

3. **Pause on interaction:**
   - [ ] Click next/previous
   - [ ] Auto-advance pauses
   - [ ] Resumes after interaction

#### Chatbot

1. **Open chatbot:**
   - [ ] Click floating button
   - [ ] Window opens with animation
   - [ ] Welcome message displays

2. **Send messages:**
   - [ ] Type "sea moss" and send
   - [ ] Bot responds with relevant info
   - [ ] Typing indicator shows
   - [ ] Message appears in chat
   - [ ] Chat scrolls to bottom

3. **Test different questions:**
   - [ ] "wellness shots" - gets response
   - [ ] "aromatherapy" - gets response
   - [ ] "help" - gets response
   - [ ] Random text - gets default response

4. **Close chatbot:**
   - [ ] Click X button
   - [ ] Window closes
   - [ ] Messages persist when reopened
   - [ ] Press ESC key - closes window

---

### 🎨 Visual Design Testing

#### Colors

1. **Check brand colors appear:**
   - [ ] Emerald Green (#044343) - text, buttons, header
   - [ ] Ivory (#FDFDF6) - backgrounds
   - [ ] Gold (#B48A3A) - accents, hover states

2. **Hover states:**
   - [ ] Navigation links turn gold on hover
   - [ ] Primary buttons turn gold on hover
   - [ ] Secondary buttons fill emerald on hover
   - [ ] Product cards lift on hover
   - [ ] Tab buttons show gold border on hover

#### Typography

1. **Check fonts load:**
   - [ ] Headings use Playfair Display (serif)
   - [ ] Body text uses Plus Jakarta Sans (sans-serif)
   - [ ] All text is readable
   - [ ] Proper font weights applied

2. **Readability:**
   - [ ] Sufficient line height
   - [ ] Appropriate font sizes
   - [ ] Good contrast (emerald on ivory)
   - [ ] No text too small on mobile

#### Spacing & Layout

1. **White space:**
   - [ ] Sections have breathing room
   - [ ] Content not cramped
   - [ ] Padding around elements
   - [ ] Margins between sections

2. **Alignment:**
   - [ ] Text centered where appropriate
   - [ ] Images aligned properly
   - [ ] Buttons aligned correctly
   - [ ] Grid layouts even

---

### ⚡ Performance Testing

#### Load Time

1. **Open DevTools (F12)**
2. **Go to Network tab**
3. **Refresh page**
4. [ ] Total load time under 3 seconds
5. [ ] All resources load (no 404s)
6. [ ] Fonts load without flash of unstyled text

#### Animations

1. **Test all animations:**
   - [ ] Tab switching is smooth
   - [ ] Slider transitions are smooth
   - [ ] Hover effects don't lag
   - [ ] Scroll behavior is smooth
   - [ ] No janky animations

#### Console Errors

1. **Open DevTools Console (F12)**
2. **Check for errors:**
   - [ ] No red errors
   - [ ] No yellow warnings (or minimal)
   - [ ] All scripts load successfully

---

### ♿ Accessibility Testing

#### Keyboard Navigation

1. **Close mouse/trackpad**
2. **Use TAB key only:**
   - [ ] Tab through all interactive elements
   - [ ] Focus visible on each element
   - [ ] Can reach all navigation links
   - [ ] Can reach all buttons
   - [ ] Can reach chatbot input
   - [ ] Tab order is logical

3. **Use ENTER/SPACE:**
   - [ ] Activates buttons
   - [ ] Follows links
   - [ ] Submits forms

4. **Use ESC key:**
   - [ ] Closes mobile menu
   - [ ] Closes chatbot

#### Screen Reader Test (Optional)

1. **Enable screen reader:**
   - Windows: NVDA (free)
   - Mac: VoiceOver (Cmd+F5)

2. **Navigate site:**
   - [ ] Heading structure makes sense
   - [ ] Alt text is descriptive
   - [ ] ARIA labels are helpful
   - [ ] Tab names announced correctly

#### Color Contrast

1. **Use contrast checker:**
   - Visit: https://webaim.org/resources/contrastchecker/

2. **Check combinations:**
   - [ ] Emerald (#044343) on Ivory (#FDFDF6) - PASS
   - [ ] Ivory (#FDFDF6) on Emerald (#044343) - PASS
   - [ ] Gold (#B48A3A) on Emerald (#044343) - PASS
   - [ ] Gold (#B48A3A) on Ivory (#FDFDF6) - CHECK

---

### 🌐 Browser Testing

#### Chrome
- [ ] Desktop (Windows/Mac)
- [ ] Mobile (Android/iOS)
- [ ] All features work
- [ ] Styles display correctly

#### Firefox
- [ ] Desktop (Windows/Mac)
- [ ] Mobile
- [ ] All features work
- [ ] Styles display correctly

#### Safari
- [ ] Desktop (Mac)
- [ ] Mobile (iOS - iPhone/iPad)
- [ ] All features work
- [ ] Fonts load correctly

#### Edge
- [ ] Desktop (Windows)
- [ ] All features work
- [ ] Styles display correctly

---

### 🔗 Link Testing

#### Internal Links

1. **Navigation:**
   - [ ] Philosophy → Philosophy section
   - [ ] Products → Products section
   - [ ] Lifestyle → Lifestyle section
   - [ ] Community → Community section
   - [ ] About → About section

2. **Footer:**
   - [ ] All footer links work
   - [ ] Quick links scroll to sections

#### External Links

1. **Shop Now buttons:**
   - [ ] All link to Shopify (or correct URL)
   - [ ] Open in new tab
   - [ ] Have rel="noopener noreferrer"

2. **Social Media:**
   - [ ] Instagram link works
   - [ ] Facebook link works
   - [ ] Twitter link works
   - [ ] Open in new tab

---

### 📊 SEO Testing

#### Meta Tags

1. **View page source (Ctrl+U)**
2. **Check:**
   - [ ] `<title>` tag present and compelling
   - [ ] Meta description present (150-160 chars)
   - [ ] Meta keywords present
   - [ ] Open Graph tags (optional)

#### Headings

1. **Check heading hierarchy:**
   - [ ] Only one H1 on page
   - [ ] H2s follow H1
   - [ ] H3s follow H2s
   - [ ] No skipped levels

#### Images

1. **Check all images:**
   - [ ] Every image has alt text
   - [ ] Alt text is descriptive
   - [ ] Alt text includes keywords naturally

---

## 🐛 Bug Tracking

If you find issues, document them:

| Issue | Section | Severity | Status |
|-------|---------|----------|--------|
| Example: Button not clickable | Products | High | Fixed |
| | | | |

**Severity Levels:**
- **Critical:** Site doesn't load, major functionality broken
- **High:** Important feature doesn't work
- **Medium:** Minor feature issue, visual bug
- **Low:** Typo, small visual inconsistency

---

## ✅ Test Completion Checklist

- [ ] Quick test completed
- [ ] Responsive design tested (all sizes)
- [ ] Interactive features tested
- [ ] Visual design verified
- [ ] Performance checked
- [ ] Accessibility tested
- [ ] Browser testing completed
- [ ] Links verified
- [ ] SEO elements checked
- [ ] All bugs documented
- [ ] Critical/High bugs fixed

---

## 🎉 Ready for Deployment!

Once all tests pass, you're ready to deploy to Netlify!

See `DEPLOYMENT.md` for deployment instructions.

*Wellness is your birthright.* 🌿

