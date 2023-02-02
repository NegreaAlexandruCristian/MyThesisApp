import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {ResetPasswordService} from "../../services/ResetPasswordService";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  type: string = "password"
  isText: boolean = false
  eyeIcon: string = "fa fa-eye-slash"
  typeRetype: string = "password"
  isTextRetype: boolean = false
  eyeIconRetype: string = "fa fa-eye-slash"
  email: string | undefined;
  password: string | undefined;
  retypePassword: string | undefined;

  constructor(private router: Router, private resetPasswordService: ResetPasswordService) {
  }
  async resetPassword(formData: NgForm) {
    this.email = formData.value.email;
    this.password = formData.value.password;
    await this.resetPasswordService.resetPassword(this.email, this.password);
    this.router.navigateByUrl("/login");
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
