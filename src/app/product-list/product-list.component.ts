import { Product } from './../product';
import { CommonModule } from '@angular/common';
import { Component, input, computed } from '@angular/core';

@Component({
  selector: 'product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products = input.required<Product[]>();
  filteredProducts = computed(() => {
    return this.products().filter(product=>product.name.includes("Milk"))
  })
}
