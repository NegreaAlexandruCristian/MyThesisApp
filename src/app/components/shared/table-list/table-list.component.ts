import {Component} from '@angular/core';
import {Thesis} from "../../models/Thesis";
import {StudentThesisService} from "../../../services/StudentThesisService";

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent {
  private studentThesisService: StudentThesisService;

  constructor() {
    this.studentThesisService = new StudentThesisService();
  }

  getStudentsThesis(studentId: number): Thesis[] {
    return this.studentThesisService.getStudentsThesis(1);
  }

  onButtonClick(): void {

  }
}
