import React, { useMemo, useState } from 'react';
import { Text, View, StyleSheet, StatusBar, Dimensions, Image, TextInput, TouchableOpacity, FlatList, ScrollView, } from 'react-native';
import Heading from '../components/Heading';
import { ProgressBar } from '@react-native-community/progress-bar-android';
import { horizontalScale, verticalScale, moderateScale } from '../utils/responsivMetrics';
import { pixelTopercent } from '../utils/pixelTopercent';
import SwitchSelector from "react-native-switch-selector";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MultiColorProgressBar from '../components/MultiColorProgressBar ';






const { width, height } = Dimensions.get('screen');
const ws = width;
const hs = height;
console.log(`widthScreen : ${ws}`);
console.log(`heightScreen : ${hs}`);
console.log('====================================');
const { width: w, height: h } = Dimensions.get('window');
console.log(`widthWindow : ${w}`);
console.log(`heightWindow : ${h}`);

const cardData = [
  { iconName: <Fontisto name={'person'} size={35} color={'#202A44'} />, text: 'Labour Data', btnText: '100' },
  { iconName: <FontAwesome5 name={'calendar-minus'} size={35} color={'#202A44'} />, text: 'Event Schedule', btnText: '5' },
  { iconName: <FontAwesome5 name={'home'} size={35} color={'#202A44'} />, text: 'Drawing Master', btnText: '150' },
  { iconName: <FontAwesome5 name={'torii-gate'} size={35} color={'#202A44'} />, text: 'Gate Entry', btnText: '150' },
  { iconName: <FontAwesome5 name={'tasks'} size={35} color={'#202A44'} />, text: 'Tasks', btnText: '100' },
  { iconName: <Fontisto name={'persons'} size={35} color={'#202A44'} />, text: 'Area Of Concern', btnText: '150' },
]

const MainDashboardScreen = () => {
  const progress = 1; // Full progress for demonstration
  const [selectedValue, setSelectedValue] = useState(true); // true for Online, false for Offline

  const options = [
    { label: selectedValue ? "" : "Offline", value: false },
    { label: selectedValue ? "Online" : "", value: true },
  ];

  const handleSwitch = (value) => {
    setSelectedValue(value);
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        {item.iconName}
        <Text style={styles.cardText}>{item.text}</Text>
        <TouchableOpacity style={styles.cardBtn}>
          <Text style={styles.cardText}>{item.btnText}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container1}>
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
      <ScrollView>
        {/* <View style={styles.upwardContainer}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 20 }}>
            <View>
              <Text style={{ color: '#202A44', fontSize: 24, fontFamily: 'Geologica-Bold' }}>Hi, The Lake Admin</Text>
              <Text style={{ color: '#7E7E7E', fontSize: 15, fontFamily: 'Geologica-Regular' }}>Last Sync- 6 Jan 2023</Text>
            </View>
            <Image source={require('../assets/ProfilePic.png')} style={styles.logo} />
          </View>
        </View> */}
        <Heading />
        <View style={{ flex: 1 }}>
          <View style={styles.middleContainer}>
            <View style={styles.middleCont1}>
              <Text style={styles.middleCont1Test}>My Tools</Text>
              <TouchableOpacity style={styles.middleCont1Btn}>
                <Text style={styles.middleCont1BtnText}>Show All</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.middleCont2}>
              <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={cardData}
                renderItem={renderItem}
                keyExtractor={(item, index) => index}
              />
            </View>
          </View>
          <View style={styles.workInProgress}>
            <View style={styles.workInProgressCard}>
              <View style={styles.workInProgressCardContent}>
                <Text style={{ fontSize: 15, lineHeight: 15, fontFamily: 'Geologica-Bold', color: '#202A44' }}>Today's Work-in-Progress</Text>
                <View style={{ marginTop: hs * 0.027, flexDirection: 'row', justifyContent: 'space-between' }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 2 }}>
                    <FontAwesome name='circle' size={11} color={'#007EC7'} />
                    <Text style={{ color: '#5A5A5A', fontSize: 12, lineHeight: 12, fontFamily: 'Geologica-Regular' }}>PRW</Text>
                  </View>
                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 2 }}>
                    <FontAwesome name='circle' size={11} color={'#FFBA4D'} />
                    <Text style={{ color: '#5A5A5A', fontSize: 12, lineHeight: 12, fontFamily: 'Geologica-Regular' }}>Labour Supply</Text>
                  </View>
                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 2 }}>
                    <FontAwesome name='circle' size={11} color={'#202A44'} />
                    <Text style={{ color: '#5A5A5A', fontSize: 12, lineHeight: 12, fontFamily: 'Geologica-Regular' }}>Miscellaneous</Text>
                  </View>
                </View>
                <View style={{ marginTop: 20 }}>
                  <MultiColorProgressBar progress={progress} />
                </View>
                <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={{ color: '#202A44', fontSize: 15, lineHeight: 15, fontFamily: 'Geologica-SemiBold' }}>₹ 483779.56</Text>
                  <Text style={{ color: '#202A44', fontSize: 15, lineHeight: 15, fontFamily: 'Geologica-SemiBold' }}>17 Labours</Text>
                </View>
                <View style={{ marginTop: 8, flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={{ color: '#8E8E8E', fontSize: 10, lineHeight: 10, fontFamily: 'Geologica-Regular' }}>Planned Value Of Work</Text>
                  <Text style={{ color: '#8E8E8E', fontSize: 10, lineHeight: 10, fontFamily: 'Geologica-Regular' }}>Work Force Count</Text>
                </View>
                <View style={{ alignItems: 'center', marginTop: 20 }}>
                  <TouchableOpacity style={{ backgroundColor: '#202A44', width: 89, justifyContent: 'center', alignItems: 'center', borderRadius: 13.5, height: 27 }}>
                    <Text style={{ color: '#FFFFFF', fontSize: 12, lineHeight: 12, fontFamily: 'Geologica-Regular' }}>View All</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.workInProgress}>
            <View style={styles.workInProgressCard}>
              <View style={styles.workInProgressCardContent}>
                <Text style={{ fontSize: 15, lineHeight: 15, fontFamily: 'Geologica-Bold', color: '#202A44' }}>Today's Work-in-Progress</Text>
                <View style={{ marginTop: hs * 0.027, flexDirection: 'row', justifyContent: 'space-between' }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 2 }}>
                    <FontAwesome name='circle' size={11} color={'#007EC7'} />
                    <Text style={{ color: '#5A5A5A', fontSize: 12, lineHeight: 12, fontFamily: 'Geologica-Regular' }}>PRW</Text>
                  </View>
                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 2 }}>
                    <FontAwesome name='circle' size={11} color={'#FFBA4D'} />
                    <Text style={{ color: '#5A5A5A', fontSize: 12, lineHeight: 12, fontFamily: 'Geologica-Regular' }}>Labour Supply</Text>
                  </View>
                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 2 }}>
                    <FontAwesome name='circle' size={11} color={'#202A44'} />
                    <Text style={{ color: '#5A5A5A', fontSize: 12, lineHeight: 12, fontFamily: 'Geologica-Regular' }}>Miscellaneous</Text>
                  </View>
                </View>
                <View style={{ marginTop: 20 }}>
                  <MultiColorProgressBar progress={progress} />
                </View>
                <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={{ color: '#202A44', fontSize: 15, lineHeight: 15, fontFamily: 'Geologica-SemiBold' }}>₹ 483779.56</Text>
                  <Text style={{ color: '#202A44', fontSize: 15, lineHeight: 15, fontFamily: 'Geologica-SemiBold' }}>17 Labours</Text>
                </View>
                <View style={{ marginTop: 8, flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={{ color: '#8E8E8E', fontSize: 10, lineHeight: 10, fontFamily: 'Geologica-Regular' }}>Planned Value Of Work</Text>
                  <Text style={{ color: '#8E8E8E', fontSize: 10, lineHeight: 10, fontFamily: 'Geologica-Regular' }}>Work Force Count</Text>
                </View>
                <View style={{ alignItems: 'center', marginTop: 20 }}>
                  <TouchableOpacity style={{ backgroundColor: '#202A44', width: 89, justifyContent: 'center', alignItems: 'center', borderRadius: 13.5, height: 27 }}>
                    <Text style={{ color: '#FFFFFF', fontSize: 12, lineHeight: 12, fontFamily: 'Geologica-Regular' }}>View All</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView >
    </View >
  );
}

export default MainDashboardScreen;

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: '#F6F8FB',
  },
  topContainer: {
    alignItems: 'center', // Center the SwitchSelector horizontally
    justifyContent: 'center',
    height: hs * 0.0528,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: ws * 0.056,
  },
  switchSelector: {
    width: 80, // Set the width to 89px
  },
  // upwardContainer: {
  //   width: '100%',
  //   // height: hs / 4.5,
  // },
  // logo: {
  //   backgroundColor: '#FFBA4D',
  //   height: 60,
  //   width: 60,
  //   borderRadius: 50,
  // },
  middleContainer: {
    height: 176,
    width: '100%',
    paddingHorizontal: ws * 0.056,

  },
  middleCont1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 26,
  },
  middleCont1Test: {
    color: '#202A44',
    fontSize: 15,
    lineHeight: 15,
    fontFamily: 'Geologica-Bold'
  },
  middleCont1Btn: {
    backgroundColor: '#202A44',
    borderRadius: 15,
    width: 77,
    height: 26,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 7,
    paddingRight: 13,
    paddingBottom: 7,
    paddingLeft: 13,

  },
  middleCont1BtnText: {
    color: '#FFFFFF',
    fontSize: 12,
    lineHeight: 12,
    fontFamily: 'Geologica-Regular',
  },
  middleCont2: {
    width: '100%',
    marginTop: hs * 0.0254,
    flexDirection: 'row',
  },
  card: {
    width: (width / 2) - 28,
    height: 135,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    marginRight: 8
  },
  cardContent: {
    padding: 20,
    gap: 10
  },
  cardBtn: {
    width: 55.81,
    height: 21,
    borderRadius: 10.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFBA4D'
  },
  cardText: {
    fontSize: 12,
    lineHeight: 15,
    color: '#202A44',
    fontFamily: 'Geologica-SemiBold',
  },
  workInProgress: {
    width: '100%',
    marginTop: 20,
    paddingHorizontal: ws * 0.056,
    // paddingHorizontal: horizontalScale(25),
  },
  workInProgressCard: {
    height: 225,
    width: '100%',
    borderRadius: 12,
    backgroundColor: '#FFFFFF'
  },
  workInProgressCardContent: {
    padding: 20,
  }
});
