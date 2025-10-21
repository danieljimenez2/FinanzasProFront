export interface respuestaSector {
    companySymbol: string;
    companyName: string;
    perTtm: number;
    situacionCaja: string | null;
    evFcf: number;
    pais:string;
    roce: number;
    ratioDeuda: number;
    liquidez: number;
    margenBruto: number;
    margenNeto: number;
    dividendYieldTtm: number;
    PayoutRatioTtm: number;
}