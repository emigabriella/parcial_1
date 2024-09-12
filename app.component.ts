import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmpleadosComponent } from "./empleados/empleados.component";
import { EmpleadoFeoComponent } from "./empleado-feo/empleado-feo.component";
import { PropiedadComponent } from './propiedad/propiedad.component';
import { Parcial1Component } from "./parcial-1/parcial-1.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EmpleadosComponent, EmpleadoFeoComponent, PropiedadComponent, Parcial1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ultimo ciclo';
  nombre = "Gabriela Ortiz";
}
