/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  ActivityIndicator
} from 'react-native';
import WalletList from "./WalletList";
import Navigator from "../Navigator";
import Db from "../Db";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class HomeScreen extends Component<{}> {
  static navigationOptions = {
    title: 'Home'
  }

  constructor(p) {
    super(p);
    this.state = {
      dbConnected: false
    }
    Db.init().then(() => this.setState({ dbConnected: true }));
  }

  render() {
    if (!this.state.dbConnected) {
      return (<ActivityIndicator />);
    }
    return (
      <View style={styles.container}>
        <Button onPress={() => this.props.navigation.navigate('NewWalletScreen')} title="New Wallet" />
        <WalletList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 10
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
