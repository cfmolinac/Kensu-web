# Script para extraer imágenes Base64 del HTML y convertirlas a archivos
param(
    [string]$htmlPath = "c:\Users\crist\OneDrive\Documentos\emprendimiento\Kensu\Web\Home Kensu.html",
    [string]$outputDir = "c:\Users\crist\workspaces\kensu-web\public\assets\images"
)

Write-Host "🔍 Extrayendo imágenes del HTML..." -ForegroundColor Cyan

if (-not (Test-Path $htmlPath)) {
    Write-Host "❌ No se encontró el archivo HTML en: $htmlPath" -ForegroundColor Red
    exit
}

# Crear directorio de salida si no existe
if (-not (Test-Path $outputDir)) {
    New-Item -ItemType Directory -Path $outputDir -Force | Out-Null
}

# Leer contenido HTML
$html = Get-Content -Path $htmlPath -Raw -Encoding UTF8

# Buscar todas las imágenes base64
$pattern = 'src="data:image/([^;]+);base64,([^"]+)"'
$matches = [regex]::Matches($html, $pattern)

Write-Host "📸 Encontradas $($matches.Count) imágenes en base64" -ForegroundColor Green

$imageCount = 0
foreach ($match in $matches) {
    $imageCount++
    $imageType = $match.Groups[1].Value
    $base64Data = $match.Groups[2].Value
    
    # Nombre del archivo
    $fileName = "extracted-image-$imageCount.$imageType"
    $outputPath = Join-Path $outputDir $fileName
    
    try {
        # Convertir base64 a bytes
        $imageBytes = [Convert]::FromBase64String($base64Data)
        
        # Guardar archivo
        [IO.File]::WriteAllBytes($outputPath, $imageBytes)
        
        Write-Host "  ✅ Guardada: $fileName ($([math]::Round($imageBytes.Length/1KB, 2)) KB)" -ForegroundColor Green
    }
    catch {
        Write-Host "  ❌ Error al procesar imagen $imageCount : $_" -ForegroundColor Red
    }
}

Write-Host "`n✨ Proceso completado!" -ForegroundColor Cyan
Write-Host "📁 Imágenes guardadas en: $outputDir" -ForegroundColor Yellow
Write-Host "`n💡 Siguiente paso:" -ForegroundColor Cyan
Write-Host "   Revisa las imágenes extraídas y renómbralas según necesites:" -ForegroundColor White
Write-Host "   - Logo → logo/kensu-logo.png" -ForegroundColor White
Write-Host "   - Phone mockup → hero/phone-mockup.png" -ForegroundColor White
Write-Host "   - Screenshots → screenshots/app-benefits.png" -ForegroundColor White
