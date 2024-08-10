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

  filteredFruits: Fruit[] = this.fruitList;

  // Function to filter the list based on the search term
  onSearch(event: Event): void {
    const searchTerm = (event.target as HTMLInputElement).value.toLowerCase();
    if (searchTerm == "")
      this.fruitList = this.filteredFruits;
    this.fruitList = this.filteredFruits.filter(fruit =>
      fruit.label.toLowerCase().includes(searchTerm)
    );
  }
}
