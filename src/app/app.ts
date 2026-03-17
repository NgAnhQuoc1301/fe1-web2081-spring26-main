import { Component } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLinkWithHref],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = 'my-app';
  fullname = "Nguyễn Anh Quốc";
  age = 22;
  
  // method function
  sayHello(){
  console.log('hello');
  alert('hello' + this.fullname)
}
}
export default App;

 

