import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent implements OnInit {

  constructor() { }
  
  @Input('visible') visibleBox: boolean = true;
  @Output() toggleToEmit = new EventEmitter();

  ngOnInit() {
  }
  
 public closeBox() {
  this.toggleToEmit.emit();
}

}
