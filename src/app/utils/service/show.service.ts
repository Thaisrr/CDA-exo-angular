import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Show} from "../models/show";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ShowService {
  api_url = "http://localhost:3000/shows"

  // ça instancie automatiquement la classe HttpClient
  constructor( private http : HttpClient) { }

  getShows() : Observable<Show[]> {
    return this.http.get<Show[]>(this.api_url);
  }
}
