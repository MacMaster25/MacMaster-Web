#!/bin/bash

echo "🏗️  Construyendo sitio para producción (GitHub Pages)..."
echo "📝 Usando configuración: _config.yml"
echo ""

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

# Construir para producción
echo "🔨 Construyendo sitio..."
bundle exec jekyll build

echo ""
echo "✅ Sitio construido exitosamente en _site/"
echo "🚀 Listo para desplegar en GitHub Pages"
echo "📁 Archivos generados:"
ls -la _site/ 