import {Show} from "./show";

export interface Author {
  name : string;
  birthdate: Date;
  shows : Show[];
  favorite_words : string[];
}
