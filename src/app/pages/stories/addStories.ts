import { Component } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { CommonModule } from "@angular/common";

@Component({
    selector: 'app-add-story',
    imports:[ReactiveFormsModule, CommonModule],
    templateUrl: "./addStories.html",
    styleUrl:"./addStories.css",
})
export class AddStories{
    addForm: FormGroup;
    productForm: FormGroup;
    registrationForm: FormGroup;
    activeTab: string = 'story';

    constructor(private fb: FormBuilder){
        this.addForm = this.fb.group({
            title:['', [Validators.required, Validators.minLength(3)]],
            author:'',
            view: 0,
        });

        // Task 1: Form tạo sản phẩm
        this.productForm = this.fb.group({
            name: ['', Validators.required],
            price: ['', [Validators.required, Validators.min(0.01)]],
            type: ['', Validators.required]
        });

        // Task 2: Form đăng ký tài khoản
        this.registrationForm = this.fb.group({
            username: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    // Task 3: Getters để xác thực lỗi trong template
    // Product form getters
    get productName() {
        return this.productForm.get('name');
    }

    get productPrice() {
        return this.productForm.get('price');
    }

    get productType() {
        return this.productForm.get('type');
    }

    // Registration form getters
    get username() {
        return this.registrationForm.get('username');
    }

    get email() {
        return this.registrationForm.get('email');
    }

    get password() {
        return this.registrationForm.get('password');
    }

    // Story form getters
    get title() {
        return this.addForm.get('title');
    }

    get author() {
        return this.addForm.get('author');
    }

    submitForm(){
        if(this.addForm.valid){
            console.log('Story:', this.addForm.value);
        }
    }

    submitProduct(){
        if(this.productForm.valid){
            console.log('Product:', this.productForm.value);
            alert('Sản phẩm được thêm thành công!');
        }
    }

    submitRegistration(){
        if(this.registrationForm.valid){
            console.log('Registration:', this.registrationForm.value);
            alert('Đăng ký tài khoản thành công!');
        }
    }
}