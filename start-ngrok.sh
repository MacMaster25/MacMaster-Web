#!/bin/bash

echo "🚀 Iniciando MacMaster-Web con ngrok..."

# Detener procesos existentes
echo "🛑 Deteniendo procesos existentes..."
pkill -f "jekyll serve" 2>/dev/null
pkill -f "ngrok" 2>/dev/null

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

# Iniciar Jekyll con configuración específica
echo "🌐 Iniciando servidor Jekyll..."
bundle exec jekyll serve \
    --host 0.0.0.0 \
    --port 4000 \
    --config _config.yml,_config.dev.yml \
    --detach

# Esperar a que el servidor inicie
echo "⏳ Esperando que el servidor inicie..."
sleep 5

# Verificar que el servidor esté funcionando
if curl -s http://localhost:4000 > /dev/null; then
    echo "✅ Servidor Jekyll iniciado correctamente en http://localhost:4000"
    echo ""
    echo "🌐 Iniciando ngrok..."
    echo "📱 Tu sitio estará disponible en: https://9bb1-186-27-200-164.ngrok-free.app"
    echo "🔧 Panel de control ngrok: http://localhost:4040"
    echo ""
    echo "💡 Para detener: Ctrl+C"
    echo ""
    
    # Iniciar ngrok
    ngrok http 4000
else
    echo "❌ Error: No se pudo iniciar el servidor Jekyll"
    echo "🔍 Verificando logs..."
    tail -n 20 /tmp/jekyll.log 2>/dev/null || echo "No se encontraron logs"
    exit 1
fi 