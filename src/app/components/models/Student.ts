export class Student {
  private _no: number;
  private _firstName: string;
  private _lastName: string;
  private _username: string;
  private _email: string;

  constructor(no: number, first_name: string, last_name: string, username: string, email: string) {
    this._no = no;
    this._firstName = first_name;
    this._lastName = last_name;
    this._username = username;
    this._email = email;
  }

  get no(): number {
    return this._no;
  }

  set no(value: number) {
    this._no = value;
  }

  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  get lastName(): string {
    return this._lastName;
  }

  set lastName(value: string) {
    this._lastName = value;
  }

  get username(): string {
    return this._username;
  }

  set username(value: string) {
    this._username = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }
}
