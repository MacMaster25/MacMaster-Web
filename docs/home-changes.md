# Cambios realizados en el HTML

# Documentación de Cambios – home.html
📅 Fecha: 30/07/2025  
👤 Realizado por: ivan 
🧪 Rama: static-main

Sección: Hero Banner
- **Línea:** 60–72  
- **Cambio:** Se ajustó el `h1`, `p` del título principal y se agrego un `div` y `a` para los cta
- **Antes:**
```html
<h1>Fabricación especializada de tornillería y suministro de resina</h1>
<p>Abastecemos la industria colombiana con soluciones confiables en fijación, abrasión y recubrimiento, listos para entrega inmediata.</p>
<p>Con más de 25 años de experiencia, en MacMaster impulsamos el desarrollo de la industria
colombiana con tornillería, resinas, abrasivos y adhesivos de alto desempeño.</p>
<a class="btn btn-primary" href="#">Ver nuestros Productos</a>
<div class="heroimage-data d-flex flex-column flex-md-row justify-content-md-between align-items-md-center">
    <div class="data-a">
        <p>Distribuidores oficiales</p>
        <div class="data-image">
            <img src="https://github.com/MacMaster25/MacMaster-Web/blob/main/Assets/01.Inicio/01.Logos/Grainger.png?raw=true"
            alt="Logo Greinger">
        </div>
    <div class="data-b d-sm-flex flex-sm-wrap flex-lg-nowrap align-items-sm-center m-0">
        <div class="data-image d-sm-flex flex-sm-wrap col-sm-2">
            <img src="https://github.com/MacMaster25/MacMaster-Web/blob/main/Assets/01.Inicio/02.Hero/imgs.png?raw=true"
            class="mb-2 mb-sm-0" alt="imagen en circulo de personas">
        </div>
        <p class="d-sm-flex flex-sm-shrink-1">Con la confianza de más de 3 millones de clientes</p>
    </div>
</div>

- **Despues:**
<h1>Soluciones industriales en tornillería,abrasivos, adhesivos y resinas</h1>
<p>Abastecemos la industria colombiana con soluciones confiables en fijación, abrasión
y recubrimiento, listos para entrega inmediata.</p>
<p>Con más de 25 años de experiencia, en MacMaster impulsamos el desarrollo de la industria
colombiana con tornillería, resinas, abrasivos y adhesivos de alto desempeño.</p>
<div class="button-group d-flex flex-column gap-3 mt-4 col">
    <a class="btn btn-warning col-12" href="#">Ver nuestros Productos</a>
    <a class="btn btn-outline-warning col-12"
    href="https://wa.me/573177899482?text=Hola%2C%20estoy%20interesado%20en%20sus%20productos%20de%20tornillería%20y%20resinas.%20¿Podrían%20brindarme%20más%20información%3F"
    target="_blank" rel="noopener noreferrer">Contacta un asesor</a>
</div>
<div class="heroimage-data d-flex flex-column flex-md-row justify-content-md-between align-items-md-center">
    <div class="data-a">
        <div class="data-image">
            <img src="https://github.com/MacMaster25/MacMaster-Web/blob/main/Assets/01.Inicio/01.Logos/Grainger.png?raw=true"
            alt="Logo Greinger">
            <p>Acceso a más de 500.000 referencias industriales gracias a nuestra alianza con Grainger.</p>
        </div>
    <div class="data-b d-sm-flex flex-sm-wrap flex-lg-nowrap align-items-sm-center m-0">
        <div class="data-image d-sm-flex flex-sm-wrap col-sm-2">
            <img src="https://github.com/MacMaster25/MacMaster-Web/blob/main/Assets/01.Inicio/02.Hero/imgs.png?raw=true"
            class="mb-2 mb-sm-0" alt="imagen en circulo de personas">
        </div>
        <p class="d-sm-flex flex-sm-shrink-1">Garantía de satisfacción: devoluciones sin costo en 30 días.</p>
    </div>
</div>

```css