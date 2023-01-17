<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Ficha técnica de productos

    .row.mb-5
      .col-lg-7
        p Es necesario que las empresas cumplan con la normativa y requerimientos legales para la producción y comercialización de alimento, entre los que está la ficha técnica qué debe tener todo producto.
        p En la industria de los alimentos, la ficha técnica es un documento pequeño de carácter obligatorio y legal que se incluye en el empaque primario. Se utiliza para informar a los consumidores finales y clientes en general, así como a las autoridades sanitarias, respecto de las características de un producto alimenticio, incluyendo las condiciones de conservación y presentación de ingredientes, los peligros que puede tener el consumo, la lista de los aportes y valores nutricionales, entre otros aspectos. Es el nivel de información necesaria que se debe publicar para la comercialización de cualquier producto alimentario.
      .col-lg-5
        img(src="@/assets/curso/temas/tema4/img1_tema_4.svg")
    
    .row.justify-content-center.mb-3
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5.mb-0 Figura 3
          br
          | #[i Ficha técnica de producto alimenticio de Helado de Frutas.]

    .row.justify-content-center
      .col-lg-10 
        figure
          img(src='@/assets/curso/temas/tema4/img2_tema_4.svg', alt='Texto que describa la imagen')


    separador

    #t_4_1.titulo-segundo.color-acento-contenido.mt-5
      h2 4.1  Elementos que debe contener una ficha técnica

    .row.mb-5
      .col-lg-12
          p.mb-0 En lo posible las fichas técnicas de los productos alimentarios deben contener la siguiente información:

    .row.justify-content-center.mb-5
      .col-lg-8
        ImagenInfograficaB.color-primario
          template(v-slot:imagen)
            figure
              img(src="@/assets/curso/temas/tema4/img3_tema_4.svg")

          div(x="20%" y="33%" tooltip="" numero="1")
            h5 1. Nombre del producto
            p La ficha técnica de un alimento debe incluir el nombre o denominación comercial.

          div(x="15%" y="61%" tooltip="" numero="2")
            h5 2. Componentes o Ingredientes
            p Es la citación de todos los ingredientes o componentes que tiene el producto, los cuales se ordenan alfabéticamente.

          div(x="65%" y="44%" tooltip="" numero="3")
            h5 3. Características nutricionales
            p La información de los aportes de micronutrientes que se debe presentar en formato de tabla, y solo se acepta en párrafo si no cabe en etiquetado o empaque primario.

          div(x="16%" y="89%" tooltip="" numero="4")
            h5 4. Información sobre la presentación comercial
            p Es la información sobre el contenido del producto, peso bruto, el peso neto y similares, así mismo, aspectos del material del envase si es reciclable y forma de destinación final.

          div(x="35%" y="85%" tooltip="" numero="5")
            h5 5. Uso previsto
            p Es la información sobre el uso recomendado del producto, si se emplea para ensaladas, como ingrediente para otros platos, si es necesario su cocción, etc.

          div(x="27%" y="80%" tooltip="" numero="6")
            h5 6. Población de destino
            p Es la recomendación del grupo de personas para quien se orienta el producto, niños, adultos o personas en situaciones de vulnerabilidad nutricional o de otro tipo; así mismo indicar si el producto alimenticio puede ser riesgoso para personas alérgicas, y demás contraindicaciones.

          div(x="21%" y="6%" tooltip="" numero="7")
            h5 7. Vida útil
            p Es el espacio comprendido entre la fecha de fabricación y la de vencimiento o, simplemente, como fecha límite para el consumo.

          div(x="40%" y="33%" tooltip="" numero="8")
            h5 8. Condiciones de almacenamiento y conservación
            p Describe el entorno de las condiciones o el ambiente bajo el cual se debe conservar o mantener el producto antes de su consumo: temperatura, humedad relativa. Lo que incluye aspectos para su movilidad y transporte de ser posible.

          div(x="40%" y="73%" tooltip="" numero="9")
            h5 9. Procedencia
            p Es la información referente a quién lo elabora o fabrica, indicando el domicilio de manufactura o adecuación, municipio, ciudad, país, etc.



    separador
    #t_4_2.titulo-segundo.color-acento-contenido
      h2 4.2  Identificación electrónica de productos
    
    .row.mb-5
      .col-lg-7.mb-4
        p.mb-3 Esto se hace por medio de código de barras y/o código de barras QR, que son una imagen compuesta de líneas barras o puntos, que identifica a un producto en todos los países. 
        p.mb-0 El código de barras se compone de un código numérico único que es requisito para que el producto pueda venderse en tiendas y supermercados, porque identifica el país de procedencia, la empresa, el producto e, inclusive, el lote. En el caso de los códigos QR, es una combinación de puntos y barras que alberga mucha más información de los productos alimentarios, la cual puede ser: alfanumérico que puede almacenar hasta 4.296 caracteres, numérico que puede tener hasta 7,089 caracteres y binario, que llega a almacenar hasta 2,953 bytes, lo que permite albergar incluso imágenes.
      .col-lg-5
        img(src="@/assets/curso/temas/tema4/img4_tema_4.svg")

    .row.justify-content-center.mb-3
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5.mb-0 Figura 4
          br
          | #[i Uso de códigos de barras para la identificación de productos alimenticios.]
        
      .col-lg-10.mb-5
        figure
          img(src='@/assets/curso/temas/tema4/img5_tema_4.svg', alt='Texto que describa la imagen')

      .col-lg-10.mt-3
        .cajon.color_anexo2.p-4
          p Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros.
        
          
    

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
