import { Component } from '@angular/core';

@Component({
	selector: "header",
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})

export class HeaderComponent {
	public numeros: number[] = [1,2,3];

	constructor() {
	    console.log("Se ha cargado el componente");

	    
	}

	
}