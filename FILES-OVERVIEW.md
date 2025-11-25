# 📁 ANUI Documentation Website - Files Overview

## 🗂️ Struktur File

```
docs-website/
├── index.html           # Halaman utama dokumentasi
├── quick-reference.html # API reference untuk semua komponen
├── style.css           # Stylesheet modern dengan dark theme
├── script.js           # JavaScript untuk interaktivitas
├── README.md           # Dokumentasi folder ini
└── TUTORIAL.md         # Tutorial lengkap step-by-step
```

---

## 📄 Deskripsi File

### 1. **index.html** - Halaman Utama
**Ukuran:** ~30KB  
**Deskripsi:** Landing page utama dengan dokumentasi lengkap

**Sections:**
- ✨ Hero/Home - Pengenalan ANUI dengan CTA
- 📦 Installation - Cara install dan load library
- 🎯 Features - 6 keunggulan utama ANUI
- 🧩 Components - Grid dari 15+ komponen tersedia
- 💻 Examples - Code examples dengan tab navigation
- 📍 Footer - Links dan credits

**Fitur:**
- Responsive design (mobile-friendly)
- Smooth scroll navigation
- Animated hero section dengan gradient background
- Code blocks dengan copy button
- Tab switching untuk examples
- SEO optimized dengan meta tags

---

### 2. **quick-reference.html** - API Documentation
**Ukuran:** ~25KB  
**Deskripsi:** Reference guide lengkap untuk developer

**Features:**
- Sticky sidebar navigation
- Scroll-to-section functionality
- Property tables dengan tipe data
- Required/Optional indicators
- Method documentation
- Component-by-component breakdown

**Komponen yang didokumentasikan:**
- Window, Toggle, Button, Dropdown
- Input, Slider, ColorPicker
- Tab, Section, Group
- Code, Image, Paragraph
- Notify, Dialog

---

### 3. **style.css** - Stylesheet
**Ukuran:** ~20KB  
**Deskripsi:** Modern CSS dengan design system lengkap

**Features:**
- CSS Custom Properties (Variables)
- Dark theme dengan gradient accents
- Glassmorphism effects
- Smooth animations & transitions
- Responsive breakpoints
- Custom scrollbar styling
- Intersection observer animations

**Design Tokens:**
```css
Colors: Primary (#30FF6A), Secondary (#e7ff2f), Accent (#305dff)
Fonts: Inter (UI), JetBrains Mono (Code)
Spacing: XS to 3XL scale
Shadows: SM, MD, LG dengan glow effects
Radius: SM (8px) to XL (24px)
```

---

### 4. **script.js** - JavaScript
**Ukuran:** ~10KB  
**Deskripsi:** Interactive features dan utilities

**Functionality:**
- ✅ Smooth scroll navigation
- ✅ Active link highlighting
- ✅ Code copy to clipboard
- ✅ Tab switching system
- ✅ Scroll animations
- ✅ Mobile menu toggle
- ✅ Keyboard navigation (ESC key)
- ✅ Lazy loading for images
- ✅ Analytics tracking (placeholder)
- 🎉 Easter egg (Konami code)

**Dependencies:** None (Vanilla JavaScript)

---

### 5. **README.md** - Documentation
**Ukuran:** ~8KB  
**Deskripsi:** Dokumentasi lengkap folder ini

**Contents:**
- Cara menggunakan website
- Deploy instructions (GitHub Pages, Vercel, Netlify)
- Konten dokumentasi detail
- Fitur-fitur website
- Customization guide
- Browser support
- Development tips

---

### 6. **TUTORIAL.md** - Tutorial Guide
**Ukuran:** ~12KB  
**Deskripsi:** Panduan step-by-step untuk pemula

**Sections:**
- Prerequisites
- Installation methods
- Creating first window
- Adding tabs & sections
- All basic components dengan examples
- Tips & tricks
- Troubleshooting common issues
- Complete script example
- Next steps & resources

---

## 🎨 Design Philosophy

### Color Scheme
- **Primary Green** (#30FF6A) - Actions, highlights, success
- **Secondary Yellow** (#e7ff2f) - Accents, gradients
- **Accent Blue** (#305dff) - Links, interactive elements
- **Dark Background** (#0a0a0a) - Main background
- **Card Background** (#111111) - Component cards

### Typography
- **Headings:** Inter (800/700/600 weight)
- **Body:** Inter (400/500 weight)
- **Code:** JetBrains Mono (500/600 weight)

### Spacing System
```
XS:  0.5rem (8px)
SM:  1rem   (16px)
MD:  1.5rem (24px)
LG:  2rem   (32px)
XL:  3rem   (48px)
2XL: 4rem   (64px)
3XL: 6rem   (96px)
```

---

## 🚀 Performance

### Optimizations
- ✅ No framework dependencies (Vanilla JS/CSS)
- ✅ Minimal HTTP requests
- ✅ CSS animations (GPU accelerated)
- ✅ Lazy loading for images
- ✅ Efficient DOM queries
- ✅ Debounced scroll events

### Load Times (Estimated)
- First Contentful Paint: < 1s
- Time to Interactive: < 2s
- Total Page Size: ~70KB (without images)

---

## 📱 Browser Compatibility

| Browser | Version | Support |
|---------|---------|---------|
| Chrome  | 90+     | ✅ Full |
| Edge    | 90+     | ✅ Full |
| Firefox | 88+     | ✅ Full |
| Safari  | 14+     | ✅ Full |
| Opera   | 76+     | ✅ Full |
| IE 11   | -       | ⚠️ Limited |

---

## 🔧 Customization Guide

### Mengubah Tema Warna

Edit `style.css` di bagian `:root`:

```css
:root {
    --primary: #30FF6A;      /* Ganti dengan warna favorit */
    --secondary: #e7ff2f;
    --accent: #305dff;
}
```

### Menambah Section Baru

Di `index.html`:

```html
<section id="new-section" class="section">
    <div class="container">
        <!-- Content -->
    </div>
</section>
```

### Menambah Component di Quick Reference

Di `quick-reference.html`:

```html
<div id="newcomponent" class="component-ref">
    <h2>New Component</h2>
    <p class="subtitle">Description</p>
    <table class="properties-table">
        <!-- Properties -->
    </table>
</div>
```

---

## 📊 Analytics Setup (Optional)

### Google Analytics

Tambahkan di `<head>` section:

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

Update `script.js`:

```javascript
function trackEvent(eventName, eventData = {}) {
    gtag('event', eventName, eventData);
}
```

---

## 🌐 Deployment

### GitHub Pages

1. Push folder ke repository
2. Settings → Pages
3. Source: `main` branch → `docs-website` folder
4. Save
5. Access: `https://username.github.io/repo-name/`

### Vercel

```bash
cd docs-website
vercel --prod
```

### Netlify

```bash
cd docs-website
netlify deploy --prod
```

Atau drag & drop ke: https://app.netlify.com/drop

---

## 📝 Maintenance Checklist

### Regular Updates
- [ ] Update version numbers
- [ ] Add new components documentation
- [ ] Update code examples
- [ ] Check for broken links
- [ ] Update browser compatibility
- [ ] Review and fix typos

### Content Updates
- [ ] Add more examples
- [ ] Expand troubleshooting section
- [ ] Add video tutorials (future)
- [ ] Create FAQ section (future)
- [ ] Add advanced usage guide (future)

---

## 🤝 Contributing

Jika ingin berkontribusi:

1. Fork repository
2. Edit files yang diperlukan
3. Test di browser lokal
4. Commit dengan message yang jelas
5. Submit pull request

**Code Style:**
- HTML: Indent 4 spaces
- CSS: Properties alphabetically sorted
- JS: Use camelCase
- Comments: Descriptive dan informative

---

## 📞 Support

**Issues?** 
- Check TUTORIAL.md untuk troubleshooting
- Join Discord: https://discord.gg/cy6uMRmeZ
- GitHub Issues: https://github.com/ANHub-Script/ANUI/issues

**Questions?**
- Discord server adalah tempat terbaik
- Check existing documentation terlebih dahulu

---

## 📜 License

Dokumentasi ini mengikuti lisensi yang sama dengan ANUI library (MIT License).

---

## ✨ Credits

**ANUI Library:**
- Developer: AdityaNugraha (.an)
- Inspiration: Dawid-Scripts, Footagesus-WindUI
- Icons: Lucide Icons

**Documentation Website:**
- Design & Development: ANUI Team
- Created with: HTML5, CSS3, Vanilla JavaScript
- Fonts: Google Fonts (Inter, JetBrains Mono)

---

## 🎯 Future Enhancements

### Planned Features
- [ ] Search functionality
- [ ] Dark/Light mode toggle
- [ ] Interactive component playground
- [ ] Video tutorials embedded
- [ ] Download PDF documentation
- [ ] Multi-language support (ID/EN)
- [ ] Advanced examples section
- [ ] Community showcase
- [ ] Changelog page
- [ ] Blog section

---

**Last Updated:** November 25, 2025  
**Version:** 1.0.0  
**Maintained by:** ANUI Community

---

*Made with ❤️ for the ANUI Community*
