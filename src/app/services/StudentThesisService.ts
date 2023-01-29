import {thesisConstants} from "../constants/ThesisConstants";
import {Thesis} from "../components/models/Thesis";

export class StudentThesisService {
  // TODO make an actual post or get request to retrieve thesis for a specific student
  getStudentsThesis(studentId: number): Thesis[] {
    return thesisConstants;
  }
}
