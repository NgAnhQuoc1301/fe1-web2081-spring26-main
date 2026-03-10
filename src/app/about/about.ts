import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  content = "Đây là trang giới thiệu về Angular Framework";
  name = "Nguyễn Anh Quốc 13";
  age = 22; 

  handlerClick(){
    console.log("Bạn đã click button");
    alert('Bạn đã click button');
  }
}
