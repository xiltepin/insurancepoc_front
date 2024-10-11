import { Component } from '@angular/core';
import { CustomerListComponent } from './components/customer-list/customer-list.component'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,  // Indicamos que el componente es standalone
  imports: [CustomerListComponent]
})
export class AppComponent {
  title = 'insurancepoc_front';  // Puedes cambiar el título según tu aplicación
}
