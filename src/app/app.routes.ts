import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

export const APP_ROUTES : Routes = [
<<<<<<< HEAD
  { path: 'login', component: LoginComponent },
=======
  { path : 'login', component : LoginComponent },
>>>>>>> origin/master
  { path : '', pathMatch : 'full', redirectTo : 'login' },
  { path : '**', pathMatch : 'full', redirectTo : 'login' }
];
