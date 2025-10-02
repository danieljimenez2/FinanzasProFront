import { DatosEmpresa } from "./datos_empresa";
export interface Analistas_score {
    companySymbol: string;
    datosEmpresa: DatosEmpresa;
    rating: string;
    score: number;
    recomendation: string;
    altmanScore: number;
    piotroskiScore: number;
}