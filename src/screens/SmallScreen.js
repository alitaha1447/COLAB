import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { horizontalScale, moderateScale } from '../utils/responsivMetrics';


const SmallScreen = ({ onClose }) => {

  const smallScreenData = [
    { label: 'Issue' }, { label: 'Task' }, { label: 'Hindrance' }, { label: 'Areas Of Concern' }, { label: 'New Progress' }, { label: 'Inspection Checklist' },
  ]
  return (
    <View style={styles.container}>
      <View style={styles.cont2}>

        {
          smallScreenData.map((item, index) => (
            <TouchableOpacity style={styles.childCont2} key={index}>
              <Text style={styles.childCont2Text}>{item.label}</Text>
            </TouchableOpacity>
          ))
        }

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 'auto',
    position: 'absolute',
    bottom: 0,
    padding: 20,
    alignItems: 'center',
    marginBottom: horizontalScale(110),
  },
  cont2: {
    width: wp('51.4%'),
    height: 'auto',
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    padding: 20,
    elevation: 5,
    alignItems: 'center',
  },
  childCont2: {
    width: wp('42.5%'),
    height: hp('5.06%'),
    borderRadius: wp('7%'),
    backgroundColor: '#202A44',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hp('1.5%'),
  },
  childCont2Text: {
    fontSize: wp('4.17%'),
    fontWeight: 'Geologica-Regular',
    color: '#FFFFFF'
  },
});

export default SmallScreen;
