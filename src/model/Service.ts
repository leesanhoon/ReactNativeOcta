export default class TopupTransaction {

    phone: string;
    providerName: string;
    serviceName: string;
    serviceID: number;
    price: number;
    processed: number;
    providerID: number;

    constructor(price, providerID) {
        this.price = price;
        this.providerID = providerID;
    }
}