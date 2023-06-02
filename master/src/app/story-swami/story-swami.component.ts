import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-story-swami',
  templateUrl: './story-swami.component.html',
  styleUrls: ['./story-swami.component.css']
})
export class StorySwamiComponent implements OnInit {

  errorMessage: string;

  constructor() { }

  ngOnInit() {
    this.errorMessage = {
      error: 'NoneType object has no attribute replace'
    };
  }

}