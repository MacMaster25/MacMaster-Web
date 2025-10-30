# 🏭 MacMaster Importadores - Sitio Web Corporativo

[![Jekyll](https://img.shields.io/badge/Jekyll-4.3.4-red.svg)](https://jekyllrb.com/)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Compatible-brightgreen.svg)](https://pages.github.com/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-blue.svg)](https://getbootstrap.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.0-38B2AC.svg)](https://tailwindcss.com/)

## 📋 Descripción

Sitio web corporativo de **MacMaster Importadores SAS**, empresa especializada en la importación y distribución de productos industriales de alta calidad. El sitio presenta una amplia gama de productos organizados en categorías y subcategorías, con información detallada y aplicaciones industriales.

## 🚀 Características

- **Sitio estático** generado con Jekyll
- **Diseño responsive** optimizado para todos los dispositivos
- **SEO optimizado** con meta tags y structured data
- **Formulario de contacto funcional** con Netlify Forms
- **Navegación intuitiva** con breadcrumbs dinámicos
- **Catálogo de productos** organizado por categorías
- **Imágenes optimizadas** para web
- **Compatible con GitHub Pages**

## 🛠️ Tecnologías Utilizadas

- **Jekyll 4.3.4** - Generador de sitios estáticos
- **Bootstrap 5.3** - Framework CSS responsive
- **Tailwind CSS** - Framework CSS utilitario
- **Liquid** - Motor de plantillas de Jekyll
- **HTML5 & CSS3** - Estándares web modernos
- **JavaScript ES6+** - Funcionalidad interactiva
- **Formspree** - Procesamiento de formularios

## 📁 Estructura del Proyecto

```
MacMaster-Web/
├── _config.yml                 # Configuración principal de Jekyll
├── _data/                      # Datos estructurados del sitio
│   ├── categories.yml          # Categorías principales de productos
│   ├── subcategories.yml       # Subcategorías y productos
│   ├── materials.yml           # Materiales disponibles
│   └── products.yml            # Catálogo de productos
├── _includes/                  # Componentes reutilizables
│   ├── header.html             # Encabezado del sitio
│   ├── footer.html             # Pie de página
│   ├── breadcrumb.html         # Navegación de migas de pan
│   └── benefits.html           # Componente de beneficios
├── _layouts/                   # Plantillas de página
│   ├── default.html            # Layout principal
│   ├── product.html            # Layout para productos
│   ├── subcategory.html        # Layout para subcategorías
│   └── subcategory-resina-fibra.html # Layout especializado
├── _product/                   # Páginas de productos individuales
│   ├── angulos-de-fibra-de-vidrio.md
│   ├── arandelas-estructurales.md
│   ├── arandelas-planas.md
│   └── ...                     # +38 productos más
├── _subcategory/               # Páginas de subcategorías
│   ├── abrasivos-de-corte-y-desbaste.md
│   ├── abrasivos-para-lijado.md
│   ├── arandelas.md
│   └── ...                     # +10 subcategorías más
├── assets/                     # Recursos estáticos
│   ├── css/
│   │   └── main.css            # Estilos principales
│   ├── js/
│   │   └── main.js             # JavaScript principal
│   └── images/                 # Imágenes del sitio
│       ├── categories/         # Imágenes de categorías
│       ├── products/           # Imágenes de productos
│       ├── subcategories/      # Imágenes de subcategorías
│       └── ...                 # Otras imágenes
├── categorias.html             # Página principal de categorías
├── contactenos.html            # Página de contacto
├── index.html                  # Página principal
├── quienes_somos.html          # Página "Acerca de nosotros"
├── Gemfile                     # Dependencias de Ruby
└── README.md                   # Este archivo
```

## 🏗️ Configuración de Jekyll

### Collections Configuradas

```yaml
collections:
  product:
    output: true
    permalink: /product/:title/
  categories:
    output: true
    permalink: /categorias/:title/
  subcategory:
    output: true
    permalink: /subcategory/:title/
```

### Layouts Disponibles

- **`default`** - Layout principal para todas las páginas
- **`product`** - Layout especializado para productos
- **`subcategory`** - Layout para subcategorías
- **`subcategory-resina-fibra`** - Layout especializado para resina y fibra

## 🚀 Instalación y Desarrollo Local

### Prerrequisitos

- **Ruby 3.3.6** o superior
- **Bundler** instalado
- **Git** para control de versiones

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/MacMaster-Web.git
   cd MacMaster-Web
   ```

2. **Instalar dependencias**
   ```bash
   bundle install
   ```

3. **Ejecutar servidor local**
   ```bash
   bundle exec jekyll serve
   ```

4. **Abrir en navegador**
   ```
   http://127.0.0.1:4000
   ```

## 📱 Características del Sitio

### 🏷️ Categorías Principales

1. **Abrasivos** - Discos, bandas y herramientas de corte
2. **Adhesivos y Sellantes** - Soluciones de unión industrial
3. **Resina y Fibra de Vidrio** - Materiales compuestos
4. **Tornillería Industrial** - Elementos de fijación
5. **Desengrasantes** - Productos de limpieza industrial
6. **Lavadoras de Piezas** - Equipos industriales para limpieza profunda

### 🔧 Funcionalidades

- **Catálogo de productos** con búsqueda por categoría
- **Información técnica** detallada de cada producto
- **Aplicaciones industriales** y beneficios
- **Formulario de contacto** funcional
- **Navegación intuitiva** con breadcrumbs
- **SEO optimizado** para motores de búsqueda

### 📧 Formulario de Contacto

El sitio incluye un formulario de contacto funcional configurado con **Formspree**:

- ✅ **Procesamiento automático** de envíos
- ✅ **Protección anti-spam** incluida
- ✅ **Notificaciones por email** automáticas
- ✅ **Validación de campos** integrada

## 🌐 Despliegue

### GitHub Pages

El sitio está optimizado para **GitHub Pages**:

1. **Push al repositorio** principal
2. **GitHub Pages** se activa automáticamente
3. **Netlify Forms** se detecta y configura
4. **Sitio disponible** en `https://macmaster25.github.io/MacMaster-Web/`

### Compatibilidad

- ✅ **GitHub Pages** - Despliegue automático
- ✅ **Formspree** - Formularios
- ✅ **Vercel** - Hosting alternativo
- ✅ **Cualquier hosting estático** - JAMstack compatible

## 📊 SEO y Rendimiento

### Optimizaciones Implementadas

- **Meta tags** completos para cada página
- **Structured Data** (Schema.org) para productos y empresa
- **Open Graph** tags para redes sociales
- **Twitter Cards** para Twitter
- **URLs amigables** y navegación semántica
- **Imágenes optimizadas** con alt text descriptivo

### Structured Data

- **Organization** - Información de la empresa
- **LocalBusiness** - Datos de ubicación y contacto
- **Product** - Información detallada de productos
- **BreadcrumbList** - Navegación estructurada

## 🔧 Personalización

### Modificar Categorías

Editar `_data/categories.yml`:
```yaml
- id: nueva-categoria
  name: "Nueva Categoría"
  description: "Descripción de la categoría"
  image: "assets/images/categories/nueva-categoria.png"
```

### Agregar Productos

Crear archivo en `_product/`:
```markdown
---
layout: product
title: "Nuevo Producto"
description: "Descripción del producto"
image: "assets/images/products/nuevo-producto.png"
category_id: "categoria-existente"
---
```

## 📞 Soporte y Contacto

- **Empresa:** MacMaster Importadores SAS
- **Email:** proyectos@macmaster.co
- **Teléfono:** (57) 317 789 9482
- **Dirección:** Av. 5c Nte. #46 01, Cali, Valle del Cauca, Colombia

## 📄 Licencia

Este proyecto es propiedad de **MacMaster Importadores SAS**. Todos los derechos reservados.

## 🤝 Contribuciones

Para contribuir al proyecto:

1. **Fork** el repositorio
2. **Crea** una rama para tu feature
3. **Commit** tus cambios
4. **Push** a la rama
5. **Abre** un Pull Request

## 📈 Roadmap

- [ ] **Sistema de búsqueda** avanzado
- [ ] **Filtros dinámicos** por características
- [ ] **Comparador de productos** interactivo
- [ ] **Blog técnico** con artículos industriales
- [ ] **Integración con CRM** para seguimiento de leads
- [ ] **PWA** (Progressive Web App) para móviles

---

**Desarrollado con ❤️ para MacMaster Importadores SAS**

*Última actualización: Octubre 2025*

