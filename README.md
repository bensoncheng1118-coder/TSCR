# TSCR 官方網站

TSCR 的介紹與下載頁（純靜態網頁：HTML + CSS + JS，不需要建置）。

```
index.html          網頁
favicon.ico
assets/config.js    ← 版本、檔案大小、SHA-256、GitHub 儲存庫名稱都在這裡改
assets/style.css
assets/main.js
assets/*.webp/png   截圖與圖示
render.yaml         Render 部署設定
.nojekyll           讓 GitHub Pages 直接提供檔案
```

## 1. 上傳到 GitHub

1. 在 GitHub 建立新的儲存庫，名稱建議 `TSCR`（設成 Public）。
2. 把 **這整個資料夾裡的檔案** 上傳到儲存庫根目錄（網頁上按 *Add file → Upload files*，把資料夾內容拖進去，或用 `git push`）。
3. 如果你的 GitHub 帳號或儲存庫名稱不是 `bensoncheng1118-coder/TSCR`，打開 `assets/config.js` 修改 `repo`。

## 2. 上傳安裝檔（TSCR-Setup.exe）

安裝檔 354 MB，超過 GitHub 一般檔案 100 MB 的上限，**不要放進儲存庫**，改放在 Releases：

1. 儲存庫頁面右側 *Releases → Create a new release*。
2. *Choose a tag* 輸入 `v1.0.0` → *Create new tag*，標題填 `TSCR 1.0.0`。
3. 把 `C:\transcription\TSCR\installer\Output\TSCR-Setup.exe` 拖到下方 *Attach binaries* 區域，等上傳完成後按 *Publish release*。

網站上的下載按鈕會自動指向「最新版 Release 裡的 TSCR-Setup.exe」：
`https://github.com/<帳號>/<儲存庫>/releases/latest/download/TSCR-Setup.exe`

之後出新版：建立新的 Release（例如 `v1.1.0`）上傳新的 TSCR-Setup.exe，再更新 `assets/config.js` 的 `version`、`sizeMB`、`sha256`。
SHA-256 可以在 PowerShell 用 `Get-FileHash TSCR-Setup.exe` 取得。

## 3. 部署到 GitHub Pages

儲存庫 *Settings → Pages* → *Source* 選 **Deploy from a branch** → Branch 選 `main`、資料夾 `/ (root)` → *Save*。
約 1 分鐘後網址會是 `https://<帳號>.github.io/<儲存庫>/`。

## 4. 部署到 Render

1. 到 [render.com](https://render.com) 用 GitHub 登入。
2. *New → Blueprint*，選這個儲存庫，Render 會讀取 `render.yaml` 自動建立 **Static Site**，按 *Apply*。
   （或 *New → Static Site*，選儲存庫，Build Command 留空、Publish Directory 填 `.`）
3. 完成後網址會是 `https://tscr.onrender.com`（名稱被用走時 Render 會加上亂碼）。

之後只要推送到 GitHub，GitHub Pages 和 Render 都會自動更新。

## 本機預覽

直接用瀏覽器打開 `index.html` 即可。
