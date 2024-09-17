import { ProductListComponent } from './product-list/product-list.component';
import { Component, computed, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { single } from 'rxjs';
import { CommonModule } from '@angular/common';  // Import CommonModule
import { Product } from './product';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,ProductListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent {
  // title = 'angular-signals-example';

  allProducts: Product[] = [
    { id: 1, name: "Milk", price: 1.45 },
    {id:2,name:"Bread",price:3.90},
    {id:3,name:"Tomatoes",price:2.20},
   ]
   

  // products = signal([
  //   { id: 1, name: "Milk", price: 1.45 },
  //   {id:2,name:"Bread",price:3.90},
  //   {id:3,name:"Tomatoes",price:2.20},

  // ])
  // filterName = signal('');
  // filteredProducts = computed(() => {
  //   return this.products().filter(product => product.name.toLowerCase().includes(this.filterName().toLowerCase()))
  // });
  // changeFilter(event: Event) {
  //   let newFilterName = (event.target as HTMLInputElement).value;
  //   this.filterName.set(newFilterName);
  // }


   


   //Part two
  
  // price = 19;
  // quantity = signal(10);
  // totalPrice = computed(() => this.price * this.quantity())
  // changeQuantity(event: Event) {
  //   this.quantity.set((event.target as HTMLInputElement).valueAsNumber);
  // }

  //Part one

  // theme = signal('light');
  // label = this.theme();
  // constructor() {
  //   effect(() => {
  //     this.label = this.theme();
  //   });
  // }
 
  // toggleDarkModel() {
  //   this.theme.update(currentValue=>currentValue === 'light'? 'dark' : 'light')

  // }



}
