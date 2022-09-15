<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Clasificación de Alimentos

    .row
      .col-lg-6
          p.mb-5 En Colombia hasta el año 2015, solamente los alimentos con marca y nombre registrado tenían como requisito para su promoción y comercialización contar con registro sanitario, sin embargo, los entes encargados de la política de sanidad e inocuidad de alimentos, evidenciaron la necesidad de contar con un esquema que permitiera focalizar y facilitar el ejercicio de vigilancia y control sobre los alimentos, parametrizar los protocolos de cumplimiento para los mismos, en aras de dar un tratamiento diferencial y focalizado que favorezca a las empresas y a los consumidores desde su función, así como tener, un mejor control sobre el sector, por tal motivo, el gobierno a través del Ministerio de Salud y Protección Social, emite la Resolución 0719 del 11 de marzo de 2015,  <b style= "color:#F57C22;">“Por la cual se establece la clasificación de alimentos para consumo humano de acuerdo al riesgo en salud pública” (Ministerio de Salud y Protección Social, 2015).</b>    
      .col-lg-6
          img(src="@/assets/curso/temas/tema2/img1_tema_2.svg", alt="alt")

    separador
    #t_1_1.titulo-segundo.color-acento-contenido
      h2 Clasificación de riesgos en los alimentos
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
