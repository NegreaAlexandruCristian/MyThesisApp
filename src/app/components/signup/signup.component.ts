import {Component, OnInit} from '@angular/core';
import {SignUpService} from "../../services/SignUpService";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {HideHeaderSidebarService} from "../../services/HideHeaderSidebarService";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

  type: string = "password"
  isText: boolean = false
  eyeIcon: string = "fa fa-eye-slash"
  typeRetype: string = "password"
  isTextRetype: boolean = false
  eyeIconRetype: string = "fa fa-eye-slash"
  firstName: string | undefined;
  lastName: string | undefined;
  email: string | undefined;
  username: string | undefined;
  password: string | undefined;
  retypePassword: string | undefined;

  constructor(
    private signUpService: SignUpService,
    private router: Router,
    private headerSidebarService: HideHeaderSidebarService,
  ) {
  }

  ngOnInit(): void {
    this.sendData(false, false)
    }
  sendData(sideBarOpen: boolean, headerBarOpen: boolean): void {
    this.headerSidebarService.sendData({ sideBarOpen: sideBarOpen, headerBarOpen: headerBarOpen })
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

  async signUp(formData: NgForm): Promise<void> {
    this.firstName = formData.value.firstName;
    this.lastName = formData.value.lastName;
    this.email = formData.value.email;
    this.username = formData.value.username;
    this.password = formData.value.password;
    this.retypePassword = formData.value.retypePassword;
    await this.signUpService.signUp(
      this.firstName,
      this.lastName,
      this.email,
      this.username,
      this.password
    );
    this.sendData(true, true)
    this.router.navigateByUrl("/home");
  }
}
