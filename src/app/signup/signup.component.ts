import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    NgOptimizedImage,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  formGroup:FormGroup = new FormGroup({
    email:new FormControl(""),
    password:new FormControl(""),
    firstName:new FormControl(""),
    lastName:new FormControl(""),
  })
}
