import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { GalleryComponent as GalleryComponent } from '../gallery/gallery.component';
import { VoteComponent } from '../vote/vote.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    CommonModule,
    RouterOutlet,
    GalleryComponent,
    GalleryComponent,
    VoteComponent,
  ],
})
export class AppComponent implements OnInit {
  currentDate: Date = new Date();
  startTime = () => {
    setInterval(() => {
      this.updateDate();
    }, 3000);
  };
  updateDate = () => {
    this.currentDate = new Date();
  };
  ngOnInit(): void {
    this.startTime();
  }
  title = 'app';
}
// }
// currentDate: Date = new Date();

// ngOnInit(): void {
//   this.starttime();
// }

// starttime(){
//   setInterval(() =>{
//     this.updateDate();

//   }, 1000)
// }

// updateDate(){
//   this.currentDate = new Date();
// }
