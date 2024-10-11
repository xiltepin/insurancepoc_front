import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { provideHttpClient } from '@angular/common/http';  // Nueva importación

@NgModule({
  declarations: [
    CustomerListComponent  // Solo incluye los componentes no standalone aquí
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    provideHttpClient()  // Provees HttpClient de esta manera
  ]
})
export class AppModule { }
