import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HauptseiteComponent } from './hauptseite/hauptseite.component';
import { MenueComponent } from './menue/menue.component';
import { DataScraperComponent } from './data-scraper/data-scraper.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppUiModule } from './app-ui.module';


@NgModule({
  declarations: [
    AppComponent,
    HauptseiteComponent,
    MenueComponent,
    DataScraperComponent
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppUiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
