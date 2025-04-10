import { Component, input, OnChanges, output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GtuStopsService } from '../../../../services/gtu-stops.service';
import { SearchFiltersComponent } from '../search-filters/search-filters.component';
import { SearchLoadingComponent } from '../search-loading/search-loading.component';
import { SearchResultsComponent } from '../search-results/search-results.component';
import { SearchPanelController } from './search-panel.controller';
import { GtuRoutesService } from '../../../../services/gtu-routes.service';

@Component({
  selector: 'app-search-panel',
  standalone: true,
  imports: [CommonModule, SearchFiltersComponent, SearchLoadingComponent, SearchResultsComponent],
  templateUrl: './search-panel.component.html',
  styleUrl: './search-panel.component.css',
})
export class SearchPanelComponent implements OnChanges {
  searchTerm = input<string>(''); //lo que escribo en el input de busqueda
  active = input<boolean>(false); 
  resultSelected = output<any>();
  
  controller: SearchPanelController;

  //creo la instancia del controlador y le paso el servicio 
  constructor(private stopService: GtuStopsService, private routeService: GtuRoutesService) {
    this.controller = new SearchPanelController(stopService, routeService)
  }

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
