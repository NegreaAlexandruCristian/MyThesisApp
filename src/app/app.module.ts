import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {FormsModule} from "@angular/forms";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SignupComponent} from './components/signup/signup.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {HomeComponent} from "./components/home-page/home/home.component";
import {SidenavComponent} from "./components/home-page/sidenav/sidenav.component";
import {HeaderComponent} from "./components/home-page/header/header.component";
import {DashboardComponent} from "./components/home-page/dashboard/dashboard.component";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from "@angular/material/button";
import {TableListComponent} from './components/shared/table-list/table-list.component';
import {FilterByTopicPipe} from './components/shared/table-list/filters/filter-by-topic/filter-by-topic.component';
import {FilterByLevelPipe} from './components/shared/table-list/filters/filter-by-level/filter-by-level.component';
import {
  FilterBySpecializationPipe
} from './components/shared/table-list/filters/filter-by-specialization/filter-by-specialization.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { NotepadComponent } from './components/shared/notepad/notepad.component';
import {NgxEditorModule} from "ngx-editor";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    SidenavComponent,
    HeaderComponent,
    DashboardComponent,
    TableListComponent,
    FilterByTopicPipe,
    FilterByLevelPipe,
    FilterBySpecializationPipe,
    ForgotPasswordComponent,
    NotepadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    NgxEditorModule,
    // * MATERIAL IMPORTS
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
