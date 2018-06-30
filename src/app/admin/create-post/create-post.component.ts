import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CreatePostComponent implements OnInit {
  postdata = {};

  constructor(private http: HttpClient, private router: Router) { }
  
  ngOnInit() {
  }
	saveBook() {
		this.http.post('/post', this.postdata)
		  .subscribe(res => {
			  let id = res['_id'];
			  this.router.navigate(['admin/all_post']);
			  //this.router.navigate(['/admin/all_post']);
			  
			  console.log("success");
			}, (err) => {
			  console.log(err);
			}
		  );
	  }

}
