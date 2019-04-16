import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Rutas
import { APP_ROUTES } from './app.routes';

// Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';

// Servicios
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot( APP_ROUTES,{ useHash : true } )
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
