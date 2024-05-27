import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  Dimensions,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import Heading from '../components/Heading';
import { ProgressBar } from '@react-native-community/progress-bar-android';
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from '../utils/responsivMetrics';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { pixelTopercent } from '../utils/pixelTopercent';
import SwitchSelector from 'react-native-switch-selector';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import IndicatorBell from '../components/IndicatorBell';
import MultiColorProgressBar from '../components/MultiColorProgressBar ';
import {
  BarChart,
  HorizontalBarChart,
  PieChart,
} from 'react-native-gifted-charts';
import { useNavigation } from '@react-navigation/native';

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
  {
    iconName: <Fontisto name={'person'} size={35} color={'#202A44'} />,
    text: 'Labour Data',
    btnText: '100',
  },
  {
    iconName: (
      <FontAwesome5 name={'calendar-minus'} size={35} color={'#202A44'} />
    ),
    text: 'Event Schedule',
    btnText: '5',
  },
  {
    iconName: <FontAwesome5 name={'home'} size={35} color={'#202A44'} />,
    text: 'Drawing Master',
    btnText: '150',
  },
  {
    iconName: <FontAwesome5 name={'torii-gate'} size={35} color={'#202A44'} />,
    text: 'Gate Entry',
    btnText: '150',
  },
  {
    iconName: <FontAwesome5 name={'tasks'} size={35} color={'#202A44'} />,
    text: 'Tasks',
    btnText: '100',
  },
  {
    iconName: <Fontisto name={'persons'} size={35} color={'#202A44'} />,
    text: 'Area Of Concern',
    btnText: '150',
  },
];

const hindranceData = [
  { number: '8', status: 'Approval', days: '66' },
  { number: '5', status: 'Material Issue', days: '27' },
  { number: '1', status: 'Accident', days: '3' },
  { number: '3', status: 'Manpower', days: '10' },
];

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

const stackData = [
  {
    value: 580,
    label: 'Total Project Value',
    topLabelComponent: () => (
      <Text
        style={{
          color: '#FFFFFF',
          fontSize: moderateScale(10),
          fontFamily: 'Geologica-SemiBold',
          right: wp('5.55%'),
        }}>
        580
      </Text>
    ),
  },
  {
    value: 250,
    label: 'Item 2',
    topLabelComponent: () => (
      <Text
        style={{
          color: '#FFFFFF',
          fontSize: moderateScale(10),
          fontFamily: 'Geologica-SemiBold',
          right: wp('5.55%'),
        }}>
        250
      </Text>
    ),
  },
  {
    value: 390,
    label: 'Item 3',
    topLabelComponent: () => (
      <Text
        style={{
          color: '#FFFFFF',
          fontSize: moderateScale(10),
          fontFamily: 'Geologica-SemiBold',
          right: wp('5.55%'),
        }}>
        390
      </Text>
    ),
  },
  {
    value: 410,
    label: 'Item 4',
    topLabelComponent: () => (
      <Text
        style={{
          color: '#FFFFFF',
          fontSize: moderateScale(10),
          fontFamily: 'Geologica-SemiBold',
          right: wp('5.55%'),
        }}>
        410
      </Text>
    ),
  },
  {
    value: 450,
    label: 'Item 5',
    topLabelComponent: () => (
      <Text
        style={{
          color: '#FFFFFF',
          fontSize: moderateScale(10),
          fontFamily: 'Geologica-SemiBold',
          right: wp('5.55%'),
        }}>
        450
      </Text>
    ),
  },
  {
    value: 140,
    label: 'Item 6',
    topLabelComponent: () => (
      <Text
        style={{
          color: '#FFFFFF',
          fontSize: moderateScale(10),
          fontFamily: 'Geologica-SemiBold',
          right: wp('5.55%'),
        }}>
        1400
      </Text>
    ),
  },
];

const pieData = [
  { value: 45, color: '#202A44', text: '45%' },
  { value: 55, color: '#FFBA4D', text: '55%' },
];


const stackData1 = [
  {
    stacks: [
      { value: 1.5, color: '#FFBA4D' },
      { value: 2.6, color: '#007EC7' },
    ],
    label: 'Vaibhav',
  },
  {
    stacks: [

      { value: 1.6, color: '#28B2B3', },
    ],
    label: 'Kuldeep',
  },
  {
    stacks: [
      { value: 0.9, color: '#EC334D' },
      { value: 2.0, color: '#007EC7' },
    ],
    label: 'Nilesh',
  },
  {
    stacks: [

      { value: 0.7, color: '#007EC7', },
    ],
    label: 'Amit',
  },
  {
    stacks: [
      { value: 1, color: '#EC334D' },
      { value: 2.3, color: '#FFBA4D' },

    ],
    label: 'Kanan',
  },
];

const snagsBtn = [
  { label: 'Open: 1' },
  { label: 'Closed: 8' },
  { label: 'Rejected: 0' },
  { label: 'Critical: 3' },
  { label: 'Major: 2' },
  { label: 'Minor: 6' },
];

const inspectionData = [
  { value: 0, label: 'New Check Lists' },
  { value: 0, label: 'Open Check Lists' },
  { value: 0, label: 'Closed Check Lists' },
  { value: 0, label: 'Total Force Closed' },
  { value: 0, label: 'Reject Count' },
  { value: 0, label: 'Average TAT' },
  { value: 0, label: 'Total Triggered' },
  { value: 0, label: 'Total Debit Made' },
];

const summaryData = [
  { value: 580, label: 'Amit' },
  { value: 380, label: 'Amit' },
  { value: 480, label: 'Amit' },
  { value: 180, label: 'Amit' },
  { value: 280, label: 'Amit' },
  { value: 480, label: 'Amit' },
]

const MainDashboardScreen = () => {
  const progress = 1; // Full progress for demonstration
  const navigation = useNavigation();

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
              <View style={{ padding: moderateScale(20) }}>
                <Text style={styles.cardContentHeadingText}>
                  Today's Work-in-Progress
                </Text>
                <View
                  style={{
                    marginTop: hs * 0.027,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 2,
                    }}>
                    <FontAwesome
                      name="circle"
                      size={wp('4.05%')}
                      color={'#007EC7'}
                    />
                    <Text
                      style={{
                        color: '#5A5A5A',
                        fontSize: wp('4.05%'),
                        fontFamily: 'Geologica-Regular',
                      }}>
                      PRW
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 2,
                    }}>
                    <FontAwesome
                      name="circle"
                      size={wp('4.05%')}
                      color={'#FFBA4D'}
                    />
                    <Text
                      style={{
                        color: '#5A5A5A',
                        fontSize: wp('4.05%'),
                        fontFamily: 'Geologica-Regular',
                      }}>
                      Labour Supply
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 2,
                    }}>
                    <FontAwesome
                      name="circle"
                      size={wp('4.05%')}
                      color={'#202A44'}
                    />
                    <Text
                      style={{
                        color: '#5A5A5A',
                        fontSize: wp('4.05%'),
                        fontFamily: 'Geologica-Regular',
                      }}>
                      Miscellaneous
                    </Text>
                  </View>
                </View>
                <View style={{ marginTop: 20 }}>
                  <MultiColorProgressBar progress={progress} />
                </View>
                <View
                  style={{
                    marginTop: 20,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      color: '#202A44',
                      fontSize: 15,
                      lineHeight: 15,
                      fontFamily: 'Geologica-SemiBold',
                    }}>
                    ₹ 483779.56
                  </Text>
                  <Text
                    style={{
                      color: '#202A44',
                      fontSize: 15,
                      lineHeight: 15,
                      fontFamily: 'Geologica-SemiBold',
                    }}>
                    17 Labours
                  </Text>
                </View>
                <View
                  style={{
                    marginTop: 8,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      color: '#8E8E8E',
                      fontSize: 10,
                      lineHeight: 10,
                      fontFamily: 'Geologica-Regular',
                    }}>
                    Planned Value Of Work
                  </Text>
                  <Text
                    style={{
                      color: '#8E8E8E',
                      fontSize: 10,
                      lineHeight: 10,
                      fontFamily: 'Geologica-Regular',
                    }}>
                    Work Force Count
                  </Text>
                </View>
                <View style={{ alignItems: 'center', marginTop: 20 }}>
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#202A44',
                      width: 89,
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 13.5,
                      height: 27,
                    }}
                    onPress={() => navigation.navigate('WorkInProgress')}>
                    <Text
                      style={{
                        color: '#FFFFFF',
                        fontSize: 12,
                        lineHeight: 12,
                        fontFamily: 'Geologica-Regular',
                      }}>
                      View All
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          {/* Schedule Summary */}
          <View style={styles.cardContainer}>
            <View style={styles.cardContent2}>
              <View style={{ padding: moderateScale(20) }}>
                <Text style={styles.cardContentHeadingText}>
                  Schedule Summary
                </Text>
                <View
                  style={{
                    marginTop: 20,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      color: '#202A44',
                      fontSize: wp('4.17%'),
                      lineHeight: 15,
                      fontFamily: 'Geologica-Medium',
                    }}>
                    02 Mar 2023
                  </Text>
                  <Text
                    style={{
                      color: '#202A44',
                      fontSize: wp('4.17%'),
                      lineHeight: 15,
                      fontFamily: 'Geologica-Medium',
                    }}>
                    11 Aug 2024
                  </Text>
                </View>
                <View
                  style={{
                    marginTop: 8,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      color: '#8E8E8E',
                      fontSize: 10,
                      lineHeight: 10,
                      fontFamily: 'Geologica-Regular',
                    }}>
                    Planned Value Of Work
                  </Text>
                  <Text
                    style={{
                      color: '#8E8E8E',
                      fontSize: 10,
                      lineHeight: 10,
                      fontFamily: 'Geologica-Regular',
                    }}>
                    Work Force Count
                  </Text>
                </View>
                <View
                  style={{
                    marginTop: 20,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      color: '#202A44',
                      fontSize: wp('4.17%'),
                      lineHeight: 15,
                      fontFamily: 'Geologica-Medium',
                    }}>
                    02 Mar 2023
                  </Text>
                  <Text
                    style={{
                      color: '#202A44',
                      fontSize: wp('4.17%'),
                      lineHeight: 15,
                      fontFamily: 'Geologica-Medium',
                    }}>
                    11 Aug 2024
                  </Text>
                </View>
                <View
                  style={{
                    marginTop: 8,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      color: '#8E8E8E',
                      fontSize: 10,
                      lineHeight: 10,
                      fontFamily: 'Geologica-Regular',
                    }}>
                    Planned Value Of Work
                  </Text>
                  <Text
                    style={{
                      color: '#8E8E8E',
                      fontSize: 10,
                      lineHeight: 10,
                      fontFamily: 'Geologica-Regular',
                    }}>
                    Work Force Count
                  </Text>
                </View>
                <View
                  style={{
                    marginTop: wp('4.17%'),
                    borderBottomWidth: 1,
                    borderBottomColor: 'lightgray',
                    marginBottom: wp('4.17%'),
                  }}
                />
                <MultiColorProgressBar progress={progress} />
              </View>
            </View>
          </View>
          {/* Total Hindrance */}
          <View style={styles.cardContainer}>
            <View style={styles.cardContent2}>
              <View style={{ padding: moderateScale(20) }}>
                <Text style={styles.cardContentHeadingText}>
                  Total Hindrance : 180
                </Text>
                <View
                  style={{
                    marginTop: 20,
                    gap: 4,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                  }}>
                  {hindranceData.map((item, index) => (
                    <View style={styles.hindranceBox} key={index}>
                      <View style={styles.topBox}>
                        <Text
                          style={{
                            fontSize: 14,
                            color: '#DBDBDB',
                            fontFamily: 'Geologica-SemiBold',
                          }}>
                          {item.number}
                        </Text>
                        <Text
                          style={{
                            fontSize: 12,
                            color: '#DBDBDB',
                            fontFamily: 'Geologica-Regular',
                          }}>
                          {item.status}
                        </Text>
                      </View>
                      <View style={styles.bottomBox}>
                        <Text
                          style={{
                            fontSize: 12,
                            color: '#202A44',
                            fontFamily: 'Geologica-Regular',
                          }}>
                          Days {item.days}
                        </Text>
                      </View>
                    </View>
                  ))}
                </View>
              </View>
            </View>
          </View>
          {/* Work Trend */}
          <View style={styles.cardContainer}>
            <View style={styles.cardContent2}>
              <View style={{ padding: moderateScale(20) }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <Text style={styles.cardContentHeadingText}>Work Trend</Text>
                  <TouchableOpacity style={styles.workTrendBtn}>
                    <FontAwesome5
                      name="calendar-alt"
                      size={wp('5%')}
                      color={'#FFFFFF'}
                    />
                    <Text style={{ color: '#FFFFFF', fontSize: wp('4%') }}>
                      6 Jan 2023{' '}
                    </Text>
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
                    yAxisTextStyle={{
                      color: '#5A5A5A',
                      fontFamily: 'Geologica-SemiBold',
                    }}
                  />
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 2,
                    }}>
                    <FontAwesome
                      name="circle"
                      size={wp('4.05%')}
                      color={'#007EC7'}
                    />
                    <Text
                      style={{
                        color: '#5A5A5A',
                        fontSize: wp('4.05%'),
                        fontFamily: 'Geologica-Regular',
                      }}>
                      In House
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 2,
                    }}>
                    <FontAwesome
                      name="circle"
                      size={wp('4.05%')}
                      color={'#FFBA4D'}
                    />
                    <Text
                      style={{
                        color: '#5A5A5A',
                        fontSize: wp('4.05%'),
                        fontFamily: 'Geologica-Regular',
                      }}>
                      PRW
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 2,
                    }}>
                    <FontAwesome
                      name="circle"
                      size={wp('4.05%')}
                      color={'#FF4560'}
                    />
                    <Text
                      style={{
                        color: '#5A5A5A',
                        fontSize: wp('4.05%'),
                        fontFamily: 'Geologica-Regular',
                      }}>
                      BCWP
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 2,
                    }}>
                    <FontAwesome
                      name="circle"
                      size={wp('4.05%')}
                      color={'#202A44'}
                    />
                    <Text
                      style={{
                        color: '#5A5A5A',
                        fontSize: wp('4.05%'),
                        fontFamily: 'Geologica-Regular',
                      }}>
                      MISC
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          {/* Work Progress Summary */}
          <View style={styles.cardContainer}>
            <View style={styles.cardContent2}>
              <View style={{ padding: moderateScale(20) }}>
                <Text style={styles.cardContentHeadingText}>
                  Work Progress Summary
                </Text>
                <View
                  style={[
                    styles.chartContainer,
                    { flexDirection: 'row', alignItems: 'center', gap: 10 },
                  ]}>
                  <PieChart
                    donut
                    data={pieData}
                    textColor="black"
                    radius={wp('20.44%')}
                    innerRadius={60}
                  />
                  <View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 2,
                      }}>
                      <FontAwesome
                        name="circle"
                        size={wp('4.05%')}
                        color={'#202A44'}
                      />
                      <Text
                        style={{
                          color: '#5A5A5A',
                          fontSize: wp('4.05%'),
                          fontFamily: 'Geologica-Regular',
                        }}>
                        Balance 45%
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 2,
                      }}>
                      <FontAwesome
                        name="circle"
                        size={wp('4.05%')}
                        color={'#FFBA4D'}
                      />
                      <Text
                        style={{
                          color: '#5A5A5A',
                          fontSize: wp('4.05%'),
                          fontFamily: 'Geologica-Regular',
                        }}>
                        Work Done 55%
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          {/* Work Summary */}
          <View style={styles.cardContainer}>
            <View style={styles.cardContent2}>
              <View style={{ padding: moderateScale(20) }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <Text style={styles.cardContentHeadingText}>
                    Work Summary
                  </Text>
                </View>
                <View
                  style={{
                    marginTop: 20,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      color: '#202A44',
                      fontSize: wp('4.17%'),
                      lineHeight: 15,
                      fontFamily: 'Geologica-Medium',
                    }}>
                    573.63
                  </Text>
                  <Text
                    style={{
                      color: '#202A44',
                      fontSize: wp('4.17%'),
                      lineHeight: 15,
                      fontFamily: 'Geologica-Medium',
                    }}>
                    735.19
                  </Text>
                </View>
                <View
                  style={{
                    marginTop: 8,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      color: '#8E8E8E',
                      fontSize: wp('2.78%'),
                      lineHeight: 10,
                      fontFamily: 'Geologica-Regular',
                    }}>
                    Total Project Value
                  </Text>
                  <Text
                    style={{
                      color: '#8E8E8E',
                      fontSize: wp('2.78%'),
                      lineHeight: 10,
                      fontFamily: 'Geologica-Regular',
                    }}>
                    Work Awarded
                  </Text>
                </View>
                <View
                  style={{
                    marginTop: 20,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      color: '#202A44',
                      fontSize: wp('4.17%'),
                      lineHeight: 15,
                      fontFamily: 'Geologica-Medium',
                    }}>
                    234.0
                  </Text>
                  <Text
                    style={{
                      color: '#202A44',
                      fontSize: wp('4.17%'),
                      lineHeight: 15,
                      fontFamily: 'Geologica-Medium',
                    }}>
                    100
                  </Text>
                </View>
                <View
                  style={{
                    marginTop: 8,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      color: '#8E8E8E',
                      fontSize: wp('2.78%'),
                      lineHeight: 10,
                      fontFamily: 'Geologica-Regular',
                    }}>
                    PO Created
                  </Text>
                  <Text
                    style={{
                      color: '#8E8E8E',
                      fontSize: wp('2.78%'),
                      lineHeight: 10,
                      fontFamily: 'Geologica-Regular',
                    }}>
                    Total Extra Work
                  </Text>
                </View>
                <View
                  style={{
                    marginTop: wp('4.17%'),
                    borderBottomWidth: 1,
                    borderBottomColor: 'lightgray',
                    marginBottom: wp('4.17%'),
                  }}
                />
                <View style={[styles.chartContainer]}>
                  <BarChart
                    frontColor={'#202A44'}
                    horizontal
                    data={stackData}
                    barWidth={15}
                    noOfSections={6}
                    width={wp('65.67%')}
                    stepValue={100}
                    spacing={20}
                    initialSpacing={0}
                    showLine={false}
                    shiftX={-20}
                    shiftY={-30}
                    xAxisLabelTextStyle={{
                      color: '#202A44',
                      fontFamily: 'Geologica-Regular',
                    }}
                    yAxisTextStyle={{
                      color: '#000000',
                      fontFamily: 'Geologica-Regular',
                    }}
                  />
                </View>
              </View>
            </View>
          </View>
          {/* Top 5 Assignee of Snags */}
          <View style={styles.cardContainer}>
            <View style={styles.cardContent2}>
              <View style={{ padding: moderateScale(20) }}>
                <Text style={styles.cardContentHeadingText}>
                  Top 5 Assignee of Snags
                </Text>
                <View
                  style={{
                    marginTop: hs * 0.027,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 2,
                    }}>
                    <FontAwesome
                      name="circle"
                      size={wp('4.05%')}
                      color={'#FFBA4D'}
                    />
                    <Text
                      style={{
                        color: '#5A5A5A',
                        fontSize: wp('3.33%'),
                        fontFamily: 'Geologica-Regular',
                      }}>
                      Workmenship
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 2,
                    }}>
                    <FontAwesome
                      name="circle"
                      size={wp('4.05%')}
                      color={'#007EC7'}
                    />
                    <Text
                      style={{
                        color: '#5A5A5A',
                        fontSize: wp('3.33%'),
                        fontFamily: 'Geologica-Regular',
                      }}>
                      Workmanship
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 2,
                    }}>
                    <FontAwesome
                      name="circle"
                      size={wp('4.05%')}
                      color={'#202A44'}
                    />
                    <Text
                      style={{
                        color: '#5A5A5A',
                        fontSize: wp('3.33%'),
                        fontFamily: 'Geologica-Regular',
                      }}>
                      Quality
                    </Text>
                  </View>
                </View>

                <View style={{ marginTop: 20 }}>
                  <MultiColorProgressBar progress={progress} />
                </View>

                <View
                  style={{
                    marginTop: wp('4.17%'),
                    borderBottomWidth: 1,
                    borderBottomColor: 'lightgray',
                    marginBottom: wp('4.17%'),
                  }}
                />
                <View style={[styles.chartContainer,]}>
                  <BarChart
                    horizontal
                    width={wp('65.67%')}
                    stepValue={1}

                    noOfSections={6}
                    stackData={stackData1}
                    barWidth={15}
                    spacing={20}

                    shiftX={-15}
                    shiftY={-30}
                    xAxisLabelTextStyle={{
                      color: '#202A44',
                      fontFamily: 'Geologica-Regular',
                    }}
                    yAxisTextStyle={{
                      color: '#000000',
                      fontFamily: 'Geologica-Regular',
                    }}
                  />
                </View>
                <View
                  style={{
                    // marginTop: wp('4.17%'),
                    borderBottomWidth: 1,
                    borderBottomColor: 'lightgray',
                    marginBottom: wp('4.17%'),
                  }}
                />
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                  {snagsBtn.map((item, index) => (
                    <TouchableOpacity style={styles.snagBtn} key={index}>
                      <Text style={styles.snagBtnText}>{item.label}</Text>
                    </TouchableOpacity>
                  ))}

                </View>
              </View>
            </View>
          </View>
          {/* Inspection Summary */}
          <View style={styles.cardContainer}>
            <View style={styles.cardContent2}>
              <View style={{ padding: moderateScale(20) }}>
                <Text style={styles.cardContentHeadingText}>Inspection Summary</Text>

                <View style={styles.inspectionContainer}>



                  {inspectionData.map((item, index) => (
                    <View key={index} style={styles.inspectionBox}>
                      <Text style={styles.inspectionBoxValue}>{item.value}</Text>
                      <Text style={styles.inspectionBoxText}>{item.label}</Text>
                    </View>
                  ))}

                </View>

              </View>
            </View>
          </View>
          {/* Progress Count Summary  */}
          <View style={styles.cardContainer}>
            <View style={styles.cardContent2}>
              <View style={{ padding: moderateScale(20) }}>
                <View
                  style={{
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    // alignItems: 'center',
                    // rowGap: 20
                  }}>
                  <Text style={styles.cardContentHeadingText}>Progress Count Summary</Text>
                  <View style={{ marginTop: 20, flexDirection: 'row', columnGap: 10 }}>
                    <View>
                      <TouchableOpacity style={styles.workTrendBtn}>
                        <FontAwesome5
                          name="calendar-alt"
                          size={wp('5%')}
                          color={'#FFFFFF'}
                        />
                        <Text style={{ color: '#FFFFFF', fontSize: wp('4%') }}>
                          6 Jan 2023{' '}
                        </Text>
                      </TouchableOpacity>
                      <Text style={{ color: '#8E8E8E' }}>From</Text>
                    </View>
                    <View>
                      <TouchableOpacity style={styles.workTrendBtn}>
                        <FontAwesome5
                          name="calendar-alt"
                          size={wp('5%')}
                          color={'#FFFFFF'}
                        />
                        <Text style={{ color: '#FFFFFF', fontSize: wp('4%') }}>
                          6 Jan 2023{' '}
                        </Text>
                      </TouchableOpacity>
                      <Text style={{ color: '#8E8E8E' }}>To</Text>
                    </View>
                  </View>
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
                    yAxisTextStyle={{
                      color: '#5A5A5A',
                      fontFamily: 'Geologica-SemiBold',
                    }}
                  />
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 2,
                    }}>
                    <FontAwesome
                      name="circle"
                      size={wp('4.05%')}
                      color={'#007EC7'}
                    />
                    <Text
                      style={{
                        color: '#5A5A5A',
                        fontSize: wp('4.05%'),
                        fontFamily: 'Geologica-Regular',
                      }}>
                      In House
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 2,
                    }}>
                    <FontAwesome
                      name="circle"
                      size={wp('4.05%')}
                      color={'#FFBA4D'}
                    />
                    <Text
                      style={{
                        color: '#5A5A5A',
                        fontSize: wp('4.05%'),
                        fontFamily: 'Geologica-Regular',
                      }}>
                      PRW
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 2,
                    }}>
                    <FontAwesome
                      name="circle"
                      size={wp('4.05%')}
                      color={'#FF4560'}
                    />
                    <Text
                      style={{
                        color: '#5A5A5A',
                        fontSize: wp('4.05%'),
                        fontFamily: 'Geologica-Regular',
                      }}>
                      BCWP
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 2,
                    }}>
                    <FontAwesome
                      name="circle"
                      size={wp('4.05%')}
                      color={'#202A44'}
                    />
                    <Text
                      style={{
                        color: '#5A5A5A',
                        fontSize: wp('4.05%'),
                        fontFamily: 'Geologica-Regular',
                      }}>
                      MISC
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

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
    fontFamily: 'Geologica-Bold',
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
    width: width / 2 - moderateScale(30),
    height: 135,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    marginRight: 8,
    elevation: 5
  },
  cardContent: {
    padding: moderateScale(20),
    gap: moderateScale(10),
  },
  cardBtn: {
    width: 55.81,
    height: 21,
    borderRadius: 10.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFBA4D',
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
    paddingHorizontal: horizontalScale(25),
    elevation: 5,
  },
  cardContent2: {
    height: 'auto',
    width: '100%',
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
  },
  cardContentHeadingText: {
    fontSize: wp('4.16%'),
    lineHeight: wp('5.55%'),
    fontFamily: 'Geologica-Bold',
    color: '#202A44',
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
    borderTopRightRadius: 10,
  },
  bottomBox: {
    width: '100%',
    flexBasis: '30%',
    backgroundColor: '#F6F8FB',
    paddingHorizontal: 8,
    justifyContent: 'center',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  workTrendBtn: {
    width: wp('36.8%'),
    height: hp('5%'),
    borderRadius: moderateScale(8),
    backgroundColor: '#202A44',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingHorizontal: 10
  },
  chartContainer: {
    marginTop: moderateScale(20),
    paddingVertical: hp('1.5%'),
  },
  snagBtn: {
    backgroundColor: '#202A44',
    borderRadius: moderateScale(15.5),
    height: hp('3.75%'),
    width: wp('20.32%'),
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: moderateScale(6),
    paddingHorizontal: moderateScale(9),
    margin: 1
  },
  snagBtnText: {
    color: '#FFFFFF',
    fontFamily: 'Geologica-Regular',
    fontSize: wp('2.8%'),
  },
  inspectionContainer: {
    marginTop: 10,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  inspectionBox: {
    marginHorizontal: 6,
    marginVertical: 6,
    width: wp('24.17%'),
    height: 'auto',
  },
  inspectionBoxValue: {
    color: '#202A44',
    fontSize: wp('3.9%'),
    fontFamily: 'Geologica-SemiBold'
  },
  inspectionBoxText: {
    color: '#8E8E8E',
    fontSize: wp('2.8%'),
    fontFamily: 'Geologica-Regular'
  },
});
