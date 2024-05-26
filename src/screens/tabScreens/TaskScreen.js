import React from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { moderateScale } from '../../utils/responsivMetrics';
import IndicatorBell from '../../components/IndicatorBell';
import Heading from '../../components/Heading';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const TaskScreen = () => {

  const toolData = [
    { iconName: <FontAwesome6 name='person-digging' color={'black'} style={styles.toolIcon} />, text: 'View DPR' },
    { iconName: <FontAwesome6 name='person-digging' color={'black'} style={styles.toolIcon} />, text: 'View Stock Consumption' },
    { iconName: <AntDesign name='home' color={'black'} style={styles.toolIcon} />, text: 'View Labour  Trend' },
    { iconName: <MaterialCommunityIcons name='clipboard-list' color={'black'} style={styles.toolIcon} />, text: 'View Resource Requests' },
    { iconName: <AntDesign name='home' color={'black'} style={styles.toolIcon} />, text: 'View Directory' }
  ]

  return (
    <View style={styles.toolContainer}>
      <IndicatorBell />
      <ScrollView>
        <Heading />
        <View style={styles.toolContentContainer}>
          <View style={styles.myToolList}>
            <Text style={styles.toolText}>My Tool</Text>
            {
              toolData.map((item, index) =>
              (
                <View style={[styles.toolList, index === toolData.length - 1 && styles.lastCardMargin]} key={index}>
                  <View style={[styles.toolListIcon,
                  ]}>
                    {item.iconName}
                  </View>
                  <Text style={styles.toolListText}>{item.text}</Text>
                </View>
              )
              )
            }
          </View>
        </View>
      </ScrollView >
    </View>
  )
}

export default TaskScreen;
const styles = StyleSheet.create({
  toolContainer: {
    flex: 1,
    backgroundColor: '#F6F8FB'
  },
  toolContentContainer: {
    // flex: 1,
    paddingHorizontal: wp('5.55%'),
  },
  myToolList: {
    // height: hp('80.35%'),
    // height: hp('80.35%'),
    width: '100%',
    // backgroundColor: 'blue', // Changed to blue to differentiate from the background
    justifyContent: 'flex-start',
  },
  toolText: {
    color: '#202A44',
    fontFamily: 'Geologica-Bold',
    fontSize: wp('4.17%'),
  },
  toolList: {
    height: hp('11%'),
    width: '100%',
    marginTop: hp('2.9%'),
    borderRadius: wp('3.33%'),
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  toolListIcon: {
    height: hp('9%'),
    width: wp('17%'),
    borderRadius: wp('3.33%'),
    backgroundColor: '#F3F6FB',
    margin: moderateScale(10),
    alignItems: 'center',
    justifyContent: 'center'
  },
  lastCardMargin: {
    marginBottom: hp('3%')
  },
  toolIcon: {
    color: '#000000',
    fontSize: wp('8%'),
  },
  toolListText: {
    fontSize: wp('4.17%'),
    fontFamily: 'Geologica-Medium',
    color: '#202A44',
    flex: 1, // Make text take available space
    marginLeft: wp('3%'), // Add margin to separate from the icon
  },
});
