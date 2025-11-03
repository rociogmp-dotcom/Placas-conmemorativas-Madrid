var config = {
    style: 'mapbox://styles/rociogm/cmhi6wne400aj01qx4zqvfw50',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1Ijoicm9jaW9nbSIsImEiOiJjbWZzNThmcGgwM252MmtzN25obnB6YmZqIn0.UfiTZ1Aqpx0A0ar7VnCt4g',
    showMarkers: true,
    markerColor: '#f3d46fff',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Placas conmemorativas de Madrid',
    subtitle: 'En 1990 el Ayuntamiento de Madrid creó el Plan de Memoria de Madrid, con el fin de que formase parte del programa cultural de la Capitalidad Europea de Madrid (1992). El objetivo era mostrar en las fachadas de las casas de la ciudad de Madrid hechos históricos o personas relevantes de la cultura de Madrid, así como la importancia de destacar determinados edificios singulares.',
    byline: 'Rocío García Montero',
    footer: 'Fuente: Memoria de Madrid. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Placas conmemorativas de Madrid',
            image: './assets/placas2.png',
            description: 'La primera placa fue colocada en memoria de Manuel de Falla, y en los 35 años de vigencia del Plan de Memoria de Madrid, se han colocado más de 450 placas. <br>  <br> A partir del análisis hecho en este trabajo, se ha observado que de las placas correspondientes a hombres, mujeres y lugares, de manera individual, presenta una gran desigualdad en la representación de mujeres. Es por ello, que el trabajo quiere dar visibilidad a 6 mujeres ilustres reconocidas en la ciudad de Madrid.',
            location: {
                center: [-3.70338, 40.41675],
                zoom: 9.5,
                pitch: 48,
                bearing: 12
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Emilia Pardo Bazán',
            image: 'https://www.lavanguardia.com/files/image_449_220/uploads/2020/02/19/5f15f1afd6e24.jpeg',
            description: 'Aquí estuvo el Palacete de Pozas donde vivió de 1915 hasta su muerte en 1921, Emilia Pardo Bazán, escritora fecunda y activa intelectual, defensora de los derechos de la mujer. <br>  <br> Emilia Pardo-Bazán y de la Rúa-Figueroa (1851-1921), condesa de Pardo Bazán, fue una novelista, periodista, ensayista, crítica literaria, poetisa, dramaturga, traductora, editora, catedrática y conferenciante española introductora del naturalismo en España. Precursora en sus ideas acerca de los derechos de las mujeres y el feminismo. Reivindicó la instrucción de las mujeres como algo fundamental y dedicó una parte importante de su actuación pública a defenderlo. Entre su obra literaria una de las más conocidas es la novela Los pazos de Ulloa (1886). <br>  <br> (Fuente - Imagen: La Vanguardia; Texto: Memorias de Madrid)',
            location: {
                center: [-3.714623, 40.428131],
                zoom: 15.74,
                pitch: 3.2,
                bearing: 55.5,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 1, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Gloria Fuertes',
            image: 'https://i0.wp.com/www.moonmagazine.info/wp-content/uploads/2017/02/he_dormido_gloria_fuertes_MoonMagazine.png?fit=618%2C349&ssl=1',
            description: 'En esta casa nació Gloria Fuertes (1917-1998). “Manantiales de versos encendidos y cascadas de paz es lo que tengo”. <br>  <br> Conocida en nuestro país principalmente por su poesía para niños, en otros países se estudia como una poetisa fundamental de posguerra. Gloria Fuertes, vestía falda pantalón, iba en bicicleta siempre que podía y compraba libros en la madrileña Cuesta de Moyano si le llegaba el salario. Su carrera profesional llegó a lo más alto cuando impartió clases de Literatura Española en la Universidad Bucknell de Pensilvania. <br>  <br> (Fuente: imagen: Moonmagazine; Texto: Memorias de Madrid, RTVE.es)',
            location: {
                center: [-3.70464874, 40.41179932],
                zoom: 18.03,
                pitch: 27.20,
                bearing: -61.50
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Francisca Méndez Garrido: La Paquera de Jerez',
            image: 'https://i.ytimg.com/vi/a39gxHD5RwY/hqdefault.jpg',
            description: 'En esta casa vivió la cantaora flamenca Francisca Méndez Garrido "La Paquera de Jerez" (1934-2004). <br>  <br> Una de las voces más emblemáticas del arte español. Medalla de oro al mérito en las Bellas Artes en 2004. Nació en Jerez, en 1934, en el seno de una de las familias con más renombre del cante flamenco. En 1957 debutó en Madrid, en el famoso tablao El Corral de la Morería, para después actuar en las principales salas flamencas de la capital y de Sevilla. Compartió escenario y cante con estrellas como Camarón, Manolo Caracol y Lola Flores; la han acompañado a la guitarra maestros como Manolo Sanlúcar y Parrilla de Jerez. Premio Nacional de Cante (1980), Premio Copa de Jerez de la Cátedra de Flamencología de Jerez y Medalla de Oro al Mérito en las Bellas Artes a título póstumo en 2004. <br>  <br>(Fuente - imagen:vintagemusictv / texto: Memoria de Madrid; Wikipedia)',
            location: {
                center: [-3.694386, 40.4067],
                zoom: 16.5,
                pitch: 56.50,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'sixth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Ouka-Léele',
            image: 'https://imagenes.elpais.com/resizer/v2/4A47WVAKG5GU5EYLDROMYN4NNQ.jpg?auth=c6f75fb64a9017e5f2c5ddd4a3af416163b25402533a338cb9dc9df1d5405a8d&width=1200',
            description: '"En esta casa vivió y trabajó Bárbara Allende Gil de Biedma, Ouka Léele (1957-2022), artista madrileña que hizo del color y de la alegría las señas de identidad de su obra". <br>  <br> Artista, pintora, poeta y fotógrafa, nació en Madrid en 1957. Su obra ha sido reproducida en multitud de revistas como Diorama, Photo Magazine, Telos, Dezine, o Reviste Actuel. Colaboró en casi todas las ediciones del festival ARCO, que alberga parte de su obra en su colección. Impartió talleres sobre su especialidad en festivales, centros culturales y universidades. En 2005 le fue concedido el Premio Nacional de Fotografía, y en 2012 la Medalla de plata de la Comunidad de Madrid. Fue nombrada Embajadora de la Candidatura de Segovia a Capital Europea de la Cultura en 2016. A todos estos galardones se suma la Medalla de Madrid que quiere reconocer su trayectoria artística y agradecerle su compromiso con la ciudad en la que nació. <br>  <br> (Fuente - Imagen:Gorka Lejarcegi; Texto: Memoria de Madrid)',
            location: {
                center: [-3.69187945, 40.42859138],
                zoom: 16.34,
                pitch: 50.74,
                bearing: -84.8
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'seventh-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Gabriela Mistral',
            image: './assets/gabriela.jpg',
            description: 'En este lugar estuvo la casa donde vivió y fue cónsul de Chile de 1933 a 1935 Gabriela Mistral (1889-1957), poeta, educadora y premio Nóbel de literatura en 1945. Gabriela tomó posesión como Cónsul de Chile en España en la primavera de 1933 y esta casa fue el consulado y su residencia personal. Se trataba del piso 2º A de un edificio que tiró la guerra. Desde él se veía la entrada a El Retiro por la Puerta de América. Esta casa era oficina burocrática y envoltorio afectivo de los chilenos que vivían en Madrid. Duró dos años, hasta que Gabriela fue nombrada Cónsul Vitalicio en Lisboa. <br>  <br> Obtuvo el Premio Nobel de Literatura en 1945, como un justo reconocimiento no sólo de su producción poética, sino de la labor literaria y social de una mujer que había dedicado su vida a la difusión de la cultura y a la lucha por la justicia social y los derechos humanos. <br>  <br> (Fuente - Imagen: Mujeres bacanas; Texto: Memoria de Madrid)',
            location: {
                center: [-3.67943, 40.42078],
                zoom: 15.91,
                pitch: 59,
                bearing: 160.80
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
         {
            id: 'eighth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Lola Camarena',
            image: './assets/Placa_LolaCamarena.jpg',
            description: 'Maestra y directora del Colegio Público de Educación Infantil y Primaria "El Quijote". Defensora de la escuela publica y abogó por la igualdad de oportunidades. Comprometida y entregada con la docencia, se ganó siempre el respeto y la admiración de la comunidad educativa. 1954-2014. La iniciativa para la instalación de esta placa partió del Foro Local de Villa de Vallecas que, tras un proceso participativo abierto, llevó la proposición para esta asignar este nombre al Pleno del Distrito donde fue aprobado por unanimidad en la sesión plenaria de la Junta Municipal celebrada el 10 de julio de 2018. (Fuente: imagen y texto Memoria de Madrid)',
            location: {
                center: [-3.60926, 40.37389],
                zoom: 16.24,
                pitch: 66,
                bearing: -14.40
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
         {
            id: 'eighth-chapter',
            alignment: 'fully',
            hidden: true,
            title: 'Número de placas conmemorativas destinadas a hombres, mujeres y lugares',
            image: './assets/placas.png',
            description: 'Memoria de Madrid. Biblioteca digital',
            location: {
                center: [-3.70338, 40.41675],
                zoom: 5.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
          }  
    ]
};
