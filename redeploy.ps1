# Quick redeploy script after adding environment variables
Write-Host "Redeploying Smart Kids Quiz..." -ForegroundColor Cyan
Set-Location "c:\Users\Admin\OneDrive\Documents\SMART KIDS QUIZ"
vercel.cmd --prod --yes
Write-Host "`nRedeployment complete!" -ForegroundColor Green
