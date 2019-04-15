import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
<<<<<<< HEAD
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Rutas
import { APP_ROUTES } from './app.routes';
=======
>>>>>>> origin/master

// Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';

<<<<<<< HEAD
=======
// Rutas
import { APP_ROUTES } from './app.routes';

>>>>>>> origin/master
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
<<<<<<< HEAD
    FormsModule,
    ReactiveFormsModule,
=======
>>>>>>> origin/master
    RouterModule.forRoot( APP_ROUTES,{ useHash : true } )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
