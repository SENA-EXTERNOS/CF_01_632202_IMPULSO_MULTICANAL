<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido.mb-5
      .titulo-principal__numero
        span 1
      h1 Buenas Prácticas de manipulación de alimentos


    .row.mb-5
      .col-lg-5
          img(src="@/assets/curso/temas/tema1/img1_tema_1.svg", alt="alt")
      .col-lg-7
          p En la producción y comercialización de alimentos se deben cumplir las normas que establecen las buenas prácticas de manipulación de alimentos, siendo necesario reconocer los aspectos en los que se deben desarrollar las buenas prácticas y la normatividad vigente del país, para este caso Colombia, que se estudiarán en este primer tema. 
          p El desarrollo de las actividades relacionadas con la manipulación de alimentos, presume niveles de contaminación de diversas formas y diversos orígenes, lo que estimula la degradación y daño de los mismos; por tanto con el paso de los años se ha hecho perentorio el mejoramiento de los procesos y actividades humanas cuando entran en contacto con los alimentos, surgiendo así las denominadas BPM que significa: #[strong Buenas Prácticas de Manufactura, que se define a continuación.]
          p <b style= "color:#F57C22;">El conjunto de lineamientos generales que se establece por parte de las entidades de control sanitario, para promover y preservar la higiene en los procesos y actividades donde se realiza manipulación, adecuación, preparación, elaboración o armado, almacenamiento, envase, transporte, distribución.</b>    
    
    .bloque-texto-g.color-secundario2.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img2_tema_1.svg')})`}"
        )
      .bloque-texto-g__texto-t3.p-4
        p.mb-0  En Colombia una de las autoridades sanitarias encargadas de promover y vigilar estas prácticas adecuadas de manufactura de alimentos es el IVIMA- El Instituto Nacional de Vigilancia de Medicamentos y Alimentos, quien emite principios y conceptos sanitarios frente a las prácticas y los ajustes a que se dé a lugar. Así mismo participan en este fomento y desarrollo de buenas prácticas, el Instituto Colombiano Agropecuario – ICA, El Ministerio de Salud y las Entidades Territoriales de Salud de los diferentes departamentos y municipios del país.
   
    separador
    
    #t_1_1.titulo-segundo.color-acento-contenido.mt-5
      h2 1.1	Aspectos de las buenas prácticas de manufactura de alimentos
    .row
      .col-lg-12
        p.mb-0 El desarrollo de buenas prácticas de manufactura exige que se contemplen algunos aspectos que aporten al cumplimiento de la normativa y que, en la empresa, se pueda garantizar la manipulación correcta de los alimentos que comercializa. A continuación, se describen algunos de los más importantes. 
    .row.mt-3
      .col-lg-12
        p.mb-0 La doctrina desarrollada a partir de la normatividad establecida, por parte de las entidades de sanidad en Colombia, para promover las buenas prácticas de manufactura de alimentos, se soporta en un conjunto de normas que abarcan diversos aspectos a desarrollar en las empresas, en cabeza de sus directivas y de los individuos que participan en los procesos y actividades dentro de la cadena productiva y comercial de los alimentos, los cuales se pueden resumir en la siguiente manera:


    
    .row.justify-content-center.mt-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 1
          br
          span.fst-italic Buenas prácticas de manufactura de alimentos.
        figure
          img(src="@/assets/curso/temas/tema1/img3_tema_1.svg", alt="Texto que describa la imagen")
      
      p.mb-0.mt-5 A continuación, se describen cada uno de los aspectos por desarrollar, en el ejercicio de buenas prácticas de manufactura de alimentos:
    
    .row.mt-5.mb-5
      TabsC.color-primario
        .py-3.py-md-4(titulo="Equipos e instalaciones")
          .row
            .col-md-4
              figure
                img(src='@/assets/curso/temas/tema1/img4_tema_1.svg', alt='Texto que describa la imagen')
            
            .col-md-8.mb-4.mb-md-0
              h4 Equipos e instalaciones
              p Los equipos y las instalaciones de operación (bodegas), en general, deben estar diseñados con características adecuadas a cada tipo de alimento. Estos espacios, según corresponda, serán secos, de cuartos fríos, en materiales resistentes, impermeables, sin filtraciones o defectuosos con fisuras, no porosos, no absorbentes o que permitan filtraciones, de fácil acceso para realizar las actividades de limpieza, que presenten una distribución secuencial y lógica al proceso de producción empaque y despacho, con sus debidas delimitaciones y señalizaciones y adecuaciones de aislamiento para evitar traslado de atmósferas o contaminaciones por tipos de poluciones o gases, etc. Debe haber servicios sanitarios suficientes y suministro de recursos como agua, entre otros.
                
        .py-3.py-md-4(titulo="Requisitos de higiene y fabricación")
          .row
            .col-md-4
              figure
                img(src='@/assets/curso/temas/tema1/img5_tema_1.svg', alt='Texto que describa la imagen')
                
            .col-md-8.mb-4.mb-md-0
              h4 Requisitos de higiene y fabricación
              p En este aspecto de buenas prácticas de manufactura, la empresa debe verificar que los proveedores de materias primas, insumos y suministros, como empaques marquillas etc., cumplan con estrictas características de higiene e inocuidad, sanidad de sus productos, calidad e integralidad técnica de los mismos, evidenciando que como proveedores, aplican durante su proceso de obtención, métodos y controles sanitarios y de higiene que garantizan la idoneidad de las materias primas insumos y suministros, previniendo así, la contaminación. De igual manera la empresa debe aplicar en sus instalaciones, y con su personal de trabajo, iniciativas de rutina que favorezcan la cultura de higiene y sanidad de los productos derivados de los procesos, dando continuidad en la cadena productiva y comercial, a la inocuidad de los productos.
        
        .py-3.py-md-4(titulo="Personal manipulador de alimentos")
          .row
            .col-md-4
              figure
                img(src='@/assets/curso/temas/tema1/img6_tema_1.svg', alt='Texto que describa la imagen')
                
            .col-md-8.mb-4.mb-md-0
              h4 Personal manipulador de alimentos
              p Refiere al conjunto de trabajadores de la empresa productora, transportadora y comercializadora de alimentos, la cual debe cumplir estrictamente las normas de higiene, protección y seguridad industrial, de tal manera que se mantenga un adecuado ambiente de limpieza, higiene, y salud en el trabajo; ello implica acogerse a planes de capacitación permanentes, continuos y periódicos, los cuales deberán desarrollarse en, mínimo, 10 horas al año y deben estar avalados por una entidad competente, no en el ejercicio discrecional e interno de la empresa.
        
        .py-3.py-md-4(titulo="Aseguramiento a la calidad e inocuidad")
          .row
            .col-md-4
              figure
                img(src='@/assets/curso/temas/tema1/img7_tema_1.svg', alt='Texto que describa la imagen')
                
            .col-md-8.mb-4.mb-md-0
              h4 Aseguramiento a la calidad e inocuidad
              p Las empresas deben establecer procesos y procedimientos bien definidos que garanticen, de manera permanente, las características de los productos, tal como fueron diseñados y en conformidad con las características técnicas. Complementariamente y en función la gestión operativa de producción, se debe implementar un esquema de controles de calidad preventivos, los cuales se deben establecer:

        .py-3.py-md-4(titulo="Planes de saneamiento")
          .row  
            .col-md-12
              h4 Planes de saneamiento
              p Este aspecto reúne el conjunto de actividades clasificadas por programas que permiten mantener limpio y saneado el ambiente de la fábrica, bodega, almacén y flota de transportes de alimentos y demás recursos físicos de operación; lo cual contempla:
          
          .row.img1_t1
            .col-md-10.mb-5.mb-md-0
              .titulo-sexto.color-acento-contenido.mb-3.mt-5
                h5 Figura 2
                br
                i Técnica general de proceso de desinfección y limpieza

            
            .col-md-10.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/tema1/img9_tema_1.svg', alt='Texto que describa la imagen')
                figcaption.mt-3 <p>Fuente: elaboración propia experto</p> 

        .py-3.py-md-4(titulo="Almacenamiento, distribución, transporte y comercialización")
          .row
            .col-md-4
              figure
                img(src='@/assets/curso/temas/tema1/img8_tema_1.svg', alt='Texto que describa la imagen')
                
            .col-md-8.mb-4.mb-md-0
              h4 Almacenamiento, distribución, transporte y comercialización:
              p La empresa deberá aplicar un adecuado sistema de inventarios que permita la correcta rotación y conservación de productos, en conformidad con sus características de vida útil, teniendo en cuenta el tiempo de almacenamiento en cuarto fríos, bodegas o anaqueles, los cuales deben estar limpios y con distancias de aislamiento apropiado a piso y a techos. Como se trata de productos altamente perecederos, en su mayoría, por ser alimentos, se recomienda llevar un sistema de primeros en entrar, primeros en salir, lo que induce a una adecuada rotación.
        
    .row.justify-content-center.mb-5
      .col-lg-11
        .tarjeta.color-secundario.p-2.mb-5
          .row.justify-content-around.align-items-center
            .col-6.col-lg-2.mb-4
              img(src="@/assets/curso/temas/tema1/img11.svg").img11-tm1
            .col-lg-10
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Registro, permiso o notificación sanitaria
                  p Según las disposiciones contempladas por la Resolución 719 de 2015 del Ministerio de Salud y Protección Social, todos los alimentos que sean transformados y se comercialicen empacados, deberán contar con el respectivo registro sanitario o, en su defecto, permiso o notificación sanitaria.
                  p Para ampliar estos aspectos referentes a las condiciones de buenas prácticas de manufactura en alimentos, se sugiere consultar el Anexo:  “abc-inocuidad de alimentos”. 
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo-abc-inocuidad_de_alimentos.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download


      separador
      #t_1_2.titulo-segundo.color-acento-contenido
        h2 1.2.	Normatividad en buenas prácticas para manufactura de alimentos

      .row.justify-content-center.mb-5
        .col-8.col-lg-2.mb-4
          img(src="@/assets/curso/temas/tema1/img10_tema_1.svg")
        .col-lg-10
          p.mb-4 En Colombia existen normas y reglamentos que promueven y parametrizan las condiciones para las buenas prácticas de manufactura de alimentos y que son de obligatorio cumplimiento por parte de la empresas o personas jurídicas dedicadas a la fabricación, proceso, almacenamiento, distribución, comercialización y transporte de alimentos, las cuales se pueden describir de la siguiente manera:

      .row.justify-content-center.mb-5
        .col-lg-10
          .titulo-sexto.color-acento-contenido.mb-4
            h5 Tabla 1
            br
            span #[i Normas de parametrización de buenas prácticas en manufactura de alimentos.]
        .col-lg-10
          .tabla-a.color-acento-contenido 
            table
              thead
                tr
                  th Norma
                  th Descripción
              tbody
                tr
                  td.text-center  
                    .col-lg-12
                        a.anexo_icono
                          img(width="70" height="90" src='@/assets/curso/temas/tema1/icon1_tema_1.svg', alt='Texto que describa la imagen')
                      
                        p.mt-3.justify-content-around.align-items-center <b>Decreto 3075 de 1997</b> 
                    
                  td El Ministerio de la protección social en Colombia define las BPM como “Principios básicos y prácticas generales de higiene en la manipulación, preparación, elaboración, envasado, almacenamiento, transporte y distribución de alimentos para consumo humano, con el objeto de garantizar que los productos se fabriquen en condiciones sanitarias adecuadas y se minimicen los riesgos inherentes durante las diferentes etapas de la cadena de producción”.
                tr
                  td.text-center 
                    .col-lg-12
                        a.anexo_icono
                          img(width="70" height="90" src='@/assets/curso/temas/tema1/icon1_tema_1.svg', alt='Texto que describa la imagen')
                    
                        p.mt-3.justify-content-around.align-items-center <b>Resolución 2674 de 2013</b>

                  td Establece los requisitos sanitarios que deben cumplir las personas naturales y/o jurídicas que ejercen actividades de fabricación, procesamiento, preparación, envase, almacenamiento, transporte, distribución y comercialización de alimentos y materias primas de alimentos y los requisitos para la notificación, permiso o registro sanitario de los alimentos, según el riesgo en salud pública, con el fin de proteger la vida y la salud de las personas.
                    
                    .col-lg-12.mt-5
                      .tarjeta.color-secundario.p-3.mb-5
                        .col-8
                          p Para ver la resolución clic aquí
                        .col-4
                          a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo-Resolucion-2674-de-2013.pdf')" target="_blank")
                            span Descargar
                            i.fas.fa-file-download
                                

      .row
        .col-lg-12.mt-3
          .cajon.color_anexo2.p-4
            .h5 Reglas y disposiciones en materia de alimentos
            p Para complementar estos aspectos normativos de buenas prácticas de manufactura de alimentos y otros relacionados, se invita a consultar el nomograma de la Alcaldía Mayor de Bogotá, que recoge estas dos reglamentaciones y expone otro conjunto de disposiciones en materia de alimentos, través del siguiente link: 
            a.anexo.mb-4.mb-lg-0(href="https://www.alcaldiabogota.gov.co/sisjur/listados/tematica2.jsp?subtema=27896" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                b Enlace web
                p Docuemntos para ALIMENTOS : Reglamentación

            
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
