export interface Precio_y_datos_generales {
    company_symbol: string;
    precio: number;
    min52s_max52s: number;
    beta: number;
    per_ttm: number;
    tamaño_mercado: 'BIG CAP' | 'MID CAP' | 'SMALL CAP';
    market_cap: number;
    valor_empresa?: number;
    situacion_caja?: 'CAJA NETA' | 'DEUDA NETA';
    ultimo_dividendo?: number;
    minimo_52s: number;
    maximo_52s: number;
}
