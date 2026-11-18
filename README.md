# GardenBooks

A garden journal that maps every plant's growth week by week: track what you planted, see each stage on a timeline, browse a library of crops (with their genetics and how to save seed), and add your own plants with photos for each stage. Timings are tuned for Malaysia's warm, wet climate.

**Open it:** https://heptadecimall.github.io/garden-books/

## Install on your phone

- **iPhone (Safari):** open the link → Share → **Add to Home Screen**. It opens full screen with its own icon and works offline after the first visit.
- **Android (Chrome):** open the link → menu ⋮ → **Install app**. Or install the APK built from `android-app/`.

Your plants are saved on the device only. Use **Settings → Save backup** to keep a copy, and **Restore backup** to bring it back.

## Project layout

| Path | What it is |
| --- | --- |
| `index.html` | The whole app (HTML, CSS and JavaScript in one file) |
| `sw.js` | Offline cache. Bump `VERSION` whenever you change the app so phones pick up the update |
| `manifest.webmanifest`, `icons/` | Install name, colours and icons |
| `fonts/` | Newsreader, bundled so the app works offline |
| `android-app/` | Capacitor project that wraps the web app as an Android APK |

## Build the Android APK

Needs Node 18+, JDK 21 and the Android SDK (platform 35).

```bash
cd android-app
npm install
./sync-web.sh
cd android && ./gradlew assembleRelease
```

The APK lands in `android-app/android/app/build/outputs/apk/release/`. To sign it with your key, create `android-app/keystore.properties` (git-ignored):

```
storeFile=/absolute/path/to/gardenbooks-release.jks
storePassword=...
keyAlias=gardenbooks
keyPassword=...
```

Without that file the release build is unsigned. Keep the keystore safe and out of the repo: Android only installs updates signed with the same key.
