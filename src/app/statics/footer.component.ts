import {Component, OnInit, DoCheck, OnDestroy} from '@angular/core';

@Component({
	selector: 'footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.css']
})

export class FooterComponent implements OnInit, DoCheck, OnDestroy {
	public title: string = "aaaa";

	ngOnInit() {
		console.log("works");
	}

	ngDoCheck() {
		console.log("a change has occurred");
	}

	ngOnDestroy() {
		console.log("component destroyed")
	}

	changeTitle() {
		this.title = "a";
	}
}