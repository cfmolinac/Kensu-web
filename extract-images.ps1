# Script para extraer imágenes del HTML original
# Si las imágenes están en base64 o en otra ubicación

$htmlPath = "c:\Users\crist\OneDrive\Documentos\emprendimiento\Kensu\Web\Home Kensu.html"
$outputDir = "c:\Users\crist\workspaces\kensu-web\public\assets\images"

Write-Host "🔍 Buscando imágenes en HTML original..." -ForegroundColor Cyan

if (Test-Path $htmlPath) {
    $htmlContent = Get-Content -Path $htmlPath -Raw
    
    # Buscar referencias a imágenes
    $imgPattern = '<img[^>]+src=["\']([^"\']+)["\']'
    $matches = [regex]::Matches($htmlContent, $imgPattern)
    
    Write-Host "`n📸 Imágenes encontradas:" -ForegroundColor Green
    foreach ($match in $matches) {
        $imgSrc = $match.Groups[1].Value
        Write-Host "  - $imgSrc" -ForegroundColor Yellow
    }
    
    Write-Host "`n💡 Instrucciones:" -ForegroundColor Cyan
    Write-Host "1. Revisa las rutas de imágenes mostradas arriba"
    Write-Host "2. Si las imágenes están en la misma carpeta que el HTML:"
    Write-Host "   - Cópialas manualmente a $outputDir"
    Write-Host "3. Si están en base64 (data:image/...):"
    Write-Host "   - Las imágenes están incrustadas en el HTML"
    Write-Host "   - Usa un extractor online o este script avanzado"
    
} else {
    Write-Host "❌ No se encontró el archivo HTML en: $htmlPath" -ForegroundColor Red
    Write-Host "`n💡 Opciones:" -ForegroundColor Yellow
    Write-Host "1. Verifica la ruta del archivo HTML"
    Write-Host "2. O copia las imágenes manualmente desde la carpeta Web a:"
    Write-Host "   $outputDir"
}

Write-Host "`n✅ Revisa IMAGES_NEEDED.md para más detalles" -ForegroundColor Green
