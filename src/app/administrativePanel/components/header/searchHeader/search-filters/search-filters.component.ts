import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-filters',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-filters.component.html'
})
export class SearchFiltersComponent {
  selectedFilters = input<string[]>([]);
  filterChange = output<string[]>(); // Correcto: Emite un array de strings

  availableFilters: string[] = ['ruta', 'parada'];

  isSelected(filter: string): boolean {
    return this.selectedFilters().includes(filter);
  }

  toggleFilter(filter: string): void {
    const index = this.selectedFilters().indexOf(filter);
    if (index >= 0) {
      this.selectedFilters().splice(index, 1);
    } else {
      this.selectedFilters().push(filter);
    }
    this.filterChange.emit([...this.selectedFilters()]); // Emitir el array actualizado
  }
}
