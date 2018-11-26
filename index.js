/** @format */

import {AppRegistry} from 'react-native';
import App from './src/App';
// import {name as appName} from './app.json';
// import Header from './src/components/common/Header';

// const App = () => (
//     //if you want the app to be able to figure out whether it is song, album or w/e we will use prop system, thus we pass props to child component
//     //use view tags as a div replacement
//     <View style={{ flex: 1 }}>
//         <Header headerText={'Author'} />
//         <AlbumList />
//     </View>
// );


AppRegistry.registerComponent('auth', () => App);
