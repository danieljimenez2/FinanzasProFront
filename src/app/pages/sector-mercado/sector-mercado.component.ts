import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sector-mercado',
  standalone:true,
  imports:[],
  templateUrl: './sector-mercado.component.html',
  styleUrls: ['./sector-mercado.component.scss']
})
export class SectorMercadoComponent implements OnInit {

  sectorName: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // leer el parámetro de la URL
    this.sectorName = this.route.snapshot.paramMap.get('name');
  }

}
