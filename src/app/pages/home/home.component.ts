import { Component, OnInit } from '@angular/core';
import { TradingviewChartComponent } from "../../shared/components/tradingview-chart/tradingview-chart.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone:true,
  styleUrls: ['./home.component.scss'],
  imports: [TradingviewChartComponent]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
