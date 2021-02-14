import { Component, OnInit } from '@angular/core';
import { range } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  chapter
  chapters = [...Array(61).keys()]
  chaptext

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.onSelect(0)
  }

  onSelect(c) {
    this.chapter = c
    this.http.get(`assets/chapters/chap${this.chapter}.txt`, { responseType: 'text' }).subscribe(data => {
      this.chaptext = data;
      console.log(data);
    }
  )
  }
}
