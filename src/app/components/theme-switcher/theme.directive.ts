import {Directive, ElementRef, Inject, OnDestroy, OnInit} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {themes} from './themes.const';
import {ThemeService} from './theme.service';
import {Subscription} from 'rxjs';

@Directive({
  selector: '[appTheme]'
})
export class ThemeDirective implements OnInit, OnDestroy {
  private themeName = 'lightTheme';
  private themeServiceSubscription: Subscription;

  constructor(
    private elementRef: ElementRef,
    @Inject(DOCUMENT) private document: any,
    private themService: ThemeService
  ) { }

  ngOnInit() {
    this.updateTheme(this.themeName);
    this.themService.getActiveTheme()
      .subscribe(themeName => {
        this.themeName = themeName ;
        this.updateTheme(this.themeName);
      });
  }

  updateTheme(themeName) {
    const element = this.elementRef.nativeElement;
    const them = themes[themeName];
    for (const key in them) {
      this.document.body.style.setProperty(key, them[key]);
    }
  }

  ngOnDestroy() {
    if (this.themeServiceSubscription) this.themeServiceSubscription.unsubscribe();
  }
}
