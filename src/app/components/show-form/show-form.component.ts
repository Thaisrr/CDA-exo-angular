import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Show} from "../../utils/models/show";
@Component({
  selector: 'app-show-form',
  templateUrl: './show-form.component.html',
  styleUrls: ['./show-form.component.css']
})
export class ShowFormComponent  {
  @Output() save_event = new EventEmitter<Show>();

  show_group = new FormGroup({
    title: new FormControl('', [Validators.required]),
    author : new FormControl(''),
    description: new FormControl(''),
    is_watched: new FormControl(false)
  });

  saveShow() {
    if (this.show_group.valid) {
      this.save_event.emit(this.show_group.value);
      this.show_group.reset();
    }
  }


}
