import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Product {
  id?: number;
  name: string;
  price: number;
}

export interface Story {
  id?: number;
  title: string;
  author: string;
  views: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  // Bài 2: Gọi API POST để thêm sản phẩm
  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.apiUrl}/products`, product);
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/products`);
  }

  // Bài 1: Thêm truyện
  addStory(story: Story): Observable<Story> {
    return this.http.post<Story>(`${this.apiUrl}/stories`, story);
  }

  getStories(): Observable<Story[]> {
    return this.http.get<Story[]>(`${this.apiUrl}/stories`);
  }
}
