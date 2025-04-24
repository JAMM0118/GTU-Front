import { Component,input,output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchType } from '../../../../interfaces/models.interface';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-results.component.html'
})
export class SearchResultsComponent {
  results = input.required<SearchType[]>();

  //señal para saber que se ha hecho click en un resultado
  //esto me sirve para cerrar el panel y la barra de busqueda
  resultSelected = output<SearchType>();

  selectResult(result: SearchType) {
    this.resultSelected.emit(result);
  }

}
