import { Injectable } from '@angular/core';
import { User } from '../../../utils/types';
import { users } from '../../../utils/constants';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  users: User[] = users;
  constructor() { }
  getUsers():User[]{
    return this.users;
  }
}
