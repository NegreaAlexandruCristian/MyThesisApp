import {Student} from "../components/models/Student";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AppState {
  private user: Student | undefined;

  setUser(user: Student) {
    this.user = user;
  }

  getUser(): Student {
    return <Student>this.user;
  }
}
