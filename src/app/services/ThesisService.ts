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
  async getStudentThesis(studentId: number): Promise<Thesis[]> {
    let {data: thesisIds, error} = await this.supabaseDatabaseService.supabase
      .from('student_thesis')
      .select('thesis_id')
      .eq('student_id', studentId)
    const ids = thesisIds.map((obj: { thesis_id: any; }) => obj.thesis_id);
    const thesis: Thesis[] = await ids.map(async (id: any) => {
      let {data: thesis} = await this.supabaseDatabaseService.supabase
        .from('thesis')
        .select('*')
        .eq('no', id);
      return thesis;
    })
    const thesisData: Thesis[] = [];
    for (const thesisPromise of thesis) {
      const th: any = await thesisPromise;
      thesisData.push(this.transformObject(th[0]));
    }
    if (error) {
      //TODO do something more special
      console.log(error)
    }
    return thesisData.length < 1 ? [] : thesisData;
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

  private transformObject(obj: any): Thesis {
    return <Thesis>{
      no: obj.no,
      level: obj.level,
      specialization: obj.specialization,
      university: obj.university,
      coordinator: obj.coordinator,
      status: obj.status,
      action: obj.action
    };
  }
}
