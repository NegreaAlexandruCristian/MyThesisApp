export class Thesis {
  private _no: number;
  private _topic: string;
  private _level: string;
  private _specialization: string;
  private _university: string;
  private _coordinator: string;
  private _status: string;
  private _action: string;
  private _contentText: string;

  constructor(
    no: number, topic: string,
    level: string,
    specialization: string,
    university: string,
    coordinator: string,
    status: string,
    action: string,
    contentText: string
  ) {
    this._no = no;
    this._level = level;
    this._topic = topic;
    this._specialization = specialization;
    this._university = university;
    this._coordinator = coordinator;
    this._status = status;
    this._action = action;
    this._contentText = contentText;
  }

  get no(): number {
    return this._no;
  }

  set no(value: number) {
    this._no = value;
  }

  get topic(): string {
    return this._topic;
  }

  set topic(value: string) {
    this._topic = value;
  }

  get level(): string {
    return this._level;
  }

  set level(value: string) {
    this._level = value;
  }

  get specialization(): string {
    return this._specialization;
  }

  set specialization(value: string) {
    this._specialization = value;
  }

  get university(): string {
    return this._university;
  }

  set university(value: string) {
    this._university = value;
  }

  get coordinator(): string {
    return this._coordinator;
  }

  set coordinator(value: string) {
    this._coordinator = value;
  }

  get status(): string {
    return this._status;
  }

  set status(value: string) {
    this._status = value;
  }

  get action(): string {
    return this._action;
  }

  set action(value: string) {
    this._action = value;
  }

  get contentText(): string {
    return this._contentText;
  }

  set contentText(value: string) {
    this._contentText = value;
  }
}
