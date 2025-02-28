export interface City {
    id: number;
    name: string;
    description: string;
    image?: string;
}

export interface Location {
    id: number;
    name: string;
    image?: string;
}

export interface Candy {
    id: string;
    name: string;
    symbol: string;
    image?: string;
}

export interface UserCandyItem {
    candy: Candy;
    quantity: number;
}

export interface StoreCandyItem {
    candy: Candy;
    price: number;
    quantity: number;
}