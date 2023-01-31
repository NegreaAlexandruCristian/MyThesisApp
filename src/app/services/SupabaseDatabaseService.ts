import {API_KEY, API_URL} from "../constants/ThesisConstants";
import {createClient} from "@supabase/supabase-js";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class SupabaseDatabaseService {
  private _supabaseUrl: string = "";
  private _supabaseKey: string = "";
  private _supabase: any = undefined;

  constructor() {
    this._supabaseUrl = API_URL;
    this._supabaseKey = API_KEY;
    this._supabase = createClient(this._supabaseUrl, this._supabaseKey)
  }

  get supabaseUrl(): string {
    return this._supabaseUrl;
  }

  set supabaseUrl(value: string) {
    this._supabaseUrl = value;
  }

  get supabaseKey(): string {
    return this._supabaseKey;
  }

  set supabaseKey(value: string) {
    this._supabaseKey = value;
  }

  get supabase(): any {
    return this._supabase;
  }

  set supabase(value: any) {
    this._supabase = value;
  }
}
