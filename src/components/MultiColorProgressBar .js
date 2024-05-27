import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { horizontalScale, verticalScale, moderateScale, } from '../utils/responsivMetrics';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from 'react-native-responsive-screen';

const { width } = Dimensions.get('screen');

const MultiColorProgressBar = ({ progress }) => {
  // Define the sections with their colors and widths
  const progressSections = [
    { color: '#FFBA4D', percentage: 0.45 },
    { color: '#007EC7', percentage: 0.275 },
    { color: '#202A44', percentage: 0.275 },
  ];

  return (
    <View style={styles.progressBar}>
      {progressSections.map((section, index) => (
         <View
         key={index}
         style={[
           styles.progressSection,
           {
             backgroundColor: section.color,
             // Calculate the proportional width of each section based on the overall progress
             width: wp(section.percentage * 100 * progress), // Converts percentage to width in percentage terms of the screen width, adjusted by progress
           },
         ]}
       />
      ))}
    </View>
  );
};

export default MultiColorProgressBar;

const styles = StyleSheet.create({
  progressBar: {
    flexDirection: 'row',
    height: moderateScale(18),
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#EBEDF2', // Background color for the progress bar
  },
  progressSection: {
    // height: '100%',
  },
});
