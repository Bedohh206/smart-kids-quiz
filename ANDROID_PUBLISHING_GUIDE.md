# Smart Kids Quiz - Android Publishing Guide

## ✅ Completed
- [x] Capacitor setup complete
- [x] Android project created at `android/`
- [x] Web assets synced to Android

## 📋 Next Steps

### Step 1: Install Required Tools
You need Java JDK and Android SDK. Options:

#### Option A: Use Android Studio (Recommended)
1. Download Android Studio: https://developer.android.com/studio
2. Install it (includes Java JDK + Android SDK)
3. Open `android/` folder in Android Studio after installation

#### Option B: Manual Setup
1. Install Java JDK 17+: https://www.oracle.com/java/technologies/downloads/
2. Install Android SDK Command-line tools: https://developer.android.com/studio/command-line/sdkmanager
3. Set `ANDROID_HOME` environment variable to your SDK location

### Step 2: Generate Signing Key
Run this ONCE to create your signing key (DO NOT lose this file):

```powershell
cd C:\Users\Admin\OneDrive\Documents\SMART KIDS QUIZ\android\app
keytool -genkey -v -keystore smart-kids-quiz.keystore -keyalg RSA -keysize 2048 -validity 10000 -alias smartquiz
```

**When prompted:**
- Password: Create a strong password (e.g., `SmartKids@2024!`) - **SAVE THIS**
- First/Last Name: Your name
- Organization: Smart Kids Quiz
- City: Your city
- State/Province: Your state
- Country Code: Your country code (e.g., US)
- Certificate fingerprint will appear - copy this

**Important:** This creates `smart-kids-quiz.keystore` - keep it safe. You'll need it for updates.

### Step 3: Configure Gradle for Release Build
Edit `android/app/build.gradle` and add signing config:

```gradle
// Add this inside android { } block
signingConfigs {
    release {
        storeFile file('smart-kids-quiz.keystore')
        storePassword 'YOUR_PASSWORD_HERE'
        keyAlias 'smartquiz'
        keyPassword 'YOUR_PASSWORD_HERE'
    }
}

buildTypes {
    release {
        signingConfig signingConfigs.release
        minifyEnabled true
        shrinkResources true
        proguardFiles getDefaultProguardFile('proguard-android-optimize.txt'), 'proguard-rules.pro'
    }
}
```

### Step 4: Build Release AAB
```powershell
cd C:\Users\Admin\OneDrive\Documents\SMART KIDS QUIZ\android
./gradlew bundleRelease
```

This creates: `app/build/outputs/bundle/release/app-release.aab`

OR build APK:
```powershell
./gradlew assembleRelease
```

This creates: `app/build/outputs/apk/release/app-release.apk`

**Note:** AAB is required for Google Play (APK is optional for side-loading)

### Step 5: Google Play Developer Account
1. Go to: https://play.google.com/console
2. Pay $25 registration fee (one-time)
3. Complete business info and content rating questionnaire
4. Accept agreements

### Step 6: Create App Listing
1. Click "Create App"
2. Fill in:
   - **App Name:** Smart Kids Quiz
   - **Default Language:** English
   - **App Category:** Education
   - **Type:** Application

### Step 7: Add App Screenshots & Graphics
Required for store listing (minimum 2 screenshots):

**Phone Screenshots (required):**
- Size: 1080 x 1920 pixels
- Format: JPEG or 24-bit PNG
- Create 2-8 screenshots showing:
  - Quiz menu with continents/subjects
  - Quiz gameplay
  - Word Scramble feature
  - Leaderboard/Mini-games

**App Icon:**
- Size: 512 x 512 pixels
- Format: JPEG or PNG
- Make it colorful and eye-catching

**Feature Graphic:**
- Size: 1024 x 500 pixels
- Showcases your app's best feature

**Short Description (80 chars max):**
```
Interactive educational quiz app for kids with AI lessons
```

**Full Description (4000 chars max):**
```
Smart Kids Quiz makes learning fun! An interactive educational platform featuring:

🌍 World Geography - Learn about continents and regions
📚 9 Subjects - English, Math, Science, Biology, Chemistry, History, Health, Computer Science, Geography
🤖 AI Lessons - Intelligent explanations powered by AI
🎮 Mini-Games - Flash Match memory game and Quick Tap reaction challenge
🏆 Leaderboard - Track your high scores
🎨 Word Scramble - Unscramble words in multiple languages
🎵 Interactive Audio - Hear question pronunciations
🌐 Multi-Language - Support for 13+ languages

Perfect for students of all ages wanting to learn while having fun!
```

### Step 8: Content Rating
Complete the IARC content rating questionnaire (automatic for Education category)

### Step 9: Upload & Release
1. Go to "Build" section in Google Play Console
2. Upload the `app-release.aab` file
3. Review release notes
4. Complete pricing & distribution settings
5. Click "Review Release"
6. Click "Start Rollout to Production"

### Step 10: Approval & Launch
- Google Play reviews your app (typically 24-48 hours)
- Once approved, it's live on Google Play Store!
- Download link: https://play.google.com/store/apps/details?id=com.smartkidsquiz.app

---

## 📁 Important Files
- **Signing Key:** `android/app/smart-kids-quiz.keystore` (BACKUP THIS)
- **Release AAB:** `android/app/build/outputs/bundle/release/app-release.aab`
- **Release APK:** `android/app/build/outputs/apk/release/app-release.apk`

## 🔐 Security Reminders
- Keep `smart-kids-quiz.keystore` safe - you need it for all future updates
- Don't share your keystore file or passwords
- Each app version must have a higher version code in `build.gradle`

## 📞 Troubleshooting
- **Build fails:** Make sure Android SDK is installed and ANDROID_HOME is set
- **Signing error:** Verify keystore file path and passwords
- **APK too large:** Enable ProGuard/R8 minification in build.gradle

## Next Commands
Once you have Java/Android SDK installed:

```powershell
cd C:\Users\Admin\OneDrive\Documents\SMART KIDS QUIZ\android
./gradlew bundleRelease
```

Then upload `app-release.aab` to Google Play Console!
