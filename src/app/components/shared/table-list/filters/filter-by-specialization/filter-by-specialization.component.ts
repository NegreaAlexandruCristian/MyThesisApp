import { Pipe, PipeTransform } from '@angular/core';
import {Thesis} from "../../../../models/Thesis";

@Pipe({
  name: 'filterSpecialization'
})
export class FilterBySpecializationPipe implements PipeTransform {
  transform(thesis: Thesis[], filterSpecialization: string): any[] {
    if (!thesis) {
      return [];
    }
    if (!filterSpecialization) {
      return thesis;
    }
    filterSpecialization = filterSpecialization.toLowerCase();
    return thesis.filter(th => {
      return th.specialization.toLowerCase().includes(filterSpecialization);
    });
  }
}
