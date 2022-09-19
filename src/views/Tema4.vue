<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Ficha técnica de productos

    .row
      .col-lg-4
        img(src="@/assets/curso/temas/tema4/img1_tema_4.svg")
      .col-lg-8
        p.mb-4 En la industria de los alimentos, la ficha técnica es un documento pequeño de carácter obligatorio y legal, que se incluye en el empaque primario.  Se utiliza para informar a los consumidores finales y clientes en general, así como a las autoridades sanitarias, respecto de las características de un producto alimenticio, incluyendo las condiciones de conservación y presentación de ingredientes, los peligros que puede tener el consumo, la lista de los aportes y valores nutricionales, entre otros aspectos. Es el nivel de información necesaria que se debe publicar para la comercialización de cualquier producto alimentario.
    
 
    .titulo-sexto.color-acento-contenido.mb-3.mt-5
      p.mb-0 <b>Figura.</b> Ficha técnica de ejemplo: producto alimenticio de Helado de Fruta
            
    .row
      .col-lg-12  
        figure
          img(src='@/assets/curso/temas/tema4/img2_tema_4.svg', alt='Texto que describa la imagen')
          figcaption <p>Fuente: slideshare.net - Ficha técnica de helado de frutas</p>

      a.anexo.mb-4.mb-lg-0.mt-5(href="https://es.slideshare.net/leticiaromeroquebrandogarvimbas/ficha-tecnica-de-helado-de-frutas" target="_blank")
        .anexo__icono
          img(src="@/assets/template/icono-link.svg")
        .anexo__texto
          p <b>Enlace web</b>
          p.mb-0 slideshare.net - Ficha técnica de helado de frutas

      separador
      #t_4_1.titulo-segundo.color-acento-contenido
        h2 4.1  Elementos que debe contener una ficha técnica

      .row
      .col-lg-12
          p.mb-0 En lo posible las fichas técnicas de los productos alimentarios deben contener la siguiente información:

      .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
        ImagenInfografica.color-primario
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema4/img3_tema_4.svg', alt='Texto que describa la imagen')
              

          .tarjeta.tarjeta.color-acento-botones4.p-3(x="34%" y="29%" numero="1")
            .h5.mb-2.heading_t4  1. Nombre del producto
            p.heading_t4  La ficha técnica de un alimento debe incluir el nombre o denominación comercial.

          .tarjeta.tarjeta.color-acento-botones4.p-3(x="18%" y="49%" numero="2")
            .h5.mb-2.heading_t4  2. Componentes o Ingredientes
            p.heading_t4  Es la citación de todos los ingredientes o componentes que tiene el producto, los cuales se ordenan alfabéticamente.
            
          .tarjeta.tarjeta.color-acento-botones4.p-3(x="79%" y="49%" numero="3")
            .h5.mb-2.heading_t4  3. Características nutricionales
            p.heading_t4  La información de los aportes de micronutrientes que se debe presentar en formato de tabla, y solo se acepta en párrafo si no cabe en etiquetado o empaque primario.

          .tarjeta.tarjeta.color-acento-botones4.p-3(x="24%" y="90%" numero="4")
            .h5.mb-2.heading_t4  4. Información sobre la presentación comercial
            p.heading_t4  Es la información sobre el contenido del producto, peso bruto, el peso neto y similares, así mismo, aspectos del material del envase si es reciclable y forma de destinación final.

          .tarjeta.tarjeta.color-acento-botones4.p-3(x="44%" y="80%" numero="5")
            .h5.mb-2.heading_t4  5. Uso previsto
            p.heading_t4  Es la información sobre el uso recomendado del producto, si se emplea para ensaladas, como ingrediente para otros platos, si es necesario su cocción, etc.

          .tarjeta.tarjeta.color-acento-botones4.p-3(x="18%" y="74%" numero="6")
            .h5.mb-2.heading_t4  6. Población de destino
            p.heading_t4  Es la recomendación del grupo de personas para quien se orienta el producto, niños, adultos o personas en situaciones de vulnerabilidad nutricional o de otro tipo; así mismo indicar si el producto alimenticio puede ser riesgoso para personas alérgicas, y demás contraindicaciones.

          .tarjeta.tarjeta.color-acento-botones4.p-3(x="42%" y="5%" numero="7")
            .h5.mb-2.heading_t4  7. Vida útil
            p.heading_t4  Es el espacio comprendido entre la fecha de fabricación y la de vencimiento o simplemente como fecha límite para el consumo.

          .tarjeta.tarjeta.color-acento-botones4.p-3(x="47%" y="50%" numero="8")
            .h5.mb-2.heading_t4  8. Condiciones de almacenamiento y conservación
            p.heading_t4  Describe el entorno de las condiciones, o el ambiente bajo el cual se debe conservar o mantener el producto antes de su consumo, temperatura, humedad relativa. Lo que incluye aspectos para su movilidad y transporte de ser posible.

          .tarjeta.tarjeta.color-acento-botones4.p-3(x="46%" y="68%" numero="9")
            .h5.mb-2.heading_t4  9. Procedencia
            p.heading_t4 Es la información referente a quien lo elabora o fabrica, indicando el domicilio de manufactura o adecuación, municipio, ciudad, país, etc.
        
      separador
      #t_4_2.titulo-segundo.color-acento-contenido
        h2 4.2  Identificación electrónica de productos
      
      .row
        .col-lg-6
          p.mb-4 Esto se hace por medio de código de barras y/o código de barras QR, que son una imagen compuesta de líneas barras o puntos, que identifica a un producto en todos los países. 
          p.mb-0 El código de barras se compone de un código numérico único que es requisito para que el producto pueda venderse en tiendas y supermercados, porque identifica el país de procedencia, la empresa, el producto e inclusive el lote. En el caso de los códigos QR, es una combinación de puntos y barras que alberga mucha más información de los productos alimentarios, la cual puede ser: alfanumérico que puede almacenar hasta 4.296 caracteres, numérico que puede tener hasta 7,089 caracteres, y binario: llega a almacenar hasta 2,953 bytes, lo que permite albergar incluso imágenes.
        .col-lg-6
          img(src="@/assets/curso/temas/tema4/img4_tema_4.svg")

      .titulo-sexto.color-acento-contenido.mb-3.mt-5
        p.mb-0 <b>Figura.</b> Uso de códigos de barras para la identificación de productos alimenticios
      figure
        img(src='@/assets/curso/temas/tema4/img5_tema_4.svg', alt='Texto que describa la imagen')

      .row.mt-5
        .col-lg-12
        .cajon.color_anexo2.p-4
          p Para finalizar, recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo, para ello diríjase al menú principal en donde encontrará la síntesis, una actividad didáctica, material complementario, entre otros.
        
          
    

</template>

<script>
export default {
  name: 'Tema4',
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
