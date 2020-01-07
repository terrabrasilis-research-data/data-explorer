import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent, DialogConfig, DialogInfo } from './sidebar/sidebar.component';
import { MapComponent } from './map/map.component';
import { FormsModule } from '@angular/forms';

import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion'; 
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button'; 
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialogModule } from '@angular/material/dialog';  
import { MatTooltipModule } from '@angular/material/tooltip'; 
import { MatIconModule } from '@angular/material/icon'; 

import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { DatasetComponent } from './map/dataset/dataset.component';

@NgModule({
  declarations: [LayoutComponent, HeaderComponent, FooterComponent, SidebarComponent, MapComponent, DialogConfig, DialogInfo, DatasetComponent],
  imports: [
    FormsModule,
    MatIconModule,
    CommonModule,
    RouterModule,
    LeafletModule,
    MatDialogModule,
    MatSelectModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatSliderModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatTooltipModule
  ],
  entryComponents: [SidebarComponent, DialogConfig, DialogInfo, MapComponent],
  exports: [LayoutComponent]
})
export class UiModule { }
