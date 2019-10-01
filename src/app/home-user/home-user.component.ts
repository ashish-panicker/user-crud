import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { User } from '../user.modal';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.css']
})
export class HomeUserComponent implements OnInit {

  users:User[];

  constructor(dataService: DataService) { }

  ngOnInit() {
  }

}
