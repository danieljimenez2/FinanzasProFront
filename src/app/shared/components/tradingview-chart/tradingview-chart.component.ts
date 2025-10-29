import { AfterViewInit, Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-tradingview-chart',
  standalone:true,
  imports:[],
  templateUrl: './tradingview-chart.component.html',
  styleUrls: ['./tradingview-chart.component.scss']
})
export class TradingviewChartComponent implements OnChanges {
 
  @Input() companySymbol: String | null = null;

  ngOnChanges(): void {
    
    // cargar el script de TradingView dinámicamente
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://s3.tradingview.com/tv.js';
    script.onload = () => {
      // @ts-ignore para usar el objeto TradingView global
      new TradingView.widget({
        container_id: 'tradingview_chart',
        width: '100%',
        height: 310,
        symbol: this.companySymbol, // ticker de la empresa
        interval: 'D',
        timezone: 'Etc/UTC',
        theme: 'dark',
        style: '1',
        locale: 'es',
        toolbar_bg: '#ffffffff',
        enable_publishing: false,
        hide_top_toolbar: false,
        allow_symbol_change: true,
        save_image: false
      });
    };
    document.body.appendChild(script);
  }
}
