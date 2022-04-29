import {Component, OnInit} from '@angular/core';
import {Show} from "../../utils/models/show";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ShowService} from "../../utils/service/show.service";

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit{

  open_dialog : boolean = false;
  shows : Show[] = [];
  displayed_shows: Show[] = [];
  deleting_show?: Show;

  constructor( private show_service : ShowService) { }

  ngOnInit() {
    this.loadShows();
  }

  loadShows(): void {
    this.show_service.getShows()
      .subscribe( (shows) => {
        this.shows = shows;
        this.changeArray('all');
      });
  }

  changeArray(filter: boolean | string) {
    if(typeof filter === 'string') {
      this.displayed_shows = this.shows;
    } else {
      this.displayed_shows = this.shows.filter(show => show.is_watched === filter)
    }
  }

  setVisibility(show: Show) {
    const index = this.shows.indexOf(show);
    this.shows[index].is_watched = !show.is_watched;
  }

  openDialog(show: Show) {
    this.deleting_show = show;
    this.open_dialog = true;
  }

  deleteShow(confirm: boolean) {
    if (this.deleting_show && confirm) {
      const index = this.shows.indexOf(this.deleting_show);
      this.shows.splice(index, 1);
    }
    this.open_dialog = false;
  }

  saveShow(show: Show) {
    this.shows.push(show);
  }


}
