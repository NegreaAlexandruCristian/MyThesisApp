import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();

  constructor(private router: Router) {}

  ngOnInit(): void {}

  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }

  @Output() data = new EventEmitter<any>();

  sendData() {
    this.data.emit({ sideBarOpen: false, headerBarOpen: false });
  }

  logout() {
    this.router.navigateByUrl('/login').then(() => undefined)
    this.sendData()
  }
}
