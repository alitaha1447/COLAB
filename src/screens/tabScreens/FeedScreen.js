import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, FlatList, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import { horizontalScale, verticalScale, moderateScale } from '../utils/responsivMetrics';
import { moderateScale } from '../../utils/responsivMetrics';
import IndicatorBell from '../../components/IndicatorBell';
import Heading from '../../components/Heading';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import * as Progress from 'react-native-progress';



const { width, height } = Dimensions.get('window');
console.log(`width --> ${width}`)
console.log(`height --> ${height}`)

const FeedScreen = () => {
  const progress = 0.6; // 60% progress

  const taskData = [
    { iconName: <FontAwesome6 name='person-digging' color={'black'} style={styles.taskIcon} />, text: 'Activity Tasks', btnText: '10' },
    { iconName: <FontAwesome6 name='person-digging' color={'black'} style={styles.taskIcon} />, text: 'Non Construction Tasks', btnText: '13' },
    { iconName: <FontAwesome6 name='person-digging' color={'black'} style={styles.taskIcon} />, text: 'Design Related Tasks', btnText: '9' },
    { iconName: <FontAwesome6 name='person-digging' color={'black'} style={styles.taskIcon} />, text: 'Laisoning  Tasks', btnText: '0' }
  ]

  return (
    <View style={styles.taskContainer}>
      <IndicatorBell />
      <ScrollView>
        <Heading />
        <View style={styles.contentContainer}>
          <View style={styles.myTaskList}>
            <Text style={styles.taskText}>My Task</Text>
            <View style={styles.circleIndicatorCard}>
              <Progress.Circle
                size={wp('26.4%')}
                progress={progress}
                indeterminate={false}
                thickness={8}
                showsText={false} // Hide default text representation
                direction="clockwise"
                strokeCap="butt"
                allowFontScaling={true}
                color="#FFBA4D"
                unfilledColor="#F3F6FB"
                startAngle={-Math.PI / 2}
                borderWidth={0}
              />


              <View style={styles.textContainer}>
                <Text style={styles.progressText}>{`${Math.round(progress * 100)}%`}</Text>
              </View>
            </View>

            {
              taskData.map((item, index) =>
              (
                <View style={[styles.taskList, index === taskData.length - 1 && styles.lastCardMargin]} key={index}>
                  <View style={[styles.taskListIcon,
                  ]}>
                    {item.iconName}
                  </View>
                  <Text style={styles.taskListText}>{item.text}</Text>
                  <TouchableOpacity style={[styles.taskButton, index % 2 == 0 ? styles.orangeButton : styles.blueButton]}>
                    <Text style={styles.taskButtonText}>{item.btnText}</Text>
                  </TouchableOpacity>
                </View>
              )
              )
            }

          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default FeedScreen;

const styles = StyleSheet.create({
  taskContainer: {
    flex: 1,
    backgroundColor: '#F6F8FB'
  },
  contentContainer: {
    // flex: 1,
    paddingHorizontal: wp('5.55%'),
    // backgroundColor: 'red'
  },
  myTaskList: {
    // height: hp('80.35%'),
    // height: hp('80.35%'),
    width: '100%',
    // backgroundColor: 'blue', // Changed to blue to differentiate from the background
    justifyContent: 'flex-start',
  },
  taskText: {
    color: '#202A44',
    fontFamily: 'Geologica-Bold',
    fontSize: wp('4.17%'),
  },
  circleIndicatorCard: {
    width: '100%',
    height: hp('17.34%'),
    backgroundColor: '#FFFFFF',
    marginTop: hp('2.9%'),
    borderRadius: wp('3.33%'),
    justifyContent: 'center',
    alignItems: 'center'
  },
  textContainer: {
    position: 'absolute',
    // alignItems: 'center',
    // justifyContent: 'center',
    // width: 43,
    // height: 43,
  },
  progressText: {
    color: '#202A44', // 60% progress color
    fontSize: wp('3.9%'), // Adjust the font size as needed
    fontWeight: 'Geologica-SemiBold',
  },
  taskList: {
    height: hp('11%'),
    width: '100%',
    marginTop: hp('2.9%'),
    borderRadius: wp('3.33%'),
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  taskListIcon: {
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
  taskIcon: {
    color: '#000000',
    fontSize: wp('8%'),
  },
  taskListText: {
    fontSize: wp('4.17%'),
    fontFamily: 'Geologica-Medium',
    color: '#202A44',
    flex: 1, // Make text take available space
    marginLeft: wp('3%'), // Add margin to separate from the icon

  },
  taskButton: {
    height: hp('4.2%'),
    width: wp('14%'),
    borderRadius: wp('8%'),
    backgroundColor: '#202A44',
    justifyContent: 'center',
    alignItems: 'center',
  },
  orangeButton: {
    backgroundColor: '#FFA500', // Orange color
  },
  blueButton: {
    backgroundColor: '#202A44', // Blue color
  },
  taskButtonText: {
    color: '#FFFFFF',
    fontFamily: 'Geologica-Bold',
    // lineHeight: wp('3.33%'),
    fontSize: wp('3.33%'),
  }
});
