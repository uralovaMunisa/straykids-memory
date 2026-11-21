# ✦ YOU MAKE STRAY KIDS STAY — Memory Archive ✦

Stray Kids va STAY uchun interaktiv xotira kitobi va to'liq diskografiya arxivi (2018 — 2026).

---

## 💾 Xotiralar Qayerga Saqlanadi? (Where are memories stored?)

Foydalanuvchilar qoldirgan barcha xotiralar brauzerning **`localStorage` (mahalliy xotirasi)** ga `skz_stay_memories` kaliti ostida saqlanadi:
- **Xavfsiz va tezkor**: Tashqi backend yoki server shart emas.
- **Doimiy saqlanadi**: Sahifa yangilansa (F5) yoki brauzer yopilib qayta ochilsa ham xotiralar yo'qolib ketmaydi.
- **Har bir tashrif buyuruvchi**: O'zining yozgan xotiralari va tizimning boshlang'ich xotiralarini real vaqtda ko'radi, yangi xotira qo'sha oladi yoki o'chirishi mumkin.

---

## 🚀 GitHub va Deploy Sozlamalari (Zero-Error Deployment)

Loyihada GitHub Pages, Vercel va Netlify uchun barcha xatolar oldi olingan:
1. **`base: './'` nisbiy yo'li**: GitHub Pages'da sahifa oq ekran (404 Not Found) bo'lib qolmasligi uchun `vite.config.js` ga kiritilgan.
2. **`.gitignore`**: `node_modules/` va keraksiz og'ir fayllar GitHub'ga tushmasligi kafolatlangan.
3. **Avtomatik GitHub Actions**: `.github/workflows/deploy.yml` orqali har safar `git push` qilganingizda loyiha o'zi avtomatik quriladi va GitHub Pages'ga joylanadi.

---

### 1️⃣ GitHub'ga yuklash (Push):
Terminalda quyidagi buyruqlarni ketma-ket bajaring:

```bash
# 1. Barcha o'zgarishlarni qo'shish
git add .

# 2. Commit qilish
git commit -m "feat: migrate to React + Tailwind, add members photos, albums and travel gallery"

# 3. GitHub'ga yuborish
git push origin main
```

---

### 2️⃣ GitHub Pages'ni yoqish (2 qadam):
1. GitHub'dagi repozitoriyangizga kiring.
2. **Settings** -> **Pages** bo'limiga o'ting.
3. **Build and deployment** -> **Source** menyusidan **`GitHub Actions`** ni tanlang.
4. Bo'ldi! `.github/workflows/deploy.yml` avtomatik ishlab, 30 soniyada saytingizni internetga chiqaradi.

---

### 3️⃣ Vercel yoki Netlify orqali deploy (1 daqiqa):
1. [Vercel.com](https://vercel.com) ga kiring va GitHub profilingiz bilan bog'lang.
2. **Add New Project** -> `STAY memory` repozitoriyasini tanlang.
3. Sozlamalarni o'zgartirmasdan **Deploy** tugmasini bosing:
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`

---

## 🛠 Mahalliy Ishga Tushirish (Local Development)

```bash
# Kutubxonalarni o'rnatish
npm install

# Dasturchi rejimida ishga tushirish (HMR)
npm run dev

# Ishlab chiqarish (production) versiyasini yaratish
npm run build
```

