# Create Android Release Keystore
Write-Host "Creating Android keystore for Smart Kids Quiz..." -ForegroundColor Cyan

$keystorePath = "$PSScriptRoot\android\smart-kids-quiz.keystore"
$keytool = "C:\Program Files\Android\Android Studio\jbr\bin\keytool.exe"

Write-Host "`nKeystore will be created at: $keystorePath" -ForegroundColor Yellow
Write-Host "`nYou'll need to provide:" -ForegroundColor Yellow
Write-Host "- Keystore password (remember this!)" -ForegroundColor White
Write-Host "- Key alias: smartkidsquiz" -ForegroundColor White
Write-Host "- Key password (remember this!)" -ForegroundColor White
Write-Host "- Your name and organization details" -ForegroundColor White

& $keytool -genkey -v -keystore $keystorePath -alias smartkidsquiz -keyalg RSA -keysize 2048 -validity 10000

Write-Host "`n✅ Keystore created! KEEP THIS FILE AND PASSWORDS SAFE!" -ForegroundColor Green
Write-Host "You'll need them for every app update." -ForegroundColor Yellow
