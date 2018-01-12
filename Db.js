import Realm from "realm";
import Transaction from "./models/Transaction";
import Wallet from "./models/Wallet";

export default class Db {
    static init() {
        return Realm.open({ schema: [Transaction, Wallet] }).then(realm => {
            Db.realm = realm;
        });
    }
    static create(type, obj) {
        Db.realm.write(() => {
            Db.realm.create(type, obj);
        })
    }
    static createWallet(wallet) {
        Db.create('Wallet', wallet);
    }
    static getWallets() {
        return Db.realm.objects('Wallet');
    }
}