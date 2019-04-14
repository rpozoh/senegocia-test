import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';

// Rutas
import { APP_ROUTES } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot( APP_ROUTES,{ useHash : true } )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
