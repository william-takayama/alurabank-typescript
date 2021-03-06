export class Negociacao {

    constructor(readonly data: Date, readonly quantity: number, readonly value: number) { }

    get volume() {
        return this.quantity * this.value;
    }
}