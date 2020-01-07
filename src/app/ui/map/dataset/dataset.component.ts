import { Component } from '@angular/core';

@Component({
  selector: 'app-dataset',
  templateUrl: './dataset.component.html',
  styleUrls: ['./dataset.component.scss']
})

export class DatasetComponent {

  /** if user logged */
  public logged = true;
  /** if display box to search */
  public viewBox = false;

  /** display box to search */
  public showBox() {
    this.viewBox = true;
  }

  /** close/diable box of the page */
  public closeBox() {
    this.viewBox = false;
  }

}