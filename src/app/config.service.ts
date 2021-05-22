
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{Records} from '../app/Records'
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Injectable(
  {
    providedIn: 'root'
  }
)
export class ConfigService {
  constructor(private http: HttpClient) { }

  url:string='https://api.airtable.com/v0/apppsJTUJDyEJDZRf/A?api_key=keyLx1P0ufhI8Xmt1'



getList(){
  return this.http.get<Records>(this.url);

}
}