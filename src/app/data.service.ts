import { Injectable } from '@angular/core';
import { User } from './user.modal';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  users: User[] = [];

  constructor() { }

  add(user:User){
    this.users.push(user);
  }

  list(){
    return this.users;
  }
}
