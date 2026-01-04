# Build .aab Using Android Studio (Recommended)

## Why Use Android Studio?
Command-line builds are failing due to Windows file locking issues (likely OneDrive sync). Android Studio handles this better.

## Step-by-Step Instructions:

### 1. Open Project
- Launch **Android Studio**
- Click **"Open"** (or File → Open)
- Navigate to: `C:\Users\Admin\OneDrive\Documents\SMART KIDS QUIZ\android`
- Click **"OK"**
- Wait for Gradle sync to complete (progress bar at bottom)

### 2. Generate Signed Bundle
- Menu: **Build → Generate Signed Bundle / APK**
- Select: **"Android App Bundle"**
- Click: **"Next"**

### 3. Configure Keystore
- **Key store path:** Click **"Choose existing..."**
  - Browse to: `C:\Users\Admin\OneDrive\Documents\SMART KIDS QUIZ\smart-kids-quiz.keystore`
- **Key store password:** [Enter your password]
- **Key alias:** `smartkidsquiz`
- **Key password:** [Enter your password]
- ✅ Check **"Remember passwords"** (optional, but convenient)
- Click: **"Next"**

### 4. Build Configuration
- **Destination folder:** Keep default or choose custom location
- **Build variant:** Select **"release"**
- Click: **"Finish"**

### 5. Wait for Build
- Build takes 2-5 minutes
- Progress shown in bottom status bar
- Watch for "BUILD SUCCESSFUL" or "BUILD FAILED"

### 6. Locate Your .aab
When build completes, click the **"locate"** link, or find it at:
```
android\app\build\outputs\bundle\release\app-release.aab
```

---

## If Gradle Sync Fails in Android Studio:

### Try these in order:

**1. Invalidate Caches**
- File → Invalidate Caches → Invalidate and Restart
- Wait for restart and re-sync

**2. Clean Project**
- Build → Clean Project
- Wait for completion
- Build → Rebuild Project

**3. Update Gradle**
- When prompted, accept Gradle/plugin updates
- Or: File → Project Structure → Project → Update Gradle version

**4. Check Java SDK**
- File → Project Structure → SDK Location
- Should point to: `C:\Program Files\Android\Android Studio\jbr`

---

## Troubleshooting:

### "Keystore password incorrect"
- Verify password (case-sensitive)
- Try entering manually without copy-paste

### "Unable to find keystore"
- Verify file exists: `smart-kids-quiz.keystore` in project root
- Use absolute path if needed

### "Gradle sync failed"
- Check internet connection
- Disable VPN/proxy if active
- Check Windows Firewall isn't blocking Gradle

### OneDrive Sync Issues
If OneDrive is causing locks:
1. Right-click OneDrive icon (system tray)
2. Pause syncing → 2 hours
3. Try build again

---

## Success Indicators:
✅ "Build Successful" message appears
✅ File exists: `app-release.aab` (~10-30 MB)
✅ No error dialogs

---

## Next: Upload to Google Play

Once you have `app-release.aab`:

1. Go to: https://play.google.com/console
2. Select **Smart Kids Quiz**
3. **Production → Create new release**
4. Upload `app-release.aab`
5. Add release notes
6. **Save → Review → Start rollout**

Review takes 1-3 days. You'll receive email updates.
