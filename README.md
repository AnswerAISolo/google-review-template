# Google Review Template

一頁式「服務回饋 → 自動生成 Google 評論 → 一鍵發表」表單模板。
客人掃 QR / 開連結 → 勾選感受 → 系統把他想說的話整理成一則自然的評論 → 一鍵前往 Google 貼上發表。

適合任何本地服務業（健身、美業、餐飲、診所、汽車美容、人力…）當「收評論」工具。

## 特色
- **零後端、零金鑰、零成本**：單一 HTML 檔，雙擊就能開，也能丟上 GitHub Pages / Vercel。
- **換一家店只改一個地方**：所有內容集中在檔案裡的 `CONFIG` 設定區。
- **內建控評（合規安全版）**：滿意度低於門檻 → 不導去 Google，只留內部回饋，避免違反 Google 政策。
- **勾選組句**：用勾選項組成自然句子，多版隨機，不會每則長一樣。

## 怎麼用（3 步）
1. 打開 `index.html`，找到最下面的 `CONFIG = { ... }`。
2. 改這幾項：
   - `brand`：你的店名
   - `googleReviewUrl`：你的 Google 一鍵評論連結（見下）
   - `staff`：服務人員名單（不需要就把 `askStaff` 設 `false`）
   - `items`：勾選項（`label` 顯示文字、`frag` 勾了會用到的句子）
   - `minStarForGoogle`：幾星以下走內部不導 Google（預設 4）
3. 存檔，把 `index.html` 丟上 GitHub Pages / Vercel，產生 QR 貼在店裡。

## 怎麼拿到 Google 一鍵評論連結
- 到 [Place ID Finder](https://developers.google.com/maps/documentation/places/web-service/place-id) 搜你的店 → 複製 Place ID。
- 連結填成：`https://search.google.com/local/writereview?placeid=你的PlaceID`
- 還沒有 Place ID 時，可先用地圖搜尋連結（模板預設值）。

## 合規提醒（重要）
- ✅ 對**所有客人**都給同一個連結、內容是他自己的回饋 = 合法。
- ❌ 只把好評導去 Google、篩掉低分 = 違反 Google 政策（review gating），會害店家被停權。
- 本模板用「低分只留內部、不美化後公開發」的方式處理，站在安全那邊。

## 之後可加
- 勾選組句 → 換成真 AI 生成（更活）。
- 回饋資料 → 接數據儀表板（Looker Studio 或自建一頁）。
- 老闆端「回覆既有評論」引擎（另一半）。

---
MVP by AIWFF · 2026-07
