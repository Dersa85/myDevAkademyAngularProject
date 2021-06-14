import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.sass']
})
export class SlideshowComponent implements OnInit {

  images = [
    'building.jpg',
    'background.jpg',
    'mountains.jpg'
  ];
  headlines = [
    'Build a world',
    'Bring engineering to the next level',
    'Come higher'
  ];
  
  currentImage = 0;
  showImage = true;

  updateImage() {
    setInterval(() => {
      this.currentImage++;
      this.currentImage = this.currentImage % this.images.length;
      this.showImage = false;

      setTimeout(() => {
        this.showImage = true;
      }, 10);
    }, 8000);

  }

  constructor() { }

  ngOnInit() {
    this.updateImage();
  }

}
