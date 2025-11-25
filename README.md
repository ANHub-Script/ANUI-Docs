# ANUI Documentation Website

Dokumentasi lengkap untuk library ANUI (ANHub UI) - Library UI modern untuk Roblox Script Hubs.

## 📋 Isi Folder

- **index.html** - Halaman dokumentasi utama dengan semua informasi
- **style.css** - Styling modern dengan dark theme dan animasi
- **script.js** - JavaScript untuk interaktivitas dan fitur dinamis

## 🚀 Cara Menggunakan

### Membuka Secara Lokal

1. **Double-click** file `index.html` untuk membuka di browser
2. Atau klik kanan → "Open with" → Pilih browser favorit Anda

### Deploy ke GitHub Pages

1. Upload folder `docs-website` ke repository GitHub Anda
2. Buka Settings → Pages
3. Pilih branch dan folder `docs-website`
4. Klik Save
5. Website akan tersedia di: `https://username.github.io/repo-name/`

### Deploy ke Vercel/Netlify

1. **Vercel:**
   ```bash
   cd docs-website
   vercel
   ```

2. **Netlify:**
   - Drag & drop folder ke https://app.netlify.com/drop
   - Atau gunakan Netlify CLI

## 📚 Konten Dokumentasi

Website ini mencakup:

### 1. **Home/Hero Section**
   - Pengenalan ANUI
   - Call-to-action buttons
   - Statistik library

### 2. **Installation**
   - Quick start guide
   - Load dari GitHub
   - Load example showcase
   - Beta version notice

### 3. **Features**
   - Modern Design
   - Easy to Use
   - Rich Components (15+)
   - Customizable
   - Luau Native
   - Open Source

### 4. **Components**
Dokumentasi untuk 15+ komponen:
   - **Window** - Container utama
   - **Toggle** - Switch dengan animasi
   - **Button** - Tombol interaktif
   - **Dropdown** - Select menu
   - **Input** - Text input & textarea
   - **Slider** - Value slider
   - **Tab** - Navigasi tab
   - **Section** - Collapsible sections
   - **Group** - Horizontal grouping
   - **ColorPicker** - Color selection
   - **Code** - Code blocks
   - **Image** - Image display
   - **Paragraph** - Text content
   - **Notify** - Notifications
   - **Dialog** - Modal dialogs

### 5. **Usage Examples**
Code examples untuk:
   - Basic Window creation
   - Toggle & Checkbox
   - Button styling
   - Dropdown dengan icons
   - Slider dengan range

## 🎨 Fitur Website

### Design Features
- ✨ **Modern Dark Theme** - Premium dark mode dengan gradient
- 🎭 **Smooth Animations** - Micro-animations untuk UX yang lebih baik
- 📱 **Responsive Design** - Optimal di desktop, tablet, dan mobile
- 🎯 **Clean Typography** - Font Inter & JetBrains Mono
- 🌈 **Gradient Accents** - Primary green-yellow gradient
- 💫 **Glassmorphism Effects** - Modern blur effects

### Interactive Features
- 📋 **Copy Code Buttons** - One-click copy untuk semua code snippets
- 🔄 **Tab Navigation** - Switch antara different examples
- 🎯 **Smooth Scrolling** - Navigation yang smooth
- 📱 **Mobile Menu** - Hamburger menu untuk mobile
- 🎨 **Scroll Animations** - Fade-in saat scroll
- ⌨️ **Keyboard Navigation** - ESC untuk close menu

### Technical Features
- 🚀 **Performance Optimized** - Fast loading
- ♿ **Accessibility** - Semantic HTML
- 🎯 **SEO Ready** - Meta tags & proper heading structure
- 📦 **No Dependencies** - Vanilla JavaScript, no frameworks
- 🎨 **CSS Variables** - Easy theme customization
- 🌐 **Cross-browser Compatible** - Works on all modern browsers

## 🎨 Kustomisasi

### Mengubah Warna

Edit CSS variables di `style.css`:

```css
:root {
    --primary: #30FF6A;          /* Warna utama */
    --secondary: #e7ff2f;        /* Warna sekunder */
    --accent: #305dff;           /* Warna aksen */
    --bg-dark: #0a0a0a;          /* Background gelap */
    --bg-card: #111111;          /* Background card */
}
```

### Menambah Section Baru

Tambahkan di `index.html`:

```html
<section id="new-section" class="section">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title">Judul Section</h2>
            <p class="section-description">Deskripsi section</p>
        </div>
        <!-- Content here -->
    </div>
</section>
```

### Menambah Component Card

```html
<div class="component-card">
    <div class="component-header">
        <div class="component-icon">
            <svg><!-- Icon SVG --></svg>
        </div>
        <h3>Component Name</h3>
    </div>
    <p>Deskripsi component</p>
    <div class="component-tags">
        <span class="tag">Category</span>
    </div>
</div>
```

## 🔧 Pengembangan Lebih Lanjut

### Menambah Analytics

Edit `script.js` dan update function `trackEvent()`:

```javascript
function trackEvent(eventName, eventData = {}) {
    // Google Analytics
    gtag('event', eventName, eventData);
    
    // Atau analytics service lainnya
}
```

### Menambah Search Functionality

Implementasi search di `script.js`:

```javascript
function initSearch() {
    const searchInput = document.querySelector('#search');
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        // Filter components/content based on query
    });
}
```

### Menambah Dark/Light Mode Toggle

Uncomment bagian theme toggle di `script.js` dan tambahkan button:

```html
<button onclick="toggleTheme()" class="theme-toggle">
    <svg><!-- Sun/Moon icon --></svg>
</button>
```

## 📱 Browser Support

- ✅ Chrome/Edge (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Opera (Latest)
- ⚠️ IE11 (Limited support)

## 🤝 Contributing

Jika ingin berkontribusi pada dokumentasi:

1. Fork repository
2. Edit files di folder `docs-website`
3. Test secara lokal
4. Submit pull request

## 📝 License

Dokumentasi ini mengikuti lisensi yang sama dengan ANUI library.

## 🔗 Links

- **GitHub Repository:** https://github.com/ANHub-Script/ANUI
- **Official Docs:** https://ANHub-Script.github.io/ANUI-Docs/
- **Discord Server:** https://discord.gg/cy6uMRmeZ

## 👨‍💻 Credits

- **ANUI Library:** AdityaNugraha (.an)
- **Icons:** Lucide Icons
- **Inspiration:** Dawid-Scripts, Footagesus-WindUI
- **Documentation Website:** Created with ❤️ for ANUI community

---

**Dibuat dengan ❤️ oleh ANUI Team**
