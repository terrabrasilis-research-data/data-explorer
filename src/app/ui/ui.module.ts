import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent, DialogConfig, DialogInfo } from './sidebar/sidebar.component';
import { MapComponent } from './map/map.component';
import * as fromUI from './ui.reducer';

import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion'; 
import { MatButtonModule } from '@angular/material/button'; 
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialogModule } from '@angular/material/dialog';  
import { MatIconModule } from '@angular/material/icon'; 
import { StoreModule } from '@ngrx/store';

import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { DatasetComponent } from './map/dataset/dataset.component';

@NgModule({
  declarations: [LayoutComponent, HeaderComponent, FooterComponent, SidebarComponent, MapComponent, DialogConfig, DialogInfo, DatasetComponent],
  imports: [
    MatIconModule,
    CommonModule,
    RouterModule,
    StoreModule.forRoot({
      ui: fromUI.reducer,
    }),
    LeafletModule,
    MatDialogModule,
    MatSelectModule,
    MatExpansionModule,
    MatButtonModule,
    MatSlideToggleModule,
  ],
  entryComponents: [SidebarComponent, DialogConfig, DialogInfo, MapComponent],
  exports: [LayoutComponent]
})
export class UiModule { }
