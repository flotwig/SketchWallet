import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    FlatList,
    ListView,
    ActivityIndicator
} from 'react-native';
import Db from "../Db";

export default class WalletList extends Component<{}> {
    constructor(p) {
        super(p);
        this.state = {
            isLoading: true,
            walletsDs: new ListView.DataSource({ rowHasChanged: (a, b) => a != b })
        }
    }
    componentDidMount() {
        this.wallets = Db.getWallets();
        this.setState({ isLoading: false, walletsDs: this.state.walletsDs.cloneWithRows(this.wallets) });
        this.wallets.addListener((wallets, changes) => {
            this.setState({ walletsDs: this.state.walletsDs.cloneWithRows(this.wallets) });
        });
    }
    render() {
        if (this.state.isLoading) {
            return (<ActivityIndicator />)
        }
        return (
            <View style={{ flex: 1 }}>
                <ListView
                    dataSource={this.state.walletsDs}
                    renderRow={(wallet) => <Text>{wallet.changeAddress}</Text>}
                />
            </View>
        );
    }
}