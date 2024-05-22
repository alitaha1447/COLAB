import React from 'react';
// import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './src/screens/LoginScreen';
import DashboardScreen from './src/screens/DashboardScreen';
import FeedScreen from './src/screens/tabScreens/FeedScreen';
import TaskScreen from './src/screens/tabScreens/TaskScreen';
import ToolScreen from './src/screens/tabScreens/ToolScreen';
import MainDashboardScreen from './src/screens/MainDashboardScreen'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

function BottmStackScreens() {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="MainDashboard" component={MainDashboardScreen} options={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: () => (
          <FontAwesome5 name="home" color={'#202A44'} size={25} />
        ),
      }} />
      <BottomTab.Screen name="Feed" component={FeedScreen} options={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: () => (
          <FontAwesome5 name="tasks" color={'#202A44'} size={25} />
        ),
      }} />

      <BottomTab.Screen name="Task" component={TaskScreen} options={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: () => (
          <FontAwesome5 name="info-circle" color={'#202A44'} size={25} />
        ),
      }} />
      <BottomTab.Screen name="Tool" component={ToolScreen} options={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: () => (
          <FontAwesome5 name="home" color={'#202A44'} size={25} />
        ),
      }} />

    </BottomTab.Navigator>
  );
}


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name='Dashboard' component={DashboardScreen} options={{ headerShown: false }} />
        <Stack.Screen name='MainDashboardScreen' component={BottmStackScreens} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>



  );
}

export default App;
