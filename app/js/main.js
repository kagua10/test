const map_menuLab = document.querySelector('.menu_offices-lab');
const map_menuContent = document.querySelector('.menu_offices__content');
const map_menuBg = document.querySelector('.menu_offices-bg');
const map_menuBtn = document.querySelector('.menu_offices-check');

const tabs = document.querySelector('.offices__items-map');
const tabsBtn = document.querySelectorAll('.menu__link');
const tabsContent = document.querySelectorAll('.map__teg');


const all_directions = document.querySelector('.business_directions__directions');
const directionsBtn = document.querySelectorAll('.direction');
const direction_content = document.querySelectorAll('.direction_content');


const all_map_link = document.querySelector('.menu_offices__content');
const map_link = document.querySelectorAll('.edge');
const map_link__content = document.querySelectorAll('.secondary_tittle');





document.addEventListener('DOMContentLoaded', () => {


  if (tabs) {
    tabs.addEventListener('click', (e) => {
      if (e.target.classList.contains('menu__link')) {
        const tabsPath = e.target.dataset.tabsPath;
        tabsBtn.forEach(el => {el.classList.remove('menu__link--active')});
        document.querySelector(`[data-tabs-path="${tabsPath}"]`).classList.add('menu__link--active');
        tabsHandler(tabsPath);
        e.preventDefault();
      }
    });
  }

  const tabsHandler = (path) => {
    tabsContent.forEach(el => {el.classList.remove('map__teg--active')});
    if(path == 'all') {
      tabsContent.forEach(el => {el.classList.add('map__teg--active')});
    } else if(path == 'moscow') {
      document.querySelector(`[data-tabs-target="moscow"]`).classList.add('map__teg--active');
    } else if(path == 'center') {
      document.querySelector(`[data-tabs-target="center"]`).classList.add('map__teg--active');
    } else if(path == 'northwest') {
      document.querySelector(`[data-tabs-target="northwest"]`).classList.add('map__teg--active');
    } else if(path == 'south') {
      document.querySelector(`[data-tabs-target="south"]`).classList.add('map__teg--active');
    } else if(path == 'volga') {
      document.querySelector(`[data-tabs-target="volga"]`).classList.add('map__teg--active');
    } else if(path == 'ural') {
      document.querySelector(`[data-tabs-target="ural"]`).classList.add('map__teg--active');
    } else if(path == 'siberia') {
      document.querySelector(`[data-tabs-target="siberia"]`).classList.add('map__teg--active');
    } else if(path == 'far_east') {
      document.querySelector(`[data-tabs-target="far_east"]`).classList.add('map__teg--active');
    }
  };

  if (all_directions) {
    all_directions.addEventListener('click', (e) => {

      if (e.target.classList.contains('direction-btn')) {
        const directionPath = e.target.dataset.directionPath;
        document.querySelector(`[data-direction-dir="${directionPath}"]`).classList.toggle('direction--active');
        document.querySelector(`[data-direction-title="${directionPath}"]`).classList.toggle('direction-p--disabled');
        document.querySelector(`[data-direction-target="${directionPath}"]`).classList.toggle('direction_content--active');
      }
    });
  }
  if (all_map_link) {
    all_map_link.addEventListener('click', (e) => {

      if (e.target.classList.contains('tittle')) {
        const directionPath = e.target.dataset.directionPath;
        document.querySelector(`[data-direction-cites="${directionPath}"]`).classList.toggle('cites--active');
        document.querySelector(`[data-direction-icon="${directionPath}"]`).classList.toggle('tittle-icon--active');
        document.querySelector(`[data-direction-path="${directionPath}"]`).classList.toggle('tittle--active');
      }
    });
  }
});



map_menuLab.addEventListener('click',() =>{
  map_menuBtn.classList.toggle('menu_offices-check--active');
  map_menuContent.classList.toggle('menu_offices__content--active');
  map_menuBg.classList.toggle('menu_offices-bg--active');
});

map_menuBg.addEventListener('click', ()=>{
  map_menuBtn.classList.remove('menu_offices-check--active');
  map_menuContent.classList.remove('menu_offices__content--active');
  map_menuBg.classList.remove('menu_offices-bg--active');
});


// var h = document.getElementsByClassName('menu_offices').clientHeight;
// var h = document.getElementsByClassName('menu_offices').offsetHeight;
var h = document.getElementsByClassName('menu_offices').scrollHeight;

console.log(h);



