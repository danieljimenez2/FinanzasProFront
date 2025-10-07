import { DatosEmpresa } from "./datos_empresa";

export interface Crecimientos_por_accion {
    companySymbol: string;
    datosEmpresa: DatosEmpresa;
    revenuesCagr10y?: number;
    revenuesCagr5y?: number;
    cashflowCagr10y?: number;
    cashflowCagr5y?: number;
    epsCagr10y?: number;
    epsCagr5y?: number;
    equityCagr5y?: number;
    dividendsCagr10y?: number;
    dividendsCagr5y?: number;
}
