import { NumberSymbol } from "@angular/common";

export class Pedido {
    _id?: number;
    id: number;
    name: string;
    price: string;
    description: string;


    constructor(id: number, name: string, price: string, description: string) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
    }   
}