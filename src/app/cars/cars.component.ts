import { Component, OnInit } from '@angular/core';
import { Car } from '../models/Car'

@Component({
  selector: 'cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  public Cars: Car[];  
  constructor() {
  	this.Cars = [
  		new Car("Skyline R34","Nissan",1998),
  		new Car("911","Porshe",1964),
  		new Car("Challenger","Dodge",1970)		
  	]
  }

  ngOnInit(): void {
  }

}
