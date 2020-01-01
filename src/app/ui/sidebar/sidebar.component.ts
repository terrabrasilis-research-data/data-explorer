import { Component, OnInit, Inject } from '@angular/core';
import { DatasetsService } from '../../services/dataset.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import * as L from 'leaflet';

import { MapOptions, Map as MapLeaflet,
  rectangle, tileLayer, geoJSON } from 'leaflet';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {
  
  color = 'primary';

  constructor(private ds: DatasetsService, public dialog: MatDialog) { }

  public map: MapLeaflet;

  openConfigDialog(id: number): void {
    const dialogRef = this.dialog.open(DialogConfig, {
      width: '350px',
      data: {id:  id, title: this.datasets[id].title}
    });

    dialogRef.afterClosed().subscribe(result => {
      
    });
  }

  openInfoDialog(id: number): void {
    const dialogRef2 = this.dialog.open(DialogInfo, {
      width: '450px',
      height: '350px',
      data: {id:  id, title: this.datasets[id].title}
    });

    dialogRef2.afterClosed().subscribe(result => {
      
    });
  }

  addlayer(ids: Array < number >){
    
    for (let i = 0; i < ids.length; i++) {
      this.layers.push(this.datasets[ids[i]-1])
    }

    /*var geojsonFeature = {
      "type": "Feature",
      "properties": {
          "name": "Coors Field",
          "amenity": "Baseball Stadium",
          "popupContent": "This is where the Rockies play!"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [-104.99404, 39.75621]
      }
    };

    L.geoJSON(geojsonFeature).addLayer(this.map);
    */
  }

  ngOnInit() {
    this.get_datasets();
  }

  datasets: Dataset = null;
  
  layers = [];

  async get_datasets(){
    const response = await this.ds.get_datasets();
    this.datasets = response;
    
  }
  
}

@Component({
  selector: 'config',
  templateUrl: 'config.html',
})

export class DialogConfig {

  constructor(
    public dialogRef: MatDialogRef<DialogConfig>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'info',
  templateUrl: 'info.html',
})

export class DialogInfo {

  constructor(
    public dialogRef2: MatDialogRef<DialogInfo>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef2.close();
  }
}

export interface Dataset{
  bbox: string;
  data: Array < Data_obj > ;
  id: number;
  title: string;
  year: string;
  author: Array < string > ;
  abstract: string;
  categories: Array < string > ;
  size: number;
  repositorie: string;
  DOI: string;
  filetypes:  Array < string > 
  created_on: string;
  license: string;
  contact_email: string;
}

export interface Data_obj {
  id: number;
  name: string;
  size: string;
  created_on: string;
}

export interface DialogData {
  id: number;
}