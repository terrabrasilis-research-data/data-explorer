import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {

  constructor() { }

  selectedFood: string;
  
  foods: Food[] = [
    {id: 0, viewValue: 'Steak'},
    {id: 1, viewValue: 'Pizza'},
    {id: 2, viewValue: 'Tacos'}
  ];
  
  
  addlayer(id: number){

  }

  ngOnInit() {
  
  }
  
}

export interface Food {
  id: number;
  viewValue: string;
}
