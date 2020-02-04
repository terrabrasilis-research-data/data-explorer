import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DatasetsService } from 'src/app/services/dataset.service';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent implements OnInit {

  constructor(
    private ds: DatasetsService
  ) { }
  
  @Input('visible') visibleBox: boolean = true;
  @Output() toggleToEmit = new EventEmitter();

  ngOnInit() {
    this.get_datasets();
  }
  
  datasets: Dataset = null;
  data_objects: Data_obj[];
  
 public closeBox() {
  this.toggleToEmit.emit();
  }

  async get_datasets(){
    const response = await this.ds.get_datasets();
    this.datasets = response;
    this.data_objects = this.datasets[0].data;
  }
}

export interface Dataset{
  custom_fields: Array < string >;
  repo_id: number;
  language: string;
  bbox: string;
  maintainer: string;
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