# Build Android App Bundle (.aab) with proper Java setup
Write-Host "Building Smart Kids Quiz .aab..." -ForegroundColor Cyan

# Set Java Home to Android Studio's JBR
$env:JAVA_HOME = "C:\Program Files\Android\Android Studio\jbr"
$env:PATH = "$env:JAVA_HOME\bin;$env:PATH"

Write-Host "✓ Java Home set to: $env:JAVA_HOME" -ForegroundColor Green

# Optional: Set keystore passwords (replace with your actual passwords)
# Uncomment and set these if you want to avoid manual entry:
# $env:KEYSTORE_PASSWORD = "your_keystore_password"
# $env:KEY_PASSWORD = "your_key_password"

# Navigate to android directory
$androidDir = Split-Path -Parent $PSScriptRoot
if ($PSScriptRoot -match "android$") {
    $androidDir = $PSScriptRoot
}
Set-Location $androidDir

Write-Host "`nStarting Gradle build..." -ForegroundColor Yellow
Write-Host "This may take 2-5 minutes on first run...`n" -ForegroundColor Gray

# Build the bundle
& .\gradlew bundleRelease

if ($LASTEXITCODE -eq 0) {
    Write-Host "`n SUCCESS! BUILD COMPLETED" -ForegroundColor Green
    Write-Host "`nYour .aab file is ready at:" -ForegroundColor Cyan
    Write-Host "   app\build\outputs\bundle\release\app-release.aab`n" -ForegroundColor White
    
    $aabPath = "app\build\outputs\bundle\release\app-release.aab"
    if (Test-Path $aabPath) {
        $size = (Get-Item $aabPath).Length / 1MB
        Write-Host "   Size: $([math]::Round($size, 2)) MB" -ForegroundColor Gray
    }
}
else {
    Write-Host "`nBUILD FAILED" -ForegroundColor Red
    Write-Host "Check the error messages above for details.`n" -ForegroundColor Yellow
}
