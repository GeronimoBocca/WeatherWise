import { Component } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { Current, Weather, Location, Forecast, Forecastday } from '../../interfaces/weather.interface';

@Component({
    selector: 'weather-body',
    templateUrl: 'body.component.html',
    styleUrls: ['./body.component.css']
})

export class BodyComponent {

    constructor(private weatherService: WeatherService){ }

    get data(): any {
        return this.weatherService.data;
    }

    get current(): Current {
        return this.data.current
    }

    get location(): Location {
        return this.data.location
    }

    get forecast(): Forecastday {
        return this.data.forecast.forecastday[0]
    }
}