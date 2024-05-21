import React, { useState } from 'react';
import { Text, View, StyleSheet, StatusBar, Dimensions, Image, TextInput } from 'react-native';
import SwitchSelector from "react-native-switch-selector";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const { width, height } = Dimensions.get('screen');
const ws = width;
const hs = height;
console.log(`widthScreen : ${ws}`);
console.log(`heightScreen : ${hs}`);


const MainDashboardScreen = () => {
  const [selectedValue, setSelectedValue] = useState(true); // true for Online, false for Offline

  const options = [
    { label: selectedValue ? "" : "Offline", value: false },
    { label: selectedValue ? "Online" : "", value: true },
  ];

  const handleSwitch = (value) => {
    setSelectedValue(value);
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <View style={styles.topContainer}>
        <SwitchSelector
          options={options}
          initial={1}
          onPress={handleSwitch}
          style={styles.switchSelector}
          selectedTextStyle={{ color: selectedValue ? '#202A44' : '#FFF', }} // Customize selected text color
          buttonColor={selectedValue ? '#FFBA4D' : '#202A44'} // Customize button color
          backgroundColor="#EBEDF2" // Customize background color
          borderColor="#202A44" // Customize border color
          borderRadius={9.5} // Customize border radius
          height={19} // Customize height
          width={80}
        />
        <FontAwesome5 name='bell' size={21} color={'black'} />
      </View>
      <View style={styles.upwardContainer}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 20 }}>
          <View>
            <Text style={{ color: '#202A44', fontSize: 24, fontFamily: 'Geologica-Bold' }}>Hi, The Lake Admin</Text>
            <Text style={{ color: '#7E7E7E', fontSize: 15, fontFamily: 'Geologica-Regular' }}>Last Sync- 6 Jan 2023</Text>
          </View>
          <Image source={require('../assets/ProfilePic.png')} style={styles.logo} />
        </View>
      </View>
    </View>
  );
}

export default MainDashboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'blue',
  },
  topContainer: {
    alignItems: 'center', // Center the SwitchSelector horizontally
    justifyContent: 'center',
    height: 39,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  switchSelector: {
    width: 80, // Set the width to 89px
  },
  upwardContainer: {
    width: '100%',
    height: hs / 4.5,
    // backgroundColor: 'red',
  },
  logo: {
    backgroundColor: '#FFBA4D',
    height: 60,
    width: 60,
    borderRadius: 50,

  },
});
