$ErrorActionPreference = "Stop"

$repoUrl = "https://github.com/leoddmusic/prayer-peticiones.git"
$feature = "feature/registrar-peticion"
$projectDir = Split-Path -Parent $MyInvocation.MyCommand.Path

Set-Location $projectDir

Write-Host "1) Verificando Git..."
git --version

Write-Host "2) Inicializando repositorio local..."
if (-not (Test-Path ".git")) {
    git init -b main
}
git remote remove origin 2>$null
git remote add origin $repoUrl

Write-Host "3) Commit inicial en main..."
git add README.md .gitignore package.json src .github
git commit -m "Inicializa estructura del módulo PRAYER"
git push -u origin main

Write-Host "4) Creando rama de trabajo..."
git checkout -b $feature

Add-Content ".\README.md" "`n## Evidencia del flujo`nEsta rama demuestra el flujo de trabajo con GitHub Flow para el módulo de peticiones."
git add README.md
git commit -m "Documenta flujo de trabajo del módulo"
git push -u origin $feature

Write-Host ""
Write-Host "LISTO: main y la rama '$feature' fueron subidas correctamente."
Write-Host "Siguiente paso: abrir GitHub y crear un Pull Request de '$feature' hacia 'main'."
