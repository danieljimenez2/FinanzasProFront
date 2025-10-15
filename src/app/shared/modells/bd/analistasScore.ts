import { datosEmpresa } from "./datosEmpresa";
export interface analistasScore {
    companySymbol: string;
    datosEmpresa: datosEmpresa;
    rating: string;
    score: number;
    recomendation: string;
    altmanScore: number;
    piotroskiScore: number;
}