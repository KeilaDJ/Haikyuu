// source: https://www.leagueoflegends.com/en-us/champions/
const App = {
    data() {
      return {
        isFullscreen: false,
        activeIndex: 0,
        list: [
          {
            name: 'Daichi Sawamura',
            role: 'Capitão / Ponta de asa / Rebatedor oposto',
            number: '1',
          
            img: './img/Sawamura.Daichi.jpg',
            thumbImg: './img/daichi.jpg',
          },
          {
            name: 'Koshi Sugawara',
            role: 'Vice-Capitão / Levantador / Pinch Server',
            number: '2',
  
           
  
            img: './img/koshi.sugawara.jpg',
            thumbImg: './img/koshi.jpg',
          },
  
          {
            name: 'Asahi Azumane',
            role: 'Ponta Ala / Rebatedor Externo / Ás',
            number: '3',
  
            
  
            img: './img/ashi.azumane.jpg',
            thumbImg: './img/ashi.jpg',
  
          },
  
          {
  
            name: 'Yū Nishinoya',
            role: 'Libero',
            number: '4',
  
            
            img: './img/yuu.nishinoya.jpg',
            thumbImg: './img/yuu.jpg',
  
          },
  
          {
  
            name: 'Ryūnosuke Tanaka',
            role: 'Ponta Ala/Rebatedor Externo',
            number: '5',
  
            img: './img/ryunosuke.tanaka.jpg',
            thumbImg: './img/tanaka.jpg',
  
          },
  
          {
  
            name: 'Chikara Ennoshita',
            role: 'Ponta Ala/Rebatedor Externo',
            number: '6',
  
            img: './img/Chikara.ennoshita.webp',
            thumbImg: './img/Chikara.png',
  
          },
  
          {
  
            name: 'Hisashi Kinoshita',
            role: 'Wing Spiker / Pinch Server',
           number: '7',
  
           img: './img/hisashi.kinoshita.jpg',
           thumbImg: './img/kinoshita.jpg',
  
          },
  
          {
  
            name: 'Kazuhito Narita',
            role: 'Bloqueador Médio',
            number: '8',
  
            img: './img/kazuhito.narita.webp',
            thumbImg: './img/narita.jpg',
  
          },
          
          {
  
            name: 'Tobio Kageyama',
            role: 'Normatizador',
            number: '9',
  
            img: './img/tobio.kageyama.jpg',
            thumbImg: './img/tobio.jpg',
  
          },
  
          {
  
            name: 'Shōyō Hinata',
            role: 'Bloqueador Médio / Chamariz',
            number: '10',
  
            img: './img/hinata.shoyu.jpg',
            thumbImg: './img/shoyo.jpg',
  
          },
          
          {
  
            name: 'Kei Tsukishima',
            role: 'Bloqueador Médio',
            number: '12',
  
            img: './img/tsukishima.kei.jpg',
            thumbImg: './img/key.jpg',
  
          }, 
          
          {
  
            name: 'Tadashi Yamaguchi',
            role: 'Bloqueador Médio / Servidor Pinch',
            number: '12',
  
            img: './img/tadashi.yamaguchi.png',
            thumbImg: './img/yamaguchi.jpg',
  
          },
  
        ],
  
      }
  
    },
  
    computed: {
      activeInfo() {
        if (!this.list.length) return null;
        return this.list[this.activeIndex];
      },
      itemPosition() {
        const len = this.list.length;
        return this.list.map((_, key) => {
          const deg = 360 / len * key - 90;
          const radius = '2rem';
          return `rotate(${deg}deg) translate(${radius}) rotate(${-deg}deg)`
        })
     }
    },
  
    methods: {
     toggleFullScreen() {
        const el = document.documentElement;
        if (!this.isFullscreen) {
          // ope
          if (el.requestFullscreen) {
           el.requestFullscreen();
          } else if (el.webkitRequestFullscreen) { /* Safari */
            el.webkitRequestFullscreen();
          } else if (el.msRequestFullscreen) { /* IE11 */
            el.msRequestFullscreen();
          }
        } else {
          // close
          if (document.exitFullscreen) {
            document.exitFullscreen();
          } else if (document.webkitExitFullscreen) { /* Safari */
            document.webkitExitFullscreen();
          } else if (document.msExitFullscreen) { /* IE11 */
           document.msExitFullscreen();
          }
        }
        this.isFullscreen = !this.isFullscreen;
      }
    }
  };
  Vue.createApp(App).mount('#app');
