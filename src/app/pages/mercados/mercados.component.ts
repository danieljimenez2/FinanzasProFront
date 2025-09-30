import { Component, OnInit } from '@angular/core';
import { Sector } from '../../shared/modells/sector-interface';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-mercados',
  standalone:true,
  imports:[RouterLink,CommonModule],
  templateUrl: './mercados.component.html',
  styleUrls: ['./mercados.component.scss']
})
export class MercadosComponent implements OnInit {


  sectores: Sector[] = [
    { name: 'Basic Materials', description: 'Empresas que producen bienes básicos como metales y químicos.', image: '../../../assets/Mercados/basic_materials.webp', link: '../../../assets/Mercados/basic_materials.webp' },
    { name: 'Healthcare', description: 'Compañías de atención médica, hospitales, y farmacéuticas.', image: '../../../assets/Mercados/health_sector.png', link: '../../../assets/Mercados/' },
    { name: 'Technology', description: 'Empresas de software, hardware y servicios tecnológicos.', image: '../../../assets/Mercados/tecnologico_sector.jpg', link: '../../../assets/Mercados/' },
    { name: 'Industrials', description: 'Compañías de manufactura, transporte e infraestructura.', image: '../../../assets/Mercados/industrial_sector.jpg', link: '../../../assets/Mercados/' },
    { name: 'Utilities', description: 'Empresas de energía, agua y servicios públicos.', image: '../../../assets/Mercados/utilities_sector.webp', link: 'https://www.eselimited.co.uk/hubfs/ESE_Theme_Dec2022/IoT-Disruption-in-the-Energy-Utilities-Industry.webp' },
    { name: 'Real Estate', description: 'Compañías inmobiliarias y gestión de propiedades.', image: '../../../assets/Mercados/real_estate_sector.jpg', link: '/sector/real-estate' },
    { name: 'Financial Services', description: 'Bancos, aseguradoras y servicios financieros.', image: '../../../assets/Mercados/bank_sector.jpg', link: '/sector/financial-services' },
    { name: 'Consumer Cyclical', description: 'Empresas de consumo discrecional como retail y automotriz.', image: '../../../assets/Mercados/automotion_sector.jpg', link: '/sector/consumer-cyclical' },
    { name: 'Consumer Defensive', description: 'Empresas de productos básicos de consumo, alimentos y bebidas.', image: '../../../assets/Mercados/food_sector.jpg', link: '/sector/consumer-defensive' },
    { name: 'Energy', description: 'Compañías de petróleo, gas y energía renovable.', image: '../../../assets/Mercados/petrol_sector.webp', link: '/sector/Mercados/energy' },
    { name: 'Communication Services', description: 'Empresas de telecomunicaciones, medios y entretenimiento.', image: '../../../assets/Mercados/entretenimiento_sector.webp', link: '/sector/communication-services' },
  ];

  constructor() { }

  ngOnInit(): void { }


}
