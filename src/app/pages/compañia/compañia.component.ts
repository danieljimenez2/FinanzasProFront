import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TradingviewChartComponent } from '../../shared/components/tradingview-chart/tradingview-chart.component';
import { ActivatedRoute } from '@angular/router';
import { InformacionCompañiaService } from '../../shared/services/informacion-compañia.service';
import { DatosCompania } from '../../shared/modells/bd/datos_compañia';
import { FechaEspañolaPipe } from '../../shared/pipes/fecha-española.pipe';
import { Datos_compañiaComponent } from '../../shared/components/datos_compañia/datos_compañia.component';
import { Analistas_score } from '../../shared/modells/bd/analistas_score';
import { Datos_analistas_scoreComponent } from '../../shared/components/datos_analistas_score/datos_analistas_score.component';
@Component({
  selector: 'app-compañia',
  standalone: true,
  imports: [CommonModule, TradingviewChartComponent, FechaEspañolaPipe, Datos_compañiaComponent, Datos_analistas_scoreComponent],
  templateUrl: './compañia.component.html',
  styleUrls: ['./compañia.component.scss']
})
export class CompañiaComponent implements OnInit {
  company_symbol: string | null = null

  fechaIpo: Date = new Date

  //Datos para componentes:
  datosCompania: DatosCompania | null = null;
  datosScore: Analistas_score | null = null;


  constructor(private route: ActivatedRoute, private informacionCompañia: InformacionCompañiaService) { }

  ngOnInit() {
    this.company_symbol = this.route.snapshot.paramMap.get('companySymbol');
    //Datos compañia
    if (this.company_symbol) {
      this.informacionCompañia.getCompanyInfo(this.company_symbol).subscribe({
        next: (data) => {

          this.fechaIpo = data.fechaIpo
          this.datosCompania = data;
        },
        error: (err) => {
          console.error('Error al cargar los datos de la compañía:', err);
        }
      });

      //Datos Score
      this.informacionCompañia.getCompanyScore(this.company_symbol).subscribe({
        next: (data)=>{

          this.datosScore = data;
        },
        error:(err) =>{
          console.log('Error al cargar los datos de valoración',err)
        }
      });


  }


  }

}
