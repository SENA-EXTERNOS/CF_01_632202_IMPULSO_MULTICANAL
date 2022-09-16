<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-sexto.color-acento-contenido.mb-3.mt-5
        p.mb-0 <b>Impulso multicanal de productos alimenticios</b> 
        p.mb-0 Uso de códigos de barras para la identificación de productos alimenticios

    p.mb-5.mt-5 Establecer una ficha técnica para la comunicación y desarrollo comercial de productos alimenticios, de manera responsable, garantizando la veracidad y siempre cumplimiento de la normativa vigentes de la región o del país, lo anterior, traerá beneficios al tener clientes confiados, seguros y satisfechos.
    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")


</template>

<script>
export default {
  name: 'Sintesis',
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
