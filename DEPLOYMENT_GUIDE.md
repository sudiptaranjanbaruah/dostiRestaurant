# Deployment Guide - Netlify

## Overview

This guide will walk you through deploying your restaurant website to Netlify, making it live on the internet with a free custom domain.

## Prerequisites

- A GitHub account (free)
- Your customized website files
- 10-15 minutes

## Method 1: Drag & Drop (Easiest)

### Step 1: Prepare Your Files

1. Make sure all your files are in one folder:
   ```
   dosti/
   ├── index.html
   ├── style.css
   ├── script.js
   └── images/
       ├── logo.jpg
       ├── hero-bg.jpg
       └── special-1.jpg
   ```

2. **Do NOT include:**
   - `.agent` folder
   - `instructions.md`
   - `CUSTOMIZATION_GUIDE.md`
   - `DEPLOYMENT_GUIDE.md`

### Step 2: Create Netlify Account

1. Go to [netlify.com](https://www.netlify.com)
2. Click "Sign up" → Sign up with GitHub (recommended)
3. Authorize Netlify to access your GitHub account

### Step 3: Deploy

1. Once logged in, you'll see the Netlify dashboard
2. Look for the drag & drop area that says "Want to deploy a new site without connecting to Git? Drag and drop your site output folder here"
3. **Drag your entire project folder** onto this area
4. Netlify will upload and deploy your site (takes 30-60 seconds)
5. You'll get a random URL like `random-name-123456.netlify.app`

### Step 4: Customize Your URL

1. Click "Site settings"
2. Click "Change site name"
3. Enter your desired name (e.g., `dosti-restaurant`)
4. Your site will now be at `dosti-restaurant.netlify.app`

### Step 5: Add Custom Domain (Optional)

1. Buy a domain from [Namecheap](https://www.namecheap.com) or [GoDaddy](https://www.godaddy.com)
2. In Netlify, go to "Domain settings"
3. Click "Add custom domain"
4. Follow the instructions to connect your domain

## Method 2: GitHub + Netlify (Recommended for Updates)

This method allows you to update your website by pushing changes to GitHub.

### Step 1: Create GitHub Repository

1. Go to [github.com](https://github.com)
2. Click the "+" icon → "New repository"
3. Name it `restaurant-website`
4. Make it **Public**
5. Click "Create repository"

### Step 2: Upload Your Files to GitHub

**Option A: Using GitHub Web Interface**

1. On your repository page, click "uploading an existing file"
2. Drag all your files (except `.agent`, guides, etc.)
3. Write a commit message: "Initial website upload"
4. Click "Commit changes"

**Option B: Using Command Line**

```bash
# Navigate to your project folder
cd /Users/sudiptaranjanbaruah/Public/dosti

# Initialize git (if not already done)
git init

# Add all files
git add index.html style.css script.js images/

# Commit
git commit -m "Initial website upload"

# Connect to GitHub (replace YOUR-USERNAME)
git remote add origin https://github.com/YOUR-USERNAME/restaurant-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Connect Netlify to GitHub

1. Log in to [Netlify](https://www.netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Click "GitHub"
4. Authorize Netlify (if first time)
5. Select your `restaurant-website` repository
6. **Build settings:**
   - Build command: (leave empty)
   - Publish directory: (leave empty or put `/`)
7. Click "Deploy site"

### Step 4: Your Site is Live!

- Netlify will build and deploy your site
- You'll get a URL like `random-name.netlify.app`
- Follow Step 4 from Method 1 to customize the URL

### Updating Your Website

When you want to make changes:

1. Edit your files locally
2. Push to GitHub:
   ```bash
   git add .
   git commit -m "Updated menu prices"
   git push
   ```
3. Netlify will automatically redeploy (takes 1-2 minutes)

## Custom Domain Setup (Detailed)

### Step 1: Buy a Domain

Recommended registrars:
- [Namecheap](https://www.namecheap.com) - $8-12/year
- [Google Domains](https://domains.google) - $12/year
- [GoDaddy](https://www.godaddy.com) - $10-15/year

### Step 2: Add Domain to Netlify

1. In Netlify, go to "Domain settings"
2. Click "Add custom domain"
3. Enter your domain (e.g., `dostirestaurant.com`)
4. Click "Verify"

### Step 3: Configure DNS

Netlify will show you DNS records to add. In your domain registrar:

1. Go to DNS settings
2. Add these records:

**For root domain (dostirestaurant.com):**
```
Type: A
Name: @
Value: 75.2.60.5
```

**For www subdomain:**
```
Type: CNAME
Name: www
Value: your-site.netlify.app
```

3. Save changes
4. Wait 24-48 hours for DNS to propagate

### Step 4: Enable HTTPS

1. In Netlify, go to "Domain settings" → "HTTPS"
2. Click "Verify DNS configuration"
3. Once verified, click "Provision certificate"
4. Your site will now have HTTPS (🔒)

## Troubleshooting

### Images not showing

- Check that image paths are correct
- Ensure images are in the `images/` folder
- File names are case-sensitive (use lowercase)

### Site not updating

- Clear your browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Check Netlify deploy log for errors
- Verify files were pushed to GitHub

### Form not working

The reservation form needs a backend. Options:

1. **Netlify Forms** (easiest):
   - Add `netlify` attribute to form tag:
     ```html
     <form netlify name="reservation">
     ```
   - Netlify will handle submissions

2. **Formspree**:
   - Sign up at [formspree.io](https://formspree.io)
   - Update form action:
     ```html
     <form action="https://formspree.io/f/YOUR-ID">
     ```

3. **Google Forms**:
   - Create a Google Form
   - Embed it in your page

## Performance Tips

1. **Compress images** before uploading
2. **Enable Netlify's Asset Optimization:**
   - Go to "Build & deploy" → "Post processing"
   - Enable "Bundle CSS" and "Minify CSS"
   - Enable "Minify JS"
   - Enable "Compress images"

3. **Add a favicon:**
   - Create a 32x32px icon
   - Save as `favicon.ico`
   - Place in root folder

## Cost Breakdown

- **Netlify hosting:** FREE
- **Custom domain:** $8-15/year (optional)
- **Total:** FREE (or $8-15/year with custom domain)

## Support

- **Netlify Docs:** [docs.netlify.com](https://docs.netlify.com)
- **Netlify Community:** [answers.netlify.com](https://answers.netlify.com)
- **GitHub Help:** [docs.github.com](https://docs.github.com)

---

**Congratulations!** Your restaurant website is now live on the internet! 🎉
