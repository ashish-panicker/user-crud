import { Component, OnInit } from '@angular/core';
import { User } from '../user.modal';
import { DataService } from '../data.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  count: number = 0;
  username: string;
  email: string;
  phone: number;
  
  newUser: User;

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }


  addUser() {
    this.newUser = new User(this.count, this.username, this.email, this.phone);
    this.dataService.add(this.newUser);
    console.log(this.newUser);
    console.log(this.dataService.users.length);
    ++this.count;
  }
}
