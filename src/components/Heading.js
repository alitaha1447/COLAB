import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

const Heading = () => {

  const padding = wp('5.56%');

  return (
    <View style={[styles.upwardContainer, { padding }]}>
      <View style={styles.rowContainer}>
        <View>
          <Text style={styles.headingText}>Hi, The Lake Admin</Text>
          <Text style={styles.subheadingText}>Last Sync - 6 Jan 2023</Text>
        </View>
        <Image source={require('../assets/ProfilePic.png')} style={styles.logo} />
      </View>
    </View>
  );
};

export default Heading;

const styles = StyleSheet.create({
  upwardContainer: {
    width: '100%',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headingText: {
    color: '#202A44',
    fontSize: wp('6.67%'),
    fontFamily: 'Geologica-Bold',
  },
  subheadingText: {
    color: '#7E7E7E',
    fontSize: wp('4.17%'),
    fontFamily: 'Geologica-Regular',
    // marginTop: wp('1.39%'), 
  },
  logo: {
    backgroundColor: '#FFBA4D',
    height: wp('16.67%'),
    width: wp('16.67%'),
    borderRadius: wp('8.33%'),
  },
});
