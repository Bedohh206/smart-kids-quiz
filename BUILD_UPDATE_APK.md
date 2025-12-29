# Build Updated Android APK for Play Store

## ✅ What's Ready:
- Version bumped to 1.1 (versionCode: 2)
- Latest web assets synced to Android project
- All algebra and quiz improvements included

## 🏗️ Build the APK using Android Studio:

### Step 1: Open in Android Studio
1. Open **Android Studio**
2. Click **"Open"**
3. Navigate to: `C:\Users\Admin\OneDrive\Documents\SMART KIDS QUIZ\android`
4. Click **"OK"**
5. Wait for Gradle sync to complete

### Step 2: Build Signed Release APK
1. In Android Studio menu: **Build → Generate Signed Bundle / APK**
2. Select **"APK"**
3. Click **"Next"**

### Step 3: Use Your Keystore
1. **Key store path:** Browse to `smart-kids-quiz.keystore` (in your project root)
2. **Key store password:** (the password you set when creating it)
3. **Key alias:** `smart-kids-quiz`
4. **Key password:** (same as keystore password)
5. Click **"Next"**

### Step 4: Build Configuration
1. **Destination folder:** Keep default or choose where to save
2. **Build Variants:** Select **"release"**
3. ✅ Check **"V1 (Jar Signature)"**
4. ✅ Check **"V2 (Full APK Signature)"**
5. Click **"Finish"**

### Step 5: Wait for Build
- Build takes 2-5 minutes
- You'll see progress in bottom status bar
- When done, you'll see: "locate" link to find APK

### Step 6: Find Your APK
APK location: `android/app/release/app-release.apk`

---

## 📤 Upload to Google Play Console:

1. Go to: https://play.google.com/console
2. Select your **Smart Kids Quiz** app
3. Go to **"Production"** → **"Create new release"**
4. Upload your **app-release.apk**
5. **Release notes** (example):
   ```
   Version 1.1 - What's New:
   • Added Algebra mode with Kids and Advanced levels
   • Improved Math quiz with age-appropriate questions
   • Enhanced Geometry questions
   • Bug fixes and performance improvements
   ```
6. Click **"Save"** → **"Review release"** → **"Start rollout to Production"**

---

## ⏰ Review Timeline:
- Review typically takes 1-3 days
- You'll receive email updates
- Users will see update within 24 hours after approval

---

## 🔧 Troubleshooting:

**"Duplicate key" error:**
- Your keystore was already used for version 1.0
- Just make sure you're using the same keystore file

**"minSdkVersion" error:**
- Ignore - this is just a warning about target devices

**Build fails:**
- Make sure Android Studio is updated
- Try: File → Invalidate Caches → Invalidate and Restart

**Can't find keystore:**
- It's in your project root: `smart-kids-quiz.keystore`
- If lost, you cannot update the existing app (must create new listing)

---

## 📱 After Upload:
Your current Play Store listing will be updated with version 1.1 once approved!

Users who installed version 1.0 will automatically get the update.
