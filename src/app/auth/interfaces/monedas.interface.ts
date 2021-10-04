export interface opcion{
    evento: boolean,
}

//////////////////////API DE MONEDAS/////////////////
export interface Monedacompletas {
    content: Content[];
}

export interface Content {
    id:       string;
    name:     string;
    symbol:   string;
    slugName: string;
    status:   Status;
    type:     Type;
    url?:     string;
}

export enum Status {
    Active = "ACTIVE",
}

export enum Type {
    Crypto = "CRYPTO",
    Fiat = "FIAT",
}


//////////// INTERFACE PRINCIPAL //////////////////////////////////

export interface selecmoneda{
    simb: string;
    simb2: string
}

export interface Monedas{ 
    valor: number;
    symbol1: string;
    symbol2: string;
  }