import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-search-header',
  imports: [FormsModule],
  templateUrl: './search-header.component.html',
})
export class SearchHeaderComponent {
  searchTerm: string = "";
  
  onSearch(): void {
    console.log("Buscando:", this.searchTerm);
    
  }
}
