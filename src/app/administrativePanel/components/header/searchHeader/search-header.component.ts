import { Component, ElementRef, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchPanelComponent } from './search-panel/search-panel.component';

@Component({
  selector: 'app-search-header',
  standalone: true,
  imports: [CommonModule, FormsModule, SearchPanelComponent],
  templateUrl: './search-header.component.html',
  styleUrl: './search-header.component.css'
})
export class SearchHeaderComponent {
  searchTerm = ''; //lo que se busca
  showPanel = false;
  isExpanded = false;

  //esto es para referenciar al HTML de este componente (para detectar los clics fuera)
  constructor(private eRef: ElementRef) {}

  @HostListener('document:click', ['$event'])
  handleClickOutside(event: MouseEvent) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.isExpanded = false;
      this.showPanel = false;
    }
  }

  expandSearchBar() {
    this.isExpanded = true;
    setTimeout(() => {
      this.showPanel = true;
    }, 300);
  }

  //para cuando vaya a hacer click en algun resultado(esto es para despues)
  onResultSelected(result: any) {
    console.log('Resultado seleccionado:', result);
    this.showPanel = false;
    this.isExpanded = false;
  }
}
