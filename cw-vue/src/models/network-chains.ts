export class Network {
    name: string;
    chainId: number;
    currencySymbol: string;

    constructor(name: string, chainId: number, currencySymbol: string) {
        this.name = name;
        this.chainId = chainId;
        this.currencySymbol = currencySymbol;
    }
}

export const networks: Network[] = [
    new Network('Ethereum', 1, 'ETH'),
    new Network('Etherium (Testnet)', 4, 'ETH'),
    new Network('Polygon', 137, 'MATIC'),
    new Network('Polygon Amoy(Testnet)', 80001, 'POL')
];