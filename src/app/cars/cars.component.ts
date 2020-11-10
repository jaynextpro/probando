import { Component, OnInit } from '@angular/core';
import { Car } from '../models/Car';

@Component({
  selector: 'cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  public Cars: Car[];
  public ActualCar: Array<string>;

  constructor() {
  	this.Cars = [
  		new Car("Skyline R34","Nissan",1998),
  		new Car("911","Porshe",1964),
  		new Car("Challenger","Dodge",1970)		
  	];

    this.ActualCar = ["", "", ""];
  }

  ngOnInit(): void {
  }

  public AddCar() {
    this.Cars.push(new Car((<HTMLInputElement>document.getElementById("Model")).value, (<HTMLInputElement>document.getElementById("Brand")).value, (<HTMLInputElement>document.getElementById("Year")).value));
  }

  public DeleteCar(index) {
    this.Cars.splice(index, 1);
  }

}
