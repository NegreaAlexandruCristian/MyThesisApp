export class Student {
  private _no: number;
  private _first_name: string;
  private _last_name: string;

  constructor(no: number, first_name: string, last_name: string) {
    this._no = no;
    this._first_name = first_name;
    this._last_name = last_name;
  }


  get no(): number {
    return this._no;
  }

  set no(value: number) {
    this._no = value;
  }

  get first_name(): string {
    return this._first_name;
  }

  set first_name(value: string) {
    this._first_name = value;
  }

  get last_name(): string {
    return this._last_name;
  }

  set last_name(value: string) {
    this._last_name = value;
  }
}
