import {SupabaseDatabaseService} from "./SupabaseDatabaseService";
import {Injectable} from "@angular/core";
import {Student} from "../components/models/Student";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private supabaseDatabaseService: SupabaseDatabaseService) {
  }

  private async getStudent(username: string | undefined, password: string | undefined): Promise<void> {
    if (typeof username == 'undefined') {
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

  async login(username: string | undefined, password: string | undefined): Promise<Student> {
    let student: any = await this.getStudent(username, password);
    return this.transformObject(student[0])
  }

  private transformObject(obj: any): Student {
    return <Student>{
      no: obj.no,
      firstName: obj.first_name,
      lastName: obj.last_name,
      username: obj.username,
      email: obj.email,
    };
  }
}
