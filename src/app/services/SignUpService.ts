import {SupabaseDatabaseService} from "./SupabaseDatabaseService";
import {Injectable} from "@angular/core";
import {Student} from "../components/models/Student";

@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  constructor(private supabaseDatabaseService: SupabaseDatabaseService) {
  }

  async signUp(
    firstName: string | undefined,
    lastName: string | undefined,
    email: string | undefined,
    username: string | undefined,
    password: string | undefined
  ): Promise<Student> {
    if (
      typeof firstName == 'undefined' ||
      typeof lastName == 'undefined' ||
      typeof email == 'undefined' ||
      typeof password == 'undefined'
    ) {
      throw new Error("Couldn't signup. Please check all the fields, none of them should be empty!")
    }
    username = typeof username === 'undefined' ? firstName + "." + lastName : username;
    const {data: student, error} = await this.supabaseDatabaseService.supabase
      .from('students')
      .insert([
        {first_name: firstName, last_name: lastName, password: password, email: email, username: username},
      ])
      .select();
    return student[0]
  }
}
