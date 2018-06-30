import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-all-post',
  templateUrl: './all-post.component.html',
  styleUrls: ['./all-post.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AllPostComponent implements OnInit {

  books: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  this.http.get('/post').subscribe(data => {
    this.books = data;
  });
}

}
