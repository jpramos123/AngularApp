import { Component, OnInit } from '@angular/core';
import {ApiService} from '../services/app.services';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:ApiService) { }

  ngOnInit() {
  }

  login (){
    this.service.getUser().subscribe(data => {
      console.log(data)
    });

};

}
