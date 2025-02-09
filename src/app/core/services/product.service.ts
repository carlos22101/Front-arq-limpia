import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Productos } from '../models/productos';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private apiUrl = 'http://localhost:8000/productos/';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Productos[]> {
    return this.http.get<Productos[]>(this.apiUrl);
  }

  getProductById(id: number): Observable<Productos> {
    return this.http.get<Productos>(`${this.apiUrl}${id}`);
  }

  createProduct(product: Productos): Observable<Productos> {
    return this.http.post<Productos>(this.apiUrl, product);
  }

  updateProduct(id: number, product: Productos): Observable<Productos> {
    return this.http.put<Productos>(`${this.apiUrl}${id}`, product);
  }

  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}${id}`);
  }
}
