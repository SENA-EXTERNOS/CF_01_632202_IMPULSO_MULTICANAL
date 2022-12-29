<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.mb-3
      .col-lg-8
          p Apreciado aprendiz, bienvenido a este componente formativo, donde se abordará el proceso de fomento y comercialización de productos alimenticios, marcas asociadas y buenas prácticas, que permitan incrementar ventas y posicionar productos en el mercado, a través, de múltiples canales de comunicación donde, hoy por hoy, tienden las empresas a hacer presencia e impulso de su actividad comercial y son la tendencia comercial para ampliar las fronteras de actuación operativa de las empresas.
          p Los temas se desarrollan, a través de diferentes recursos que dinamizan el contenido cómo vídeos, imágenes y gráficos. En un primer bloque se hará un reconocimiento de la clasificación de los alimentos y las buenas prácticas de manufactura y, posteriormente, conocer los pasos para realizar el diseño de un portafolio de productos y su ficha técnica, etapas indispensables para garantizar la idoneidad de los productos y el cumplimiento con las exigencias de buenas prácticas de manufactura.
      .col-lg-4
          img(width="160" height="315" src="@/assets/curso/temas/introduccion/img1_introduccion.png", alt="alt")

    
    .row
      .col-lg-12
          p.mb-5 En el siguiente video se hace una introducción a la temática que se estudiará a lo largo del componente formativo.

    .row
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
