import { Component, OnInit, Inject } from '@angular/core';
import { DatasetsService } from '../../services/dataset.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MapComponent } from '../map/map.component';
import { Store, select } from '@ngrx/store';
import * as fromUI from '../ui.reducer';

import { MapOptions, Map as MapLeaflet,
  rectangle, tileLayer, polygon } from 'leaflet';
import { addLayer, removeLayer, addLayerConf } from '../ui.action';
import { UIState } from '../ui.state';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {
  
  color = 'primary';
  layers_ids = [];

  constructor(private ds: DatasetsService, public dialog: MatDialog, private store: Store<fromUI.AppState>) { }

  openConfigDialog(id: number): void {

    const dialogRef = this.dialog.open(DialogConfig, {
      width: '350px',
      data: {id:  id, title: this.datasets[id].title, color: this.layer_conf.find(x => x.id == id).color, alpha: this.layer_conf.find(x => x.id == id).alpha}
    });

    dialogRef.afterClosed().subscribe(results => {
      this.store.pipe(select('ui')).subscribe(res => {
        this.layer_conf.find(x => x.id == res['layer_conf'].id).color = res['layer_conf'].color;
        this.layer_conf.find(x => x.id == res['layer_conf'].id).alpha = res['layer_conf'].alpha;
      })
      });
  }

  openInfoDialog(id: number): void {
    const dialogRef2 = this.dialog.open(DialogInfo, {
      width: '520px',
      height: '420px',
      data: {id:  id+1, title: this.datasets[id].title, created_on: this.datasets[id].created_on, author: this.datasets[id].author, license: this.datasets[id].license, contact_email: this.datasets[id].contact_email, categories: this.datasets[id].categories, bbox: this.datasets[id].bbox, maintainer: this.datasets[id].maintainer}
    });

    dialogRef2.afterClosed().subscribe(result => {
    });
  }

  addlayerColorAlpha(ids: Array < number >, color: string, alpha: number){  
    for (let i = 0; i < ids.length; i++) {
      if(!this.layers_ids.includes(ids[i])){
        this.layers_ids.push(ids[i])
        
        this.layers.push(this.datasets[ids[i]-1])
        this.layer_conf.push({id: ids[i], color: color, alpha: alpha})
        this.store.dispatch(addLayer({
          layer: polygon( [[ 2, -80 ], [ 15, -50 ], [ -10, -50 ]], { color: color, opacity: alpha, id: ids[i], maxZoom: 18, attribution: '...' } )
      }))
    }     
   }
  }
  
  removelayer(id: number){
    this.store.dispatch( removeLayer({id: id}) )
  }
  
  slidechange(id: number, status: any){
    console.log("entrou")
    if (status.checked == true){
      this.store.dispatch(addLayer({
        layer: polygon( [[ 2, -80 ], [ 15, -50 ], [ -10, -50 ]], { color: this.layer_conf.find(x => x.id == id).color, opacity: this.layer_conf.find(x => x.id == id).alpha, id: id, maxZoom: 18, attribution: '...' } )
      }))
    } else {
      this.removelayer(id);
    }
  }

  ngOnInit() {
    this.get_datasets();
  }

  datasets: Dataset = null;
  
  layers = [];
  layer_conf = [];

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

    @Inject(MAT_DIALOG_DATA) public data: DialogData, private store: Store<UIState>) {}
    
    save(id: number){

      //remove layer
      this.store.dispatch( removeLayer({id: id}) )

      //add new layer
      this.store.dispatch(addLayer({
        layer: polygon( [[ 2, -80 ], [ 15, -50 ], [ -10, -50 ]], { color: ((document.getElementById("colorpicker") as HTMLInputElement).value), opacity: ((document.getElementById("sliderpicker") as HTMLInputElement).value), id: id, maxZoom: 18, attribution: '...' } )
      }))

      //save layer conf
      this.store.dispatch(addLayerConf({id: id, color: ((document.getElementById("colorpicker") as HTMLInputElement).value), alpha: ((document.getElementById("sliderpicker") as HTMLInputElement).value)}));

      //close
      this.dialogRef.close();

    }

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

export interface LayerCon {
  id: number;
  color: string;
  alpha: string;
}