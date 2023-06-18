import { Component, ElementRef, ViewChild } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'weather-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {

  @ViewChild('inputCity')
  public input!: ElementRef<HTMLInputElement>;

  constructor(private weatherService: WeatherService) { }

  searchCity() {
    const city = this.input.nativeElement.value;
    this.weatherService.getCurrentWeather(city)
  }
}
