import {SupabaseDatabaseService} from "./SupabaseDatabaseService";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private supabaseDatabaseService: SupabaseDatabaseService) {
  }

  async login(username: string | undefined, password: string | undefined): Promise<void> {
    if(typeof username == 'undefined') {
      throw new Error("Couldn't login. Please check your username and password!")
    } else {
      const usernameParts = username.split(".")
      let firstName: string = usernameParts[0];
      let lastName: string = usernameParts[1];
      let {data: student, error} = await this.supabaseDatabaseService.supabase
        .from('students')
        .select('*')
        .eq('first_name', firstName)
        .eq('last_name', lastName)
        .eq('password', password);
      console.log(student)
      if (student.length < 1 || typeof student == 'undefined') {
        throw new Error("Couldn't login. Please check your username and password!")
      }
      if (error) {
        // TODO do something here more detailed
        console.log(error);
      }
      return student;
    }
  }
}
