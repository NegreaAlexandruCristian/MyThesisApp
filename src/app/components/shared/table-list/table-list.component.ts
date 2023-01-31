import {Component, Input, OnInit} from '@angular/core';
import {Thesis} from "../../models/Thesis";
import {ThesisService} from "../../../services/ThesisService";

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  listThesis: Thesis[] = [];
  filterLevel: string = "";
  filterSpecialization: string = "";
  filterTopic: string = "";
  uniqueLevels: string[] = [];
  uniqueSpecializations: string[] = [];
  uniqueTopics: string[] = [];

  @Input() data: boolean | undefined;

  constructor(private thesisService: ThesisService) {
  }

  ngOnInit(): void {
    this.getStudentsThesis(1).then(() => undefined)
  }

  async getStudentsThesis(studentId: number): Promise<void> {
    if (this.data) {
      this.listThesis = this.thesisService.getStudentThesis(studentId);
    } else {
      this.listThesis = await this.thesisService.getAllThesis();
    }
    this.processActionTypeForThesis()
    this.uniqueLevels = Array.from(new Set(this.listThesis.map(th => th.level)))
    this.uniqueSpecializations = Array.from(new Set(this.listThesis.map(th => th.specialization)))
    this.uniqueTopics = Array.from(new Set(this.listThesis.map(th => th.topic)))
  }

  onButtonClick(): void {
  }

  private processActionTypeForThesis(): void {
    this.listThesis.map(th => th.status == "Finished" ? th.action = "View": th.action = "Edit")
  }
}
