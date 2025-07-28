# MacMaster-Web 🌐

Sitio web corporativo de **Mac Master Importadores**, especialistas en tornillería y soluciones industriales. Desarrollado con Jekyll para máxima eficiencia y facilidad de mantenimiento.

[![Jekyll](https://img.shields.io/badge/Jekyll-4.3.2-blue.svg)](https://jekyllrb.com/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.3-purple.svg)](https://getbootstrap.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

## 📋 Tabla de Contenidos

- [Descripción](#-descripción)
- [Características](#-características)
- [Tecnologías](#-tecnologías)
- [Instalación](#-instalación)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Uso](#-uso)
- [Desarrollo](#-desarrollo)
- [Despliegue](#-despliegue)
- [Contribución](#-contribución)
- [Documentación](#-documentación)
- [Contacto](#-contacto)

---

## 🎯 Descripción

MacMaster-Web es el sitio web oficial de **Mac Master Importadores**, una empresa especializada en la importación y distribución de productos industriales MRO (Mantenimiento, Reparación y Operación). 

El sitio presenta un catálogo completo de productos que incluye:
- **Tornillería Industrial**: Pernos, tornillos, tuercas, arandelas
- **Abrasivos**: Discos de corte, lijas, cepillos abrasivos
- **Adhesivos y Sellantes**: Masillas, selladores, fijadores de roscas
- **Resina y Fibra de Vidrio**: Materiales para reparaciones estructurales

## ✨ Características

- 🚀 **Sitio Estático**: Generado con Jekyll para máxima velocidad
- 📱 **Responsive Design**: Optimizado para todos los dispositivos
- 🎨 **Diseño Moderno**: Interfaz limpia y profesional
- 📊 **Catálogo Dinámico**: Productos gestionados desde archivos YAML
- 🔍 **SEO Optimizado**: Meta tags y estructura semántica
- ⚡ **Carga Rápida**: Sin base de datos, solo archivos estáticos
- 🛠️ **Fácil Mantenimiento**: Separación clara entre contenido y presentación

## 🛠️ Tecnologías

### Frontend
- **Jekyll 4.3.2** - Generador de sitios estáticos
- **Bootstrap 5.3.3** - Framework CSS responsive
- **HTML5** - Estructura semántica
- **CSS3** - Estilos personalizados
- **JavaScript** - Interactividad

### Herramientas
- **Liquid** - Motor de plantillas
- **YAML** - Gestión de datos
- **Git** - Control de versiones

---

## 🚀 Instalación

### Prerrequisitos

- **Ruby** (versión 2.6 o superior)
- **RubyGems**
- **GCC** y **Make**

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/MacMaster25/MacMaster-Web.git
   cd MacMaster-Web
   ```

2. **Instalar Jekyll y dependencias**
   ```bash
   gem install jekyll bundler
   bundle install
   ```

3. **Ejecutar el servidor de desarrollo**
   ```bash
   bundle exec jekyll serve
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:4000
   ```

### Comandos Útiles

```bash
# Servidor de desarrollo con recarga automática
bundle exec jekyll serve --livereload

# Construir el sitio para producción
bundle exec jekyll build

# Limpiar y reconstruir
bundle exec jekyll clean
bundle exec jekyll build

# Servidor en modo producción
JEKYLL_ENV=production bundle exec jekyll serve
```

---

## 📁 Estructura del Proyecto

```
MacMaster-Web/
├── _config.yml              # Configuración principal de Jekyll
├── _data/                   # Datos del sitio
│   ├── products.yml         # Catálogo de productos
│   └── subcategories.yml    # Subcategorías detalladas
├── _includes/               # Componentes reutilizables
│   ├── navbar.html          # Barra de navegación
│   ├── footer.html          # Pie de página
│   └── fab.html             # Botón flotante de acción
├── _layouts/                # Plantillas de páginas
│   └── default.html         # Layout principal
├── Assets/                  # Recursos multimedia
│   ├── 01.Inicio/           # Imágenes de la página principal
│   ├── 02.about/            # Imágenes de "Quienes Somos"
│   ├── 03.products/         # Imágenes de productos
│   └── 04-categories/       # Imágenes de categorías
├── style/                   # Archivos CSS
│   ├── about.css
│   ├── category.css
│   ├── category_detail.css
│   └── products.css
├── javascript/              # Archivos JavaScript
│   └── products.js
├── index.html               # Página principal
├── about.html               # Página "Quienes Somos"
├── products.html            # Página de productos
├── category.html            # Página de categoría
└── category_detail.html     # Página de detalle de categoría
```

---

## 📖 Uso

### Gestión de Productos

Los productos se gestionan desde archivos YAML en la carpeta `_data/`:

#### Agregar un nuevo producto

1. **Editar `_data/products.yml`**
   ```yaml
   - name: "Nuevo Producto"
     description: "Descripción del producto"
     image: "/Assets/ruta/imagen.png"
     link: "/nueva-pagina.html"
     subcategories:
       - name: "Subcategoría"
         image: "/Assets/ruta/subcategoria.png"
         link: "#"
   ```

2. **El cambio se refleja automáticamente** en todas las páginas que usen `site.data.products`

#### Modificar información existente

- **Productos principales**: Editar `_data/products.yml`
- **Subcategorías**: Editar `_data/subcategories.yml`
- **Configuración**: Editar `_config.yml`

### Crear una nueva página

1. **Crear archivo HTML** con front matter:
   ```html
   ---
   layout: default
   title: "Nueva Página - Mac Master Importadores"
   description: "Descripción para SEO"
   css: nueva-pagina.css
   permalink: /nueva-pagina.html
   ---
   
   <!-- Contenido de la página -->
   <section>
     <h1>Nueva Página</h1>
     <p>Contenido aquí...</p>
   </section>
   ```

2. **Jekyll genera automáticamente** la página con el layout y componentes

---

## 🔧 Desarrollo

### Flujo de Trabajo

1. **Crear rama** para nuevas características
   ```bash
   git checkout -b feature/nueva-caracteristica
   ```

2. **Desarrollar** con servidor local
   ```bash
   bundle exec jekyll serve --livereload
   ```

3. **Probar** en diferentes dispositivos y navegadores

4. **Commit y push**
   ```bash
   git add .
   git commit -m "feat: agregar nueva característica"
   git push origin feature/nueva-caracteristica
   ```

### Estándares de Código

- **HTML**: Estructura semántica y accesible
- **CSS**: Usar clases de Bootstrap cuando sea posible
- **JavaScript**: Código modular y comentado
- **YAML**: Formato consistente y legible

### Variables de Entorno

```bash
# Desarrollo
JEKYLL_ENV=development

# Producción
JEKYLL_ENV=production
```

---

## 🚀 Despliegue

### GitHub Pages (Recomendado)

1. **Configurar GitHub Pages** en el repositorio
2. **Seleccionar rama** `main` como fuente
3. **Configurar dominio personalizado** (opcional)

### Netlify

1. **Conectar repositorio** a Netlify
2. **Configurar build settings**:
   - Build command: `bundle exec jekyll build`
   - Publish directory: `_site`
3. **Configurar variables de entorno** si es necesario

### Vercel

1. **Importar proyecto** desde GitHub
2. **Configurar framework preset**: Jekyll
3. **Deploy automático** en cada push

### Servidor Tradicional

1. **Construir el sitio**:
   ```bash
   bundle exec jekyll build
   ```

2. **Subir contenido** de la carpeta `_site/` al servidor web

---

## 🤝 Contribución

### Cómo Contribuir

1. **Fork** el proyecto
2. **Crear rama** para tu feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. **Push** a la rama (`git push origin feature/AmazingFeature`)
5. **Abrir Pull Request**

### Guías de Contribución

- **Mantener** la estructura del proyecto
- **Seguir** los estándares de código
- **Probar** cambios localmente antes de enviar
- **Documentar** nuevas características

---

## 📚 Documentación

### Documentación Completa

Para información detallada sobre el sistema Jekyll implementado, consulta:
- **[DOCUMENTACION_JEKYLL.md](DOCUMENTACION_JEKYLL.md)** - Guía completa del sistema

### Recursos Adicionales

- [Documentación oficial de Jekyll](https://jekyllrb.com/docs/)
- [Liquid Template Language](https://shopify.github.io/liquid/)
- [Bootstrap Documentation](https://getbootstrap.com/docs/)

---

## 📞 Contacto

### Mac Master Importadores

- **Sitio Web**: [macmaster.co](https://macmaster.co)
- **WhatsApp**: [+57 317 789 9482](https://wa.me/573177899482)
- **Email**: [contacto@macmaster.co](mailto:contacto@macmaster.co)

### Desarrollo

- **Repositorio**: [GitHub](https://github.com/MacMaster25/MacMaster-Web)
- **Issues**: [Reportar problemas](https://github.com/MacMaster25/MacMaster-Web/issues)
- **Discusiones**: [Foro de la comunidad](https://github.com/MacMaster25/MacMaster-Web/discussions)

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

---

## 🙏 Agradecimientos

- **Jekyll** por proporcionar una plataforma robusta para sitios estáticos
- **Bootstrap** por el framework CSS responsive
- **GitHub** por el hosting y control de versiones
- **Comunidad de desarrolladores** por el soporte y contribuciones

---

<div align="center">

**Desarrollado con ❤️ para Mac Master Importadores**

[![Mac Master Importadores](https://github.com/MacMaster25/MacMaster-Web/blob/main/Assets/01.Inicio/01.Logos/logo.png?raw=true)](https://macmaster.co)

</div>