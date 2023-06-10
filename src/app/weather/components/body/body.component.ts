import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { Current, Weather } from '../../interfaces/weather.interface';

@Component({
    selector: 'weather-body',
    templateUrl: 'body.component.html',
    styleUrls: ['./body.component.css']
})

export class BodyComponent {


    constructor(private weatherService: WeatherService){
        
    }

    get data(): any {
        return this.weatherService.data;
    }







    


}