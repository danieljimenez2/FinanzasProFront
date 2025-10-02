import { DatosEmpresa } from "./datos_empresa";
export interface DatosCompania {
  company_symbol: string;
  datosEmpresa: DatosEmpresa;
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
