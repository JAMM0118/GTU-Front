import { Component, input, OnChanges, output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchFiltersComponent } from '../search-filters/search-filters.component';
import { SearchLoadingComponent } from '../search-loading/search-loading.component';
import { SearchResultsComponent } from '../search-results/search-results.component';
import { SearchPanelService } from './search-panel.service';
import { searchType } from '../../../../interfaces/models.interface';

@Component({
  selector: 'app-search-panel',
  standalone: true,
  imports: [CommonModule, SearchFiltersComponent, SearchLoadingComponent, SearchResultsComponent],
  templateUrl: './search-panel.component.html',
})
export class SearchPanelComponent implements OnChanges {
  searchTerm = input<string>(''); //lo que escribo en el input de busqueda
  active = input<boolean>(false);
  resultSelected = output<searchType>();

  //creo la instancia del controlador
  controller = new SearchPanelService();

  //aqui manejo la carga y limpieza de datos dependiendo de si el panel está activo o no
  ngOnChanges(changes: SimpleChanges) {
    if (changes['active']) {
      this.active() ? this.controller.loadData() : this.controller.clearData();
    }
  }

  //los resultados que manda el controlador(ya con filtros y todo)
  results() {
    return this.controller.getResults(this.searchTerm());
  }

  loadingState() {
    return this.controller.isLoading();
  }

  setFilters(filters: string[]) {
    this.controller.setFilters(filters);
  }
}
