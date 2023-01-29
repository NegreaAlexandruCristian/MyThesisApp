import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { HideHeaderSidebarService } from "../../../services/HideHeaderSidebarService";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();

  constructor(private router: Router, private headerSidebarService: HideHeaderSidebarService) {}

  ngOnInit(): void {}

  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }

  sendData() {
    this.headerSidebarService.sendData({ sideBarOpen: false, headerBarOpen: false })
  }

  logout() {
    this.router.navigateByUrl('/login').then(() => undefined)
    this.sendData()
  }
}
