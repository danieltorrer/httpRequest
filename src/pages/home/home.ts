import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

  constructor(public navCtrl: NavController, private http: HttpClient) {

  }


  ngOnInit() {
    this.http
      .post('${ this.api.API_URL }user / login', {
        usr: 'this.login.usr',
        pword: 'this.login.pword'
      })
      .subscribe(response => {
        console.log(response)
      });
  }
}
