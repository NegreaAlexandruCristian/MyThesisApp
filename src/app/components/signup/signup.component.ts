import {Component} from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  type: string = "password"
  isText: boolean = false
  eyeIcon: string = "fa fa-eye-slash"

  typeRetype: string = "password"
  isTextRetype: boolean = false
  eyeIconRetype: string = "fa fa-eye-slash"

  constructor() {
  }

  ngOnInit(): void {
  }

  hideShowPassword() {
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";
  }

  hideShowPasswordRetype() {
    this.isTextRetype = !this.isTextRetype;
    this.isTextRetype ? this.eyeIconRetype = "fa-eye" : this.eyeIconRetype = "fa-eye-slash";
    this.isTextRetype ? this.typeRetype = "text" : this.typeRetype = "password";
  }
}
