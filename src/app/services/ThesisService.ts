import {Thesis} from "../components/models/Thesis";
import {SupabaseDatabaseService} from "./SupabaseDatabaseService";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ThesisService {

  constructor(private readonly supabaseDatabaseService: SupabaseDatabaseService) {
  }

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

  async getThesis(no: number): Promise<Thesis> {
    let {data: thesis, error} = await this.supabaseDatabaseService.supabase
      .from('thesis')
      .select('*')
      .eq('no', no)
    if (error) {
      //TODO do something more special
      console.log(error)
    }
    const thesisData: Thesis[] = await thesis;
    return this.transformObject(thesisData[0]);
  }

  async saveThesis(content: string, no: number): Promise<void> {
    console.log(content, no)
    content = content.replaceAll('<p>', '')
    content = content.replaceAll('</p>', '')
    let {data: thesis, error} = await this.supabaseDatabaseService.supabase
      .from('thesis')
      .update({content_text: content})
      .eq('no', no)
      .select()
    console.log(thesis)
    if (error) {
      //TODO do something more special
      console.log(error)
    }
  }

  private transformObject(obj: any): Thesis {
    return <Thesis>{
      no: obj.no,
      topic: obj.topic,
      level: obj.level,
      specialization: obj.specialization,
      university: obj.university,
      coordinator: obj.coordinator,
      status: obj.status,
      action: obj.action,
      contentText: obj.content_text
    };
  }
}
