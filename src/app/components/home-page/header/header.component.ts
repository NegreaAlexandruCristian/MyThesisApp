import {AfterContentInit, Component, EventEmitter, Output} from '@angular/core';
import {Router} from '@angular/router';
import {HideHeaderSidebarService} from "../../../services/HideHeaderSidebarService";
import {AppState} from "../../../states/AppState";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements AfterContentInit {
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
  username: string = '';

  constructor(
    private router: Router,
    private headerSidebarService: HideHeaderSidebarService,
    private appState: AppState
  ) {
  }

  ngAfterContentInit(): void {
    this.username = this.appState.getUser().username
  }

  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }

  sendData() {
    this.headerSidebarService.sendData({sideBarOpen: false, headerBarOpen: false})
  }

  logout() {
    this.router.navigateByUrl('/login').then(() => undefined)
    this.sendData()
  }
}
