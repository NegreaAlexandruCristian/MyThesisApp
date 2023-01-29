import { Pipe, PipeTransform } from '@angular/core';
import {Thesis} from "../../../../models/Thesis";

@Pipe({
  name: 'filterTopic'
})
export class FilterByTopicPipe implements PipeTransform {
  transform(thesis: Thesis[], filterTopic: string): any[] {
    if (!thesis) {
      return [];
    }
    if (!filterTopic) {
      return thesis;
    }
    filterTopic = filterTopic.toLowerCase();
    return thesis.filter(th => {
      return th.topic.toLowerCase().includes(filterTopic);
    });
  }
}
