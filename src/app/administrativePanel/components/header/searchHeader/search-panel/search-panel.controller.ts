import { signal } from '@angular/core';
import { GtuStopsService } from '../../../../services/gtu-stops.service';
import { GtuRoutesService } from '../../../../services/gtu-routes.service';

export class SearchPanelController {
// aqui se guardan los resultados originales(los de la bd) sin filtros ni búsquedas
  private rawResults = signal<{ name: string; type: string }[]>([]);
  private loading = signal(false);
  private filters = signal<string[]>([]);

  //aqui pues creo las instancias de los servicios
  constructor(private stopService: GtuStopsService, private routeService: GtuRoutesService) {}

  loadData() {
    this.loading.set(true);
    setTimeout(() => {
      const stopData = this.stopService.stops().map(s => ({
        name: s.name,
        type: 'parada' as const //aqui le especifiqué el tipo para el filtro
      }));
      const routeData = this.routeService.routes().map(r => ({
        name: r.name,
        type: 'ruta' as const //aqui le especifiqué el tipo para el filtro
      }));
      //combinar los datos intercalado y uso .filter(boolean) para eliminar esos espacios vacios al emparejar los arrays
      this.rawResults.set([...Array(Math.max(stopData.length, routeData.length)).keys()].flatMap(i => [stopData[i], routeData[i]]).filter(Boolean)
      );
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
