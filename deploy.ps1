# Deploy pre-built dist folder to Vercel
Write-Host "Deploying Smart Kids Quiz to Vercel..." -ForegroundColor Cyan

# Change to dist directory
Set-Location -Path "dist"

# Run vercel deployment
$env:CI = "1"
vercel.cmd --prod --confirm

Write-Host "`nDeployment complete!" -ForegroundColor Green
