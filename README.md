# Angular To-do List 專業實踐

> 這是一個遵循 w3schools 範例的 To-do List 應用程式，使用最新版的 Angular (version 20.3.2) 進行開發。專案不僅實現了所有 CRUD 核心功能，更在過程中整合了業界標準的開發工具、進行了多次架構重構，並遵循了無障礙設計 (a11y) 的最佳實踐。

🔗 **Live Demo:** [點擊此處訪問線上應用](https://chung1178.github.io/angular-todo-list/)  

---

### ✨ 核心功能 (Core Features)

- [x] **新增 (Create):** 在輸入框中新增待辦事項。
- [x] **讀取 (Read):** 動態渲染所有待辦事項列表。
- [x] **更新 (Update):** 點擊事項可將其標記為「已完成」，並呈現對應樣式。
- [x] **刪除 (Delete):** 點擊「×」按鈕可移除待辦事項。

---

### 🛠️ 技術棧 (Tech Stack)

* **框架:** Angular version 20.3.2
* **語言:** TypeScript
* **狀態管理:** Angular Signals
* **樣式:** SCSS (元件化樣式)
* **程式碼品質:**
  * ESLint (語法檢查)
  * Prettier (程式碼格式化)
  * Husky & lint-staged (Pre-commit 自動化)
* **版本控制:** Git (GitHub Flow)

---

### 🚀 本地端運行 (Running Locally)

1.  **Clone 專案**
    ```bash
    git clone [https://github.com/](https://github.com/)<Your-Username>/<Your-Repo>.git
    ```
2.  **進入專案目錄**
    ```bash
    cd <Your-Repo>
    ```
3.  **安裝依賴**
    ```bash
    npm install
    ```
4.  **啟動開發伺服器**
    ```bash
    npm start
    ```
    應用程式將會運行在 `http://localhost:4200/`。

---

### 🏛️ 架構與設計決策 (Architectural & Design Decisions)

這個專案在開發過程中，做出了以下關鍵的架構決策，以確保程式碼的品質、可維護性與可擴展性。

1.  **自動化品質管理:**
    * 在專案初期便整合了 ESLint, Prettier, Husky 及 lint-staged。
    * 透過 `pre-commit` hook，強制所有提交的程式碼都必須通過語法檢查與格式化，確保模擬團隊協作的一致性與程式碼庫的健康度。

2.  **元件化重構 (Componentization):**
    * 初期快速實現功能後，立即進行重構，將所有 To-do List 的邏輯從根元件 `App.ts` 中抽離，封裝至獨立的 `TodoList.ts`。
    * 此舉遵循了「單一職責原則」，讓 `App.ts` 回歸單純的佈局外殼，`TodoList.ts` 則成為可複用的功能元件。

3.  **服務層抽象化 (Service Layer Abstraction):**
    * 再次重構，將 `TodoList.ts` 中的「狀態管理」邏輯，抽象化至獨立的 `TodoListService` 中。
    * **元件 (Component)** 只負責處理畫面互動與呈現，**服務 (Service)** 則作為資料的「唯一真實來源 (Single Source of Truth)」。
    * 這種分層架構讓程式碼職責更清晰，也讓狀態邏輯可以輕易地被其他元件複用與測試。

4.  **無障礙設計 (Accessibility, a11y) 優先:**
    * 在開發過程中，ESLint 報出了無障礙相關的錯誤。
    * 並未簡單地關閉規則，而是深入研究並採用了 **ARIA 屬性** (`role`, `tabindex`, `(keydown.enter)`) 來解決問題，確保應用程式對僅使用鍵盤的用戶也是友善的。

---

### 🌟 我的學習與成長 (My Learning Journey)

作為一位主要背景在 React/Next.js 生態系的工程師，本次作業是我首次接觸 Angular 的挑戰。我的目標不僅是在 **10 小時**的時限內完成功能，更是要**模擬一次專業的產品開發**，藉此展現我的快速學習與工程實踐能力。

#### **開發策略與規劃**

* **1. 制定衝刺計畫:** 在開發前，先確認三天內的可使用時數，並根據可用的 10 小時，將任務切分為環境建置、功能實現、架構重構與文件撰寫等具體階段，確保專案能按時、高品質地交付。
* **2. 導入業界標準流程:** 即便這是個人小作業，也從初期就建立 `GitHub Flow` 版控策略，並整合 `ESLint`, `Prettier`, `Husky` 進行自動化程式碼品質管理，以模擬真實的團隊開發環境。
* **3. 重視過程而非僅有結果:** 將關鍵的架構決策、遇到的挑戰（如 a11y 除錯、Husky 版本遷移）與學習心得，都詳細記錄於開發日誌中，以完整呈現分析與解決問題的思考路徑。

#### **心得與收穫**

這次的挑戰讓我深刻體會到 React 作為函式庫的自由度，與 Angular 作為框架的結構性之間的差異。
我成功地將既有的元件化思維遷移至 Angular 生態，並快速掌握了Angular元件結構、 `signal` 狀態管理、`@for` 新語法，以及嘗試理解貫穿整個框架的**依賴注入 (DI)** 核心機制——這在我將狀態邏輯重構至獨立的 `Service` 時得到了實踐。
期望透過這次經驗證明了我具備在任何技術棧中，都能快速學習、適應規則，並堅持追求高品質、高可維護性程式碼的工程師素養。