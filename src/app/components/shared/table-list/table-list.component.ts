import {Component, Input} from '@angular/core';
import {Thesis} from "../../models/Thesis";
import {ThesisService} from "../../../services/ThesisService";

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent {
  private thesisService: ThesisService;
  private listThesis: Thesis[] = [];
  filterLevel: string = "";
  filterSpecialization: string = "";
  filterTopic: string = "";
  uniqueLevels: string[] = [];
  uniqueSpecializations: string[] = [];
  uniqueTopics: string[] = [];

  @Input() data: boolean | undefined;

  constructor() {
    this.thesisService = new ThesisService();
  }

  getStudentsThesis(studentId: number): Thesis[] {
    if (this.data) {
      this.listThesis = this.thesisService.getStudentThesis(studentId);
    } else {
      this.listThesis = this.thesisService.getAllThesis();
    }
    this.uniqueLevels = Array.from(new Set(this.listThesis.map(th => th.level)))
    this.uniqueSpecializations = Array.from(new Set(this.listThesis.map(th => th.specialization)))
    this.uniqueTopics = Array.from(new Set(this.listThesis.map(th => th.topic)))
    return this.listThesis;
  }

  onButtonClick(): void {

  }
}
