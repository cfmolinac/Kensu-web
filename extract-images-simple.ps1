$htmlPath = "c:\Users\crist\OneDrive\Documentos\emprendimiento\Kensu\Web\Home Kensu.html"
$outputDir = "c:\Users\crist\workspaces\kensu-web\public\assets\images"

Write-Host "Extrayendo imagenes del HTML..." -ForegroundColor Cyan

if (-not (Test-Path $htmlPath)) {
    Write-Host "No se encontro el archivo HTML" -ForegroundColor Red
    exit
}

$html = Get-Content -Path $htmlPath -Raw -Encoding UTF8

# Buscar imagenes base64
$regex = [regex]'src="data:image/(\w+);base64,([A-Za-z0-9+/=]+)"'
$matches = $regex.Matches($html)

Write-Host "Encontradas $($matches.Count) imagenes" -ForegroundColor Green

$count = 0
foreach ($match in $matches) {
    $count++
    $type = $match.Groups[1].Value
    $base64 = $match.Groups[2].Value
    
    $fileName = "image-$count.$type"
    $filePath = Join-Path $outputDir $fileName
    
    try {
        $bytes = [Convert]::FromBase64String($base64)
        [IO.File]::WriteAllBytes($filePath, $bytes)
        $sizeKB = [math]::Round($bytes.Length/1KB, 2)
        Write-Host "  Guardada: $fileName ($sizeKB KB)" -ForegroundColor Green
    }
    catch {
        Write-Host "  Error: $fileName" -ForegroundColor Red
    }
}

Write-Host "`nProceso completado!" -ForegroundColor Cyan
Write-Host "Imagenes guardadas en: $outputDir" -ForegroundColor Yellow
