(function () {
  'use strict';

  class SuriRoadmap extends Polymer.Element {
    static get is() { return 'suri-roadmap'; }

    static get properties() {
      return {

        moments: {
          type: Array,
          value: () => {
            return [
              {
                title: 'Madrid - Londres',
                content: 'Comienza la aventura. Cada uno con su anillo, su petate, sus gafas de sol y con un sonrisón. Y aquí estamos otra vez en Barajas, donde empiezan los nuevos horizontes.',
                icon: {
                  name: 'icomoon:start',
                  color: 'primary'
                },
                image: '',
                time: 'M 16/10 - 09:05',
                showButton: true
              },
              {
                title: 'Londres - Los Ángeles - Papeete (Tahití)',
                content: '<p>Empezamos  metiéndonos una buena dosis de avión hasta llegar a polinesia francesa. Con la compañía que volamos nos ha permitido hacer el viaje vuelta al mundo completo por un precio bastante razonable (dado que lo reservamos 10 meses antes).</p><p>Llegamos el <span class="give-ma-colour change-ma-font">X 17/10</span> a las <span class="give-ma-colour change-ma-font">5:00</span>. Y aunque parezca mentira, han pasado 24 horas de vuelo. <span class="give-ma-colour">¿Y eso qué significa?</span>. Básicamente que estamos yendo a zonas de huso horario menores. Porque <a class="link-ma-cool" href="https://www.microsiervos.com/archivo/ciencia/avion-volar-oeste-este.html">el viento en este caso no nos juega a favor</a>, puesto que estamos viajando al oeste. A esas horas ya estaremos pisando tierras polinésicas</p>',
                icon: {
                  name: 'icomoon:destination',
                  color: 'primary'
                },
                image: 'roadmap/tahiti.jpg',
                time: 'M 16/10 - 16:15',
                showButton: true
              },
              {
                title: 'Papeete - Moorea',
                content: '<p>Si todavía no habíamos tenido bastante, vamos a coger otro vuelo interno. Estos vuelos son “vuelos multi-isla” que te permite seleccionar las islas que quieres visitar y te permiten moverte dentro de la Polinesia Francesa.</p><p>La Polinesia <span class="give-ma-colour">tiene 5 archipiélagos</span> , y en nuestro caso, vamos a viajar por el <a class="link-ma-cool" href="https://es.wikipedia.org/wiki/Islas_de_la_Sociedad">el archipiélago de la Sociedad</a>. El primer hito va a ser Moorea, donde estamos ya deseando de llegar para caernos muertos, en casa o en la playa B-). 3 días en esta isla nos dará para conocer las playas que tiene y empezar hacernos una idea de cómo viven aquí los polinesios.</p><p>La idea es relax: playa, coger bicicleta y hacer lo que recomiendan por <a class="link-ma-cool" href="https://www.turistaloserastu.es/moorea-guia-viaje-trece-experiencias-recomendables/">aquí</a>.</p><p> <span class="give-ma-colour">¡Empiezan las vacaciones!</span></p>',
                icon: {
                  name: 'icomoon:island-map',
                  color: 'primary'
                },
                image: 'roadmap/moorea.png',
                time: 'X 17/10 - 10:10',
                showButton: true
              },
              {
                title: 'Moorea - Bora Bora',
                content: '<p class="give-ma-colour give-ma-hype">¿Esta <a class="link-ma-cool" href="https://www.nationalgeographic.com.es/viajes/grandes-reportajes/tahiti-y-bora-bora_8009/1">isla</a> si que te suena no?</p><p> Sí, este es el principal producto interior bruto de Polinesia. Aparte de ser una isla de recepción de muchos <a class="link-ma-cool" href="https://www.instyle.es/lifestyle/isla-que-van-luna-miel-las-celebrities_38442">famosos</a>, es un lugar que no te deja indiferente. Pues tu verás, no te vas a ver en otra viniendo por aquí. Y esto hay que aprovecharlo al máximo.</p><p>Ya dependiendo de cómo esté el percal veremos si nos metemos en alguna <a class="link-ma-cool" href="https://www.turistaloserastu.es/bora-bora-guia-de-viaje-14-experiencias-recomendables/">actividad</a> más allá de playa y relax.</p>',
                icon: {
                  name: 'icomoon:island',
                  color: 'primary'
                },
                image: 'roadmap/bora_bora.png',
                time: 'S 20/10 - 10:30',
                showButton: true
              },
              {
                title: 'Bora Bora - Huahine',
                content: '<p>Tercera isla del archipiélago. Cogemos nuestro petate y a por otra. Seguimos en la línea de estar relajados</p><p class="give-ma-colour give-ma-hype">¿Por qué esta isla?</p><p>a llaman la isla secreta o la isla remota. Por lo visto, el contraste de naturaleza es una de las claves para venir aquí. Preguntaremos qué nos aconsejan hacer por estos <a class="link-ma-cool" href="https://www.turistaloserastu.es/seis-razones-visitar-huahine/">lares</a>.</p>',
                icon: {
                  name: 'icomoon:summer',
                  color: 'primary'
                },
                image: 'roadmap/huahine.jpg',
                time: 'M 23/10 - 13:45',
                showButton: true
              },
              {
                title: 'Huahine - Papeete',
                content: '<p>Y finalmente ya volvemos a la capital, por la que pasamos escasas horas tras el comienzo de la aventura.</p><p>Aquí también hay diversidad de cosas que hacer, entre otras hacer alguna ruta por el Valle de Papenoo y el <span class="give-ma-colour">Lago Vaihiria, catamarán al atolón de Tetiaroa, rodear la isla en coche</span> y ver que nos encontramos y visitar el mercado de la capital.</p><p>Ya nos queda solo <span class="give-ma-colour">3 días aquí en Polinesia</span>, así que tenemos que disfrutarlo lo máximo posible.</p>',
                icon: {
                  name: 'icomoon:hawaii-flowers',
                  color: 'primary'
                },
                image: 'roadmap/papeete.jpg',
                time: 'V 26/10 - 18:45',
                showButton: true
              },
              {
                title: 'Papeete - Auckland',
                content: '<p>Después de habernos comido todas las piñas del mundo y los paquetes de jamón que llevaremos envasados al vacío para lidiar con las mañanas por allí, o utilizarlas como trueque del bueno, cambiamos de país.</p><p class="give-ma-colour give-ma-hype">Nos olvidamos de la Polinesia para adentrarnos en Nueva Zelanda.</p><p>Esta vez es muy curioso, porque resulta que en un viaje de  de <span class="give-ma-colour change-ma-font">5h 30m</span>, llegamos el L <span class="give-ma-colour change-ma-font">29/10</span> a las <span class="give-ma-colour change-ma-font">21:55</span>. Esto de ir saltando en el espacio tiempo, nos va a dejar un poco trastocados.</p>',
                icon: {
                  name: 'icomoon:kiwi',
                  color: 'complementary-2'
                },
                image: 'roadmap/auckland.jpg',
                time: 'D 28/10 - 17:15',
                showButton: true
              },
              {
                title: 'Auckland - Christchurch',
                content: '<p>Tras descansar un rato en cama, vamos a empezar directamente a por la Isla Sur.</p><p class="give-ma-colour give-ma-hype">¿Por qué?</p><p>porque terminaremos en la Isla norte, saliendo desde Auckland. Pero todavía nos queda una Nueva Zelanda llena de escenarios que descubrir. <p><span class="give-ma-colour give-ma-hype">¡Allá vamos!</span></p>',
                icon: {
                  name: 'icomoon:airplane-modern',
                  color: 'complementary-2'
                },
                image: 'roadmap/cristchurch.jpg',
                time: 'M 30/10 - 05:25',
                showButton: true
              },
              {
                title: 'Christchurch - Tekapo',
                content: '<p>Hemos alquilado un coche, por aquí nos vamos a mover con él para todos sitios. Hablan de que las carreteras son bastante tranquilas y bueno, Nueva Zelanda en general, está muy orientada a que la gente tome caravanas y se mueva por ahí con ellas, todo preparado para este tipo de turismo</p><p class="give-ma-colour give-ma-hype"> Pero no nos íbamos a meter en esta película aquí.</p><p>Nos dirigimos hacia el <a class="link-ma-cool" href="https://www.gettyimages.es/fotos/lake-tekapo?mediatype=photography&phrase=lake%20tekapo">lago Tekapo</a>, uno de los lagos más famosos de la isla Sur. Aparte de disfrutar de la zona y de andar por allí, a la noche, vamos a a ir a un <a class="link-ma-cool" href="http://tekapostargazing.co.nz/">observatorio de estrellas</a> a que nos cuenten un poquito todo lo que se observa allí.</p>',
                icon: {
                  name: 'icomoon:sunset',
                  color: 'complementary-2'
                },
                image: 'roadmap/tekapo.jpg',
                time: 'M 30/10 - 09:00',
                showButton: true
              },
              {
                title: 'Tekapo - Mount Cook - Queenstown',
                content: '<p>Ahora nos dirigimos a ver el <a class="link-ma-cool" href="https://es.wikipedia.org/wiki/Monte_Cook">monte Cook</a>, la montaña más alta de Nueva Zelanda. Hay rutas increíbles por la zona y seguramente nos movamos por ahí para estar más en contacto con ella.</p><p> Por ahí estaremos prácticamente todo el día para posteriormente irnos a <a class="link-ma-cool" href="https://www.queenstownnz.co.nz/">Queenstown</a>, la ciudad de los deportes de riesgo.</p><p class="give-ma-colour give-ma-hype"> Nos espera un día bueno mañana.</p>',
                icon: {
                  name: 'icomoon:adventure',
                  color: 'complementary-2'
                },
                image: 'roadmap/mount_cook.jpg',
                time: 'X 31/10 - 09:00',
                showButton: true
              },
              {
                title: 'Queenstown - MilFord Sound - Queenstown',
                content: '<p>Le vamos a dedicar un apartado aquí. Porque hay <a class="link-ma-cool" href="https://www.backpackerguide.nz/10-queenstown-must-dos/">miles</a> de cosas que hacer. Una cosa que nos llamó mucho la atención es el <a class="link-ma-cool" href="https://www.skyline.co.nz/en/queenstown/things-to-do/skyline-luge-queenstown/">luge</a>. Carts con los que tirarte por pistas descendentes, ¡una pasada!.</p><p>Pero lo que venimos hacer es otra cosa. <a class="link-ma-cool" href="https://www.milfordflights.co.nz/flight-experiences/fly-cruise-fly/">Vamos a darnos un paseo en avión y luego por catamarán</a> hacia <a class="link-ma-cool" href="https://www.milford-sound.co.nz/">Milford Sound</a>, un fiordo considerado la octava maravilla del mundo de los lugares naturales.</p><p>Saldremos sobre las 10:00, a ver si tenemos suerte y podemos ver fauna y flora autóctona. Ya volveremos volando por la tarde.</p>',
                icon: {
                  name: 'icomoon:glacier',
                  color: 'complementary-2'
                },
                image: 'roadmap/milford.jpg',
                time: 'J 1/11 - 09:00',
                showButton: true
              },
              {
                title: 'Queenstown - Greymouth',
                content: '<p>Nos toca una buena jornada de coche. Unas 7 horas hasta Greymouth por la parte oeste de la isla Sur, pasando por el <a class="link-ma-cool" href="https://www.lakewanaka.co.nz/">lago Wanaka</a>, Milford Sound y el <a class="link-ma-cool" href="https://en.wikipedia.org/wiki/Franz_Josef_Glacier">glaciar Franz Josef</a> entre otros.</p><p>A la tarde noche, pisaremos Greymouth, el pueblo más grande la costa occidental de la isla Sur. Comentan que no es que haya mucho pubs en la isla Sur, pero en <a class="link-ma-cool" href="https://www.backpackerguide.nz/greymouth-guide-for-backpackers/">Greymouth</a> es lo suyo, puesto que la <a class="link-ma-cool" href="https://www.thebrewery.co.nz/">cerveza</a> allí es para hacerse picón.</p>',
                icon: {
                  name: 'icomoon:car',
                  color: 'complementary-2'
                },
                image: 'roadmap/greymouth.jpg',
                time: 'V 2/11 - 09:00',
                showButton: true
              },
              {
                title: 'Greymouth - Punakaiki - Renwick',
                content: '<p>Pues a la Suricata no le gusta la cerveza, pero lo que sí le gusta es el <span class="give-ma-colour">vino</span>.</p><p>Así que nos va a tocar tener que irnos a algunas bodegas de vino que hay por <a class="link-ma-cool" href="http://www.wine-marlborough.co.nz/wine-trail/">Renwick y Blenheim.</a>Antes de llegar allí y empezar a molearnos, pasaremos por Punakaiki para ver las <a class="link-ma-cool" href="https://www.backpackerguide.nz/vlog/101-150/coaltown-punakaiki-pancake-rocks-day-107/">pancakes rocks</a>.</p>',
                icon: {
                  name: 'icomoon:field',
                  color: 'complementary-2'
                },
                image: 'roadmap/punakaiki.jpg',
                time: 'S 3/11 - 09:00',
                showButton: true
              },
              {
                title: 'Renwick - Blenheim - Picton',
                content: '<p><span class="give-ma-colour">Seguimos en plan hedonista, pero a la vez fitness</span>. El hotel nos ofrece unas bicicletas para pasear por los viñedos y disfrutar del paisaje de las bodegas.</p><p>Habrá que dedicar el día para culturizarse en vinos entre Renwick y <a class="link-ma-cool" href="https://www.backpackerguide.nz/10-blenheim-must-dos/">Blenheim</a>. Ya a la tarde iremos echando el freno, porque tomamos el ferry a las <span class="give-ma-colour change-ma-font">18:00</span> para cambiarnos de isla.</p>',
                icon: {
                  name: 'icomoon:field',
                  color: 'complementary-2'
                },
                image: 'roadmap/renwick.jpg',
                time: 'D 4/11 - 09:00',
                showButton: true
              },
              {
                title: 'Picton - Wellington',
                content: '<p>Ahora nos espera un buen paseo en ferry de 3 horas hasta la isla norte.</p><p>El coche se ha quedado en la isla sur. Les interesa más darte otro al cruzar la isla que estar cruzando coches de una isla a otra. Hoy ya poco podemos rascar del domingo.</p><p class="give-ma-colour give-ma-hype">¡Nos vemos en otra, isla sur!, ¡Aquí vamos, isla norte!</p>',
                icon: {
                  name: 'icomoon:ship',
                  color: 'complementary-2'
                },
                image: 'roadmap/crossing_nz.jpg',
                time: 'D 4/11 - 19:00',
                showButton: true
              },
              {
                title: 'Wellington - Tongariro - Taupo',
                content: '<p>Pasamos a recoger el coche a este lado de Nueva Zelanda. Y vamos derechos hacia <a class="link-ma-cool" href="http://www.nationalpark.co.nz/">Tongariro National Park</a>, donde haremos una parada para descansar y observar el paisaje.</p><p>Existe la posibilidad de hacer aquí el <a class="link-ma-cool" href="https://www.mochileandoporelmundo.com/trekking-tongariro-alpine-crossing/">Tongariro Alpine Crossing</a>, ó <span class="give-ma-colour">Mordor</span>, como es conocido en LOTR, pasa que requiere bastante tiempo y no nos vemos en él.</p><p>Ya habiendo dado una vuelta por el parque, nos dirigimos hacia <a class="link-ma-cool" href="https://www.mochileandoporelmundo.com/trekking-tongariro-alpine-crossing/">Taupo</a>, donde nos esperan bastantes <a class="link-ma-cool" href="https://www.backpackerguide.nz/10-taupo-must-dos/">cosas</a>, como las piscinas termales gratuitas, caminar sobre terreno geotermal ó cenar en Macca, <span class="give-ma-colour">¡un Mac Donalds en un avión!</span></p>',
                icon: {
                  name: 'icomoon:volcano',
                  color: 'complementary-2'
                },
                image: 'roadmap/taupo.jpg',
                time: 'L 5/11 - 9:00',
                showButton: true
              },
              {
                title: 'Taupo - Waitomo - Rotorua',
                content: '<p>Nos hemos levantado como rosas hoy. Vamos hacia <a class="link-ma-cool" href="http://www.waitomo.com/">Waitomo</a>, donde vamos a ver gusanos de luz en cuevas. La verdad qué cosa más rara.</p><p>Y ya después de comer, nos dirigiremos hacia <a class="link-ma-cool" href="https://www.backpackerguide.nz/rotorua-guide-for-backpackers/">Rotorua</a>, impregnada de cultura mahorí y de tierras geotermales.</p>',
                icon: {
                  name: 'icomoon:spear',
                  color: 'complementary-2'
                },
                image: 'roadmap/waitomo.png',
                time: 'M 6/11 - 9:00',
                showButton: true
              },
              {
                title: 'Rotorua',
                content: '<p>Nos espera un día completo. Empezaremos yendo a un parque de géiseres y tierras geotermales, <a class="link-ma-cool" href="https://www.waiotapu.co.nz/">Wai-O-Tapu</a>. Después nos gustaría darnos una vuelta por el <a class="link-ma-cool" href="http://www.treewalk.co.nz/en_US/">tree walk</a>, y ver qué tal luce la flora y fauna de este sitio.</p><p>Para terminar, queremos inmiscuirnos en la cultura mahorí, visitando el poblado de <a class="link-ma-cool" href="http://mitai.co.nz/">Mitai</a> y acercándonos a sus tradiciones, su comida, sus bailes y al corazón aborigen de Nueva Zelanda.</p>',
                icon: {
                  name: 'icomoon:tiki',
                  color: 'complementary-2'
                },
                image: 'roadmap/mitai.jpg',
                time: 'X 7/11 - 9:00',
                showButton: true
              },
              {
                title: 'Rotorua - Auckland',
                content: '<p>Madre mía, parece que llevamos una vida de vacaciones. Antes de irnos de Rotorua, lo mismo me dá por <a class="link-ma-cool" href="https://www.zorb.com/">rodar</a>. Se va acercando el final, pero todavía nos queda <a class="link-ma-cool" href="https://www.backpackerguide.nz/10-auckland-must-dos/">Auckland</a>, la ciudad más cosmopolita de Nueva Zelanda</p>',
                icon: {
                  name: 'icomoon:car',
                  color: 'complementary-2'
                },
                image: '',
                time: 'J 8/11 - 9:00',
                showButton: true
              },
              {
                title: 'Auckland',
                content: '<p>Y ya estamos aquí. El último destino de Nueva Zelanda. Hasta la noche no sale nuestro vuelo, pero de toas formas tenemos todo un día para tratar de disfrutar al <a class="link-ma-cool" href="https://www.backpackerguide.nz/10-auckland-must-dos/">máximo</a>.</p>',
                icon: {
                  name: 'icomoon:padlock',
                  color: 'complementary-2'
                },
                image: 'roadmap/auckland_2.jpg',
                time: 'V 9/11 - 9:00',
                showButton: true
              },
              {
                title: 'Auckland - Singapur - Londres',
                content: '<p>Empezamos a deshacer el globo terráqueo. Después de casi un mes que nos fuimos, no nos vamos a acordar ni de nuestro nombre. En estos vuelos, vamos recuperando el día que nos quitaron en el vuelo de Papeete y Auckland.</p>',
                icon: {
                  name: 'icomoon:destination',
                  color: 'complementary-2'
                },
                image: '',
                time: 'S 10/11 - 1:20',
                showButton: true
              },
              {
                title: 'Londres - Madrid',
                content: '<p class="give-ma-colour give-ma-hype">Y sí, finalmente terminamos la luna de miel.</p><p>La verdad, que no tengo ni idea de cómo será, pero lo que sí os puedo decir, es que he disfrutado más que un enano contándoos lo que tenemos pensado hacer.</p><p class="give-ma-colour give-ma-hype">¡Nos vemos pronto!</p>',
                icon: {
                  name: 'icomoon:finish',
                  color: 'complementary-2'
                },
                image: '',
                time: 'S 10/11 - 1:20',
                showButton: true
              },
            ];
          }
        }
      };
    }

    _showHelpModal() {
      this.$.helpModal.openDialog();
    }
  }

  window.customElements.define(SuriRoadmap.is, SuriRoadmap);
})();
