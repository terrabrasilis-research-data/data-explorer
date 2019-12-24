import { Component, OnInit } from '@angular/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { layerGroup, tileLayer, Layer, geoJSON } from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})

export class MapComponent implements OnInit, LeafletModule {
  
  public layersControl: any;

  constructor() { }

  google_hybrid = {
    id: 'google_hybrid',
    enabled: true,
    name: 'Google Hybrid',
    layer: tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}', {
       subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
    }),
 }
  
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
  
  baseMaps = {
    "Google Hybrid": this.google_hybrid
  };

  overlayMaps = {
      "Geo JSON Polygon": this.geoJSON
  };

  layers: Layer[] = [];
  
	options = {
  };


  ngOnInit() {

    this.layers.push(this.google_hybrid.layer)
    this.layers.push(this.geoJSON.layer)

    this.layersControl = layerGroup([ ])

    this.options = 	{ 
      zoom: 4,
		  center: this.geoJSON.layer.getBounds().getCenter()
    }

  }

}
