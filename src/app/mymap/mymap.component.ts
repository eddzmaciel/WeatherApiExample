import { Component, OnInit,OnChanges,Input } from '@angular/core';
import {MouseEvent}from '@agm/core';
//aqui importamos las librerias que nos ayudaran a implementar el api del clima
import {Http}from '@angular/http';
import 'rxjs/Rx';

@Component({
  selector: 'app-mymap',
  templateUrl: './mymap.component.html',
  styleUrls: ['./mymap.component.css']
})
export class MymapComponent implements OnInit,OnChanges {
	@Input()lat=19.432608;
	@Input()lng=-99.133209;
	zoom=7;
	city:string;
	temp:number;

  constructor(private http:Http) { }

	ngOnInit() {
		/*let url='http://api.openweathermap.org/data/2.5/weather?'
			+ 'lat=' + this.lat
			+ '&lon=' + this.lng
			+ '&units=metric'
			+ '&lang=en'
			+ '&appid=e8967b0ac3f83033b5e186ed3153de51';

		this.http.get(url).map(res=>res.json()).subscribe(weatherData=>{
			console.log(weatherData);
			this.city=weatherData.name;
			this.temp=weatherData.main.temp;
		});*/
	}
	ngOnChanges(){
		let url='http://api.openweathermap.org/data/2.5/weather?'
			+ 'lat=' + this.lat
			+ '&lon=' + this.lng
			+ '&units=metric'
			+ '&lang=en'
			+ '&appid=e8967b0ac3f83033b5e186ed3153de51';

		this.http.get(url).map(res=>res.json()).subscribe(weatherData=>{
			console.log(weatherData);
			this.city=weatherData.name;
			this.temp=weatherData.main.temp;
			/*this.lat=weatherData.coord.lat;
			this.lng=weatherData.coord.lon;*/
		});

	}
	mapClicked($event:MouseEvent){
		this.lat=$event.coords.lat;
		this.lng=$event.coords.lng;
	}
}
