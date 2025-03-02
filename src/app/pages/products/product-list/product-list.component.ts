import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../core/services/product.service';

@Component({
  standalone: false,
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.loadProducts();
    
    
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
      console.log(this.products);
    });
  }

  deleteProduct(id: number): void {
    if (confirm('¿Estás seguro de eliminar este producto?')) {
      this.productService.deleteProduct(id).subscribe(() => {
        this.loadProducts();
      });
    }
  }
}
