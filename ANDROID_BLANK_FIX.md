# ANDROID BLANK APP - QUICK FIX

## THE PROBLEM
App shows blank screen after uploading to Play Console because web assets (HTML, JS, CSS) weren't copied into the Android app.

## THE ROOT CAUSE  
After building with `npm run build`, the files are in `dist/` but Android needs them in `android/app/src/main/assets/public/`. This copy step was missing.

## THE FIX

### What I Changed:
1. **capacitor.config.json** - Changed `webDir` from "build" to "dist" and added `"androidScheme": "https"`
2. **package.json** - Added `build:android` script that builds AND syncs
3. **vite.config.js** - Added custom cache dir to avoid OneDrive issues

### How to Build for Android Going Forward:

```powershell
# METHOD 1: Automated (if working)
.\build-android.ps1

# METHOD 2: Manual steps
npm run build
npx cap copy android  # or: npx cap sync android
# Then open Android Studio and build AAB

# METHOD 3: If you have permission issues (OneDrive)
# Use the existing dist/ folder (it's already built):
npx cap copy android
# OR manually copy dist/ contents to:
# android/app/src/main/assets/public/
```

## IMPORTANT NOTES

**1. OneDrive + Spaces Issue:**
Your folder is in OneDrive with spaces ("SMART KIDS QUIZ"). This causes:
- Vite build errors with temp files
- Permission issues when syncing

**Workaround:** The `dist/` folder already has a recent build. Just sync it:
```powershell
npx cap copy android
```

**2. Before Building AAB:**
1. Close Android Studio (important for file permissions)
2. Run sync command
3. Verify files copied: `ls android\app\src\main\assets\public\`
4. Open Android Studio
5. Build > Generate Signed Bundle

**3. Version Updates:**
Don't forget to update in `android/app/build.gradle`:
```gradle
versionCode 2  // increment this
versionName "1.1"  // update this
```

## Quick Checklist

- [ ] Code changes made
- [ ] `dist/` folder has latest build (or run `npm run build`)
- [ ] Android Studio is CLOSED
- [ ] Run `npx cap copy android`
- [ ] Verify: `android/app/src/main/assets/public/index.html` exists
- [ ] Open Android Studio
- [ ] Update versionCode in build.gradle
- [ ] Generate Signed Bundle (.aab)
- [ ] Upload to Play Console

## Why This Fixes the Blank Screen

Before: Android app → looks for web files → not there → blank screen
After: Android app → looks for web files → they're in assets/public/ → works!

The key is: **ALWAYS sync after building** with `npx cap copy android` or `npx cap sync android`
