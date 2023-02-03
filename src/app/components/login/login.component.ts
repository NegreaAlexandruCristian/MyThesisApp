import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {HideHeaderSidebarService} from "../../services/HideHeaderSidebarService";
import {LoginService} from "../../services/LoginService";
import {Student} from "../models/Student";
import {AppState} from "../../states/AppState";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa fa-eye-slash";
  username: string | undefined;
  password: string | undefined;

  constructor(
    private router: Router,
    private headerSidebarService: HideHeaderSidebarService,
    private loginService: LoginService,
    private appState: AppState
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

  async login(formData: NgForm): Promise<void> {
    this.username = formData.value.username;
    this.password = formData.value.password;
    const student: Student = await this.loginService.login(this.username, this.password);
    this.appState.setUser(student);
    this.sendData(true, true);
    this.router.navigateByUrl("/home");
  }
}
