import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MaterialModule } from '../material/material.module';
import { BodyComponent } from './components/body/body.component';
import { CardComponent } from './components/card/card.component';
import { WeatherService } from './services/weather.service';


@NgModule({
  declarations: [
    NavbarComponent,
    BodyComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    NavbarComponent,
    BodyComponent,
    CardComponent
  ],
  providers: [
  ]
})
export class WeatherModule { }
