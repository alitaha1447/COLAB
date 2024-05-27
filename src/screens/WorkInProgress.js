import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { horizontalScale, verticalScale, moderateScale, } from '../utils/responsivMetrics';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from 'react-native-responsive-screen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MultiColorProgressBar from '../components/MultiColorProgressBar ';

const { width, height } = Dimensions.get('screen');
const ws = width;
const hs = height;

const WorkInProgress = () => {
  const progress = 1; // Full progress for demonstration

 

  return (
    <View style={styles.workContainer}>
      <ScrollView style={{ padding: wp('5.55%') }}>
        <View style={styles.box}>
          <View style={styles.boxContent}>
            <View>
              <Text style={styles.boxContentMain}>9 June 2023</Text>
              <Text style={styles.boxContentSecondary}>Start Date</Text>
            </View>

            <View>
              <Text style={styles.boxContentMain}>15 June 2023</Text>
              <Text style={styles.boxContentSecondary}>
                Planned Finish Date
              </Text>
            </View>
          </View>

          <View
            style={{
              paddingTop: wp('5.55%'),
              borderBottomWidth: 1,
              borderBottomColor: 'lightgray',
            }}
          />

          <View style={[styles.boxContent, { marginTop: 10 }]}>
            <View>
              <Text style={styles.boxContentMain}>I-06/TERRACE/NA</Text>
              <Text style={styles.boxContentSecondary}>Location</Text>
            </View>

            <View>
              <Text style={styles.boxContentMain}>SLAB-RCC</Text>
              <Text style={styles.boxContentSecondary}>Work</Text>
            </View>
          </View>
          <View style={[styles.boxContent, { marginTop: 10 }]}>
            <View>
              <Text style={styles.boxContentMain}>PWR</Text>
              <Text style={styles.boxContentSecondary}>Labour  Type</Text>
            </View>
            <View>
              <Text style={[styles.boxContentMain]}>6</Text>
              <Text style={[styles.boxContentSecondary,]}>Total Labour</Text>
            </View>
          </View>
          <View style={[styles.boxContent, { marginTop: 10 }]}>
            <View>
              <Text style={styles.boxContentMain}>100</Text>
              <Text style={styles.boxContentSecondary}>Quantities</Text>
            </View>
            <View>
              <Text style={styles.boxContentMain}>HA BRICKS</Text>
              <Text style={styles.boxContentSecondary}>Contractor Name</Text>
            </View>
          </View>

          <View
            style={{
              paddingTop: wp('5.55%'),
              borderBottomWidth: 1,
              borderBottomColor: 'lightgray',
            }}
          />

          <View style={{ marginTop: hs * 0.027, flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 2 }}>
              <FontAwesome name='circle' size={wp('3.61%')} color={'#007EC7'} />
              <Text style={{ color: '#5A5A5A', fontSize: wp('3.61%'), fontFamily: 'Geologica-Regular' }}>PRW</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 2 }}>
              <FontAwesome name='circle' size={wp('3.61%')} color={'#FFBA4D'} />
              <Text style={{ color: '#5A5A5A', fontSize: wp('3.61%'), fontFamily: 'Geologica-Regular' }}>Labour Supply</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 2 }}>
              <FontAwesome name='circle' size={wp('3.61%')} color={'#202A44'} />
              <Text style={{ color: '#5A5A5A', fontSize: wp('3.61%'), fontFamily: 'Geologica-Regular' }}>Miscellaneous</Text>
            </View>
          </View>

          <View style={{ marginTop: wp('5.55%') }}>
            <MultiColorProgressBar progress={progress} />
          </View>

        </View>
      {/* Box-2 */}
      <View style={[styles.box,{marginTop:wp('5.55%')}]}>
          <View style={styles.boxContent}>
            <View>
              <Text style={styles.boxContentMain}>9 June 2023</Text>
              <Text style={styles.boxContentSecondary}>Start Date</Text>
            </View>

            <View>
              <Text style={styles.boxContentMain}>15 June 2023</Text>
              <Text style={styles.boxContentSecondary}>
                Planned Finish Date
              </Text>
            </View>
          </View>

          <View
            style={{
              paddingTop: wp('5.55%'),
              borderBottomWidth: 1,
              borderBottomColor: 'lightgray',
            }}
          />

          <View style={[styles.boxContent, { marginTop: 10 }]}>
            <View>
              <Text style={styles.boxContentMain}>I-06/TERRACE/NA</Text>
              <Text style={styles.boxContentSecondary}>Location</Text>
            </View>

            <View>
              <Text style={styles.boxContentMain}>SLAB-RCC</Text>
              <Text style={styles.boxContentSecondary}>Work</Text>
            </View>
          </View>
          <View style={[styles.boxContent, { marginTop: 10 }]}>
            <View>
              <Text style={styles.boxContentMain}>PWR</Text>
              <Text style={styles.boxContentSecondary}>Labour  Type</Text>
            </View>
            <View>
              <Text style={[styles.boxContentMain]}>6</Text>
              <Text style={[styles.boxContentSecondary,]}>Total Labour</Text>
            </View>
          </View>
          <View style={[styles.boxContent, { marginTop: 10 }]}>
            <View>
              <Text style={styles.boxContentMain}>100</Text>
              <Text style={styles.boxContentSecondary}>Quantities</Text>
            </View>
            <View>
              <Text style={styles.boxContentMain}>HA BRICKS</Text>
              <Text style={styles.boxContentSecondary}>Contractor Name</Text>
            </View>
          </View>

          <View
            style={{
              paddingTop: wp('5.55%'),
              borderBottomWidth: 1,
              borderBottomColor: 'lightgray',
            }}
          />

          <View style={{ marginTop: hs * 0.027, flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 2 }}>
              <FontAwesome name='circle' size={wp('3.61%')} color={'#007EC7'} />
              <Text style={{ color: '#5A5A5A', fontSize: wp('3.61%'), fontFamily: 'Geologica-Regular' }}>PRW</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 2 }}>
              <FontAwesome name='circle' size={wp('3.61%')} color={'#FFBA4D'} />
              <Text style={{ color: '#5A5A5A', fontSize: wp('3.61%'), fontFamily: 'Geologica-Regular' }}>Labour Supply</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 2 }}>
              <FontAwesome name='circle' size={wp('3.61%')} color={'#202A44'} />
              <Text style={{ color: '#5A5A5A', fontSize: wp('3.61%'), fontFamily: 'Geologica-Regular' }}>Miscellaneous</Text>
            </View>
          </View>

          <View style={{ marginTop: wp('5.55%') }}>
            <MultiColorProgressBar progress={progress} />
          </View>

        </View>
      </ScrollView>
    </View>
  );
};

export default WorkInProgress;
const styles = StyleSheet.create({
  workContainer: {
    flex: 1,
    backgroundColor: '#F6F8FB',
    width: '100%',
  },
  box: {
    height: 'auto',
    width: '100%',
    borderRadius: wp('3.33%'),
    backgroundColor: '#FFFFFF',
    padding: wp('2.8%'),
  },
  boxContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  boxContentMain: {
    color: '#202A44',
    fontSize: wp('3.61%'),
    fontFamily: 'Geologica-Medium',
    textAlign: 'left',
  },
  boxContentSecondary: {
    color: '#8E8E8E',
    fontSize: wp('2.5%'),
    fontFamily: 'Geologica-Regular',
    textAlign: 'left',
  },
});
