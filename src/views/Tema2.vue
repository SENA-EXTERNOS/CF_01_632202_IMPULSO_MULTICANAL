<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Clasificación de los alimentos

    .row.mt-3
      .col-lg-7
          p En la producción y comercialización de alimentos se requiere reconocer cómo estos se clasifican y, de este modo, identificar el tipo de riesgo y las propiedades que tiene. Es así como se pueden determinar métodos de almacenamiento, manipulación, transporte, promoción, portafolios, entre otros.
          p.mb-5 En Colombia, hasta el año 2015, solamente los alimentos con marca y nombre registrado tenían, como requisito para su promoción y comercialización, contar con registro sanitario. No obstante, los entes encargados de la política de sanidad e inocuidad de alimentos, evidenciaron la necesidad de contar con un esquema que permitiera focalizar y facilitar el ejercicio de vigilancia y control sobre los alimentos y parametrizar los protocolos de cumplimiento para los mismos, en aras de dar un tratamiento diferencial y focalizado que favorezca a las empresas y a los consumidores desde su función, así como tener un mejor control sobre el sector. Por tales motivos, el gobierno a través del Ministerio de Salud y Protección Social, emitió la Resolución 0719 del 11 de marzo de 2015, por la cual se estableció la clasificación de alimentos para consumo humano, de acuerdo con el riesgo en salud pública.
      .col-lg-5
          img(src="@/assets/curso/temas/tema2/img1_tema_2.svg", alt="alt")

    separador
    
    #t_2_1.titulo-segundo.color-acento-contenido
      h2.mt-5 2.1  Clasificación de riesgos de los alimentos
    .row
      .col-lg-3.mb-4
        img(src="@/assets/curso/temas/tema2/img2_tema_2.svg")
      .col-lg-9
        p.mb-4 El Ministerio de Salud y Protección Social, desde la Resolución 2674 de 2013 y la Resolución 0719 de 2015, determinaron las definiciones y tipologías de los riesgos de los alimentos.
        p.mb-5 Los siguientes son los tipos de riesgo que se pueden identificar en los alimentos y que pueden afectar la salud pública:

  

    TabsB.color-primario.mt-5
      .py-4.py-md-5(titulo="Alimentos de mayor riesgo" :icono="require('@/assets/curso/temas/tema2/icon1_tema_2.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Alimentos de mayor riesgo
            p Este tipo de alimentos está constituido por aquellos alimentos que pueden contener microorganismos patógenos que favorezcan la formación de toxinas o productos químicos nocivos para la salud, entre los que están los lácteos y las carnes.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img3_tema_2.svg', alt='Texto que describa la imagen')
              
      .py-4.py-md-5(titulo="Alimentos de riesgo medio" :icono="require('@/assets/curso/temas/tema2/icon2_tema_2.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Alimentos de riesgo medio
            p En este tipo de alimentos están aquellos que pueden albergar microorganismos patógenos que, regularmente, no manifiestan su desarrollo y crecimiento gracias a sus características o por las formas de procesamiento del mismo; por ende, existen bajas probabilidades de contenerlos. No obstante, por razones de ambiente y manejo, es posible que se vuelvan nocivos para la salud. En este grupo están los cereales. 
              
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img4_tema_2.svg', alt='Texto que describa la imagen')
            
      .py-4.py-md-5(titulo="Alimentos de menor riesgo" :icono="require('@/assets/curso/temas/tema2/icon3_tema_2.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Alimentos de menor riesgo
            p Este grupo integra los alimentos con poca probabilidad de contener microorganismos patógenos y cuyas características estructurales no favorecen su crecimiento, así como aquellos que no contienen productos químicos nocivos para la salud.
            
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img5_tema_2.svg', alt='Texto que describa la imagen')

    separador

    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2 Clasificación de alimentos para consumo humano
    .row
      .col-lg-7.mb-4
        p.mb-4 El gobierno, a través del Ministerio de Salud y Protección Social y la emisión de la Resolución 0719 del 11 de marzo de 2015, después de un estudio de la composición de las empresas del sector, de los bienes y productos para el consumo directo o indirecto (materias primas insumos o suministros), realizó la clasificación de los alimentos para el consumo humano en quince grandes grupos generales, los cuales, a su vez, se subdividen en subcategorías, una para cada tipo de alimento y señaló el tipo de riesgo para cada subcategoría, en conformidad con la categorización o tipología de los riesgos en alimentos de alto, medio y bajo riesgo para la salud.
        p.mb-0 Las siguientes son las principales agrupaciones de alimentos:
      .col-lg-5
        img(src="@/assets/curso/temas/tema2/img6_tema_2.svg")

    .row.mb-5
      .col-lg-6
        img(src="@/assets/curso/temas/tema2/img7_tema_2.svg")

      .col-sm.mb-5.mb-sm-0.mt-5
        
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta2
              span(style="font-weight:bold") 1 
            | Leche y sus derivados, así como productos de imitación.
          li 
            .lista-ol--cuadro__vineta2
              span 2
            | Grasas, emulsiones grasas, aceites y ceras.
          li 
            .lista-ol--cuadro__vineta2
              span 3
            | Productos basados en agua o destinadas para hidratar.
          li 
            .lista-ol--cuadro__vineta2
              span 4
            | Frutas y vegetales, así como setas, tubérculos, nueces, semillas y algas marinas.
          li 
            .lista-ol--cuadro__vineta2
              span 5
            | Productos de confitería.
          li 
            .lista-ol--cuadro__vineta2
              span 6
            | Cereales, derivados de granos y raíces.
          li 
            .lista-ol--cuadro__vineta2
              span 7
            | Panes y demás productos de panadería.
          li 
            .lista-ol--cuadro__vineta2
              span 8
            | Carnes y sus derivados cárnicos.
          li 
            .lista-ol--cuadro__vineta2
              span 9
            | Pescados y demás productos obtenidos de la pesca.
          li 
            .lista-ol--cuadro__vineta2
              span 10
            | Tipos de huevo y otros productos a base de huevo.
          li 
            .lista-ol--cuadro__vineta2
              span 11
            | Productos de Azúcar sus sucedáneos, donde sean componente principal.
          li 
            .lista-ol--cuadro__vineta2
              span 12
            | Miel y los productos derivados de la apicultura.
          li 
            .lista-ol--cuadro__vineta2
              span 13
            | Sal, hierbas aromáticas, condimentos, ensaladas, vinagres.
          li 
            .lista-ol--cuadro__vineta2
              span 14
            | Alimentos nutricionales especiales.
          li 
            .lista-ol--cuadro__vineta2
              span 15
            | Alimentos compuestos y preparados que no puedan clasificarse otros grupos.

    .row.justify-content-center.mb-5
      .col-lg-11
        .tarjeta.color-secundario.p-2.mb-5
          .row.justify-content-around.align-items-center
            .col-5.col-lg-2.mb-4.mt-3
              img(src="@/assets/curso/temas/tema1/img11.svg").img11-tm1
            .col-lg-10
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Clasificación de Alimentos
                  p Para ampliar detalles respecto de esta clasificación de los grupos de alimentos para consumo humano, en conformidad con lo dispuesto en la Resolución 0719 de 2015, y detallar el tipo de riesgo asociado, según la norma, se invita a consultar el anexo Resolución_719_de_2015-Clasificación de Alimentos.
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo-resolución_719_de_2015.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download



    separador

    #t_2_3.titulo-segundo.color-acento-contenido
      h2 2.3 Propiedades organolépticas

    .row
      .col-lg-3
        img(src="@/assets/curso/temas/tema2/img8.svg")
      .col-lg-9.mt-3
        p Son las características naturales que diferencian a los alimentos y que se pueden reconocer a través de los sentidos, cómo el gusto, la vista o el olfato.
        p En el siguiente vídeo se explican, en detalle, las propiedades.


    figure.mb-5
      .video.mt-5
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video  


    .row.justify-content-center
      .col-lg-11
        .tarjeta.color-secundario.p-2.mb-5
          .row.justify-content-around.align-items-center
            .col-6.col-lg-2.mb-4.mt-3
              img(src="@/assets/curso/temas/tema2/img9.svg").img11-tm1
            .col-lg-10
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Propiedades organolépticas de los alimentos
                  p Para efectos de ampliar estos aspectos propios de las características organolépticas de los alimentos, como complemento a las pruebas físicas y como mecanismo de verificación de idoneidad de los alimentos, se sugiere revisar el Anexo- Propiedades organolépticas de los alimentos.
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo-Propiedades_organolepticas.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download




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
