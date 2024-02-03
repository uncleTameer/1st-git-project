import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css',
})
export class GalleryComponent implements OnInit {
  imagesUrl: string[] = [
    'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg&_gl=1*1ilxtnf*_ga*Mzg3NDk0NjE0LjE2Njg3MjI0NDc.*_ga_8JE65Q40S6*MTY2ODcyMjQ0OC4xLjEuMTY2ODcyMjQ1Ny4wLjAuMA..',
    'https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_960_720.jpg',
    'https://cdn.pixabay.com/photo/2013/07/18/20/26/sea-164989_960_720.jpg',
    'https://cdn.pixabay.com/photo/2015/04/23/21/59/tree-736877_960_720.jpg',
    'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_960_720.jpg',
    'https://images.unsplash.com/photo-1546587348-d12660c30c50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80',
    'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  ];

  currentImageUrl: string = this.imagesUrl[0];
  currentImageIndex: number = 0;

  ngOnInit(): void {
    this.startImageRotation();
  }

  startImageRotation() {
    setInterval(() => {
      this.rotateImage();
    }, 3000);
  }

  rotateImage() {
    this.currentImageIndex =
      (this.currentImageIndex + 1) % this.imagesUrl.length;
    this.currentImageUrl = this.imagesUrl[this.currentImageIndex];
  }
}
