import './style.css';
import {Map, View, Overlay} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM()
    })
  ],
  view: new View({
    center: [0, 0],
    zoom: 2
  })

});

const popupContainerElement = document.getElementById("popup-cooerdinates");
const popup = new Overlay({
  element:popupContainerElement
})

map.addOverlay(popup)
map.on('click', function(e){
  const coordinate = e.coordinate;
  popup.setPosition(undefined)
  popup.setPosition(coordinate)
  console.log(e)
  popupContainerElement.innerHTML = `Coordinates: ${coordinate}`;

})