import { StackNavigator } from 'react-navigation';
import HomeScreen from './views/HomeScreen';
import NewWalletScreen from './views/NewWalletScreen';

const Navigator = StackNavigator({
    HomeScreen: {
        screen: HomeScreen
    },
    NewWalletScreen: {
        screen: NewWalletScreen
    }
}, {
        initialRouteName: "HomeScreen"
    });

export default Navigator;