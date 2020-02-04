import { Component } from '@angular/core';

@Component({
  selector: 'app-dataset',
  templateUrl: './dataset.component.html',
  styleUrls: ['./dataset.component.scss']
})

export class DatasetComponent {

  public logged = true;
  public viewBox = false;

  public showBox() {
    this.viewBox = true;
  }

  public closeBox() {
    this.viewBox = false;
  }

}