import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  openDrink(age: string) {
    switch (age) {
      case 'no': {
        console.log('hi1');
        break;
      }
      case 'mid': {
        console.log('hi2');
        break;
      }
      case 'all': {
        console.log('hi3');
        break;
      }
    }
  }
}
