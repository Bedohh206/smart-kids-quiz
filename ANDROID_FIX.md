# Android Build Quick Fix Guide

## Problem: Blank App After Upload

The app appears blank because the web assets weren't properly synced to Android.

## IMPORTANT: OneDrive + Vite Issue

If your project is in OneDrive with spaces in the path (like "SMART KIDS QUIZ"), Vite may have build issues. 

### Workaround Options:

#### Option A: Build Outside OneDrive (Recommended)
1. Copy project to `C:\temp\smart-kids-quiz` (no spaces, not in OneDrive)
2. Build there
3. Copy back

#### Option B: Use Vercel Build
1. Push changes to GitHub
2. Let Vercel build (it works fine)
3. Download build artifacts
4. Sync to Android

#### Option C: Use Pre-built dist/
If `dist/` folder already exists with your latest changes:

```powershell
# Close Android Studio first!

# Sync existing build
npx cap copy android

# If that fails, manual copy:
xcopy /E /I /Y dist android\app\src\main\assets\public

# Then open Android Studio
npx cap open android
```

## Solution (When Build Works)

### Step 1: Build the Web App
```powershell
npm run build
```

### Step 2: Sync to Android (CRITICAL STEP)
```powershell
npx cap sync android
```

### Step 3: Open Android Studio
```powershell
npx cap open android
```

### Step 4: In Android Studio
1. Wait for Gradle sync to complete
2. Build > Generate Signed Bundle/APK
3. Choose "Android App Bundle" (.aab)
4. Sign with your keystore
5. Upload to Play Console

## Quick Command (When Working)
```powershell
npm run build:android
```

## Why Was It Blank?

### Root Causes Fixed:
1. ✅ **Wrong directory**: Changed `capacitor.config.json` from `build/` to `dist/`
2. ✅ **Missing androidScheme**: Added `"androidScheme": "https"` for proper WebView loading
3. ✅ **Missing sync step**: Added `build:android` script that includes sync

### The Key Issue:
After building with Vite, you MUST run `npx cap sync android` to copy the web assets into the Android project. This copies:
- `dist/` → `android/app/src/main/assets/public/`

## Manual Sync (If npx cap sync fails)

```powershell
# 1. Make sure Android Studio is closed

# 2. Delete old assets
Remove-Item -Recurse -Force android\app\src\main\assets\public -ErrorAction SilentlyContinue

# 3. Copy new build
xcopy /E /I /Y dist android\app\src\main\assets\public

# 4. Open Android Studio
# Start Android Studio manually and open the android/ folder
```

## Verify Assets Copied

```powershell
# Check that files exist in Android
ls android\app\src\main\assets\public\

# Should see: index.html, assets/, sounds/, etc.
```

## Best Practice: Build on Local Drive

To avoid OneDrive sync issues:

```powershell
# 1. Copy project to local drive
xcopy /E /I "C:\Users\Admin\OneDrive\Documents\SMART KIDS QUIZ" "C:\temp\smart-kids-quiz"

# 2. Build there
cd C:\temp\smart-kids-quiz
npm run build
npx cap sync android

# 3. Copy Android folder back
xcopy /E /I /Y C:\temp\smart-kids-quiz\android "C:\Users\Admin\OneDrive\Documents\SMART KIDS QUIZ\android"
```

## Files Modified
- ✅ `capacitor.config.json` - Changed webDir to "dist", added androidScheme  
- ✅ `package.json` - Added build:android, sync:android, open:android scripts
- ✅ `vite.config.js` - Added custom cacheDir to avoid temp file issues
- ✅ `build-android.ps1` - New automated build script

## Test on Device/Emulator

```powershell
# After sync, test locally before building AAB
npx cap run android
```

## Troubleshooting

### "Cannot sync - permission denied"
- Close Android Studio completely
- Close any file explorers viewing the android/ folder
- Try manual copy method above

### "App still blank after sync"
- Check `android/app/src/main/assets/public/index.html` exists
- Verify files were copied (should be ~20MB+)
- Clean build in Android Studio: Build > Clean Project

### "Old version showing in app"
1. Update `android/app/build.gradle`:
   - Increment `versionCode`
   - Update `versionName`
2. In Android Studio: Build > Clean Project
3. Build > Rebuild Project
4. Then generate AAB

## Complete Workflow for Updates

```powershell
# 1. Make code changes in src/

# 2. Test locally first
npm run dev

# 3. Build (or use existing dist/ if recent)
npm run build  # or skip if dist/ is current

# 4. Sync to Android (close Android Studio first!)
npx cap sync android
# OR manual: xcopy /E /I /Y dist android\app\src\main\assets\public

# 5. Open Android Studio
# Open manually: File > Open > select android/ folder

# 6. In Android Studio:
#    a. Update version in build.gradle
#    b. Build > Generate Signed Bundle
#    c. Upload to Play Console
```
