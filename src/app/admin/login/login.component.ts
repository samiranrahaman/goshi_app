import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  logindata= {};

  constructor(private http: HttpClient, private router: Router) { }
  

  ngOnInit() {
  }

  login() {
	  
	    this.http.post('/login', this.logindata)
      .subscribe(res => {
          let id = res['_id'];
          //this.router.navigate(['/book-details', id]);
		  this.router.navigate(['/admin/dashboard']);
        }, (err) => {
          console.log(err);
        }
      );
		/* this.http.post('/login', this.post)
		  .subscribe(res => {
			  let id = res['_id'];
			  //this.router.navigate(['/book-details', id]);
			  //this.router.navigate(['/admin/all_post']);
			  
			  console.log("success");
			}, (err) => {
			  console.log(err);
			}
		  ); */
	  }
}
