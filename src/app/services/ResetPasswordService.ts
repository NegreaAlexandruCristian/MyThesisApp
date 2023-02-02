import {SupabaseDatabaseService} from "./SupabaseDatabaseService";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ResetPasswordService {

  constructor(private supabaseDatabaseService: SupabaseDatabaseService) {
  }

  async resetPassword(email: string | undefined, password: string | undefined): Promise<void> {
    if (typeof email == 'undefined') {
      throw new Error("Can't reset password. Please enter an email so that we know who you are!")
    } else {
      let {data: student, error} = await this.supabaseDatabaseService.supabase
        .from('students')
        .update({password: password})
        .eq('email', email)
        .select()
      if (student.length < 1 || typeof error != 'undefined') {
        throw new Error("Can't reset password. No user found!")
      }
    }
  }
}
