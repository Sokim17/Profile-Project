import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ErrorpageComponent } from "./errorpage/errorpage.component";
import { ServicesComponent } from "./services/services.component";
import { ContactComponent } from "./contact/contact.component";
import { ProjectComponent } from "./project/project.component";

export const Router = [
    { 
        path: "",
        component: HomeComponent
    },
    {
        path: "about",
        component: AboutComponent
    },
    {
        path: "services",
        component: ServicesComponent
    },
    {
        path: "contact",
        component: ContactComponent
    },
    {
        path: "project",
        component: ProjectComponent
    },
    {
        path: "**",
        component: ErrorpageComponent
    }
];