import { Component,input,output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { searchType } from '../../../../interfaces/models.interface';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-results.component.html'
})
export class SearchResultsComponent {
  results = input.required<searchType[]>();

  //señal para saber que se ha hecho click en un resultado
  //esto me sirve para cerrar el panel y la barra de busqueda
  resultSelected = output<searchType>();

  selectResult(result: searchType) {
    this.resultSelected.emit(result);
  }

}
