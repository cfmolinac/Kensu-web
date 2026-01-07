# Imágenes Requeridas para Kensu Web

## 📋 Lista de Imágenes a Agregar

### 1. Logo de Kensu
**Ubicación**: `/public/assets/images/logo/kensu-logo.png`
- **Tamaño recomendado**: 300x180px (ratio 5:3)
- **Formato**: PNG con fondo transparente
- **Uso**: Header navigation y Footer
- **Descripción**: Logo principal de Kensu (el que vi en el HTML original)

### 2. Phone Mockup (Hero)
**Ubicación**: `/public/assets/images/hero/phone-mockup.png`
- **Tamaño recomendado**: 800x1600px
- **Formato**: PNG con fondo transparente
- **Uso**: Hero section (pantalla principal)
- **Descripción**: Mockup de teléfono mostrando la app Kensu

### 3. App Screenshots (Benefits Section)
**Ubicación**: `/public/assets/images/screenshots/app-benefits.png`
- **Tamaño recomendado**: 1000x1200px
- **Formato**: PNG o WebP
- **Uso**: Benefits section
- **Descripción**: Screenshots de las principales funcionalidades

## 🔧 Cómo Agregar las Imágenes

### Opción 1: Copiar manualmente
1. Ve a `c:\Users\crist\OneDrive\Documentos\emprendimiento\Kensu\Web\`
2. Encuentra las imágenes que usaste en el HTML original
3. Cópialas a las rutas indicadas arriba

### Opción 2: Usar PowerShell
```powershell
# Copiar logo
Copy-Item "c:\Users\crist\OneDrive\Documentos\emprendimiento\Kensu\Web\IMG-20251124-WA0015.jpg" `
  -Destination "c:\Users\crist\workspaces\kensu-web\public\assets\images\logo\kensu-logo.png"

# Repetir para otras imágenes...
```

### Opción 3: Extraer del HTML original
Si las imágenes están en base64 en el HTML:
```powershell
# Ejecutar script de extracción (ver extract-images.ps1)
cd c:\Users\crist\workspaces\kensu-web
.\extract-images.ps1
```

## ✅ Verificación

Después de agregar las imágenes:
1. Inicia el servidor: `npm run dev`
2. Abre `http://localhost:3000`
3. Verifica que todas las imágenes se muestren correctamente

## 📝 Imágenes Opcionales (Para Futuro)

- **Favicon**: `/public/favicon.ico`
- **Open Graph**: `/public/og-image.png` (1200x630px para redes sociales)
- **Feature Icons**: Actualmente usando Font Awesome (no requiere imágenes)

## 🎨 Optimización

Antes de subir a producción:
```bash
# Convertir a WebP para mejor performance
npm install --save-dev sharp
```

Luego usa Next.js Image component que optimiza automáticamente.
