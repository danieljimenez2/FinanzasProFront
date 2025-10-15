import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MercadosComponent } from './pages/mercados/mercados.component';
import { SectorMercadoComponent } from './pages/sector-mercado/sector-mercado.component';
import { CompañiaComponent } from './pages/compañia/compañia.component';
import { ImportarComponent } from './pages/importar/importar.component';
import { CarteraComponent } from './pages/cartera/cartera.component';

export const routes: Routes = [
    { path: '', component: HomeComponent }, // Página principal
    { path: 'mercados-industria', component: MercadosComponent },
    { path: 'importar-datos', component: ImportarComponent },
    { path: 'cartera', component: CarteraComponent },
    { path: 'sector/:name', component: SectorMercadoComponent },
    { path: 'compañia/:companySymbol', component: CompañiaComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
