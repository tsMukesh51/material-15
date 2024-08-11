import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatSelectChange } from '@angular/material/select';

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

  fruits = new FormControl<string[]>([]);

  fruitList: Fruit[] = [
    { label: 'Mango', name: 'mango' },
    { label: 'Apple', name: 'apple' },
    { label: 'Lemon', name: 'lemon' },
  ];

  allFruits: Fruit[] = this.fruitList;

  mySelEle = document.querySelector('#my-select') as HTMLElement;

  // Function to filter the list based on the search term
  onSearch(event: Event): void {
    const searchTerm = (event.target as HTMLInputElement).value.toLowerCase();
    if (searchTerm == "")
      this.fruitList = this.allFruits;
    this.fruitList = this.allFruits.filter(fruit =>
      fruit.label.toLowerCase().includes(searchTerm)
    );
  }

  // Toggle selection of all options
  toggleAllSelection(event: MatCheckboxChange): void {
    if (event.checked) {
      const allValues = this.allFruits.map(fruit => fruit.name);
      this.fruits.setValue(allValues);
    } else {
      this.fruits.setValue([]);
    }
  }

  //Sync select all check box
  // onOptionChange(event: MatSelectChange): void {
  //   const selectedValues = this.fruits.value;
  //   if (selectedValues) {
  //     this.isAllSelected = selectedValues.length === this.allFruits.length;
  //   } else {
  //     this.isAllSelected = false;
  //   }
  // }

  isAllSelected(): boolean {
    const selectedValues = this.fruits.value;
    return selectedValues ? selectedValues.length === this.allFruits.length : false;
  }
}
