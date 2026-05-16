# 我在仙界撿了屍 — 官方落地頁

[![Google Play](https://img.shields.io/badge/Google%20Play-下載-8a4fff?style=flat-square)](https://play.google.com/store/apps/details?id=com.pickupfairy.game)
[![App Store](https://img.shields.io/badge/App%20Store-下載-f7c948?style=flat-square)](https://apps.apple.com/us/app/cultivator-survivors-roguelike/id6763825494)

> 點陣手繪暗黑修仙割草 RPG · 招魂修仙 · 撿屍逆襲 · 越死越強

純靜態 HTML/CSS/JS，無建置流程，直接託管在 GitHub Pages。

---

## 檔案結構

```
landing-page/
├── index.html          ← 主頁
├── landing-v2.css      ← 主頁樣式
├── styles.css          ← 法律頁樣式
├── privacy.html        ← 隱私政策（請依需求調整）
├── terms.html          ← 服務條款（請依需求調整）
├── assets/
│   └── images/
│       ├── hero-banner.jpg     ← 1024×500，主視覺
│       ├── screenshot-1.jpg    ← 540×960，大廳介面
│       ├── screenshot-2.jpg    ← 540×960，招魂變身
│       ├── screenshot-3.jpg    ← 540×960，戰鬥畫面
│       └── icon.png            ← 512×512，App Icon
└── README.md
```

---

## 圖片放置（必做）

把你的圖片用上面列出的「精確檔名」存到 `assets/images/`。
還沒放真實圖片時，頁面會自動顯示紫色虛線占位框 + 檔名提示，不會壞掉。

| 檔名 | 建議尺寸 | 用途 |
|------|---------|------|
| `hero-banner.jpg` | 1024×500 | Hero 區主視覺 |
| `screenshot-1.jpg` | 540×960（手機直式） | 大廳介面 |
| `screenshot-2.jpg` | 540×960 | 招魂/魂魄交融 |
| `screenshot-3.jpg` | 540×960 | 戰鬥畫面 |
| `icon.png` | 512×512 | App Icon（Footer 用） |

> 如果你想用 PNG 而非 JPG，改 `index.html` 對應 src 的副檔名即可。

---

## 本地預覽

任何靜態 server 都行：

```bash
# Node http-server
npx http-server landing-page -p 3008

# 或 Python
cd landing-page && python -m http.server 3008
```

開 http://127.0.0.1:3008/ 確認版面。

---

## 部署到 GitHub Pages

1. 在 GitHub 開新 repo：`pickupfairy-landing`（public）
2. 把 `landing-page/` 內容推上去（**不是**整個 `E:\AI\skills`）：
   ```bash
   cd landing-page
   git init
   git add .
   git commit -m "Initial landing page"
   git branch -M main
   git remote add origin https://github.com/seanfuture9999/pickupfairy-landing.git
   git push -u origin main
   ```
3. GitHub repo → Settings → Pages
   - Source：**Deploy from a branch**
   - Branch：`main` / `(root)`
   - Save
4. 等 1-2 分鐘，網址會在 Settings → Pages 頂部出現：
   `https://seanfuture9999.github.io/pickupfairy-landing/`

---

## 自訂網域（選用）

買網域後在 repo 根目錄新增 `CNAME` 檔，內容為你的網域（如 `pickupfairy.com`）。
DNS 設定請參考 [GitHub Pages custom domain 文件](https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site)。

---

## 修改文案

- **Slogan / 短介紹 / 特色 5 點** → `index.html` 內搜尋對應段落
- **顏色** → `styles.css` 最上方 `:root` 變數（紫 `--purple` / 金 `--gold`）
- **新增分頁** → 複製 `privacy.html` 結構即可

---

## 授權

頁面程式碼 © 2026 PickUpFairy，遊戲資產為作者所有。
