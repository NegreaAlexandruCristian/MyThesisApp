import {thesisConstants} from "../constants/ThesisConstants";
import {Thesis} from "../components/models/Thesis";
import {SupabaseDatabaseService} from "./SupabaseDatabaseService";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ThesisService {

  constructor(private readonly supabaseDatabaseService: SupabaseDatabaseService) {
  }

  // TODO make an actual post or get request to retrieve thesis for a specific student
  getStudentThesis(studentId: number): Thesis[] {
    console.log(studentId);
    return thesisConstants;
  }

  async getAllThesis(): Promise<Thesis[]> {
    let {data: thesis, error} = await this.supabaseDatabaseService.supabase
      .from('thesis')
      .select('*')
    if (error) {
      //TODO do something more special
      console.log(error)
    }
    return thesis;
  }
}
