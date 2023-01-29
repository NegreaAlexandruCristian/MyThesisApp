import {thesisConstants} from "../constants/ThesisConstants";
import {Thesis} from "../components/models/Thesis";

export class StudentThesisService {
  getStudentsThesis(studentId: number): Thesis[] {
    return thesisConstants;
  }
}
