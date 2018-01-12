import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';
import Db from "../Db";
import WalletUtils from "../WalletUtils";

export default class NewWalletScreen extends Component<{}> {
    constructor(p) {
        super(p);
    }
    componentDidMount() {
        this.setState({
            keyPair: WalletUtils.getRandomKeyPair()
        });
    }
    render() {
        return (
            <View>
                <Text>{WalletUtils.getMnenomicFromPrivateKey(this.state.keyPair)}</Text>
            </View>
        );
    }
}