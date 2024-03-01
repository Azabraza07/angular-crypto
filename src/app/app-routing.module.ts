import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [
  {path: '', component: HomeComponent, title:"Angular Crypto"},
  {path: 'profile', component: ProfileComponent, title:"Profile"},
  {path: 'login', component: LoginComponent, title:'Login'},
  {path: 'signUp', component: SignupComponent, title:'SignUp'},
  {path: '**', component: HomeComponent, redirectTo: '', }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
