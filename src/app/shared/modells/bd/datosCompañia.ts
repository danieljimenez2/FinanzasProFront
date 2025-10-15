import { datosEmpresa } from "./datosEmpresa";
export interface datosCompania {
  company_symbol: string;
  datosEmpresa: datosEmpresa;
  moneda: string;
  isin: string;
  bolsa: string;
  sector: string;
  industria: string;
  pais: string;
  empleados: number;
  ceo: string;
  web: string;
  fechaIpo: Date;
}
