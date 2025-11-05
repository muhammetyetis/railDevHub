# 🚀 GitHub Pages Deployment - Quick Guide

## ✅ Yapılandırma Tamamlandı

### 📝 Düzenlenen Dosyalar

#### 1. `astro.config.mjs`
```javascript
site: 'https://muhammetyetis.github.io/'
base: '/railDevHub/'
```

#### 2. `.github/workflows/deploy.yml`
- ✅ Astro için optimize edilmiş workflow
- ✅ Node.js 20 kullanıyor
- ✅ `dist` klasöründen deploy
- ✅ `main` branch'e push → otomatik deploy

#### 3. CNAME Kontrolü
- ✅ Proje içinde CNAME dosyası yok
- ✅ Geçersiz domain hatası vermeyecek

---

## 🎯 Deployment Adımları

### 1️⃣ Push to GitHub
```bash
git add .
git commit -m "fix: configure Astro base path and GitHub Pages deploy"
git push
```

### 2️⃣ GitHub Pages Ayarları
1. GitHub'da repo'nuza gidin: https://github.com/muhammetyetis/railDevHub
2. **Settings** → **Pages**
3. **Source** → **GitHub Actions** seçin
4. Kaydedin

### 3️⃣ İlk Deployment
- **Actions** sekmesinden takip edin
- 2-3 dakika bekleyin
- ✅ işareti gördüğünüzde hazır!

### 4️⃣ Sitenizi Ziyaret Edin
🌐 **Live URL:** https://muhammetyetis.github.io/railDevHub/

---

## ❌ 404 Hatası Çözümleri

### Neden 404 Alabilirsiniz?

1. **Base path eksik**
   - ✅ Düzeltildi: `base: '/railDevHub/'`

2. **Yanlış URL kullanımı**
   - ❌ `https://muhammetyetis.github.io/`
   - ✅ `https://muhammetyetis.github.io/railDevHub/`

3. **GitHub Pages kaynağı yanlış**
   - Settings → Pages → Source: **GitHub Actions** olmalı

4. **Deployment henüz tamamlanmadı**
   - Actions sekmesinden durumu kontrol edin

---

## 🔄 Her Güncellemede

```bash
git add .
git commit -m "update: açıklama"
git push
```

2-3 dakika sonra değişiklikler canlıya yansır! 🎉

---

## 📋 Checklist

- [x] astro.config.mjs → `site` ve `base` doğru
- [x] .github/workflows/deploy.yml → Astro workflow aktif
- [x] CNAME dosyası yok
- [ ] GitHub'a push yapıldı
- [ ] GitHub Pages → Source: GitHub Actions seçildi
- [ ] İlk deployment tamamlandı
- [ ] Site erişilebilir: https://muhammetyetis.github.io/railDevHub/

---

**Başarılar! 🚀**

