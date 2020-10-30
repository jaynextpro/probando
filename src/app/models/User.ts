export class User {
	static admins = {"javi007" : { "id": "1", "password": "hello123" } }
	public username:string;
	public password:string;
	public age: number;

	constructor(username:string, password:string, age:number) {
		this.username = username;
		this.password = password;
		this.age = age;
	}

	static login(username:string, password:string):void {
		if(User.admins.hasOwnProperty(username)) {
			User.verify(username, password);
		}
		else {
			console.log("the username was not found");
		}
	}

	private static verify(username:string, password:string):void {
		if(User.admins[username]["password"] == password) {
			console.log("You have logged in successfully");
		}
		else {
			console.log("Your password is incorrect");
		}
	}
}