import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ThemeService {
  private activeTheme = new BehaviorSubject('lightTheme');

  constructor() { }

  public getActiveTheme() {
    return this.activeTheme.asObservable();
  }

  public setActiveTheme(name) {
    this.activeTheme.next(name);
  }
}
