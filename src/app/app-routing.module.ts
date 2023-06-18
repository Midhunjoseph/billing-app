import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';


const routes: Routes = [
  { path: '', redirectTo: 'signup', pathMatch: 'full' }, // Redirects to the signup component
  { path: 'signup', component: SignupComponent },
  // Add other routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
