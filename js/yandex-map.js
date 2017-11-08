ymaps.ready(init);
var myMap;

function init(){
  myMap = new ymaps.Map("map", {
    center: [59.938631, 30.323055],
    zoom: 17
  });
  myPlacemark = new ymaps.Placemark([59.938631, 30.323055], {hintContent: "ул. Большая Конюшенная, 19/8"}, {
    preset: "islands#redCircleDotIcon"
  });
  myMap.geoObjects.add(myPlacemark);
  myMap.controls.remove("geolocationControl");
  myMap.controls.remove("searchControl");
  myMap.controls.remove("trafficControl");
  myMap.controls.remove("typeSelector");
  myMap.controls.remove("fullscreenControl");
  myMap.controls.remove("rulerControl");
  myMap.controls.remove("zoomControl");
  myMap.controls.remove("RouteButton");
}
