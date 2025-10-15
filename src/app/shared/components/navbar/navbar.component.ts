import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { BusquedaService } from '../../services/recogerInformacion/busqueda.service';
import { datosEmpresa } from '../../modells/bd/datosEmpresa';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-navbar',
  standalone:true,
  imports:[CommonModule,FormsModule,RouterLink, HttpClientModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent{
  searchQuery: string = '';
  isSearchActive: boolean = false;
  searchResults: datosEmpresa[] = [];

  constructor(private busquedaService: BusquedaService) {}

  onSearchFocus() {
    this.isSearchActive = true;
  }

  onSearchBlur() {
    setTimeout(() => {
      this.isSearchActive = false;
    }, 200);
  }

 onSearchInput() {
  if (this.searchQuery.length >= 2) {
    this.busquedaService.searchCompanies(this.searchQuery)
      .subscribe({
        next: (results) => {
          this.searchResults = results;
        },
        error: (err) => {
          console.error('Error al buscar compañías:', err);
          this.searchResults = [];
        }
      });
  } else {
    this.searchResults = [];
  }
}

  clearSearch() {
    this.searchQuery = '';
    this.searchResults = [];
  }
}
