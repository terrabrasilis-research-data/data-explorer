import { Component, OnInit } from '@angular/core';

let logged = false;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})


export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }
  
  OpenMenu() {
    if (document.getElementById("wrapper").className == "d-flex")
      document.getElementById("wrapper").className = "d-flex toggled";
    else  
      document.getElementById("wrapper").className = "d-flex";
  }

  ChangeLogged(results: boolean){
    var value = results;
    localStorage.setItem('Auth', JSON.stringify(value));
  }

  isLogged(){
    return logged;
  }

}
