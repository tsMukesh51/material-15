import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';


interface Fruit {
  label: string;
  name: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'material-15';
  fruits = new FormControl('');
  fruitList: Fruit[] = [
    { label: 'Mango', name: 'mango' },
    { label: 'Apple', name: 'apple' },
    { label: 'Lemon', name: 'lemon' },
  ];
}
