import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export const LIST_LANG = [
  { id: 'en', text: 'English' },
  { id: 'vi', text: 'Tiếng Việt' }
];
export const DEFAULT_LANG = 'en';

@Injectable({
  providedIn: 'root'
})
export class AppSettingsService {

  private languageSubject: BehaviorSubject<any> = new BehaviorSubject(DEFAULT_LANG);

  constructor() { }

  setLanguage(id: string) {
    this.languageSubject.next(id);
  }

  getLanguage(): Observable<string> {
    return this.languageSubject.asObservable();
  }
}
