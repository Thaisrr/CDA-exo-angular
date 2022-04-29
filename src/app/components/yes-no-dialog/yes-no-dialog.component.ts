import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-yes-no-dialog',
  templateUrl: './yes-no-dialog.component.html',
  styleUrls: ['./yes-no-dialog.component.css']
})
export class YesNoDialogComponent  {

  @Input() display_dialog :boolean = false;
  @Output() confirm_event = new EventEmitter<boolean>();

  constructor() { }

  sendConfirmation(confirm: boolean) {
    this.confirm_event.emit(confirm);
  }

}
