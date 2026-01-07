#!/bin/bash
# Script de configuración automática para Kensu Web en GCP
# Ejecutar como: bash server-setup.sh

set -e

echo "🚀 Iniciando configuración del servidor Kensu Web..."

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# 1. Actualizar sistema
echo -e "${YELLOW}📦 Actualizando sistema...${NC}"
sudo apt update && sudo apt upgrade -y

# 2. Instalar Node.js 20.x
echo -e "${YELLOW}📦 Instalando Node.js 20...${NC}"
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Verificar instalación
echo -e "${GREEN}✅ Node.js instalado:${NC}"
node --version
npm --version

# 3. Instalar PM2
echo -e "${YELLOW}📦 Instalando PM2...${NC}"
sudo npm install -g pm2

# 4. Instalar Nginx
echo -e "${YELLOW}📦 Instalando Nginx...${NC}"
sudo apt install -y nginx

# 5. Instalar Git
echo -e "${YELLOW}📦 Instalando Git...${NC}"
sudo apt install -y git

# 6. Clonar repositorio
echo -e "${YELLOW}📥 Clonando repositorio Kensu Web...${NC}"
cd ~
if [ -d "Kensu-web" ]; then
    echo -e "${YELLOW}⚠️  Directorio Kensu-web ya existe. Eliminando...${NC}"
    rm -rf Kensu-web
fi
git clone https://github.com/cfmolinac/Kensu-web.git
cd Kensu-web

# 7. Instalar dependencias de Node
echo -e "${YELLOW}📦 Instalando dependencias de la aplicación...${NC}"
npm install

# 8. Hacer build de producción
echo -e "${YELLOW}🔨 Compilando aplicación...${NC}"
npm run build

# 9. Crear archivo ecosystem.config.js para PM2
echo -e "${YELLOW}⚙️  Configurando PM2...${NC}"
cat > ecosystem.config.js << 'EOF'
module.exports = {
  apps: [{
    name: 'kensu-web',
    script: 'npm',
    args: 'start',
    cwd: '/home/' + process.env.USER + '/Kensu-web',
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

# 10. Iniciar aplicación con PM2
echo -e "${YELLOW}🚀 Iniciando aplicación...${NC}"
pm2 start ecosystem.config.js
pm2 save

# 11. Configurar PM2 para inicio automático
echo -e "${YELLOW}⚙️  Configurando inicio automático de PM2...${NC}"
sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u $USER --hp /home/$USER
pm2 save

# 12. Configurar Nginx
echo -e "${YELLOW}🌐 Configurando Nginx...${NC}"
sudo tee /etc/nginx/sites-available/kensu-web > /dev/null << 'EOF'
server {
    listen 80;
    server_name _;  # Acepta cualquier dominio por ahora

    # Logs
    access_log /var/log/nginx/kensu-web-access.log;
    error_log /var/log/nginx/kensu-web-error.log;

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/css text/javascript application/javascript application/json image/svg+xml;

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

    # Cache para assets estáticos de Next.js
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
EOF

# Activar sitio y reiniciar Nginx
sudo ln -sf /etc/nginx/sites-available/kensu-web /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default  # Eliminar sitio default
sudo nginx -t
sudo systemctl restart nginx
sudo systemctl enable nginx

# 13. Configurar firewall UFW
echo -e "${YELLOW}🔒 Configurando firewall...${NC}"
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
echo "y" | sudo ufw enable

# 14. Obtener IP externa
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GREEN}✅ ¡Configuración completada exitosamente!${NC}"
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""
echo -e "${YELLOW}📊 Estado de la aplicación:${NC}"
pm2 status
echo ""
echo -e "${YELLOW}🌐 Tu sitio está corriendo en:${NC}"
EXTERNAL_IP=$(curl -s http://metadata.google.internal/computeMetadata/v1/instance/network-interfaces/0/access-configs/0/external-ip -H "Metadata-Flavor: Google")
echo -e "${GREEN}   http://$EXTERNAL_IP${NC}"
echo ""
echo -e "${YELLOW}📝 Comandos útiles:${NC}"
echo "   pm2 logs kensu-web          # Ver logs de la aplicación"
echo "   pm2 restart kensu-web       # Reiniciar aplicación"
echo "   sudo systemctl status nginx # Ver estado de Nginx"
echo "   sudo tail -f /var/log/nginx/kensu-web-access.log  # Ver logs de Nginx"
echo ""
echo -e "${YELLOW}🔄 Para actualizar el sitio en el futuro:${NC}"
echo "   cd ~/Kensu-web && git pull && npm install && npm run build && pm2 restart kensu-web"
