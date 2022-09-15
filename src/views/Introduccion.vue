<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    

    
    .row
      .col-lg-4
          img(width="100" height="100" src="@/assets/curso/temas/introduccion/img_introduccion.svg", alt="alt")
      .col-lg-8
          p.mb-4 Este componente formativo es una guía para reconocer <b>el proceso de fomento y comercialización de productos alimenticios, marcas asociadas, buenas prácticas, que permiten incrementar ventas y posicionar productos en el mercado,</b> a través, de múltiples canales de comunicación, donde hoy por hoy tienden las empresas a hacer presencia e impulso de su actividad comercial y son la tendencia comercial para ampliar las fronteras de actuación operativa de las empresas.

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video
  

    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
