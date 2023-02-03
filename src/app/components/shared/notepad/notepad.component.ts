import {Component, OnDestroy, OnInit} from '@angular/core';
import {Editor} from "ngx-editor";
import {ActivatedRoute} from "@angular/router";
import {ThesisService} from "../../../services/ThesisService";
import {Thesis} from "../../models/Thesis";

@Component({
  selector: 'app-notepad',
  templateUrl: './notepad.component.html',
  styleUrls: ['./notepad.component.css']
})
export class NotepadComponent implements OnInit, OnDestroy {
  editor: Editor | undefined;
  html = '';
  editorDisabled: boolean = false;

  private thesis: Thesis | undefined;

  constructor(
    private route: ActivatedRoute,
    private thesisService: ThesisService
  ) {
  }

  ngOnInit(): void {
    this.editor = new Editor();
    const showError = () => {
      this.html = '<p style="color:red; font-weight:bold;"> Please select a thesis from the Dashboard located on the sidebar on the left side!</p>';
      this.editorDisabled = true;
    }
    let content: string | undefined;
    this.route.params.subscribe(async params => {
      const id = params['id'];
      if (id != 'none') {
        this.thesis = await this.thesisService.getThesis(id);
        console.log(this.thesis)
        console.log(this.thesis)
        if (typeof this.thesis != 'undefined') {
          this.editorDisabled = false;
          content = typeof this.thesis.contentText == 'undefined' || this.thesis.contentText === null ? 'Type here..' : this.thesis.contentText;
          this.html = content;
        } else {
          showError();
        }
      } else {
        showError();
      }
    });
  }

  ngOnDestroy(): void {
    this.editor?.destroy();
  }

  saveChanges(): void {
    if (typeof this.thesis != 'undefined') {
      this.thesisService.saveThesis(this.html, this.thesis.no).then(() => undefined)
    }
  }

  editorChange($event: any) {
    this.html = $event
  }
}
