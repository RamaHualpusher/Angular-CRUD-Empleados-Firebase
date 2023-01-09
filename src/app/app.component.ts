import { Component } from '@angular/core';
import { firebaseConfig } from 'environments/environment';
import firebase from 'firebase/compat/app';
import { LoginServiceService } from './login-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private loginService:LoginServiceService) {}

  ngOnInit() {
    firebase.initializeApp(firebaseConfig);
    console.log("Token: " + this.loginService.getIdToken());
  }

  isLogged() {
    return this.loginService.isLogged();
  }
  logout() {
    this.loginService.logout();
  }



}
