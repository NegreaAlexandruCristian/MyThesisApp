import {Component} from '@angular/core';
import {HideHeaderSidebarService} from "./services/HideHeaderSidebarService";
import {AppState} from "./states/AppState";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyThesis';
  sideBarOpen = true;
  headerBar = true;
  data: any = undefined;

  sideBarToggle(): void {
    this.sideBarOpen = !this.sideBarOpen;
  }

  constructor(
    private hideHeaderSidebarService: HideHeaderSidebarService,
    private appState: AppState,
  ) {
    this.hideHeaderSidebarService.data.subscribe(data => {
      this.data = data;
      this.sideBarOpen = this.data.sideBarOpen;
      this.headerBar = this.data.headerBarOpen;
    });
    console.log(appState.getUser())
  }
}
