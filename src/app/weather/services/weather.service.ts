import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Weather } from '../interfaces/weather.interface';

@Injectable({ providedIn: 'root' })

export class WeatherService {

    private apiKey = 'e0397ce049d84609b5f204000230206';
    private baseUrl = 'https://api.weatherapi.com/v1/forecast.json'
    public data?: Weather;

    constructor(private http: HttpClient) { }

    getCurrentWeather(q: string): void {
         this.http.get<Weather>(`${this.baseUrl}?key=${this.apiKey}&q=${q}`)
        .subscribe( resp => { this.data = resp })        
    }
}