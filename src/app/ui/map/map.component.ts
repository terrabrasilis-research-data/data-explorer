import { Component, OnInit } from '@angular/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { layerGroup, tileLayer, Layer, geoJSON , circle, polygon} from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})

export class MapComponent implements OnInit, LeafletModule {
  
  public layersControl: any;

  constructor() { }
  
	geoJSON = {
		id: 'geoJSON',
		name: 'Geo JSON Polygon',
		enabled: true,
		layer: geoJSON(
			({
        type: 'Polygon',

				coordinates: [[
          [
            -67.92626,
            6.656333333333333
          ],
          [
            -49.38799999999998,
            6.656333333333333
          ],
          [
            -49.38799999999998,
            -3.89446
          ],
          [
            -67.92626,
            -3.89446
          ],
          [
            -67.92626,
            6.656333333333333
          ]
				]]
			}) as any,
			{ style: () => ({ color: '#ff7800' })})
  };
  
	options = {

  };

  ngOnInit() {

    this.layersControl = {
      baseLayers: {
        'Google Hybrid':  tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}' , { enebled: true, maxZoom: 18, attribution: '...', subdomains: ['mt0', 'mt1', 'mt2', 'mt3'] }),
        'Open Street Map': tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
      },
      overlays: { }
    }
    
    this.options = 	{ 
      zoom: 4,
      center: this.geoJSON.layer.getBounds().getCenter(),
      layers: [ this.layersControl.baseLayers['Google Hybrid'] ]
    }
 }
}
