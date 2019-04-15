import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
=======
>>>>>>> origin/master

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

<<<<<<< HEAD
  logIn : FormGroup;

  constructor( private router : Router,
               private activatedRoute : ActivatedRoute ) {
  this.logIn = new FormGroup({
    'userName' : new FormControl( '', [ Validators.required,
                                        Validators.minLength(5) ] ),
    'password' : new FormControl( '', [ Validators.required,
                                        Validators.minLength(5) ] )
  });
 }
=======
  constructor() { }
>>>>>>> origin/master

  ngOnInit() {
  }

<<<<<<< HEAD
  authenticate() {
    
  }
=======
>>>>>>> origin/master
}
