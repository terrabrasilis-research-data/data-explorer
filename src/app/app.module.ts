import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import * as fromUI from './ui/ui.reducer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiModule } from './ui/ui.module';
import { HttpClientModule } from '@angular/common/http';
import { MapComponent } from './ui/map/map.component';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    UiModule,
    StoreModule.forRoot({ ui: fromUI.reducer }),
  ],
  providers: [MapComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
