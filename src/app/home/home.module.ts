import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { WhatWeDoComponent } from './whatWeDo/what-we-do/what-we-do.component';
import { SolutionsComponent } from './solutions/solutions/solutions.component';
import { MatIconModule } from '@angular/material/icon';
import { ScrollDownComponent } from './scrollDownIndicator/scroll-down/scroll-down.component';

@NgModule({
  declarations: [HomeComponent, WhatWeDoComponent, SolutionsComponent, ScrollDownComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatIconModule
  ]
})
export class HomeModule { }
