import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectComponent } from './project/project.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { BlogComponent } from './blog/blog.component';

export const Router = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'skills',
    component: ServicesComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'project',
    component: ProjectComponent,
  },
  {
    path: 'education',
    component: EducationComponent,
  },
  {
    path: 'experience',
    component: ExperienceComponent,
  },
  {
    path: 'blog',
    component: BlogComponent,
  },
  {
    path: '**',
    component: ErrorpageComponent,
  },
];
