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
      h2 2.1 Clasificación de riesgos en los alimentos
    .row
      .col-lg-4
        img(src="@/assets/curso/temas/tema2/img2_tema_2.svg")
      .col-lg-8
        p.mb-4 El Ministerio de Salud y Protección Social, desde la Resolución 2674 de 2013 y la Resolución 0719 de 2015, establecen las definiciones y tipologías de los tipos de riesgos de los alimentos, conceptos que serán tenidos en cuenta en la clasificación de los alimentos.
        p.mb-0 Los siguientes son los tipos de riesgo que se pueden identificar en los alimentos y que pueden afectar la salud pública:

  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    TabsB.color-primario
      .py-4.py-md-5(titulo="Alimentos de mayor riesgo" :icono="require('@/assets/curso/temas/tema2/icon1_tema_2.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Alimentos de mayor riesgo
            p Este tipo de alimentos según la Resolución 0719 de 2015 (Ministerio de Salud y Protección Social, 2015), está constituido por aquellos alimentos que pueden contener microorganismos patógenos que favorezcan la formación de toxinas, o productos químicos nocivos a la salud.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img3_tema_2.svg', alt='Texto que describa la imagen')
              
      .py-4.py-md-5(titulo="Alimentos de riesgo medio" :icono="require('@/assets/curso/temas/tema2/icon2_tema_2.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Alimentos de riesgo medio
            p En este tipo alimentos que distingue la Resolución 0719 de 2015 (Ministerio de Salud y Protección Social, 2015), están aquellos que pueden albergar microorganismos patógenos, que regularmente no manifiestan su desarrollo y crecimiento gracias a sus características o por las formas de procesamiento del mismo, por ende, existen bajas probabilidades de contenerlos, sin embargo, por razones de mabiente y manejo, es posible que se vuelvan nocivos para la salud. 
              
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img4_tema_2.svg', alt='Texto que describa la imagen')
            
      .py-4.py-md-5(titulo="Alimentos de menor riesgo" :icono="require('@/assets/curso/temas/tema2/icon3_tema_2.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Alimentos de riesgo medio
            p En este grupo distingue la resolución 0719 de 215 (Ministerio de Salud y Protección Social, 2015), se encuentran los alimentos con poca probabilidad de contener microorganismos patógenos, y cuyas características estructurales no favorecen su crecimiento, así como aquellos que no contienen productos químicos nocivos para la salud.
            
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img5_tema_2.svg', alt='Texto que describa la imagen')

    separador
    #t_1_1.titulo-segundo.color-acento-contenido
      h2 2.2 Normativa para las buenas prácticas de manufactura en alimentos 
    .row
      .col-lg-6
        p.mb-4 El gobierno a través del Ministerio de Salud y Protección Social y la emisión de la Resolución 0719 del 11 de marzo de 2015, después de un estudio de la composición de las empresas del sector, de los bienes y productos para el consumo directo o indirecto (materias primas insumos o suministros), realiza la clasificación de los alimentos para el consumo humano en quince grandes grupos generales, los cuales, a su vez se subdividen en subcategorías, una para cada tipo de alimento y señala el tipo de riesgo para cada subcategoría, en conformidad a la categorización o tipología de los riesgos en alimentos de alto, medio y bajo riesgo para la salud.  
        p.mb-0 Las siguientes son las principales agrupaciones de alimentos:
      .col-lg-6
        img(src="@/assets/curso/temas/tema2/img6_tema_2.svg")

    .row.mb-5
      .col-lg-6
        img(src="@/assets/curso/temas/tema2/img7_tema_2.svg")

      .col-sm.mb-5.mb-sm-0.mt-5
        
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta2
              span 1 
            | Leche y sus derivados, así como productos de imitación
          li 
            .lista-ol--cuadro__vineta2
              span 2
            | Grasas, emulsiones grasas, aceites y ceras
          li 
            .lista-ol--cuadro__vineta2
              span 3
            | Productos basados en agua o destinadas para hidratar
          li 
            .lista-ol--cuadro__vineta2
              span 4
            | Frutas y vegetales, así como setas, tubérculos, nueces, semillas y algas marinas.
          li 
            .lista-ol--cuadro__vineta2
              span 5
            | Productos de confitería
          li 
            .lista-ol--cuadro__vineta2
              span 6
            | Cereales, derivados de granos y raíces
          li 
            .lista-ol--cuadro__vineta2
              span 7
            | Panes y demás productos de panadería
          li 
            .lista-ol--cuadro__vineta2
              span 8
            | Carnes y sus derivados cárnicos
          li 
            .lista-ol--cuadro__vineta2
              span 9
            | Pescados y demás productos obtenidos de la pesca
          li 
            .lista-ol--cuadro__vineta2
              span 10
            | Tipos de huevo y otros productos a base de huevo.
          li 
            .lista-ol--cuadro__vineta2
              span 11
            | Productos de Azúcar sus sucedáneos, donde sean componente principal
          li 
            .lista-ol--cuadro__vineta2
              span 12
            | Miel y los productos derivados de la apicultura
          li 
            .lista-ol--cuadro__vineta2
              span 13
            | Sal, hierbas aromáticas, condimentos, ensaladas, vinagres
          li 
            .lista-ol--cuadro__vineta2
              span 14
            | Alimentos nutricionales especiales
          li 
            .lista-ol--cuadro__vineta2
              span 15
            | Alimentos compuestos y preparados que no puedan clasificarse otros grupos (Ministerio de Salud y Protección Social, 2015)                      

    .row.mt-5
        .col-lg-14
          .cajon.color_anexo2.p-4
            .h5 Anexo
            p Para ampliar detalles respecto de esta clasificación de los grupos de alimentos para consumo humano en conformidad a lo dispuesto en la Resolución 0719 de 2015, y detallar el tipo de riesgo asociado según la norma, se invita a consultar el Anexo- Resolución_719_de_2015-Clasificación de Alimentos, adjunto a este componente formativo.
            .col-lg-6
              a.anexo.mb-4.mt-5(:href="obtenerLink('/downloads/Anexo- Resolución_719_de_2015-Clasificación de Alimentos.pdf')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p <b>Anexo</b>
                  p.mb-0 Resolución_719_de_2015-Clasificación de Alimentos

    separador
    #t_1_1.titulo-segundo.color-acento-contenido
      h2 2.3 Propiedades organolépticas

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video  

    .row.mt-5
        .col-lg-14
          .cajon.color_anexo2.p-4
            .h5 Anexo
            p Para efectos de ampliar estos aspectos propios de las características organolépticas de los alimentos como un complemento a las pruebas físicas, y como mecanismo de verificación de idoneidad de los alimentos, se sugiere revisar el <b>Anexo- Propiedades organolépticas de los alimentos.</b>
            .col-lg-6
              a.anexo.mb-4.mt-5(:href="obtenerLink('/downloads/Anexo-Propiedades organolepticas de los alimentos.pdf')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p <b>Anexo</b>
                  p.mb-0 Propiedades organolépticas de los alimentos



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
