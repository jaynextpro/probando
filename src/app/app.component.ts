import { Component } from '@angular/core';
import { Configuration } from './models/Configuration';
import { User } from './models/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "eehhh que lo que";
  display:boolean = true;
  config = Configuration;

  constructor() {
  	var user1 = new User("javi00", "hello123", 19);
  	User.login(user1.username, user1.password);
  }

  displaying(state) {
  	this.display = state;
  }


}
