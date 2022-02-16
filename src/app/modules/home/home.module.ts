import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from '@home/pages/home-page.component';
import { HomeRoutingModule } from '@home/home-routing.module';

@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
