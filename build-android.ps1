#!/usr/bin/env pwsh
# Build and sync for Android

Write-Host "Building Smart Kids Quiz for Android..." -ForegroundColor Cyan

# Step 1: Build the web app
Write-Host "`n[1/3] Building web app with Vite..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "Build failed!" -ForegroundColor Red
    exit 1
}

# Step 2: Sync to Android
Write-Host "`n[2/3] Syncing to Android..." -ForegroundColor Yellow
npx cap sync android

if ($LASTEXITCODE -ne 0) {
    Write-Host "Sync failed!" -ForegroundColor Red
    exit 1
}

# Step 3: Open in Android Studio
Write-Host "`n[3/3] Opening Android Studio..." -ForegroundColor Yellow
npx cap open android

Write-Host "`nDone! Android Studio should open now." -ForegroundColor Green
Write-Host "In Android Studio:" -ForegroundColor Cyan
Write-Host "  1. Wait for Gradle sync to complete" -ForegroundColor White
Write-Host "  2. Build > Generate Signed Bundle/APK" -ForegroundColor White
Write-Host "  3. Select 'Android App Bundle' (.aab)" -ForegroundColor White
Write-Host "  4. Use your keystore and upload to Play Console" -ForegroundColor White
