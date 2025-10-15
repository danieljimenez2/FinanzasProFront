export interface precioYDatosGenerales {
    companySymbol: string;
    precio: number;
    min52sMax52s: number;
    beta: number;
    perTtm: number;
    tamanoMercado: 'BIG CAP' | 'MID CAP' | 'SMALL CAP';
    marketCap: number;
    valorEmpresa?: number;
    situacionCaja?: 'CAJA NETA' | 'DEUDA NETA';
    ultimoDividendo?: number;
    minimo52s: number;
    maximo52s: number;
}
