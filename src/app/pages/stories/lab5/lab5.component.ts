import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductService } from './product.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-lab5',
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule],
  templateUrl: './lab5.component.html',
  styleUrl: './lab5.component.css',
  providers: [ProductService]
})
export class Lab5Component implements OnInit {
  // Bài 1: Form thêm truyện
  storyForm: FormGroup;
  
  // Bài 2: Form thêm sản phẩm
  productForm: FormGroup;
  
  // Bài 3: Trạng thái loading và error
  loadingStory = false;
  loadingProduct = false;
  errorStory: string | null = null;
  errorProduct: string | null = null;
  successStory: string | null = null;
  successProduct: string | null = null;

  activeTab = 'story';

  constructor(
    private fb: FormBuilder,
    private productService: ProductService
  ) {
    // Bài 1: Form thêm truyện với validation
    this.storyForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      author: ['', Validators.required],
      views: [0, [Validators.required, Validators.min(0)]]
    });

    // Bài 2: Form thêm sản phẩm
    this.productForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      price: ['', [Validators.required, Validators.min(0.01)]]
    });
  }

  ngOnInit(): void {
  }

  // Bài 1: Getters cho Story Form
  get title() {
    return this.storyForm.get('title');
  }

  get author() {
    return this.storyForm.get('author');
  }

  get views() {
    return this.storyForm.get('views');
  }

  // Bài 2: Getters cho Product Form
  get productName() {
    return this.productForm.get('name');
  }

  get productPrice() {
    return this.productForm.get('price');
  }

  // Bài 1: Submit form thêm truyện
  submitStory() {
    this.errorStory = null;
    this.successStory = null;

    if (!this.storyForm.valid) {
      this.errorStory = 'Vui lòng điền đầy đủ thông tin';
      return;
    }

    this.loadingStory = true;

    // Bài 3: Hiển thị đang tải
    this.productService.addStory(this.storyForm.value).subscribe({
      next: (response) => {
        this.loadingStory = false;
        this.successStory = 'Thêm truyện thành công!';
        this.storyForm.reset();
        setTimeout(() => this.successStory = null, 3000);
        console.log('Story added:', response);
      },
      error: (err) => {
        this.loadingStory = false;
        this.errorStory = 'Lỗi: ' + (err.error?.message || 'Không thể thêm truyện');
        console.error('Error adding story:', err);
      }
    });
  }

  // Bài 2: Submit form thêm sản phẩm - Gọi API POST
  submitProduct() {
    this.errorProduct = null;
    this.successProduct = null;

    if (!this.productForm.valid) {
      this.errorProduct = 'Vui lòng điền đầy đủ thông tin';
      return;
    }

    this.loadingProduct = true;

    // Bài 2 & 3: Gọi API POST và hiển thị loading/error
    this.productService.addProduct(this.productForm.value).subscribe({
      next: (response) => {
        this.loadingProduct = false;
        this.successProduct = 'Thêm sản phẩm thành công!';
        this.productForm.reset();
        setTimeout(() => this.successProduct = null, 3000);
        console.log('Product added:', response);
      },
      error: (err) => {
        this.loadingProduct = false;
        this.errorProduct = 'Lỗi: ' + (err.error?.message || 'Không thể thêm sản phẩm');
        console.error('Error adding product:', err);
      }
    });
  }
}
