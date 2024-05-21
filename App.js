import React from 'react';
// import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './src/screens/LoginScreen';
import DashboardScreen from './src/screens/DashboardScreen';
import MainDashboardScreen from './src/screens/MainDashboardScreen';

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

// const DashboardScreen = () => {

// }

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name='Dashboard' component={DashboardScreen} options={{ headerShown: false }} />
        {/* <Stack.Screen name='MainDashboardScreen' component={MainDashboardScreen} options={{ headerShown: false }} /> */}
      </Stack.Navigator>
    </NavigationContainer>



  );
}

export default App;
