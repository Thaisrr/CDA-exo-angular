import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Show} from "../../utils/models/show";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent  {

  @Input() show! : Show;
  @Output() modify_event = new EventEmitter<Show>();
  @Output() delete_event = new EventEmitter<Show>();

  constructor() { }

  sendModify() {
    this.modify_event.emit(this.show);
  }

  sendDelete() {
    this.delete_event.emit(this.show);
  }


}
