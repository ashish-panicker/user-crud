import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { User } from '../user.modal';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  constructor(public dataService:DataService) { }

  ngOnInit() {
  }

}
