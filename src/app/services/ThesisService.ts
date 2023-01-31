import {API_KEY, API_URL, thesisConstants} from "../constants/ThesisConstants";
import {Thesis} from "../components/models/Thesis";
import {createClient} from '@supabase/supabase-js';


export class ThesisService {

  private supabaseUrl: string = "";
  private supabaseKey: string = "";
  private supabase: any = undefined;

  constructor() {
    this.supabaseUrl = API_URL;
    this.supabaseKey = API_KEY;
    this.supabase = createClient(this.supabaseUrl, this.supabaseKey)
  }

  // TODO make an actual post or get request to retrieve thesis for a specific student
  getStudentThesis(studentId: number): Thesis[] {
    console.log(studentId);
    return thesisConstants;
  }

  async getAllThesis(): Promise<Thesis[]> {
    let { data: thesis, error } = await this.supabase
      .from('thesis')
      .select('*')
    if (error) {
      //TODO do something more special
      console.log(error)
    }
    return thesis;
  }
}
