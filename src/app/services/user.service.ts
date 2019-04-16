import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userURL : string = "http://rcid.cl/api/sn5/";

  constructor( private http : Http ) { }

  getUser( userName : string, password : string ) {
    let getUserUrl = `${ this.userURL}usuario/Authorized?data={“username”:”${ userName }”,”password”:”${ password }}".json`;
    return this.http.get( getUserUrl )
      .map( getUser => getUser.json());
  }
}
