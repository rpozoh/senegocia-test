import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  logIn : FormGroup;

  constructor( private router : Router,
               private activatedRoute : ActivatedRoute,
               private _userService : UserService ) {
  this.logIn = new FormGroup({
    'userName' : new FormControl( '', [ Validators.required,
                                        Validators.minLength(5) ] ),
    'password' : new FormControl( '', [ Validators.required,
                                        Validators.minLength(5) ] )
  });
 }

  ngOnInit() {
  }

  authenticate(userName : string, password : string) {
    this._userService.getUser(userName, password).subscribe( userData =>{
      console.log( userData )
    }, error => console.error( error ) );
  }
}
