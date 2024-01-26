import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  headingDescription: string = 'About Me';
  description: string =
    "I'm a passionate and results-driven software developer with a strong background in C# and the .NET ecosystem. With over 3 years of hands-on experience, I've had the opportunity to work on a diverse range of projects and technologies, honing my skills to deliver top-notch solutions.";
  experience: string =
    'Leveraged 3+ years of hands-on experience as a driven Software Engineer to design and implement web-based applications. Collaborated closely with cross-functional teams and participating in design, ensuring efficient client-server communication in Agile/Scrum environment.';
}
