import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { moderateScale } from '../utils/responsivMetrics';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const { width, height } = Dimensions.get('window');

const EditProfileScreen = () => {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.profilePicChange}>
          <Image source={require('../assets/Ellipse2.png')} style={styles.profilePic} />
          <TouchableOpacity style={styles.camera}>
            <FontAwesome5 name='camera' size={wp('3.9%')} />
          </TouchableOpacity>
        </View>
        <View style={styles.profileData}>
          <View style={styles.inputContainer}>

            <Text style={styles.inputLabel}>Date of Birth</Text>
            <View style={styles.inputWithIcon}>
              <TextInput
                style={[styles.input, { flex: 1 }]}
                placeholder="Enter Date of Birth"
                placeholderTextColor={'#8E8E8E'}
                keyboardType="numeric"
              />
              <TouchableOpacity style={styles.icon}>
                <FontAwesome5 name="calendar-alt" size={moderateScale(20)} color="#202A44" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Corporate Address</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Corporate Address"
              placeholderTextColor={'#8E8E8E'}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Emergency Contact Person</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Person Name"
              placeholderTextColor={'#8E8E8E'}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Emergency Contact Mobile Number</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Mobile Number"
              keyboardType="phone-pad"
              placeholderTextColor={'#8E8E8E'}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Emergency Alternate Mobile Number</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Mobile Number"
              keyboardType="phone-pad"
              placeholderTextColor={'#8E8E8E'}
            />
          </View>
        </View>
        <View style={styles.editBottomBtnContainer}>
          <TouchableOpacity style={[styles.editBottomBtn, { backgroundColor: '#202A44' }]}>
            <Text style={styles.editBottomBtnText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.editBottomBtn, { backgroundColor: '#FFBA4D' }]}>
            <Text style={styles.editBottomBtnText}>Save</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default EditProfileScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F6F8FB',
    padding: wp('5.55%'),
  },
  profilePicChange: {
    height: height / 5,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  profilePic: {
    width: wp('33%'),
    height: hp('17%'),
    borderRadius: 100,
    backgroundColor: 'orange'
  },
  camera: {
    backgroundColor: '#202A44',
    position: 'absolute',
    bottom: moderateScale(10),
    right: moderateScale(140),
    borderRadius: 100,
    height: moderateScale(34),
    width: moderateScale(34),
    alignItems: 'center',
    justifyContent: 'center'
  },
  profileData: {
    backgroundColor: '#FFFFFF',
    marginTop: wp('5.55%'),
    padding: wp('5.55%'),
    borderRadius: 10,
    elevation: 5
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputWithIcon: {
    flexDirection: 'row',
    // alignItems: 'center',
    backgroundColor: '#F6F8FB',
    borderRadius: 5,
    // paddingHorizontal: 10,
  },
  icon: {
    justifyContent: 'center',
    paddingRight: moderateScale(10),
  },
  inputLabel: {
    fontSize: wp('3.9%'),
    color: '#202A44',
    marginBottom: 5,
    fontFamily: 'Geologica-Bold'
  },
  input: {
    height: moderateScale(40),
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#F6F8FB',
    color: '#8E8E8E',
  },
  editBottomBtnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: moderateScale(20),
  },
  editBottomBtn: {
    width: wp('42.67%'),
    height: hp('5.8%'),
    borderRadius: wp('7.4%'),
    alignItems: 'center',
    justifyContent: 'center'
  },
  editBottomBtnText: {
    color: '#FFFFFF',
    fontSize: wp('4%'),
    fontFamily: 'Geologica-Medium'
  }
});
