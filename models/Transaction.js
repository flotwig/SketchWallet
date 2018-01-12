import Realm from "realm";

export default class Transaction extends Realm.Object { }
Transaction.schema = {
    name: "Transaction",
    primaryKey: "id",
    properties: {
        id: "string",
        tx: "string",
        fee: "int",
        input: "string[]",
        output: "string[]"
    }
};