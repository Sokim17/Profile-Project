import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  name: string = "SOKIM NAM"
  position: string = ".NET Developer"
  type: string = "Software Engineer"
  location: string = "United States"
  // description: string = "This is a simple profile page built with Angular 2. It is a work in progress, so please check back later for more content."
}
