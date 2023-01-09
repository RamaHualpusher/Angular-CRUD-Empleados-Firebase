import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
    constructor(private loginService:LoginServiceService) { }

    ngOnInit(): void {}

    login(form:NgForm){
      const email = form.value.email;
      const password = form.value.password;
      this.loginService.login(email, password);
    }

}
