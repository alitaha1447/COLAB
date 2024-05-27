import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { moderateScale, horizontalScale } from './src/utils/responsivMetrics';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './src/screens/LoginScreen';
import DashboardScreen from './src/screens/DashboardScreen';
import FeedScreen from './src/screens/tabScreens/FeedScreen';
import TaskScreen from './src/screens/tabScreens/TaskScreen';
import MainDashboardScreen from './src/screens/MainDashboardScreen';
import WorkInProgress from './src/screens/WorkInProgress';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SmallScreen from './src/screens/SmallScreen';
import ProfileScreen from './src/screens/tabScreens/ProfileScreen';
import EditProfileScreen from './src/screens/EditProfileScreen';
import ChangePassword from './src/screens/ChangePassword';

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();
const ProfileStack = createStackNavigator();
const MainDashboardStack = createStackNavigator();

const CustomTabButton = ({ children, onPress }) => (

  <TouchableOpacity
    style={{
      top: -20,
      justifyContent: 'center',
      alignItems: 'center',
    }}
    onPress={onPress}>
    <View
      style={{
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#202A44',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {children}
    </View>
  </TouchableOpacity>
);

function MainDashboardStackScreens() {
  return (
    <MainDashboardStack.Navigator>
      <MainDashboardStack.Screen
        name="MainDashboard"
        component={MainDashboardScreen}
        options={{ headerShown: false }}
      />
      <MainDashboardStack.Screen
        name="WorkInProgress"
        component={WorkInProgress}
        // title={'Work In Progress'}
        options={({ navigation }) => ({
          // headerShown: true,
          headerTitle: 'Work-In-Progress',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ paddingLeft: 10 }}>
              <MaterialIcons name="arrow-back-ios-new" size={25} color="#202A44" />
              {/* <Text>Back</Text>  // Wrap any text in Text component */}
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => alert('Notifications')} style={{ paddingRight: 10 }}>
              <Ionicons name="notifications" size={25} color="#202A44" />
              {/* <Text>Alerts</Text>  // Wrap any text in Text component */}
            </TouchableOpacity>
          ),
        })}
      />
    </MainDashboardStack.Navigator>
  );
}

function ProfileStackScreens() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: true }}
      />
      {/* <ProfileStack.Screen name='Edit Profile' component={EditProfileScreen} options={{ headerShown: true }} /> */}
      {/* <ProfileStack.Screen name='Change Password' component={ChangePassword} options={{ headerShown: true }} /> */}
    </ProfileStack.Navigator>
  );
}

function BottmStackScreens() {
  const [isSmallPageVisible, setSmallPageVisible] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const navigation = useNavigation();

  const toggleSmallPage = () => {
    setSmallPageVisible(!isSmallPageVisible);
    setIsClicked(!isClicked);
  };
  console.log(isClicked);
  return (
    <>
      <BottomTab.Navigator>
        <BottomTab.Screen
          name="MainDashboardStack"
          component={MainDashboardStackScreens}
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => (
              <FontAwesome5
                name="home"
                color={'#202A44'}
                size={moderateScale(25)}
                style={{
                  backgroundColor: focused ? '#FFBA4D' : 'white',
                  borderRadius: moderateScale(50),
                  padding: moderateScale(10),
                }}
              />
            ),
          }}
        />

        <BottomTab.Screen
          name="Feed"
          component={FeedScreen}
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => (
              <FontAwesome5
                name="tasks"
                color={'#202A44'}
                size={moderateScale(25)}
                style={{
                  backgroundColor: focused ? '#FFBA4D' : 'white',
                  borderRadius: moderateScale(50),
                  padding: moderateScale(10),
                }}
              />
            ),
          }}
        />

        <BottomTab.Screen
          name="PlusButton"
          component={View} // Placeholder component
          options={{
            headerShown: false,
            tabBarShowLabel: false,

            // tabBarIcon: () => (
            //   <FontAwesome5
            //     name={isSmallPageVisible ? "minus" : "plus"}
            //     backgroundColor={'#202A44'}
            //     color={'#FFFFFF'}
            //     size={moderateScale(25)}
            //     style={{
            //       borderRadius: moderateScale(50),
            //       padding: moderateScale(6),
            //     }}
            //   />
            // ),

            tabBarIcon: ({ focused }) =>
              isSmallPageVisible ? (
                <Entypo
                  name="cross"
                  // backgroundColor={'#202A44'}
                  color="#FFFFFF"
                  size={moderateScale(25)}
                  style={{
                    borderRadius: moderateScale(50),
                    padding: moderateScale(6),
                  }}
                />
              ) : (
                <FontAwesome5
                  name="plus"
                  // backgroundColor={'#202A44'}
                  color="#FFFFFF"
                  size={moderateScale(25)}
                  style={{
                    borderRadius: moderateScale(25),
                    padding: moderateScale(6),
                  }}
                />
              ),

            tabBarButton: props => (
              <CustomTabButton {...props} onPress={toggleSmallPage} />
            ),
          }}
        />

        <BottomTab.Screen
          name="Task"
          component={TaskScreen}
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => (
              <FontAwesome5
                name="info-circle"
                color={'#202A44'}
                size={25}
                style={{
                  backgroundColor: focused ? '#FFBA4D' : 'white',
                  borderRadius: 50,
                  padding: 10,
                }}
              />
            ),
          }}
        />

        <BottomTab.Screen
          name="My Profile"
          component={ProfileStackScreens}
          options={({ navigation }) => ({
            unmountOnBlur: true,
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="person-circle-sharp"
                color={'#202A44'}
                size={25}
                style={{
                  backgroundColor: focused ? '#FFBA4D' : 'white',
                  borderRadius: 50,
                  padding: 10,
                }}
              />
            ),
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <FontAwesome5
                  name="arrow-left"
                  color={'#202A44'}
                  size={25}
                  style={{ marginLeft: 15 }}
                />
              </TouchableOpacity>
            ),
          })}
        />
      </BottomTab.Navigator>

      {isSmallPageVisible && <SmallScreen />}
    </>
  );
}

function App() {
  return (
    <NavigationContainer>
      <AppContent />
    </NavigationContainer>
  );
}

const AppContent = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      {/* <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      /> */}
      <Stack.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MainDashboardScreen"
        component={BottmStackScreens}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen name='WorkInProgress' component={WorkInProgress}/> */}
      <Stack.Screen
        name="Edit Profile"
        component={EditProfileScreen}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="Change Password"
        component={ChangePassword}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
};

export default App;
