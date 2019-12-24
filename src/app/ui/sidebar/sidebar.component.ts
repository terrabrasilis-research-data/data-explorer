import { Component, OnInit } from '@angular/core';

let logged = false;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  isLogged(){
    return logged;
  }
  change(){
	if (logged==true){
	    logged = false;
	} else {
	    logged = true;
	}
  }
}
