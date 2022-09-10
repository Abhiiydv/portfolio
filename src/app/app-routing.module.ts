import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { FootComponent } from './foot/foot.component';

const routes: Routes = [ {path: 'about', component: AboutComponent},
{path: '', redirectTo: 'home', pathMatch: 'full'},
{path: 'education', component: EducationComponent},
{path: 'experience', component: ExperienceComponent},
{path: 'contacts', component: ContactsComponent},
{path: 'home', component: HomeComponent},
{path: 'projects', component: ProjectsComponent},
{path: 'footer', component: FootComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
