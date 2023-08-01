import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { Router } from './app.routes';

import { AppComponent } from './app.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectComponent } from './project/project.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ErrorpageComponent,
    ServicesComponent,
    ContactComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(Router)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
