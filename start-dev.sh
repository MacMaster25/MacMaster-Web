#!/bin/bash

echo "🚀 Iniciando servidor de desarrollo MacMaster-Web..."

# Detener procesos existentes
echo "🛑 Deteniendo procesos existentes..."
pkill -f "jekyll serve" 2>/dev/null

# Navegar al proyecto
cd /home/admin-1/Documentos/DEV/MacMaster-Web

# Verificar dependencias
if [ ! -f "Gemfile.lock" ]; then
    echo "📦 Instalando dependencias..."
    bundle install
fi

# Limpiar build anterior
echo "🧹 Limpiando build anterior..."
bundle exec jekyll clean

# Iniciar servidor de desarrollo
echo "🌐 Iniciando servidor Jekyll..."
echo "📱 Tu sitio estará disponible en: http://localhost:4000"
echo "💡 Para detener: Ctrl+C"
echo ""

bundle exec jekyll serve --host 0.0.0.0 --port 4000 --livereload --config _config.yml,_config.dev.yml 