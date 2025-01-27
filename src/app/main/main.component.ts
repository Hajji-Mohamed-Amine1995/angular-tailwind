import { Component,OnInit } from '@angular/core';
import { DataServiceService } from '../services/data-service.service';
import { User } from '../../../utils/types';
import {NgForOf} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    NgForOf,
    FormsModule
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit {
  users:User[] = [];
  searchTerm: string="";
  dataService:DataServiceService;
  constructor(dataService:DataServiceService){
    this.dataService = dataService;
  }
  ngOnInit(): void {
    this.users = this.dataService.getUsers();
    console.log(this.users);
  }
  onSearchChange() {
    if(this.searchTerm.length > 0) {
      this.users = this.users.filter(user =>
        user.email.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }else{
      this.users = this.dataService.getUsers();
    }
  }
}
