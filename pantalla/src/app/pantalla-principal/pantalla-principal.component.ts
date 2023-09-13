import { Component } from '@angular/core';

@Component({
  selector: 'app-pantalla-principal',
  templateUrl: './pantalla-principal.component.html',
  styleUrls: ['./pantalla-principal.component.css']
})
export class PantallaPrincipalComponent {
  meses: string[] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  ventasPorMes: number[] = [100, 150, 200, 180, 250, 300, 280, 350, 400, 380, 450, 500];
  mostrarGrafica: boolean = false;
  filtroSeleccionado: string = '';

  toggleGrafica(): void {
    this.mostrarGrafica = !this.mostrarGrafica;
  }

  filtrarVentas(filtro: string): void {
    this.filtroSeleccionado = filtro;
    // Aquí implementa la lógica para filtrar las ventas según el filtro seleccionado y actualizar la tabla y la gráfica
  }
}
