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
      .col-lg-6
          p.mb-5 Bienvenido a este componente formativo que es una guía para reconocer <b>el proceso de fomento y comercialización de productos alimenticios, marcas asociadas, buenas prácticas, que permiten incrementar ventas y posicionar productos en el mercado,</b> a través, de múltiples canales de comunicación, donde hoy por hoy tienden las empresas a hacer presencia e impulso de su actividad comercial y son la tendencia comercial para ampliar las fronteras de actuación operativa de las empresas.
          p.mb-5 Los temas se desarrollan, a través de diferentes recursos que dinamizan el contenido, cómo  vídeos, imágenes y gráficos, en un primer bloque puede hacer  un reconocimiento  sobre la clasificación de los alimentos y las buenas prácticas de manufactura, seguido a esto conocer los pasos para realizar  el diseño de un portafolio de productos y su ficha técnica, etapas indispensables para  garantizar la idoneidad de los productos y el cumplimiento con  las exigencias de buenas prácticas de manufactura.
      .col-lg-6
          img(src="@/assets/curso/temas/introduccion/img1_introduccion.png", alt="alt")

    
    .row
      .col-lg-12
          p.mb-5 En el siguiente video se hace una introducción a la temática que se estudiará a lo largo del componente formativo.
          p.mb-5 <b>¡Muchos éxitos en este proceso de aprendizaje!</b>

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
