<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Portafolio de productos y categorías

    .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-4
      .bloque-texto-g1__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img1_tema_3.svg')})`}"
      )
      .bloque-texto-g1__texto.p-3
        p Para la comercialización de productos de todo tipo, es necesario contar con un portafolio de productos que describa las características y cualidades de cada uno de los productos que la organización vende. En este apartado se describe la funcionalidad y la ruta hacía el diseño de portafolio de productos.
        p Portafolio, es un vocablo que viene del francés: #[i portefeuille], que representa una especie de maletín o cartera de mano que se usa para llevar documentos, libros y otros papeles, refiriéndose a un accesorio de utilización común por parte de trabajadores de oficina. Hoy por, hoy este término refiere al grupo de productos que una empresa o marca ofrece a todo su mercado objetivo, los cuales ordena por grupos de líneas de productos, categorías, marcas y, por último, el conjunto de productos propiamente que vende.


    .row
      .col-lg-12
        h4.mt-5 Componentes de la estructura de un portafolio
        p.mb-0 La estructura de un portafolio comercial de productos contempla cuatro aspectos que definen los niveles de agrupación:

    .row.justify-content-center.mb-5
      .col-lg-10
        figure.mt-5
          img(src='@/assets/curso/temas/tema3/img2_tema_3.svg', alt='Texto que describa la imagen')


    .bg--img_03.mt-5
      .row.justify-content-center.mb-4
        .col-lg-4
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/temas/tema3/img3_tema_3.svg", alt="alt").img400.m-auto
        .col-lg-8
          AcordionA.mt-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
            .row(titulo="Amplitud")
              .col-md-12.mb-4.mb-md-0
                p Representa el conjunto de categorías o tipos de productos que se comercializa por parte de la empresa, por ejemplo: productos de granos, aceites y grasas, productos de aseo para el hogar.
            
            .row(titulo="Extensión horizontal")
              .col-md-12.mb-4.mb-md-0
                p Corresponde a las diferentes opciones dentro de una línea o categoría. Son variaciones, de forma, en la misma clase de productos. Por ejemplo, dentro de los productos de la línea o categoría de productos de aseo para el hogar se pueden tener dos tipos de detergente para ropa: detergente líquido y en polvo.

            .row(titulo="Extensión vertical o profundidad")
              .col-md-12.mb-4.mb-md-0
                p Es el conjunto de opciones de un producto: tamaño, cantidad, presentación, entre otros. Por ejemplo, dentro de los productos lácteos, la leche entera se puede obtener en galón de 2000 ml o se puede obtener en bolsa larga vida de 1.100 ml, siendo de la misma marca y tipo de producto.

            .row(titulo="Consistencia")
              .col-md-12.mb-4.mb-md-0
                p Es la coherencia que debe existir al interior de cada categoría entre tipos de productos, tipos de clientes y su distribución, es decir, si una categoría es de productos alimenticios no debe incluir productos de aseo para el hogar en la misma categoría. Así mismo si son lácteos, no debe asociarse con categorías de jabones y detergentes, en caso de promoción y publicidad se debe tener una relación entre cada línea de producto.

    .row.mb-4
      .col-lg-12
      p.mb-0 En la siguiente tabla se presenta un ejemplo de cómo se puede realizar la estructura de un producto. 
    
    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5.mb-0 Tabla 2
          | #[i Ejemplo de estructura de un portafolio de producto]

        .tabla-a.color-acento-contenido 
          table
            thead
              tr
                th Amplitud
                th Extensión Horizontal
                th Extensión Vertical o Profundidad
                th Consistencia
            tbody
              tr
                td(rowspan="4").text-center 
                  .col-lg-12
                    a.anexo_icono
                      img(width="70" height="90" src='@/assets/curso/temas/tema3/icon1_tema_3.svg', alt='Texto que describa la imagen') 
              
                  .col-lg-12
                    a.anexo__texto
                      p.mt-3  <b>Productos Lácteos</b>

                td 
                  .col-lg12
                    a.anexo__texto.text-center
                      p.mt-3 Leche entera
                td
                  .col-lg-12
                    a.anexo__texto.text-center
                      p Tarro x 2.000. ml. 
                      p Caja  x 1.000. ml. 
                      p Bolsa x 1.000. ml. 
                      p Bolsa x   900. ml. 

                td(rowspan="2")
                  .col-lg12
                    a.anexo__texto.text-center
                      p.mt-3 Corresponde al mismo tipo de producto, se diferencian por el tipo de empaque, por ende, su vida útil es similar.
              tr
                td 
                  .col-lg12
                    a.anexo__texto.text-center
                      p.mt-3 Leche deslactosada
                td 
                  .col-lg-12
                    a.anexo__texto.text-center
                      p Caja  x 1.000. ml. 
                      p Bolsa x 1.000. ml. 
                      p Bolsa x 900. ml.  
                          
              tr
                td
                  .col-lg12
                    a.anexo__texto.text-center
                      p.mt-3 Yogurt entero 
                td 
                  .col-lg-12
                    a.anexo__texto.text-center
                      p.mb-3 Tarro x 2.000. ml. 
                      p.mb-3 Bolsa x 1.000. ml. 
                      p.mb-3 Vaso x  200.  ml. 
                td(rowspan="2")
                  .row
                    .col-lg-12
                      a.anexo__text-center
                        p.mt-3 Es un derivado lácteo, con vida útil similares.
              tr
                
                td
                  .col-lg12
                    a.anexo__texto.text-center
                      p.mt-3  Yogurt fitness   
                td 
                  .col-lg-12
                    a.anexo__texto.text-center
                      p.mb-3 Tarro x 2.000. ml. 
                      p.mb-3 Bolsa x 1.000. ml. 
                      p.mb-3 Vaso x  200.  ml. 
                

    separador
    
    #t_3_1.titulo-segundo.color-acento-contenido.mt-5
      h2 3.1 Funcionalidad del portafolio de productos

    .row
      .col-lg-12
          p.mb-5 La estructura de un portafolio permite varias funcionalidades que contribuyen a la gestión de mercadeo y ventas en las empresas de alimentos, como son:
      
      
    .row  
      .col-lg-4
          img(src="@/assets/curso/temas/tema3/img4_tema_3.png", alt="alt")

      .col-lg-8.sm.mb-5.mb-sm-0
        h4 
        ul.lista-ul--color
          li 
            i.fas.fa-check
            | Permite el análisis de competitividad de cada uno de los productos y sus presentaciones, así como el análisis de las líneas o categorías a las que corresponden, en aspectos como rotación, margen de contribución unitario y como la rentabilidad de las diferentes líneas o categorías de productos.
          li 
            i.fas.fa-check
            | Facilita identificar los productos más vendidos, los menos vendidos, y sus características, evidenciando a través de qué canales de venta, qué tipo de presentación o variación, etc.
          
          li 
            i.fas.fa-check
            | Permite realizar estudios de precios, ya que posibilita comparar con la competencia y determinar cuáles permiten viabilidad rentable. El portafolio de productos permite tomar decisiones respecto de estrategias comerciales, reforzando los productos más débiles y ampliando los productos más fuertes.
    
          li
            i.fas.fa-check
            | Facilita las ventas, ya que la contribución de un portafolio permite que los clientes identifiquen las posibilidades de compra y que otras opciones de productos puedan acceder por marca o por categoría.

          li
            i.fas.fa-check 
            | En general, el portafolio y su comportamiento define las estacionalidades de venta, desde el análisis de cada línea o producto, en función del periodo de venta en un año, es decir en qué época se vende más o menos, cada producto. Esto facilita la planeación y programación de la producción.
          
          li
            i.fas.fa-check 
            | Orienta la contratación de personal y distribuidores según las necesidades de la empresa.

    separador
    #t_3_2.titulo-segundo.color-acento-contenido
      h2 3.2 Ruta del protafolio de productos

    .row
      .col-lg-5.mb-4
          img(src="@/assets/curso/temas/tema3/img5_tema_3.svg", alt="alt") 
      .col-lg-7
          p.mb-3 Cada categoría o producto dentro de una línea puede ser administrado por un director independiente y distinto, quienes establecerán un plan de acción individual y objetivos a corto plazo. La ruta de portafolio de producto es una herramienta que permite visualizar cómo se correlacionan los planes de cada línea o producto dentro de los objetivos generales de la empresa; en general la ruta de portafolio establece las estrategias y la dirección de todo el equipo de productos, facilitando comunicar cómo esperan que evolucione cada producto, y la relación con las otras líneas, los plazos y los objetivos de las diferentes áreas de una empresa.
          p.mb-5 Dentro de la ruta de portafolio se define qué categorías o líneas de producto se deben ofertar en cada uno de los canales: página web, redes sociales, Apps, banners promocionales, canales de tiendas de barrio, canales de grandes superficies etc., así mismo, con las extensiones horizontales y su presentación o extensión vertical, lo que debe orientarse a las metas y proyectos desde cada dirección de categoría o producto.
    .row  
      .col-lg-12
          p.mb-0-mt-5 A continuación, se presenta un ejemplo de la ruta de un portafolio de producto a través de un esquema o tabla.
   
    .row
      .titulo-sexto.color-acento-contenido.mb-4
        h5.mb-0 Figura 3
        | #[i Ejemplo de un esquema de ruta de portafolio de productos]
    .row        
      .col-lg-12  
        figure.mt-3
          img(src='@/assets/curso/temas/tema3/img10_tema_3.svg', alt='Texto que describa la imagen')

    separador
    #t_3_3.titulo-segundo.color-acento-contenido
      h2 3.3 Empaques y embalaje de alimentos  
     
    .bloque-texto-g.color-secundario2.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img6_tema_3.png')})`}"
        )
      .bloque-texto-g__texto-t3.p-4
        p.mb-0 Para la comercialización, venta y distribución de alimentos se requiere, generalmente, un envase que proteja y reserve el alimento y, así, cumpla su vida útil. La protección será en contra de contaminaciones patógenas. Así mismo, el envase sirve como instrumento (en muchos casos) de soporte de la ficha de composición e imagen de promoción de marca. Los empaques y embalajes se clasifican de la siguiente manera.


    AcordionA.mt-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row(titulo="Embalaje de venta, empaque primario, o unidad de consumo")
        .col-md-6.mb-4.mb-md-0
          p Es el que guarda y protege el producto, de manipulaciones directas. Está en contacto directo con el artículo y sirve para mantenerlo en condiciones óptimas. Este embalaje define la unidad de consumo más pequeña, facilitando la venta unitaria del producto. Toma formas muy diversas: botellas, latas, bolsas, etc.

        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema3/img7_tema_3.svg', alt='Texto que describa la imagen')

      .row(titulo="Empaque y embalaje secundario o colectivo")
        .col-md-6.mb-4.mb-md-0
          p Es una agrupación de embalajes primarios que buscan dar mayor protección al producto, facilitando la comercialización del producto a una mayor escala y movilidad, por ejemplo, cajas de cartón (también podrían ser de plástico). En el caso de la leche, una bolsa individual sería un embalaje primario y la caja de cartón que contiene seis bolsas, representaría un embalaje secundario.
              
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema3/img8_tema_3.svg', alt='Texto que describa la imagen')

      .row(titulo="Embalaje terciario")
        .col-md-6.mb-4.mb-md-0
          p El embalaje terciario reúne embalajes primarios y secundarios para así crear una unidad de carga mayor, cuya forma más extendida son las estibas o contenedores o las cajas de cartón modulares que los conforman.
                
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema3/img9_tema_3.svg', alt='Texto que describa la imagen')       
             
        
                      
            

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
