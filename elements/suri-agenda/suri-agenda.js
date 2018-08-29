(function () {
  'use strict';

  class SuriAgenda extends Polymer.Element {
    static get is() { return 'suri-agenda'; }

    static get properties() {
      return {

        moments: {
          type: Array,
          value: () => {
            return [
              {
                title: 'Iglesia de San Pablo',
                content: '<p>En la <span class="give-ma-colour">plaza de primero de mayo</span>, está el novio recibiendo a todos los que vienen a la boda. Estará un poco nerviosete, pero vaya, seguro que muy guapo.</p> <p>Con un ojo saludando y con otro pendiente de no estar fuera conforme la novia llegue. Ahí, como un pincel el tío. <span class="give-ma-colour">Dispuesto a darlo todo</span>, y tanto.</p>',
                icon: {
                  name: 'icomoon:start',
                  color: 'primary'
                },
                image: 'agenda/san_pablo.jpg',
                time: '12:45',
                showButton: false
              },
              {
                title: 'Comienza la misa',
                content: 'Si todo va bien y la novia no ha tenido percances de última hora, estamos dentro esperándola. <span class="give-ma-colour">Espléndida, fabulosa, mírala ella</span>. Creo que lo suyo es  que estéis ya dentro si no queréis perderos ningún detalle',
                icon: {
                  name: 'icomoon:church',
                  color: 'primary'
                },
                image: '',
                time: '13:00',
                showButton: false
              },
              {
                title: '¡Ya estamos casados!',
                content: 'Saldremos por la puerta lateral de la iglesia (aunque parezca la principal), y ahí os esperamos a todos, listos para el ataque. Tened cuidado con los escalones. <p class="give-ma-hype give-ma-colour align-left leave-ma-margin">¡Viva los novios!</p>',
                icon: {
                  name: 'icomoon:just-married',
                  color: 'primary'
                },
                image: '',
                time: '13:45 aprox.',
                showButton: false
              },
              {
                title: 'Invitados a la finca, novios a las fotos',
                content: '<p>"Cada mochuelo a su olivo". <span class="give-ma-colour">En la dirección que indiquemos</span> esperamos a los buses para que os lleve a la finca. Seguramente seáis <span class="give-ma-colour">coordinados por familiares cercanos</span>, aunque aquí somos todos familia, así que cualquier cosa preguntad.</p> <p>Mientras vais yendo, los Suricatos estamos tomándonos algunas fotos, aprovechando el subidón y la felicidad del momento.</p>',
                icon: {
                  name: 'icomoon:car',
                  color: 'primary'
                },
                image: '',
                time: '14:15 - 14:30',
                showButton: false
              },
              {
                title: 'Llegada al Llano de la Alameda',
                content: '<p class="leave-ma-margin">Entramos en la finca. Os recibirán con cervecitas, vino, en fín un buen cocktail para que lo disfrutéis y podáis acomodaros y empezar la fiesta.</p><p class="leave-ma-margin">En un rato los novios apareceremos por ahí saludando. Aprovechad para ver la finca y comenzar a disfrutar del sitio.</p> <p class="give-ma-hype give-ma-colour align-left">¡Esperemos que haga muy buen día!</p>',
                icon: {
                  name: 'icomoon:party',
                  color: 'primary'
                },
                image: 'agenda/llano_alameda.jpg',
                time: '14:30 - 15:00',
                showButton: false
              },
              {
                title: '¡Enga pa dentro a comé!',
                content: '<p class="leave-ma-margin">Ya habremos tomado un poquito de todo y esperemos que cosas ricas. Nos dirigimos a la carpa y cada uno a su sitio, con la mesa a la que pertenece, a probar el menú que nos tienen preparado.</p><p><span class="give-ma-colour give-ma-hype">Como ya rellenamos el formulario antes (guiño, guiño)</span>, seguro que no nos defrauda.</p>',
                icon: {
                  name: 'icomoon:restaurant',
                  color: 'primary'
                },
                image: '',
                time: '16:00 - 16:30',
                showButton: false
              },
              {
                title: '!A baaaaaailaaaaar!',
                content: '<p class="leave-ma-margin give-ma-colour give-ma-hype">Sé, ya es momento de liarla, hombre ya.</p><p> Desde ahora, en adelante, <span class="give-ma-colour">¡vamos a pasarla bien!</span>. Música, baile y barra libre. A lo mejor hay alguna otra cosa por ahí, que no está mal darse una vuelta.</p><p>Aprovechad para disfrutarlo al máximo, para conocer a nuevas personas para estar en familia, para quererse, celebrar y pasarlo en grande.</p><p>Es nuestro momento, <span class="give-ma-colour">aún no se ha ido el sol.</p><p class="leave-ma-margin give-ma-hype give-ma-colour">¡Vámonos!</span></p>',
                icon: {
                  name: 'icomoon:dancing',
                  color: 'primary'
                },
                image: '',
                time: '18:00 - 18:30',
                showButton: false
              },
              {
                title: 'Boh, que ya me pide el cuerpo comer',
                content: '<p class="leave-ma-margin">Esas sudores, esas copas parriba y pabajo, <span class="give-ma-colour">¡esa buena fiesta!.</span></p> <p class="leave-ma-margin">En algún momento <span class="give-ma-colour give-ma-hype">los camareros empezarán con la recena</span>, por si nos apetece tomar algo más o se nos ha ido la comida a los piés.</p>',
                icon: {
                  name: 'icomoon:tray',
                  color: 'primary'
                },
                image: '',
                time: '22:00 - 23:00',
                showButton: false
              },
              {
                title: '¡Nos cierran el chiringuito!',
                content: '<p class="leave-ma-margin">Por órdenes del catering y de los dueños de la Finca, ya ha llegado el momento de <span class="give-ma-colour">irse con la música a otra parte</span>.</p> <p class="leave-ma-margin">A lo mejor eso te pasó antes, o fué antes cuando ya te apetecía volver a casa. No te preocupes, <span class="give-ma-colour give-ma-hype"> hay minibuses</span> llevando a la gente que lo deseé a Úbeda para descansar.</p> <p class="leave-ma-margin"> O también <span class="give-ma-colour give-ma-hype">puede pasar que ¡tengas más ganas de fiesta!</span>, pues toca ir para Úbeda y seguir hasta que el cuerpo aguante.</p>',
                icon: {
                  name: 'icomoon:sunset',
                  color: 'primary'
                },
                image: '',
                time: '00:00',
                showButton: false
              },
            ];
          }
        }
      };
    }
  }

  window.customElements.define(SuriAgenda.is, SuriAgenda);
})();
