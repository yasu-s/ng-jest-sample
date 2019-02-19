import { Component, OnInit } from '@angular/core';

import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ng-jest-sample';
  message = '';

  constructor(private appService: AppService) {

  }

  ngOnInit(): void {
    this.title = 'ng-jest-sample-2';
  }

  onClick(): void {
    this.appService.get().subscribe(data => {
      this.message = data.memo;
    });
  }
}
