import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoCardComponent } from './components/info-card/info-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThemeModule } from './components/theme-switcher/theme.module';
import { DateRangePipe } from 'src/app/pipes/date-range.pipe';

@NgModule({
  declarations: [
    AppComponent,
    InfoCardComponent,
    DateRangePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ThemeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
