import * as bitcoin from 'bitcoinjs-lib';
import * as mnemonic from './lib/bitcoin/mnemonic';

export default class WalletUtils {
    static getRandomKeyPair() {
        return bitcoin.ECPair.makeRandom();
    }
    static getMnenomicFromPrivateKey(privateKey) {
        // electrum-style mnemonic, not rfc1751
        return mnemonic.mn_encode(privateKey);
    }
    static getPrivateKeyFromMnemonic(mnemonic) {
        return mnemonic.mn_decode(mnemonic);
    }

}