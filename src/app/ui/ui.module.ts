import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MapComponent } from './map/map.component';

import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion'; 
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button'; 

import { LeafletModule } from '@asymmetrik/ngx-leaflet';

@NgModule({
  declarations: [LayoutComponent, HeaderComponent, FooterComponent, SidebarComponent, MapComponent],
  imports: [
    CommonModule,
    RouterModule,
    LeafletModule,
    MatSelectModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatSliderModule,
    MatButtonModule,
  ],
  exports: [LayoutComponent]
})
export class UiModule { }
