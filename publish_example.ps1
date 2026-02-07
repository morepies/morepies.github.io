param(
  [string]$RepoUrl = "https://github.com/morepies/morepies.github.io.git"
)

Set-Location $PSScriptRoot

if (-not (Test-Path ".git")) {
  git init -b main
  git remote add origin $RepoUrl
}

git add .
$stamp = Get-Date -Format "yyyy-MM-dd HH:mm"
git commit -m "Update Flow PayPal site $stamp" 2>$null
if ($LASTEXITCODE -ne 0) {
  Write-Output "No new changes to commit."
}

git push -u origin main
