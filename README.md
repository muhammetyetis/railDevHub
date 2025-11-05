# 🚆 RailDevHub — Landing Page

A modern, multi-section corporate landing page built with **Astro + React + Tailwind CSS**, designed for performance, dark mode, and smooth developer workflow. Deployed automatically on GitHub Pages.

---

## 🚀 Live Demo

🔗 **https://muhammetyetis.github.io/**

---

## ✨ Features

- 🌙 **Dark mode design** - Modern ve göz dostu arayüz
- 🎨 **Modern UI with Tailwind CSS** - Özelleştirilebilir ve responsive
- ⚡ **Lightning-fast build with Astro** - Blazing fast performance
- 📱 **Fully responsive** - Tüm cihazlarda mükemmel görünüm
- 🧠 **Modular component structure** - React + Astro entegrasyonu
- 🎬 **Smooth animations** - Framer Motion ile akıcı geçişler
- 🧰 **Easy CI/CD with GitHub Actions** - Otomatik deployment

---

## 🧩 Getting Started

### Kurulum

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Tarayıcınızda **http://localhost:4321** adresini açın (Astro default port).

### Build & Preview

```bash
npm run build
npm run preview
```

Build dosyaları `dist/` klasöründe oluşturulur.

---

## 🚀 GitHub Pages Deployment

### ✅ Yapılandırma Tamamlandı

Bu proje GitHub Pages için yapılandırılmıştır:

- **Site URL:** `https://muhammetyetis.github.io/`
- **Output:** `dist/` klasörü
- **Workflow:** `.github/workflows/deploy.yml`

### 🎯 İlk Deployment Adımları

#### 1️⃣ Değişiklikleri GitHub'a Gönder

```bash
git add .
git commit -m "GitHub Pages deployment yapılandırması"
git push origin main
```

#### 2️⃣ GitHub Pages Ayarlarını Yap

1. Repo'nuza gidin: https://github.com/muhammetyetis/railDevHub
2. **Settings** → **Pages** sekmesine tıklayın
3. **Build and deployment** bölümünde:
   - **Source:** `GitHub Actions` seçin
4. **Save** butonuna basın

#### 3️⃣ Deployment'ı Takip Et

- **Actions** sekmesine gidin: https://github.com/muhammetyetis/railDevHub/actions
- "Deploy Astro site to GitHub Pages" workflow'unu göreceksiniz
- İlk deploy 2-5 dakika sürebilir
- Yeşil ✅ işareti gördüğünüzde deployment tamamlanmıştır

#### 4️⃣ Sitenizi Ziyaret Edin

🌐 **Live Site:** https://muhammetyetis.github.io/

---

## 🔄 Otomatik Deployment

Artık her `main` branch'e push yaptığınızda:
1. GitHub Actions otomatik çalışacak
2. Projenizi build edecek
3. GitHub Pages'e deploy edecek
4. 2-3 dakika içinde değişiklikler canlıya yansıyacak

**Tek yapmanız gereken:**

```bash
git add .
git commit -m "Değişiklik mesajınız"
git push origin main
```

---

## 🔍 Hata Giderme

### ❌ "Domain is not a valid public domain" Hatası

**Çözüm:** Bu hata artık gelmeyecek çünkü:
- Özel domain kullanımı kaldırıldı
- CNAME dosyası yok
- Sadece GitHub Pages URL'si kullanılıyor

### ❌ Assets (CSS/JS) Yüklenmiyor

**Çözüm:** Site URL doğru şekilde yapılandırıldı. Tüm asset'ler doğru path'ten yüklenecek.

### ❌ Workflow Çalışmıyor

**Kontrol Et:**
- GitHub Pages source'u "GitHub Actions" olarak ayarlandı mı?
- `main` branch'e push yaptınız mı?
- Actions tab'ında hata mesajı var mı?

### ❌ 404 Hatası Alıyorum

**Kontrol Et:**
- URL doğru mu: `https://muhammetyetis.github.io/`
- Deployment tamamlandı mı? (Actions tab'ından kontrol edin)
- Tarayıcı cache'ini temizleyin (Ctrl+Shift+R)

---

## 🧪 Yerel Geliştirme

```bash
# Development server başlat
npm run dev
# → http://localhost:4321

# Lint kontrolü
npm run check

# Production build test et
npm run build
npm run preview
# → http://localhost:4321
```

---

## 📝 Teknik Detaylar

### Yapılandırma Dosyaları

**astro.config.mjs:**
```javascript
export default defineConfig({
  site: 'https://muhammetyetis.github.io/',
  integrations: [tailwind(), react()],
  output: 'static',
});
```

**GitHub Actions Workflow:**
- Node.js 20
- `npm ci` → `npm run build`
- Deploy from `dist/` folder
- Auto-deploy on push to `main`

### Önemli Notlar

- ✅ Özel domain (CNAME) kullanılmıyor
- ✅ GitHub Pages URL'si: `https://muhammetyetis.github.io/`
- ✅ Dark mode destekli landing page
- ✅ Otomatik deployment aktif
- ✅ Node.js 20 kullanılıyor

---

## 📦 Bağımlılıklar

- **Astro** ^5.15.3
- **React** ^19.1.1
- **Tailwind CSS** ^3.4.18
- **Framer Motion** ^11.15.0
- **Lucide React** ^0.471.1

---

## 📄 Lisans

Bu proje **Private** olarak işaretlenmiştir.

---

**Başarılı deployments! 🎉**
