import { Component, OnInit } from '@angular/core';
import { Drink } from 'src/app/kasse/drinklist/drink.model';

@Component({
  selector: 'app-drinklist',
  templateUrl: './drinklist.component.html',
  styleUrls: ['./drinklist.component.css'],
})
export class DrinklistComponent implements OnInit {
  drinkTitle = 'hi';
  drinks: Drink[];
  constructor() {}

  ngOnInit(): void {}

  getDrinksOhne() {
    this.drinkTitle = 'OHNE ALKOHOL';
    this.drinks = [
      { name: 'Rivella', price: 4 },
      { name: 'Sprite', price: 4 },
      { name: 'Cola', price: 4 },
      { name: 'Ice Tea', price: 4 },
    ];
  }
  getDrinks16() {}
  getDrinks18() {}
}
