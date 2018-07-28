import { Component, OnInit } from '@angular/core';
import {User} from '../model/user/user.model'
import {USERS} from '../users'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users = USERS;
  constructor() { }

  ngOnInit() {
  }

}
