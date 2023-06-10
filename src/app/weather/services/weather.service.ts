import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Weather, Current } from '../interfaces/weather.interface';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class WeatherService {
    constructor(private http: HttpClient) { }

    private apiKey = 'e0397ce049d84609b5f204000230206';
    private baseUrl = 'http://api.weatherapi.com/v1/current.json'
    public data?: Weather;

    getCurrentWeather(q: string): void {
         this.http.get<Weather>(`${this.baseUrl}?key=${this.apiKey}&q=${q}`)
        .subscribe( 
            resp => {
                this.data = resp;

                console.log(this.data)
            }
        )
         
    }


}