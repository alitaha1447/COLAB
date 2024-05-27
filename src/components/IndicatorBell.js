import React, { useState } from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import SwitchSelector from "react-native-switch-selector";
import { horizontalScale, verticalScale, moderateScale } from '../utils/responsivMetrics';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const { width, height } = Dimensions.get('screen');
const ws = width;
const hs = height;

const IndicatorBell = () => {
  const [selectedValue, setSelectedValue] = useState(true); // true for Online, false for Offline

  const options = [
    { label: selectedValue ? "" : "Offline", value: false },
    { label: selectedValue ? "Online" : "", value: true },
  ];

  const handleSwitch = (value) => {
    setSelectedValue(value);
  };
  return (
    <View style={styles.topContainer}>
      <SwitchSelector
        options={options}
        initial={1}
        onPress={handleSwitch}
        style={styles.switchSelector}
        textStyle={styles.text} // Apply text style to ensure visibility
        selectedTextStyle={styles.selectedText} // Apply selected text style
        buttonColor={selectedValue ? '#FFBA4D' : '#202A44'}
        backgroundColor="#EBEDF2"
        borderColor="#202A44"
        borderRadius={moderateScale(9.5)}
        height={verticalScale(25)} // Adjust height for better text visibility
      />
      <MaterialIcons name='notifications' size={25} color={'black'} />
    </View>
  )
}

export default IndicatorBell;
const styles = StyleSheet.create({
  topContainer: {
    alignItems: 'center', // Center the SwitchSelector horizontally
    justifyContent: 'center',

    height: verticalScale(60),
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: ws * 0.056,

  },
  switchSelector: {
    width: horizontalScale(120),
  },
  // text: {
  //   fontSize: moderateScale(15), // Adjust font size for better text visibility
  //   color: '#202A44', // Default text color
  //   elevation: 5,
  // },
  selectedText: {
    fontSize: moderateScale(11), // Adjust font size for better text visibility
    color: '#FFFFFF', // Selected text color
    fontFamily: 'Geologica-Regular',
    elevation: 5,

  },
});