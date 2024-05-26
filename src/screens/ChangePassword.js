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

const ChangePassword = () => {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={styles.container}>

        <View style={styles.changePasswordData}>
          <View style={styles.inputContainer}>

            <Text style={styles.inputLabel}>Current Password</Text>
            <View style={styles.inputWithIcon}>
              <TextInput
                style={[styles.input,]}
                placeholder="Enter Current Password"
                placeholderTextColor={'#8E8E8E'}
                keyboardType="text"
              />

            </View>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>New Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter New Password"
              placeholderTextColor={'#8E8E8E'}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Confirm Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Confirm Password"
              placeholderTextColor={'#8E8E8E'}
            />
          </View>


        </View>
        <View style={styles.editBottomBtnContainer}>
          <TouchableOpacity style={[styles.editBottomBtn, { backgroundColor: '#202A44' }]}>
            <Text style={styles.editBottomBtnText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.editBottomBtn, { backgroundColor: '#FFBA4D' }]}>
            <Text style={styles.editBottomBtnText}>Update</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default ChangePassword;
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F6F8FB',
    padding: wp('5.55%'),
  },
  changePasswordData: {
    backgroundColor: '#FFFFFF',
    marginTop: wp('5.55%'),
    padding: wp('5.55%'),
    borderRadius: 10,
    elevation: 5
  },
  inputContainer: {
    marginBottom: 20,
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
    marginTop: moderateScale(40),
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
