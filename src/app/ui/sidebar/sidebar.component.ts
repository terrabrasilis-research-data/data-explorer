import { Component, OnInit } from '@angular/core';
import { DatasetsService } from '../../services/dataset.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {
  
  color = 'primary';
 
  constructor(private ds: DatasetsService) { }

  addlayer(ids: Array < number >){
    
    for (let i = 0; i < ids.length; i++) {
      this.layers.push(this.dataset[ids[i]-1])
    }

    console.log(this.layers)
  }

  ngOnInit() {
    this.get_datasets();
  }

  dataset: Dataset = null;
  
  layers = [];

  async get_datasets(){
    const response = await this.ds.get_datasets();
    this.dataset = response;
    
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