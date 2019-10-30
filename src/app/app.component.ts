import { AuthService } from './auth.service';
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public loginForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });

  public onSubmit() {
    // Method does not provide login at the moment
    // It just persist credentials into auth service to use into auth flow
    this.auth.saveCredentials(this.loginForm.value);
  }

  public constructor(public auth: AuthService) {

  }
}
