import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HideHeaderSidebarService {
  data = new Subject<any>();

  sendData(data: any) {
    this.data.next(data);
  }

  getData() {
    return this.data.asObservable();
  }
}
