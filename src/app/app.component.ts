import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyThesis';
  sideBarOpen = true;
  headerBar = true;

  sideBarToggle(): void {
    this.sideBarOpen = !this.sideBarOpen;
  }

  receiveData(event: { sideBarOpen: boolean, headerBarOpen: boolean }) {
    this.sideBarOpen = event.sideBarOpen;
    this.headerBar = event.headerBarOpen;
  }
}
