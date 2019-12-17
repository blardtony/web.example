import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  rForm: FormGroup;
  post:any;                     // A property for our submitted form
  email:string = '';
  name:string = '';
  password:string ='';
  titleAlert:string = 'Le champs est vide'
  constructor(private fb: FormBuilder) {

    this.rForm = fb.group({
      'name' : [null, Validators.required],
      'email' : [null, Validators.required],
      'password' : [null, Validators.required],
      'validate' : ''
    });

  }
  addPost(post) {
    this.email = post.description;
    this.name = post.name;
    this.password = post.password;
  }
}
