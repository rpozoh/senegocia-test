import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

export const APP_ROUTES : Routes = [
  { path : 'login', component : LoginComponent },
  { path : '', pathMatch : 'full', redirectTo : 'login' },
  { path : '**', pathMatch : 'full', redirectTo : 'login' }
];
