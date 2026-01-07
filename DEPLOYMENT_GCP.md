# Guía de Despliegue Kensu Web - GCP + Git

## 📋 Requisitos Previos
- Cuenta de Google Cloud Platform (GCP)
- GitHub configurado (o GitLab/Bitbucket)
- Node.js 20+ en servidor
- PM2 para gestión de procesos
- Nginx para reverse proxy

---

## 🔧 PASO 1: Configurar Git y GitHub

### 1.1 Inicializar Git local (si no existe)
```powershell
cd C:\Users\crist\workspaces\kensu-web
git init
git add .
git commit -m "Initial commit: Kensu landing page"
```

### 1.2 Crear repositorio en GitHub
1. Ve a https://github.com/new
2. Nombre: `kensu-web`
3. Descripción: "Kensu - Landing Page Oficial (Next.js)"
4. Privado o Público según prefieras
5. NO inicialices con README (ya tienes código)

### 1.3 Conectar repositorio local con GitHub
```powershell
# Reemplaza TU_USUARIO con tu usuario de GitHub
git remote add origin https://github.com/TU_USUARIO/kensu-web.git
git branch -M main
git push -u origin main
```

---

## ☁️ PASO 2: Crear VM en Google Cloud Platform

### 2.1 Crear instancia VM
```bash
# Opción A: Desde consola web GCP
1. Ve a: https://console.cloud.google.com/compute/instances
2. Click "CREATE INSTANCE"
3. Configuración recomendada:
   - Name: kensu-web-prod
   - Region: us-central1 (o más cercano a usuarios)
   - Machine type: e2-micro (2 vCPU, 1GB RAM) - GRATIS con Free Tier
   - Boot disk: Ubuntu 22.04 LTS (10GB SSD)
   - Firewall: Allow HTTP traffic, Allow HTTPS traffic
   
# Opción B: Desde gcloud CLI (más rápido)
gcloud compute instances create kensu-web-prod \
  --zone=us-central1-a \
  --machine-type=e2-micro \
  --image-family=ubuntu-2204-lts \
  --image-project=ubuntu-os-cloud \
  --boot-disk-size=10GB \
  --boot-disk-type=pd-standard \
  --tags=http-server,https-server
```

### 2.2 Configurar IP estática
```bash
# Crear IP estática
gcloud compute addresses create kensu-web-ip --region=us-central1

# Asignar a la VM
gcloud compute instances add-access-config kensu-web-prod \
  --access-config-name="External NAT" \
  --address=$(gcloud compute addresses describe kensu-web-ip --region=us-central1 --format="get(address)")
```

### 2.3 Configurar reglas de firewall
```bash
# Permitir HTTP (puerto 80)
gcloud compute firewall-rules create allow-http \
  --allow tcp:80 \
  --source-ranges 0.0.0.0/0 \
  --target-tags http-server

# Permitir HTTPS (puerto 443)
gcloud compute firewall-rules create allow-https \
  --allow tcp:443 \
  --source-ranges 0.0.0.0/0 \
  --target-tags https-server

# Permitir SSH (puerto 22)
gcloud compute firewall-rules create allow-ssh \
  --allow tcp:22 \
  --source-ranges 0.0.0.0/0
```

---

## 🖥️ PASO 3: Configurar Servidor (SSH a la VM)

### 3.1 Conectar a la VM
```bash
# Desde PowerShell local
gcloud compute ssh kensu-web-prod --zone=us-central1-a
```

### 3.2 Instalar dependencias en el servidor
```bash
# Actualizar sistema
sudo apt update && sudo apt upgrade -y

# Instalar Node.js 20.x
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Verificar instalación
node --version  # Debería mostrar v20.x
npm --version

# Instalar PM2 (gestor de procesos)
sudo npm install -g pm2

# Instalar Nginx
sudo apt install -y nginx

# Instalar Git
sudo apt install -y git
```

### 3.3 Configurar usuario de despliegue
```bash
# Crear usuario para la app
sudo useradd -m -s /bin/bash kensu
sudo usermod -aG sudo kensu

# Cambiar a usuario kensu
sudo su - kensu

# Configurar Git (usa tus credenciales)
git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"
```

---

## 📦 PASO 4: Desplegar la Aplicación

### 4.1 Clonar repositorio en el servidor
```bash
# Como usuario kensu
cd /home/kensu
git clone https://github.com/TU_USUARIO/kensu-web.git
cd kensu-web
```

### 4.2 Instalar dependencias y hacer build
```bash
npm install --production
npm run build
```

### 4.3 Configurar PM2
```bash
# Crear archivo ecosystem
cat > ecosystem.config.js << 'EOF'
module.exports = {
  apps: [{
    name: 'kensu-web',
    script: 'npm',
    args: 'start',
    cwd: '/home/kensu/kensu-web',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '500M',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }]
}
EOF

# Iniciar aplicación
pm2 start ecosystem.config.js

# Configurar PM2 para reinicio automático
pm2 startup
# EJECUTA EL COMANDO QUE TE MUESTRA PM2

pm2 save
```

---

## 🌐 PASO 5: Configurar Nginx (Reverse Proxy)

### 5.1 Crear configuración de Nginx
```bash
sudo nano /etc/nginx/sites-available/kensu-web
```

Pega esta configuración:
```nginx
server {
    listen 80;
    server_name kensuapp.com www.kensuapp.com;  # Reemplaza con tu dominio

    # Logs
    access_log /var/log/nginx/kensu-web-access.log;
    error_log /var/log/nginx/kensu-web-error.log;

    # Gzip
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/css text/javascript application/javascript application/json;

    # Proxy a Next.js
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    # Cache para assets estáticos
    location /_next/static {
        proxy_pass http://localhost:3000;
        proxy_cache_valid 200 365d;
        add_header Cache-Control "public, max-age=31536000, immutable";
    }

    location /assets {
        proxy_pass http://localhost:3000;
        proxy_cache_valid 200 365d;
        add_header Cache-Control "public, max-age=31536000, immutable";
    }
}
```

### 5.2 Activar sitio y reiniciar Nginx
```bash
# Crear symlink
sudo ln -s /etc/nginx/sites-available/kensu-web /etc/nginx/sites-enabled/

# Verificar configuración
sudo nginx -t

# Reiniciar Nginx
sudo systemctl restart nginx
sudo systemctl enable nginx
```

---

## 🔒 PASO 6: Configurar HTTPS con Let's Encrypt

### 6.1 Instalar Certbot
```bash
sudo apt install -y certbot python3-certbot-nginx
```

### 6.2 Obtener certificado SSL
```bash
# Reemplaza con tu dominio
sudo certbot --nginx -d kensuapp.com -d www.kensuapp.com

# Sigue las instrucciones (ingresa tu email, acepta términos)
```

### 6.3 Auto-renovación
```bash
# Verificar timer de renovación
sudo systemctl status certbot.timer

# Probar renovación
sudo certbot renew --dry-run
```

---

## 🚀 PASO 7: Configurar DNS (Cloudflare / Google Domains)

### 7.1 En tu proveedor de DNS:
```
Tipo: A
Nombre: @
Valor: [IP_EXTERNA_DE_TU_VM]
TTL: 300

Tipo: A
Nombre: www
Valor: [IP_EXTERNA_DE_TU_VM]
TTL: 300
```

### 7.2 Obtener IP externa de la VM
```bash
# Desde tu máquina local
gcloud compute instances describe kensu-web-prod --zone=us-central1-a --format='get(networkInterfaces[0].accessConfigs[0].natIP)'
```

---

## 🔄 PASO 8: Script de Despliegue Automático

### 8.1 Crear script en el servidor
```bash
# En el servidor, como usuario kensu
cd /home/kensu/kensu-web
nano deploy.sh
```

Pega este contenido:
```bash
#!/bin/bash
set -e

echo "🚀 Iniciando despliegue de Kensu Web..."

# Pull cambios desde Git
echo "📥 Descargando cambios desde GitHub..."
git pull origin main

# Instalar dependencias nuevas (si las hay)
echo "📦 Instalando dependencias..."
npm install --production

# Hacer build
echo "🔨 Compilando aplicación..."
npm run build

# Reiniciar PM2
echo "♻️  Reiniciando aplicación..."
pm2 restart kensu-web

echo "✅ Despliegue completado exitosamente!"
pm2 status
```

Hacer ejecutable:
```bash
chmod +x deploy.sh
```

### 8.2 Usar el script
```bash
# Cada vez que hagas cambios:
./deploy.sh
```

---

## 📊 PASO 9: Monitoreo y Logs

### 9.1 Ver logs de PM2
```bash
pm2 logs kensu-web
pm2 logs kensu-web --lines 100
```

### 9.2 Ver logs de Nginx
```bash
sudo tail -f /var/log/nginx/kensu-web-access.log
sudo tail -f /var/log/nginx/kensu-web-error.log
```

### 9.3 Monitoreo de PM2
```bash
pm2 monit
```

---

## 🔐 PASO 10: Seguridad Adicional

### 10.1 Configurar firewall UFW
```bash
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw enable
sudo ufw status
```

### 10.2 Deshabilitar login root por SSH
```bash
sudo nano /etc/ssh/sshd_config
# Cambiar: PermitRootLogin no
sudo systemctl restart sshd
```

---

## 📝 Workflow Completo de Desarrollo

### En tu máquina local (Windows):
```powershell
cd C:\Users\crist\workspaces\kensu-web

# Hacer cambios en el código
# ...

# Commit y push
git add .
git commit -m "feat: nueva funcionalidad X"
git push origin main
```

### En el servidor:
```bash
ssh kensu@IP_EXTERNA
cd /home/kensu/kensu-web
./deploy.sh
```

---

## 🆘 Comandos Útiles

### Gestión de PM2
```bash
pm2 list                 # Ver apps corriendo
pm2 restart kensu-web    # Reiniciar app
pm2 stop kensu-web       # Detener app
pm2 delete kensu-web     # Eliminar app
pm2 save                 # Guardar configuración
```

### Verificar estado del servidor
```bash
# CPU y Memoria
htop

# Espacio en disco
df -h

# Procesos de Node
ps aux | grep node
```

---

## 🎯 Checklist Final

- [ ] Git inicializado localmente
- [ ] Repositorio creado en GitHub
- [ ] Código subido a GitHub
- [ ] VM creada en GCP
- [ ] IP estática asignada
- [ ] Node.js 20+ instalado
- [ ] PM2 instalado
- [ ] Nginx instalado
- [ ] Repositorio clonado en servidor
- [ ] Build de producción exitoso
- [ ] PM2 corriendo la app
- [ ] Nginx configurado
- [ ] DNS apuntando a la VM
- [ ] SSL configurado con Let's Encrypt
- [ ] Script de deploy.sh creado
- [ ] Sitio accesible en https://kensuapp.com

---

## 📞 Soporte

Si algo falla:
1. Revisar logs de PM2: `pm2 logs kensu-web`
2. Revisar logs de Nginx: `sudo tail -f /var/log/nginx/error.log`
3. Verificar que el puerto 3000 esté escuchando: `netstat -tulpn | grep 3000`
4. Reiniciar todo: `pm2 restart all && sudo systemctl restart nginx`
