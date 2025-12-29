# Remove .env from git history
Write-Host "Cleaning .env from git history..." -ForegroundColor Yellow

# Use git filter-repo to remove .env from all commits
git filter-branch --force --index-filter "git rm --cached --ignore-unmatch .env" --prune-empty --tag-name-filter cat -- --all

Write-Host "`nHistory cleaned! Now force push:" -ForegroundColor Green
Write-Host "git push --force-with-lease" -ForegroundColor Cyan
