import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cs-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  login = '';
  password = '';
  constructor() { }

  ngOnInit() {
  }

}
