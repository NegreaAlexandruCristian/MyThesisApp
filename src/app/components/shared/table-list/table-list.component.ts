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
  private listThesis: Thesis[] = [];
  filterLevel: string = "";
  filterSpecialization: string = "";
  filterTopic: string = "";
  uniqueLevels: string[] = [];
  uniqueSpecializations: string[] = [];
  uniqueTopics: string[] = [];

  constructor() {
    this.studentThesisService = new StudentThesisService();
  }

  getStudentsThesis(studentId: number): Thesis[] {
    this.listThesis = this.studentThesisService.getStudentsThesis(studentId);
    this.uniqueLevels = Array.from(new Set(this.listThesis.map(th => th.level)))
    this.uniqueSpecializations = Array.from(new Set(this.listThesis.map(th => th.specialization)))
    this.uniqueTopics = Array.from(new Set(this.listThesis.map(th => th.topic)))
    return this.listThesis;
  }

  onButtonClick(): void {

  }
}
