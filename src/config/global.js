export default {
  global: {
    componenteFormativo: 'Gestión de portafolio de productos alimenticios',
    descripcionCurso:
      'En este componente formativo se desarrollarán aspectos relacionados con la estructuración de un portafolio de productos, las buenas prácticas de manufactura de alimentos, la clasificación de los mismos por categorías y la presentación por unidades de medida. De igual manera, se tratarán aspectos relacionados con las fichas técnicas de los productos que componen la oferta de portafolio a impulsar.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Buenas prácticas de manipulación de alimentos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo:
              'Aspectos de las buenas prácticas de manufactura de alimentos',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              'Normativa para las buenas prácticas de manufactura en alimentos',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Clasificación de los alimentos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: '2.1  Clasificación de riesgos de los alimentos',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Clasificación de alimentos para consumo humano',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Propiedades organolépticas',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Portafolio de productos y categorías',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Funcionalidad del portafolio de productos',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Ruta del portafolio de productos',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Empaques y embalaje de alimentos',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Ficha técnica de productos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Elementos que debe contener una ficha técnica',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Identificación electrónica de productos',
            hash: 't_4_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Buenas prácticas de manufactura.',
      referencia:
        'Instituto Nacional de Penitenciaria, Universidad Autónoma de Occidente [IMPEC](Sf.).  Manual de buenas Prácticas de Manufactura Actividad Productiva de Panadería. (S.E)',
      tipo: 'Manual',
      link:
        'https://red.uao.edu.co/bitstream/handle/10614/9817/T7485A.pdf?sequence=2&isAllowed=y',
    },
    {
      tema: 'Buenas prácticas de manufactura.',
      referencia:
        'Organización Panamericana de la Salud. Oficina Regional de la Organización Mundial de la Salud. [OPS/OMS](Sf.).  Manual de Capacitación para Manipuladores de Alimentos. (S.E.)',
      tipo: 'Manual',
      link: 'https://www.fao.org/3/i7321s/i7321s.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Alimento',
      significado:
        'es un producto de origen natural o elaborado con fines de ser consumido, para aportar al cuerpo humano nutrientes y/o energía, bien sean estos líquidos o solidos',
    },
    {
      termino: 'Alimento contaminado',
      significado:
        'alimento de origen natural o elaborado que presenta condiciones de degradación o contiene agentes de microorganismos, sustancias extrañas, no propias para el consumo, en cantidades superiores a las admitidas o permitidas por el cuerpo humano y las normas nacionales o internacionales.',
    },
    {
      termino: 'Autoridades Sanitarias',
      significado:
        'son las entidades públicas de Salud del orden nacional o local, que ejercen funciones de expedición de normas, inspección, vigilancia y control de prevención para garantizar la salud pública de las personas y el cumplimiento de las normas.',
    },
    {
      termino: 'Clasificación de alimentos',
      significado:
        'identificación de los alimentos en función de su producción y comercialización para reconocer cómo estos se clasifican y, de este modo, identificar el tipo de riesgo y las propiedades que tiene.',
    },
    {
      termino: 'Inocuidad',
      significado:
        'es la característica natural de los alimentos en la que no causarán daño al consumidor, se debe mantener en adecuadas condiciones naturales o de integridad de sus componentes, sin agentes tóxicos o de microrganismos.',
    },
    {
      termino: 'Envase primario',
      significado:
        'es el elemento que soporta y está en contacto directo con el alimento, protegiéndolo desde su fabricación o elaboración hasta su entrega su consumo.',
    },
    {
      termino: 'Plan sanitario',
      significado:
        'es el conjunto de actividades y características que deben cumplir las empresas y sus recursos como bodegas, edificaciones, equipos, utensilios, para la fabricación, elaboración y procesamiento, obtención, almacenamiento y distribución de alimentos, de manera regular.',
    },
    {
      termino: 'Portafolio de productos',
      significado:
        'es el conjunto de productos que una empresa pone en oferta y comercialización a sus diferentes tipos de clientes, los cuales están ordenados por líneas o categorías de productos, siendo que la empresa es la que establece dichas categorías para su gestión.',
    },
    {
      termino: 'Norma sanitaria',
      significado:
        'son las disposiciones emitidas por el gobierno o las entidades sanitarias para cumplimiento de las personas o entidades que participan en las actividades de fabricación elaboración de productos alimentarios.',
    },
    {
      termino: 'Vida útil del producto',
      significado:
        'es el periodo de tiempo que tiene un producto para su consumo sin entrar en riesgos o degradación, el cual está comprendido entre la fecha de fabricación y la fecha de vencimiento que es un estimado de cuando sus características organolépticas pueden cambiar.',
    },
  ],
  referencias: [
    {
      referencia:
        'Calvo, H. E. (2015). <em>Alimentando lo sentidos.</em> Zaragoza: Universidad de Zaragoza. Obtenido de:',
      link:
        'https://ucc.unizar.es/taller-de-guion-y-produccion-del-documental-cientifico/alimentando-los-sentidos',
    },
    {
      referencia:
        'Iciar Astiasarán, A., & Hernández, A. M. (2013). ALIMENTOS- <em>Composición y Propiedades.</em> Madrid, España: McGraw-Hill. Obtenido de:',
      link:
        'https://fisiogenomica.com/assets/Blog/pdf/Alimentos-Composicion-y-Propiedades.pdf',
    },
    {
      referencia:
        'Maza Sanchez, M. A. (2013). <em>Manipulador de Alimentos.</em> México D.F.: Limusa.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Salud, y Protección Social M. d. (2015). Resolución 0719 de 2015. Obtenido de:',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/resolucion-0719-de-2015.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección social.Salud, M. d. (2013). Resolución 2674 de 2013. Obtenido de: ',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/resolucion-2674-de-2013.pdf',
    },
    {
      referencia:
        'Presidencia de la Republica, P. d. (1997). Decreto 3075 de 1997. Obtenido de:',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=3337#:~:text=%2D%20Sistema%20de%20Control.,la%20distribuci%C3%B3n%20de%20productos%20terminados',
    },
    {
      referencia:
        'Rodríguez H, B. G. (2015). Las enfermedades transmitidas por alimentos, un problema sanitario. <em>Rev. Electrónica Veterinaria,</em> P16.',
      link: '',
    },
    {
      referencia:
        'Vélez Ruiz, J. F. (2018). <em>Introducción a las Propiedades Físicas de los Alimentos.</em> Editorial Académica Española.',
      link: '',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
