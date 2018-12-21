
import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';
import Home from './src/componetes/Home'
import Login from './src/componetes/Login'
import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyA-0soCLkvEcfm47F4_fvXX5Uu3YNzgZwI",
  authDomain: "diag-ab95c.firebaseapp.com",
  databaseURL: "https://diag-ab95c.firebaseio.com",
  projectId: "diag-ab95c",
  storageBucket: "diag-ab95c.appspot.com",
  messagingSenderId: "1046890630817"
};
firebase.initializeApp(config);


const MyApp = createStackNavigator({
  login: { screen: Login },
  home: { screen: Home },
  
  
})

export default createAppContainer(MyApp);
