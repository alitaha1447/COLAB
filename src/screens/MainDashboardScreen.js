import React from 'react';
import { Text, View, StyleSheet, StatusBar, Dimensions, Image, TextInput, TouchableOpacity, FlatList, ScrollView, } from 'react-native';
import Heading from '../components/Heading';
import { ProgressBar } from '@react-native-community/progress-bar-android';
import { horizontalScale, verticalScale, moderateScale } from '../utils/responsivMetrics';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { pixelTopercent } from '../utils/pixelTopercent';
import SwitchSelector from "react-native-switch-selector";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import IndicatorBell from '../components/IndicatorBell';
import MultiColorProgressBar from '../components/MultiColorProgressBar ';
import { BarChart } from "react-native-gifted-charts";







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

const hindranceData = [
  { number: '8', status: 'Approval', days: '66' },
  { number: '5', status: 'Material Issue', days: '27' },
  { number: '1', status: 'Accident', days: '3' },
  { number: '3', status: 'Manpower', days: '10' },
]

const data = [
  {
    stacks: [
      { value: 3, color: '#202A44' },
      { value: 3, color: '#FFBA4D' },
      { value: 2, color: '#007EC7' },
    ],
    // label: 'Jan',
  },
  {
    stacks: [
      { value: 1.6, color: '#202A44' },
      { value: 2, color: '#FFBA4D' },
      { value: 1, color: '#007EC7' },
    ],
    // label: 'Jan',
  },
  {
    stacks: [
      { value: 3, color: '#202A44' },
      { value: 3, color: '#FFBA4D' },
      { value: 2, color: '#007EC7' },
    ],
    // label: 'Jan',
  },
  {
    stacks: [
      { value: 3, color: '#202A44' },
      { value: 3, color: '#FFBA4D' },
      { value: 2, color: '#007EC7' },
    ],
    // label: 'Jan',
  },
  {
    stacks: [
      { value: 0.8, color: '#202A44' },
      { value: 3, color: '#FFBA4D' },
      { value: 2, color: '#007EC7' },
    ],
    // label: 'Jan',
  },
  {
    stacks: [
      { value: 3, color: '#202A44' },
      { value: 3, color: '#FFBA4D' },
      { value: 2, color: '#007EC7' },
    ],
    // label: 'Jan',
  },
  {
    stacks: [
      { value: 3, color: '#202A44' },
      { value: 3, color: '#FFBA4D' },
      { value: 2, color: '#007EC7' },
    ],
    // label: 'Jan',
  },

];


const MainDashboardScreen = () => {
  const progress = 1; // Full progress for demonstration

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
      <IndicatorBell />
      <ScrollView>
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
          <View style={styles.cardContainer}>
            <View style={styles.cardContent2}>
              <View style={{ padding: moderateScale(20), }}>
                <Text style={styles.cardContentHeadingText}>Today's Work-in-Progress</Text>
                <View style={{ marginTop: hs * 0.027, flexDirection: 'row', justifyContent: 'space-between' }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 2 }}>
                    <FontAwesome name='circle' size={wp('4.05%')} color={'#007EC7'} />
                    <Text style={{ color: '#5A5A5A', fontSize: wp('4.05%'), fontFamily: 'Geologica-Regular' }}>PRW</Text>
                  </View>
                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 2 }}>
                    <FontAwesome name='circle' size={wp('4.05%')} color={'#FFBA4D'} />
                    <Text style={{ color: '#5A5A5A', fontSize: wp('4.05%'), fontFamily: 'Geologica-Regular' }}>Labour Supply</Text>
                  </View>
                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 2 }}>
                    <FontAwesome name='circle' size={wp('4.05%')} color={'#202A44'} />
                    <Text style={{ color: '#5A5A5A', fontSize: wp('4.05%'), fontFamily: 'Geologica-Regular' }}>Miscellaneous</Text>
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
          {/* Schedule Summary */}
          <View style={styles.cardContainer}>
            <View style={styles.cardContent2}>
              <View style={{ padding: moderateScale(20), }}>
                <Text style={styles.cardContentHeadingText}>Schedule Summary</Text>
                <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={{ color: '#202A44', fontSize: wp('4.17%'), lineHeight: 15, fontFamily: 'Geologica-Medium' }}>02 Mar 2023</Text>
                  <Text style={{ color: '#202A44', fontSize: wp('4.17%'), lineHeight: 15, fontFamily: 'Geologica-Medium' }}>11 Aug 2024</Text>
                </View>
                <View style={{ marginTop: 8, flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={{ color: '#8E8E8E', fontSize: 10, lineHeight: 10, fontFamily: 'Geologica-Regular' }}>Planned Value Of Work</Text>
                  <Text style={{ color: '#8E8E8E', fontSize: 10, lineHeight: 10, fontFamily: 'Geologica-Regular' }}>Work Force Count</Text>
                </View>
                <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={{ color: '#202A44', fontSize: wp('4.17%'), lineHeight: 15, fontFamily: 'Geologica-Medium' }}>02 Mar 2023</Text>
                  <Text style={{ color: '#202A44', fontSize: wp('4.17%'), lineHeight: 15, fontFamily: 'Geologica-Medium' }}>11 Aug 2024</Text>
                </View>
                <View style={{ marginTop: 8, flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={{ color: '#8E8E8E', fontSize: 10, lineHeight: 10, fontFamily: 'Geologica-Regular' }}>Planned Value Of Work</Text>
                  <Text style={{ color: '#8E8E8E', fontSize: 10, lineHeight: 10, fontFamily: 'Geologica-Regular' }}>Work Force Count</Text>
                </View>
                <View style={{
                  marginTop: wp('4.17%'),
                  borderBottomWidth: 1,
                  borderBottomColor: 'lightgray',
                  marginBottom: wp('4.17%'),
                }} />
                <MultiColorProgressBar progress={progress} />
              </View>
            </View>
          </View>
          {/* Total Hindrance */}
          <View style={styles.cardContainer}>
            <View style={styles.cardContent2}>
              <View style={{ padding: moderateScale(20) }}>
                <Text style={styles.cardContentHeadingText}>Total Hindrance : 180</Text>

                <View style={{ marginTop: 20, gap: 4, flexDirection: 'row', flexWrap: 'wrap' }}>

                  {
                    hindranceData.map((item, index) => (
                      <View style={styles.hindranceBox} key={index}>
                        <View style={styles.topBox}>
                          <Text style={{ fontSize: 14, color: '#DBDBDB', fontFamily: 'Geologica-SemiBold' }}>{item.number}</Text>
                          <Text style={{ fontSize: 12, color: '#DBDBDB', fontFamily: 'Geologica-Regular' }}>{item.status}</Text>
                        </View>
                        <View style={styles.bottomBox}>
                          <Text style={{ fontSize: 12, color: '#202A44', fontFamily: 'Geologica-Regular' }}>Days {item.days}</Text>
                        </View>
                      </View>
                    ))
                  }

                </View>
              </View>
            </View>
          </View>
          {/* Work Trend */}
          <View style={styles.cardContainer}>
            <View style={styles.cardContent2}>
              <View style={{ padding: moderateScale(20) }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Text style={styles.cardContentHeadingText}>Work Trend</Text>
                  <TouchableOpacity style={styles.workTrendBtn}>
                    <FontAwesome5 name='calendar-alt' size={wp('5%')} color={'#FFFFFF'} />
                    <Text style={{ color: '#FFFFFF', fontSize: wp('4%'), }}>6 Jan 2023 </Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.chartContainer}>
                  <BarChart
                    stackData={data}
                    frontColor={'#177AD5'}
                    barWidth={15}
                    noOfSections={4}
                    width={wp('66.67%')}
                    stepValue={2}
                    spacing={wp('5.56%')}
                    initialSpacing={5}
                    showLine={true}
                  />
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 2 }}>
                    <FontAwesome name='circle' size={wp('4.05%')} color={'#007EC7'} />
                    <Text style={{ color: '#5A5A5A', fontSize: wp('4.05%'), fontFamily: 'Geologica-Regular' }}>In House</Text>
                  </View>
                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 2 }}>
                    <FontAwesome name='circle' size={wp('4.05%')} color={'#FFBA4D'} />
                    <Text style={{ color: '#5A5A5A', fontSize: wp('4.05%'), fontFamily: 'Geologica-Regular' }}>PRW</Text>
                  </View>
                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 2 }}>
                    <FontAwesome name='circle' size={wp('4.05%')} color={'#FF4560'} />
                    <Text style={{ color: '#5A5A5A', fontSize: wp('4.05%'), fontFamily: 'Geologica-Regular' }}>BCWP</Text>
                  </View>
                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 2 }}>
                    <FontAwesome name='circle' size={wp('4.05%')} color={'#202A44'} />
                    <Text style={{ color: '#5A5A5A', fontSize: wp('4.05%'), fontFamily: 'Geologica-Regular' }}>MISC</Text>
                  </View>
                </View>

              </View>
            </View>
          </View>
          {/* Work Summary */}
          <View style={styles.cardContainer}>
            <View style={styles.cardContent2}>
              <View style={{ padding: moderateScale(20) }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Text style={styles.cardContentHeadingText}>Work Summary</Text>
                </View>
                <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={{ color: '#202A44', fontSize: wp('4.17%'), lineHeight: 15, fontFamily: 'Geologica-Medium' }}>573.63</Text>
                  <Text style={{ color: '#202A44', fontSize: wp('4.17%'), lineHeight: 15, fontFamily: 'Geologica-Medium' }}>735.19</Text>
                </View>
                <View style={{ marginTop: 8, flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={{ color: '#8E8E8E', fontSize: wp('2.78%'), lineHeight: 10, fontFamily: 'Geologica-Regular' }}>Total Project Value</Text>
                  <Text style={{ color: '#8E8E8E', fontSize: wp('2.78%'), lineHeight: 10, fontFamily: 'Geologica-Regular' }}>Work Awarded</Text>
                </View>
                <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={{ color: '#202A44', fontSize: wp('4.17%'), lineHeight: 15, fontFamily: 'Geologica-Medium' }}>234.0</Text>
                  <Text style={{ color: '#202A44', fontSize: wp('4.17%'), lineHeight: 15, fontFamily: 'Geologica-Medium' }}>100</Text>
                </View>
                <View style={{ marginTop: 8, flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={{ color: '#8E8E8E', fontSize: wp('2.78%'), lineHeight: 10, fontFamily: 'Geologica-Regular' }}>PO Created</Text>
                  <Text style={{ color: '#8E8E8E', fontSize: wp('2.78%'), lineHeight: 10, fontFamily: 'Geologica-Regular' }}>Total Extra Work</Text>
                </View>
                <View style={{
                  marginTop: wp('4.17%'),
                  borderBottomWidth: 1,
                  borderBottomColor: 'lightgray',
                  marginBottom: wp('4.17%'),
                }} />
                {/* <View style={styles.chartContainer}>
                  <BarChart
                    horizontal
                    stackData={data}
                    frontColor={'#177AD5'}
                    barWidth={15}
                    noOfSections={4}
                    width={wp('66.67%')}
                    stepValue={2}
                    spacing={wp('4.56%')}
                    initialSpacing={5}
                    showLine={true}

                  />
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 2 }}>
                    <FontAwesome name='circle' size={wp('4.05%')} color={'#007EC7'} />
                    <Text style={{ color: '#5A5A5A', fontSize: wp('4.05%'), fontFamily: 'Geologica-Regular' }}>In House</Text>
                  </View>
                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 2 }}>
                    <FontAwesome name='circle' size={wp('4.05%')} color={'#FFBA4D'} />
                    <Text style={{ color: '#5A5A5A', fontSize: wp('4.05%'), fontFamily: 'Geologica-Regular' }}>PRW</Text>
                  </View>
                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 2 }}>
                    <FontAwesome name='circle' size={wp('4.05%')} color={'#FF4560'} />
                    <Text style={{ color: '#5A5A5A', fontSize: wp('4.05%'), fontFamily: 'Geologica-Regular' }}>BCWP</Text>
                  </View>
                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 2 }}>
                    <FontAwesome name='circle' size={wp('4.05%')} color={'#202A44'} />
                    <Text style={{ color: '#5A5A5A', fontSize: wp('4.05%'), fontFamily: 'Geologica-Regular' }}>MISC</Text>
                  </View>
                </View> */}

              </View>
            </View>
          </View>
          {/*  */}
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
    width: (width / 2) - moderateScale(30),
    height: 135,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    marginRight: 8
  },
  cardContent: {
    padding: moderateScale(20),
    gap: moderateScale(10)
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
  cardContainer: {
    width: '100%',
    marginTop: hp('2.9%'),
    // paddingHorizontal: ws * 0.056,
    paddingHorizontal: horizontalScale(25),
  },
  cardContent2: {
    height: 'auto',
    // height: hp('32.51%'),
    width: '100%',
    borderRadius: 12,
    backgroundColor: '#FFFFFF'
  },
  cardContentHeadingText: {
    fontSize: wp('5.55%'),
    lineHeight: wp('5.55%'),
    fontFamily: 'Geologica-Bold',
    color: '#202A44'
  },
  hindranceBox: {
    height: hp('10.4%'),
    width: wp('27%'),
  },
  topBox: {
    width: '100%',
    flexBasis: '70%',
    backgroundColor: '#202A44',
    paddingHorizontal: 8,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  bottomBox: {
    width: '100%',
    flexBasis: '30%',
    backgroundColor: '#F6F8FB',
    paddingHorizontal: 8,
    justifyContent: 'center',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  workTrendBtn: {
    width: wp('29.8%'),
    height: hp('6.5%'),
    borderRadius: 10,
    backgroundColor: '#202A44',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  chartContainer: {
    marginTop: moderateScale(20),
    height: 'auto',
    backgroundColor: 'gray',
    paddingVertical: hp('1.5%'),
  },


});
