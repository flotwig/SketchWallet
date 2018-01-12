import Realm from "realm";
import Transaction from "./Transaction";

export default class Wallet extends Realm.Object { }
Wallet.schema = {
    name: "Wallet",
    primaryKey: "id",
    properties: {
        id: "string",
        network: "string",
        name: "string",
        masterKey: "string",
        receiveAddresses: "string[]",
        changeAddress: "string",
        transactions: "Transaction[]"
    }
};