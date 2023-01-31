import {thesisConstants} from "../constants/ThesisConstants";
import {Thesis} from "../components/models/Thesis";

export class ThesisService {
  // TODO make an actual post or get request to retrieve thesis for a specific student
  getStudentThesis(studentId: number): Thesis[] {
    console.log(studentId);
    return thesisConstants;
  }

  getAllThesis(): Thesis[] {
    return thesisConstants;
  }
}
