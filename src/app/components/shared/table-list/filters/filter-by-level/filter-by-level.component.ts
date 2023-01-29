import { Pipe, PipeTransform } from '@angular/core';
import {Thesis} from "../../../../models/Thesis";

@Pipe({
  name: 'filterLevel'
})
export class FilterByLevelPipe implements PipeTransform {
  transform(thesis: Thesis[], filterLevel: string): any[] {
    if (!thesis) {
      return [];
    }
    if (!filterLevel) {
      return thesis;
    }
    filterLevel = filterLevel.toLowerCase();
    return thesis.filter(th => {
      return th.level.toLowerCase().includes(filterLevel);
    });
  }
}
