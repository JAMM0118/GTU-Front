import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GtuStopsService } from '../../../../services/gtu-stops.service';
import { SearchFiltersComponent } from '../search-filters/search-filters.component';
import { SearchLoadingComponent } from '../search-loading/search-loading.component';
import { SearchResultsComponent } from '../search-results/search-results.component';
import { SearchPanelController } from './search-panel.controller';

@Component({
  selector: 'app-search-panel',
  standalone: true,
  imports: [CommonModule, SearchFiltersComponent, SearchLoadingComponent, SearchResultsComponent],
  templateUrl: './search-panel.component.html',
  styleUrl: './search-panel.component.css',
})
export class SearchPanelComponent implements OnChanges {
  @Input() searchTerm = ''; //lo que escribo en el input de busqueda
  @Input() active = false; 
  @Output() resultSelected = new EventEmitter<any>();

  controller: SearchPanelController;

  //creo la instancia del controlador y le paso el servicio 
  constructor(private stopService: GtuStopsService) {
    this.controller = new SearchPanelController(stopService);
  }

  //esto es que si cambia un valor del input se llame automaticamente la carga de datos
  ngOnChanges(changes: SimpleChanges) {
    if (changes['active']) {
      this.active ? this.controller.loadData() : this.controller.clearData();
    }
  }

  //los resultados que manda el controlador(ya con filtros y todo)
  results() {
    return this.controller.getResults(this.searchTerm);
  }

  loadingState() {
    return this.controller.isLoading();
  }

  setFilters(filters: string[]) {
    this.controller.setFilters(filters);
  }
}
