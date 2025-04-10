import { signal } from '@angular/core';
import { GtuStopsService } from '../../../../services/gtu-stops.service';

export class SearchPanelController {
// aqui se guardan los resultados originales(los de la bd) sin filtros ni búsquedas
  private rawResults = signal<{ name: string; type: 'parada' }[]>([]);
  private loading = signal(false);
  private filters = signal<string[]>([]);

  //aqui pues creo la instancia del servicio
  constructor(private stopService: GtuStopsService) {}

  loadData() {
    this.loading.set(true);
    setTimeout(() => {
      const data = this.stopService.stops().map(s => ({
        name: s.name,
        type: 'parada' as const //aqui le especifiqué el tipo para el filtro
      }));
      this.rawResults.set(data);
      this.loading.set(false);
    }, 500);
  }

  clearData() {
    this.rawResults.set([]);
  }

  getResults(term: string) {
    const lowerTerm = term.toLowerCase().trim();
    return this.rawResults().filter(item =>
      item.name.toLowerCase().includes(lowerTerm) &&
      (this.filters().length === 0 || this.filters().includes(item.type))
    );
  }

  setFilters(filters: string[]) {
    this.filters.set(filters);
  }

  isLoading() {
    return this.loading();
  }
}
