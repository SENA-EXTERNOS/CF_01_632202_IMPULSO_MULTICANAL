<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Portafolio de productos y categorías

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img1_tema_3.svg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Portafolio es un vocablo que viene del francés: portefeuille, que representa una especie de maletín o cartera de mano que se usa para llevar documentos, libros y otros papeles, refiriéndose a un accesorio de utilización común por parte de trabajadores de oficina para llevar cosas o documentos de negocios. Hoy por hoy este término refiere al grupo de productos que una empresa o marca ofrece a todo su mercado objetivo, los cuales ordena por grupos de líneas de productos, categorías, marcas, y, por último, el conjunto de productos propiamente que vende.

    h4.mt-5 Componentes de la estructura de un portafolio
    p.mb-0 La estructura de un portafolio comercial de productos contempla cuatro aspectos que definen los niveles de agrupación básicamente, los cuales se muestran en la siguiente figura: 

    figure.mt-5
      img(src='@/assets/curso/temas/tema3/img2_tema_3.svg', alt='Texto que describa la imagen')


    .bg--img_03.mt-5
      .row.justify-content-center.mb-4
        .col-lg-4
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/temas/tema3/img3_tema_3.svg", alt="alt").img400.m-auto
        .col-lg-8
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
            .row(titulo="Amplitud")
              .col-12.color_anexo3
                p.mb-0 Representa el conjunto de categorías o tipos de productos que se comercializa por parte de la empresa, por ejemplo: productos de granos, aceites y grasas, productos de aseo para el hogar.

            .row(titulo="Extensión horizontal")
              .col-12.color_anexo3
                p.mb-0 Corresponde a las diferentes opciones dentro de una línea o categoría, son variaciones de forma en la misma clase de productos, por ejemplo: dentro de los productos de la línea o categoría de productos de aseo para el hogar, se pueden tener dos tipos de detergente para ropa: detergente líquido y en polvo.

            .row(titulo="Extensión vertical o profundidad")
              .col-12.color_anexo3
                p.mb-0 Es el conjunto de opciones de un producto que varían de tamaño, cantidad, presentación, entre otros; por ejemplo: dentro de los productos lácteos, leche entera, se puede obtener en galón de 2000 ml o se puede obtener en bolsa larga vida de 1.100 mil, siendo de la misma marca y tipo de producto.

            .row(titulo="Consistencia")
              .col-12.color_anexo3
                p.mb-0 Es la coherencia que debe existir al interior de cada categoría entre tipos de productos, tipos de clientes y su distribución, es decir, si una categoría es de productos alimenticios, no debe incluir productos de aseo para el hogar en la misma categoría, así mismo si son lácteos, no debe asociarse con categorías de jabones y detergentes, en caso de promoción y publicidad se debe tener una relación entre cada línea de producto.

    .tabla-a.color-acento-contenido 
      table
        caption Fuente: elaboración propia experto
        thead
          tr
            th Amplitud
            th Extensión Horizontal
            th Extensión Vertical o Profundidad
            th Consistencia
        tbody
          tr
            td 
            td Leche entera
            td 
            td 
          tr
            td  
            td Leche deslactosada
            td 
          tr
            td 
            td Yogurt entero
            td 
            td 
          tr
            td 
            td Yogurt fitness
            td 
            td  
    separador
    #t_1_1.titulo-segundo.color-acento-contenido
      h2 3.1 Funcionalidad del portafolio

    .row
      .col-lg-12
          p.mb-5 La estructura de un portafolio permite varias funcionalidades que contribuyen a la gestión de mercadeo y ventas en las empresas de alimentos, como son:
      .col-lg-6
          img(src="@/assets/curso/temas/tema3/img5_tema_3.svg", alt="alt")
          figcaption Ejemplo de portafolio de productos en canal convencional y canal web de empresas de alimentos

      .col-lg-6
         ol
          li 
            .lista-ol--cuadro__vineta
            | Permite el análisis de competitividad de cada uno de los productos y sus presentaciones, así como el análisis de las líneas o categorías a las que corresponden, en aspectos como rotación, margen de contribución unitario y como la rentabilidad de las diferentes líneas o categorías de productos.
          li 
            .lista-ol--cuadro__vineta
            | Facilita identificar los productos más vendidos, los menos vendidos, y sus características, evidenciando a través de qué canales de venta, qué tipo de presentación o variación, etc.     
          li 
            .lista-ol--cuadro__vineta 
            | Permite realizar estudios de precios, ya que posibilita la comparar con la competencia cuales obedecen permiten la viabilidad rentable. El portafolio de productos permite tomar decisiones respecto de estrategias comerciales, reforzando los más débiles y ampliando los productos más fuertes.
          li 
            .lista-ol--cuadro__vineta
            | Facilita las ventas pues la contribución de un portafolio permite que los clientes identifiquen las posibilidades de compra, y que otras opciones de productos pueden acceder por marca o por categoría.
          li 
            .list-ol--cuadro__vineta 
            | En general el portafolio y su comportamiento define las estacionalidades de venta, desde el análisis de cada línea o producto, en función del periodo de venta en un año, es decir en qué época se vende más o menos cada producto, lo que facilita la planeación y programación de la producción.
          li 
            .lista-ol--cuadro__vineta
            | Orienta la contratación de personal y distribuidores según las necesidades de la empresa.

    separador
    #t_1_1.titulo-segundo.color-acento-contenido
      h2 3.2 Ruta del protafolio de productos

    .row
      .col-lg-6
          img(src="@/assets/curso/temas/tema3/img5_tema_3.svg", alt="alt") 
      .col-lg-6
          p.mb-5 Cada categoría o producto dentro de una línea puede ser administrado por un director independiente y distinto, quienes establecerán un plan de acción individual y objetivos a corto plazo. La ruta de portafolio de producto es una herramienta que permite visualizar cómo se correlacionan los planes de cada línea o producto dentro de los objetivos generales de la empresa; en general la ruta de portafolio establece las estrategias y la dirección de todo el equipo de productos, facilitando comunicar cómo esperan que evolucione cada producto, y la relación con las otras líneas, los plazos y los objetivos de las diferentes áreas de una empresa.
          p.mb-0 Dentro de la ruta de portafolio se define que categorías o líneas de producto se deben ofertar en cada uno de los canales: página web, redes sociales, Apps, banners promocionales, canales de tiendas de barrio, canales de grandes superficies etc., así mismo, con las extensiones horizontales y su presentación o extensión vertical, lo que debe orientarse a las metas y proyectos desde cada dirección de categoría o producto.

    .titulo-sexto.color-acento-contenido.mb-3.mt-5
      p.mb-0 <b>Figura.</b> Ejemplo de un esquema de ruta de portafolio de productos
       
          
    figure
      img(src='@/assets/curso/temas/tema3/img10_tema_3.svg', alt='Texto que describa la imagen')

    separador
    #t_1_1.titulo-segundo.color-acento-contenido
      h2 3.3 Empaques y embalaje de alimentos  
     
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img2_tema_1.svg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los alimentos para su comercialización, venta y distribución requieren de un envase, el cual es el que protege y reserva el alimento para que cumpla su vida útil y lo protege de contaminaciones patógenas, así mismo sirve como instrumento (en muchos casos), de soporte de la ficha de composición e imagen de promoción de marca. Los empaques y embalajes se clasifican de la siguiente manera.


    .bg--img_03.mt-5
      .row.justify-content-left.mb-4
        .col-lg-12
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
            .row(titulo="Embalaje de venta, empaque primario, o unidad de consumo")
              .col-6.color_anexo3
                p.mb-0 es el que guarda y protege el producto y lo protege de manipulaciones directas. Está en contacto directo con el artículo y sirve para mantenerlo en condiciones óptimas. Este embalaje define la unidad de consumo más pequeña, facilitando la venta unitaria del producto. Toma formas muy diversas: botellas, latas, bolsas, etc.
              .col-6.color_anexo3
                img(src="@/assets/curso/temas/tema3/img7_tema_3.svg", alt="alt") 

            .row(titulo="Empaque y embalaje secundario o colectivo")
              .col-6.color_anexo3
                p.mb-0 Es una agrupación de embalajes primarios que buscan dar mayor protección al producto, facilitando la comercialización del producto a una mayor escala y movilidad. Son, las cajas de cartón (también podrían ser de plástico). Por ejemplo, en el caso de la leche, una bolsa individual sería un embalaje primario y la caja de cartón que contiene seis representaría un embalaje secundario.
              .col-6.color_anexo3
                img(src="@/assets/curso/temas/tema3/img8_tema_3.svg", alt="alt")  

            .row(titulo="Embalaje terciario")
              .col-6.color_anexo3
                p.mb-0 El embalaje terciario reúne embalajes primarios y secundarios para así crear una unidad de carga mayor cuya forma más extendida son las estibas o contenedores o las cajas de cartón modulares que los conforman.
              .col-6.color_anexo3
                img(src="@/assets/curso/temas/tema3/img9_tema_3.svg", alt="alt") 
            

</template>

<script>
export default {
  name: 'Tema3',
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
