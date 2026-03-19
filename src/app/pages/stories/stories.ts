import { Component } from '@angular/core';
import { AddStories } from './addStories';

@Component({
  selector: 'app-stories',
  imports: [AddStories],
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
      image: 'https://i.pinimg.com/736x/02/2d/04/022d04022a189835cac438980d6d9aa5.jpg',
    },
    {
      title: 'Naruto',
      author: 'Masashi Kishimoto',
      views: 90000,
      year: 1999,
      genre: 'Hành động',
      image: 'https://cdn-media.sforum.vn/storage/app/media/ctvseo_MH/H%C3%ACnh%20n%E1%BB%81n%20Naruto/hinh-nen-naruto-49.jpg',
    },
    {
      title: 'Doraemon',
      author: 'Fujiko F. Fujio',
      views: 70000,
      year: 1969,
      genre: 'Hài hước',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAZhYaPR4Jj8mQ3kNM8B9dpvGDOHDU5RPdmQ&s',
    },
    {
      title: 'Ngọc Rồng',
      author: 'Akira Toriyama',
      views: 95000,
      year: 1984,
      genre: 'Hành động',
      image: 'https://i.pinimg.com/736x/fc/94/5d/fc945debbd6c96c0aaf369be22e13984.jpg',
    },
    {
      title: 'Cuộc tấn công của Titan',
      author: 'Hajime Isayama',
      views: 92000,
      year: 2009,
      genre: 'Kinh dị',
      image: 'https://i.pinimg.com/736x/dd/63/3d/dd633d7f5fdf576986f8ef04a6341677.jpg',
    },
    {
      title: 'Thuốc tẩy',
      author: 'Tite Kubo',
      views: 88000,
      year: 2001,
      genre: 'Hành động',
      image: 'https://png.pngtree.com/png-clipart/20250130/original/pngtree-bleach-with-simple-and-clean-design-isolated-on-a-transparent-background-png-image_20314209.png',
    },
  ];
}