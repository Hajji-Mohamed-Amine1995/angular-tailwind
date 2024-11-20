import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    NgOptimizedImage,
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email:string="";
  password:string="";
  setEmail(event:Event){
    this.email = (event.target as HTMLInputElement).value;
  }
  setPassword(event:Event){
    this.password = (event.target as HTMLInputElement).value;
  }
  handleSubmit(event:Event){
    event.preventDefault();
  }
}
