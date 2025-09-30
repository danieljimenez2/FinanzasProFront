import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TradingviewChartComponent } from '../../shared/components/tradingview-chart/tradingview-chart.component';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-compañia',
  standalone:true,
  imports:[CommonModule,TradingviewChartComponent],
  templateUrl: './compañia.component.html',
  styleUrls: ['./compañia.component.scss']
})
export class CompañiaComponent implements OnInit {
  company_symbol:String | null = null 
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
  this.company_symbol =  this.route.snapshot.paramMap.get('companySymbol');
  }

}
