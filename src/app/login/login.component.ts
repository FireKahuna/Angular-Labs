import { Component, OnInit } from '@angular/core';
import { UserData } from '../userdata';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
	constructor(private router: Router) { }

	model = new UserData('','');
 
	submitted = false;
 
	onSubmit() {
	  this.submitted = true;
	  if (this.model.user == 'test' && this.model.pass == 'test')
	  {
		  this.router.navigate(['account'])
	  }
	}
 
	newUser() {
		this.model = new UserData('','');
	}
}