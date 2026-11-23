# SANAD (سَنَد) — Interactive UI/UX Prototype

This is the browser-based interactive prototype for **Sanad (سَنَد)**:
*"A Smart System Utilizing Computer Vision and GIS for Accessible Navigation and Mobility Support for Wheelchair Users and the Elderly."*

It presents the structural layout, accessibility system, and interactive flows for the core MVP screens defined in **Milestone 2**:
1. **Home Screen (`SCR-01`)**
2. **Destination Search (`SCR-02`)**
3. **Route Selection & Accessibility Comparison (`SCR-03`)**
4. **Active Turn-by-Turn Navigation (`SCR-04`)**

---

## 🚀 How to Run the Prototype

No build steps, node modules, or local servers are required.

### Simple Option (Double-Click):
1. Open the folder `sanad-ui-prototype/`.
2. Double-click `index.html` to launch it directly in your web browser (Chrome, Edge, Firefox, Safari).

### Local HTTP Server Option (Optional):
If you prefer running via a local web server (e.g., VS Code Live Server or Python):
```bash
cd sanad-ui-prototype
python -m http.server 8000
# Then open http://localhost:8000 in your browser
```

---

## 🌐 Features & Controls

1. **Language & Layout Switcher:**
   * Click **`العربية (RTL)`** for Arabic right-to-left layout (using the **Cairo** font).
   * Click **`English (LTR)`** for English left-to-right layout (using the **Inter** font).

2. **Quick Screen Jump:**
   * Use the top toolbar buttons (**1. Home**, **2. Search**, **3. Routes**, **4. Active Nav**) to jump immediately to any of the 4 screens for inspection.

3. **Screen Interactions:**
   * **Home (`SCR-01`):** Click the Search box to launch Destination Search, click shortcuts, or click AI Visual Reader.
   * **Destination Search (`SCR-02`):** Type to filter locations dynamically, tap filter chips (>=48px touch targets), or select a search result card to move to Route Options.
   * **Route Selection (`SCR-03`):** Toggle mini-map canvas height, compare evidence-based route cards (Route A vs Route B), expand data source drawers, and click **"Start Direct Guidance"**.
   * **Active Navigation (`SCR-04`):** View high-contrast turn banner, toggle compass mode (`Heading-Up` vs `North-Up`), click 1-Tap Quick Mark Obstacle, toggle Voice Guidance, or tap End Trip (triggers confirmation modal).
   * **Global Emergency SOS (`SCR-08`):** Click **"🚨 طوارئ SOS"** in the top header on any screen to open the dedicated SOS screen. Click "SEND EMERGENCY ALERT NOW" to inspect honest feedback messaging (Online API vs SMS fallback).
   * **AI Visual Assistant (OCR):** Click the camera card on Home to test simulated OCR capture, low-confidence safety banners, and Text-to-Speech controls.

---

## 🎨 Design System Parameters Used
* **Primary Dark Blue:** `#0F2C59`
* **Teal Accent:** `#005B60`
* **Light Background:** `#F8F9FA`
* **Emergency Red:** `#C5221F`
* **Verified Green:** `#1B7B3A` / `#E6F4EA`
* **Community Amber:** `#9C5200` / `#FEF7E0`
* **Arabic Typography:** Cairo
* **English Typography:** Inter
* **Touch Targets:** Minimum 48×48px across all chips, controls, and navigation buttons.
