import {Component, OnDestroy, OnInit} from '@angular/core';
import {Editor} from "ngx-editor";
import {ActivatedRoute} from "@angular/router";
import {ThesisService} from "../../../services/ThesisService";

@Component({
  selector: 'app-notepad',
  templateUrl: './notepad.component.html',
  styleUrls: ['./notepad.component.css']
})
export class NotepadComponent implements OnInit, OnDestroy {
  editor: Editor | undefined;
  html = '';
  editorDisabled: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private thesisService: ThesisService
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(async params => {
      this.editor = new Editor();
      const id = params['id'];
      if (id != 'none') {
        this.editorDisabled = false;
        const thesis = await this.thesisService.getThesis(id)
        console.log(thesis.contentText)
        const content: string = typeof thesis.contentText == 'undefined' || thesis.contentText === null ? 'Type here..' : thesis.contentText;
        this.html = '<p> ' + content + ' </p>'
      } else {
        this.html = '<p style="color:red; font-weight:bold;"> Please select a thesis from the Dashboard located on the sidebar on the left side!</p>';
        this.editorDisabled = true;
      }
    });
  }

  ngOnDestroy(): void {
    this.editor?.destroy();
  }

  saveText(): void {
    //TODO save the text and make a save button
  }
}
