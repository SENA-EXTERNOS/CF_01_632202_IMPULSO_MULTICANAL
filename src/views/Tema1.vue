<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Buenas Prácticas de manipulación de alimentos


    .row
      .col-lg-4
          img(width="200" height="200" src="@/assets/curso/temas/tema1/img1_tema_1.svg", alt="alt")
      .col-lg-8
          p.mb-5 El desarrollo de la actividades relacionadas con la manipulación de alimentos presumen niveles de contaminación de diversas formas y diversos orígenes lo que estimula su degradación y daño de los mismos; por tanto con el paso de los años se hizo perentorio el mejoramiento de los procesos y actividades humanas cuando entran en contacto con los alimentos, siendo así, que surgen <b>las denominadas BPM que significa:</b> Buenas Prácticas de Manufactura, las cuales se pueden definir como <b style= "color:#F57C22;">el conjunto de lineamientos generales que se establece por parte de las entidades de control sanitario, para promover y preservar la  higiene en los procesos y actividades donde se realiza manipulación, adecuación, preparación, elaboración o armado, almacenamiento, envase, transporte, distribución.</b>    


    .bloque-texto-g.color-secundario2.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img2_tema_1.svg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En Colombia una de las autoridades sanitarias encargadas de promover y vigilar estas prácticas adecuadas de manufactura de alimentos es el IVIMA- El Instituto Nacional de Vigilancia de Medicamentos y Alimentos, y quien emite principios y conceptos sanitarios frente a las prácticas y los ajustes a que se dé a lugar. Así mismo participan en este fomento y desarrollo de buenas prácticas, el Instituto Colombiano Agropecuario – ICA. El Ministerio de Salud y las Entidades Territoriales de Salud de los diferentes departamentos y municipios del país.

    separador
    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1 Aspectos en los que se deben desarrollar buenas prácticas de manufactura de alimentos
    
    figure.mb-7
      img(src="@/assets/curso/temas/tema1/img3_tema_1.svg", alt="Texto que describa la imagen")
  
      p.mb-0.mt-5 A continuación, se describe cada uno de los aspectos a desarrollar en el ejercicio de buenas prácticas de manufactura de alimentos:

  .tarjeta.tarjeta--gris.p-4
      LineaTiempoC.color-acento-contenido(text-small)
        .row(titulo="Equipos e Instalaciones")
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img4_tema_1.svg', alt='Texto que describa la imagen')
            
          .col-md-6.mb-4.mb-md-0
            p <b>Equipos e Instalaciones</b> 
            p.mb-0 En este aspectos los equipos y las instalaciones de operación (bodegas), en general deben estar diseñadas con características adecuadas a cada tipo de alimentos bien sean estos espacios físicos secos, de cuartos fríos, en materiales resistentes, impermeables, sin filtraciones o defectuosos con fisuras, no porosos, no absorbentes o que permitan filtraciones, de fácil acceso para realizar las actividades de limpieza, que presenten una distribución secuencial y lógica al proceso de producción empaque y despacho, con sus debidas delimitaciones y señalizaciones y adecuaciones de aislamiento para evitar traslado de atmosferas atmósferas o contaminaciones por tipos de poluciones o gases, etc.. Debe haber servicios sanitarios suficientes y suministro de recursos como el agua, entre otros.

        .row(titulo="Requisitos de Higiene y fabricación")
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img5_tema_1.svg', alt='Texto que describa la imagen')

          .col-md-6.mb-4.mb-md-0
            p <b>Requisitos de Higiene y fabricación</b>
            p.mb-0 En este aspecto de buenas prácticas de manufactura, la empresa debe verificar que los proveedores de materias primas, insumos y suministros como empaques marquillas etc., deben cumplir con estrictas características de higiene e inocuidad, sanidad de sus productos como de la calidad e integralidad técnica de los mismos, evidenciando que como proveedores, aplican durante su proceso de obtención métodos y controles sanitarios y de higiene que garantizan la idoneidad de las materias primas insumos y suministros, previniendo así, la contaminación. De igual manera la empresa debe aplicar en sus instalaciones y personal de trabajo iniciativas de rutina que favorezcan la cultura de higiene y sanidad de los productos derivados de los procesos, dando continuidad en la cadena productiva y comercial a inocuidad de los productos.
        
        .row(titulo="Personal Manipulador de Alimentos")
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img6_tema_1.svg', alt='Texto que describa la imagen')
              
          .col-md-6.mb-4.mb-md-0
            p <b>Personal Manipulador de Alimentos</b>
            p.mb-0 Este aspecto refiere al conjunto de trabajadores de la empresa productora, transportadora y comercializadora de alimentos, la cual debe cumplir estrictamente las normas de higiene, protección y seguridad industrial, de tal manera que se mantenga un adecuado ambiente de limpieza, higiene, y salud en el trabajo; lo cual implica acogerse a planes de capacitación permanentes, continuos y periódicos, los cuales se considera de mínimo 10 horas al año y deben estar avalados por entidad competente, no en un ejercicio discrecional e interno de la empresa.

        .row(titulo="Aseguramiento a la Calidad e Inocuidad")
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img7_tema_1.svg', alt='Texto que describa la imagen')

          .col-md-6.mb-4.mb-md-0
            p <b>Aseguramiento a la Calidad e Inocuidad</b>
            p.mb-0 Las empresas deben establecer procesos y procedimientos bien definidos que garanticen de manera permanente las características de los productos, tal como fueron diseñados y en conformidad a las características técnicas. Complementariamente y en función la gestión operativa de producción se debe implementar un esquema de controles de calidad preventivos los cuales se deben establecer.

        .row(titulo="Almacenamientos, Distribución, ransportes y Comercialización")
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img8_tema_1.svg', alt='Texto que describa la imagen')

          .col-md-6.mb-4.mb-md-0
            p <b>Almacenamiento, distribución, transporte y comercialización del producto</b>
            p.mb-0 La empresa deberá aplicar un adecuado sistema de inventarios que permita la correcta rotación y conservación de productos, en conformidad a sus características de vida útil teniendo en cuenta el tiempo de almacenamiento en cuarto fríos, bodegas o anaqueles, los cuales deben estar limpios y con distancias de aislamiento apropiado a piso y a techos. Como se trata de productos altamente perecederos en su mayoría, por ser alimentos, se recomienda llevar un sistema de primeros en entrar, primeros en salir, lo que induce a una adecuada rotación.

        .row(titulo="Planes de Saneamiento")
          .col-md-12.mb-5.mb-md-0
            p <b>Planes de Saneamiento</b>
            p.mb-0 Este aspecto reúne el conjunto de actividades clasificadas por programas, que permiten mantener limpio y saneado el ambiente de la fábrica, bodega, almacén y flota de transportes de alimentos y demás recursos físicos de operación, el cual contempla:
        
        
          .col-md-10.mb-5.mb-md-0
            .titulo-sexto.color-acento-contenido.mb-3.mt-5
              p.mb-0 <b>Figura.</b> Técnica general de proceso de desinfección y limpieza

            figure
              img(src='@/assets/curso/temas/tema1/img9_tema_1.svg', alt='Texto que describa la imagen')
              figcaption.mt-5 <p>Fuente: elaboración propia experto</p>
      
             
      .row.mt-5
        .col-lg-14
          .cajon.color-acento-contenido.p-4
            .h5 Registro, permiso o Notificación Sanitaria
            p Según las disposiciones contempladas por la Resolución 719 de 2015 (Ministerio de Salud y Protección Social, 2015), todos los alimentos que sean transformados y se comercialicen empacados deberán contar con el respectivo registro sanitario o en su defecto, permiso o notificación sanitaria. 
            p.mb-0 Para ampliar estos aspectos referentes a las condiciones de buenas prácticas de manufactura en alimentos, se sugiere consultar el Anexo: Resolución 2674 De 2013, y el Anexo- abc-inocuidad de alimentos, documentos adjuntos a este componente formativo
            .col-lg-6
              a.anexo.mb-4.mt-5(:href="obtenerLink('/downloads/Anexo-abc-inocuidad_de_alimentos.pdf')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p <b>Anexo</b>
                  p.mb-0 632202_CF1_a01_abc-inocuidad de alimentos


      separador
      #t_1_2.titulo-segundo.color-acento-contenido
        h2 1.2 Normatividad para las buenas prácticas de manufactura en alimentos

      .row
        .col-lg-4
          img(width="100" height="200" src="@/assets/curso/temas/tema1/img10_tema_1.png")
        .col-lg-8
          p.mb-4 En Colombia si existen normas reglamentarias que promueven y parametrizan las condiciones para las buenas prácticas de manufactura en alimentos y que son de obligatorio cumplimiento por parte de la empresas o personas jurídicas dedicadas a la fabricación, proceso, almacenamiento, distribución, comercialización y transporte de alimentos, las cuales se pueden describir de la siguiente manera:
        .container.tarjeta.tarjeta--blanca.p-4.p-md-5

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
                
              td El del Ministerio de la protección social en Colombia define las BPM como “Principios básicos y prácticas generales de higiene en la manipulación, preparación, elaboración, envasado, almacenamiento, transporte y distribución de alimentos para consumo humano, con el objeto de garantizar que los productos se fabriquen en condiciones sanitarias adecuadas y se minimicen los riesgos inherentes durante las diferentes etapas de la cadena de producción”. (Presidencia de la República, 1997)
            tr
              td.text-center 
                .col-lg-12
                    a.anexo_icono
                      img(width="70" height="90" src='@/assets/curso/temas/tema1/icon1_tema_1.svg', alt='Texto que describa la imagen')
                
                    p.mt-3.justify-content-around.align-items-center <b>Resolución 2674 de 2013</b>

              td Establecer los requisitos sanitarios que deben cumplir las personas naturales y/o jurídicas que ejercen actividades de fabricación, procesamiento, preparación, envase, almacenamiento, transporte, distribución y comercialización de alimentos y materias primas de alimentos y los requisitos para la notificación, permiso o registro sanitario de los alimentos, según el riesgo en salud pública, con el fin de proteger la vida y la salud de las personas. (Ministerio de.Salud y Protección Social, 2013)
               
                .col-lg-12.mt-5
                  a.anexo.mb-4(:href="obtenerLink('/downloads/Anexo-Resolucion-2674-de-2013.pdf')" target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-pdf.svg")
                    .anexo__texto
                      p <b>Para ver la resolución clic aquí</b>
                      p.mb-0 Anexo: 632202_CF1_a02_ Resolución 2674 de 2013

      .row.mt-5
        .col-lg-14
          .cajon.color_anexo2.p-4.cajon.color-acento-contenido2

            .h5 Reglas y disposiciones en materia de alimentos
            p Para complementar estos aspectos normativos de buenas prácticas de manufactura de alimentos y otros relacionados, se invita a consultar el nomograma de la Alcaldía Mayor de Bogotá, que recoge estas dos reglamentaciones, y expone otro conjunto de disposiciones en materia de alimentos, a través del siguiente link:
          a.anexo.mb-4.mb-lg-0(href="https://www.alcaldiabogota.gov.co/sisjur/listados/tematica2.jsp?subtema=27896" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-link.svg")
            .anexo__texto
              p <b>Enlace web</b>
              p Docuemntos para ALIMENTOS :: Reglamentación

            
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
