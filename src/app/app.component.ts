import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product } from '../product';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  allProducts: Product[] = [
    { id: 1, name: 'milk', price: 1.45 },
    { id: 2, name: 'break', price: 3.45 },
    { id: 3, name: 'apple', price: 2.45 },
  ];
}
