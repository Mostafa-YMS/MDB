import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { PeopleComponent } from './people/people.component';
import { TvComponent } from './tv/tv.component';
import { MoviesComponent } from './movies/movies.component';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './auth.guard';
import { LoginGuard } from './login.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', canActivate:[AuthGuard], component: HomeComponent },
  { path: 'about', canActivate:[AuthGuard], component: AboutComponent },
  { path: 'movies', canActivate:[AuthGuard], component: MoviesComponent },
  { path: 'tv', canActivate:[AuthGuard], component: TvComponent },
  { path: 'people', canActivate:[AuthGuard], component: PeopleComponent },
  { path: 'login', canActivate:[LoginGuard], component: LoginComponent },
  { path: 'register', canActivate:[LoginGuard], component: RegisterComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
