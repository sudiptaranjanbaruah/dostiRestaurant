# Restaurant Website - Customization Guide

## Quick Start

Your restaurant website is ready to use! This guide will help you customize it for your specific restaurant.

## 📝 Content Customization

### 1. Restaurant Name & Logo

**File:** `index.html`

**Line 32-36:** Update the navigation logo
```html
<div class="nav-logo">
    <img src="images/logo.jpg" alt="Your Restaurant Name Logo">
    <span>Your Restaurant Name</span>
</div>
```

**Line 48:** Update the hero title
```html
<h1 class="hero-title">Welcome to Your Restaurant Name</h1>
```

### 2. Hero Section

**File:** `index.html` (Lines 47-57)

- **Tagline:** Change "Where Every Meal Tells a Story" to your tagline
- **CTA Buttons:** Customize button text and links
- **Background Image:** Replace `images/hero-bg.jpg` with your own image

### 3. About Section

**File:** `index.html` (Lines 66-91)

Update the restaurant story and highlights:
- Change the description paragraphs
- Update the numbers (15+ Years, 50+ Dishes, etc.)
- Modify the highlight labels

### 4. Menu Items

**File:** `index.html` (Lines 109-213)

Each menu item follows this structure:
```html
<div class="menu-item glass" data-category="starters">
    <div class="menu-item-header">
        <h3 class="menu-item-name">Item Name <span class="veg-indicator">🌱</span></h3>
        <span class="menu-item-price">₹180</span>
    </div>
    <p class="menu-item-description">Item description</p>
</div>
```

**To add a new menu item:**
1. Copy an existing menu item block
2. Update the `data-category` (starters, mains, desserts, drinks)
3. Change the name, price, and description
4. Use `🌱` for vegetarian, `🍗` for non-vegetarian

### 5. Chef's Specials

**File:** `index.html` (Lines 223-268)

Update the featured dishes:
- Change dish names and descriptions
- Update prices
- Replace images in `images/` folder

### 6. Contact Information

**File:** `index.html` (Lines 417-455)

**Address (Line 423):**
```html
<p>Your Address Line 1<br>Your City, State PIN</p>
```

**Phone Numbers (Lines 427-429):**
```html
<p><a href="tel:+919876543210">+91 98765 43210</a></p>
```

**Business Hours (Lines 433-442):**
Update the hours table with your timings

**Email (Line 446):**
```html
<p><a href="mailto:your@email.com">your@email.com</a></p>
```

**WhatsApp Link (Line 281):**
```html
<a href="https://wa.me/919876543210" target="_blank">
```
Replace `919876543210` with your WhatsApp number (country code + number, no spaces)

### 7. Google Maps

**File:** `index.html` (Line 450)

1. Go to [Google Maps](https://www.google.com/maps)
2. Search for your restaurant location
3. Click "Share" → "Embed a map"
4. Copy the iframe code
5. Replace the existing iframe in the HTML

### 8. Social Media Links

**File:** `index.html` (Lines 489-494)

Update the social media URLs:
```html
<a href="https://facebook.com/yourpage" target="_blank">📘</a>
<a href="https://instagram.com/yourpage" target="_blank">📷</a>
```

## 🎨 Design Customization

### Colors

**File:** `style.css` (Lines 20-30)

Change the color scheme by updating CSS variables:
```css
:root {
    --color-primary: #8B4513;        /* Main brand color */
    --color-accent: #D4A574;         /* Accent/highlight color */
    --color-text: #2C1810;           /* Text color */
    --color-bg: #FFF8F0;             /* Background color */
}
```

### Fonts

**File:** `index.html` (Line 13)

The website uses:
- **Display Font:** Playfair Display (headings)
- **Body Font:** Inter (paragraphs)

To change fonts:
1. Visit [Google Fonts](https://fonts.google.com)
2. Select your fonts
3. Replace the font link in `index.html`
4. Update CSS variables in `style.css` (Lines 33-34)

## 🖼️ Image Management

### Required Images

Place all images in the `images/` folder:

- `logo.jpg` - Your restaurant logo (square, 200x200px recommended)
- `hero-bg.jpg` - Hero section background (1920x1080px recommended)
- `special-1.jpg`, `special-2.jpg`, `special-3.jpg` - Chef's specials (800x600px)
- `gallery/` folder - Gallery images (600x600px recommended)

### Image Optimization Tips

1. **Compress images** before uploading (use [TinyPNG](https://tinypng.com))
2. **Recommended formats:** JPG for photos, PNG for logos
3. **Max file size:** Keep under 500KB per image
4. **Dimensions:** Use the recommended sizes above

## 📱 Testing Your Changes

After making changes:

1. **Save all files**
2. **Open `index.html` in a browser**
3. **Test on mobile:**
   - Right-click → Inspect
   - Click device toolbar icon
   - Select a mobile device
4. **Check all links work**
5. **Test the reservation form**
6. **Verify menu filtering works**

## 🚀 Next Steps

Once customized, you're ready to deploy! See the **Deployment Guide** for instructions on publishing your website to the internet.

## ❓ Common Questions

**Q: How do I change the currency symbol?**
A: Search for `₹` in `index.html` and replace with your currency symbol (e.g., `$`, `€`, `£`)

**Q: Can I add more menu categories?**
A: Yes! Add a new button in the menu tabs section and create menu items with matching `data-category`

**Q: How do I make the reservation form actually work?**
A: You'll need to connect it to a backend service or use a form service like Formspree, Netlify Forms, or Google Forms

**Q: Can I add more pages?**
A: Yes! Create new HTML files (e.g., `about.html`) and link to them from the navigation menu
