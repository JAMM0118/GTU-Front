import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-results.component.html'
})
export class SearchResultsComponent {
  @Input() results: { name: string; type: 'ruta' | 'parada' }[] = [];

  //señal para saber que se ha hecho click en un resultado 
  //esto me sirve para cerrar el panel y la barra de busqueda
  @Output() resultSelected = new EventEmitter<any>();

  selectResult(result: any) {
    this.resultSelected.emit(result);
  }

}
