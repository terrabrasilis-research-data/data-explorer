import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent, DialogConfig, DialogInfo } from './sidebar/sidebar.component';
import { MapComponent } from './map/map.component';

import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion'; 
import { MatButtonModule } from '@angular/material/button'; 
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialogModule } from '@angular/material/dialog';  
import { MatIconModule } from '@angular/material/icon'; 
import { MatTooltipModule } from '@angular/material/tooltip'; 
import { DragDropModule } from '@angular/cdk/drag-drop'; 

import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { DatasetComponent } from './map/dataset/dataset.component';
import { BoxComponent } from './map/dataset/box/box.component';

@NgModule({
  declarations: [LayoutComponent, HeaderComponent, FooterComponent, SidebarComponent, MapComponent, DialogConfig, DialogInfo, DatasetComponent, BoxComponent],
  imports: [
    MatIconModule,
    CommonModule,
    RouterModule,
    LeafletModule,
    DragDropModule,
    MatDialogModule,
    MatSelectModule,
    MatTooltipModule,
    MatExpansionModule,
    MatButtonModule,
    MatSlideToggleModule,
  ],
  entryComponents: [SidebarComponent, DialogConfig, DialogInfo, MapComponent],
  exports: [LayoutComponent]
})
export class UiModule { }
