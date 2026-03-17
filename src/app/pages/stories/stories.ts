import { Component } from '@angular/core';

@Component({
  selector: 'app-stories',
  imports: [],
  templateUrl: './stories.html',
  styleUrl: './stories.css',
})
export class Stories {
  // ko dung const stories
  stories = [
    {
      title: 'One Piece',
      author: 'Eiichiro Oda',
      views: 100000,
      year: 1997,
      genre: 'Hành động',
      image: 'https://via.placeholder.com/100?text=One+Piece',
    },
    {
      title: 'Naruto',
      author: 'Masashi Kishimoto',
      views: 90000,
      year: 1999,
      genre: 'Hành động',
      image: 'https://via.placeholder.com/100?text=Naruto',
    },
    {
      title: 'Doraemon',
      author: 'Fujiko F. Fujio',
      views: 70000,
      year: 1969,
      genre: 'Hài hước',
      image: 'https://via.placeholder.com/100?text=Doraemon',
    },
    {
      title: 'Ngọc Rồng',
      author: 'Akira Toriyama',
      views: 95000,
      year: 1984,
      genre: 'Hành động',
      image: 'https://via.placeholder.com/100?text=Dragon+Ball',
    },
    {
      title: 'Cuộc tấn công của Titan',
      author: 'Hajime Isayama',
      views: 92000,
      year: 2009,
      genre: 'Kinh dị',
      image: 'https://via.placeholder.com/100?text=Attack+on+Titan',
    },
    {
      title: 'Thuốc tẩy',
      author: 'Tite Kubo',
      views: 88000,
      year: 2001,
      genre: 'Hành động',
      image: 'https://via.placeholder.com/100?text=Bleach',
    },
  ];
}