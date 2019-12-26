import { Component, OnInit } from '@angular/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { layerGroup, tileLayer, Layer, geoJSON , circle, polygon} from 'leaflet';

import * as L from 'leaflet';
import 'leaflet.fullscreen/Control.FullScreen.js';
import 'src/assets/plugins/Leaflet.Coordinates/Leaflet.Coordinates-0.1.5.min.js';
import 'esri-leaflet/dist/esri-leaflet.js';
import * as LE from 'esri-leaflet-geocoder/dist/esri-leaflet-geocoder.js';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})

export class MapComponent implements OnInit, LeafletModule {
  
  public layersControl: any;

  constructor() { }
  
	options = {

  };

  ngOnInit() {

    this.layersControl = {
      baseLayers: {
        'Google Hybrid':  tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}' , { enebled: true, maxZoom: 18, attribution: '...', subdomains: ['mt0', 'mt1', 'mt2', 'mt3'] }),
        'Open Street Map': tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
      }
    }
    
    this.options = 	{ 
      zoom: 4,
      center: [6, -67],
      layers: [ this.layersControl.baseLayers['Google Hybrid'] ]
    }

  }
}
