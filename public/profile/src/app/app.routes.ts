import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";

export const Router = [
    { 
        path: '',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    }
];