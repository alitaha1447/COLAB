import React, { useEffect, useState } from 'react'
import { View, Image, Text, StyleSheet, ScrollView, TouchableOpacity, Button, Dimensions } from 'react-native';
import { moderateScale } from '../../utils/responsivMetrics';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import Modal from "react-native-modal";

const { width, height } = Dimensions.get('window')

const ProfileScreen = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  const profileData = [
    { key: '01 Jan 2001', value: 'Date Of Birth' },
    { key: 'P - 1602, JMD gardens, Sohna road', value: 'Corporate Address' },
    { key: 'The Lake Admin', value: 'Emergency Contact Person' },
    { key: '8329943901', value: 'Emergency Contact Mobile Number' },
    { key: '7048225698', value: 'Emergency Alternate Mobile Number' },
  ]

  useEffect(() => { console.log(isModalVisible) }, [isModalVisible]);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);

  };

  <Modal
    isVisible={isModalVisible}
    coverScreen={true}
    hasBackdrop={false}
    style={styles.fullScreenModal}
  >
    <View style={styles.modalContent}>
      <Text>Hello!</Text>
      <Button title="Hide modal" onPress={toggleModal} />
    </View>
  </Modal>


  return (
    <ScrollView style={styles.scrollViewStyle}>
      <View style={styles.profileContainer}>
        <View style={styles.profile}>
          <View style={{ flexDirection: 'row', gap: 10 }}>
            <Image source={require('../../assets/ProfilePic.png')} style={styles.logo} />
            <View>
              <Text style={styles.headingText}>Hi, The Lake Admin</Text>
              <Text style={styles.subheadingText}>Last Sync - 6 Jan 2023</Text>
            </View>
          </View>
          <View style={styles.profileBtnContainer}>
            <TouchableOpacity style={styles.profileBtn} onPress={() => navigation.navigate('Edit Profile')}>
              <Text style={styles.profileBtnText}>Edit Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.profileBtn} >
              <Text style={styles.profileBtnText}>Switch Project</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/*  */}
        <View style={styles.profile} >

          {profileData.map((data, index) => (
            <View style={{ marginBottom: index === profileData.length - 1 ? 0 : hp('2.9%') }} key={index}>
              <Text style={styles.keyText}>{data.key}</Text>
              <Text style={styles.valueText}>{data.value}</Text>
            </View>
          ))}

        </View>
        {/* Modal */}
        <Modal
          isVisible={isModalVisible}
          // backdropColor="transparent"  // Ensures the backdrop is transparent
          onSwipeComplete={() => setModalVisible(false)}  // Handles the swipe to close action
          swipeDirection="down"  // Enable swiping down to close the modal

          animationIn="slideInUp"
          animationOut="slideOutDown"
          style={styles.fullScreenModal}

        >
          <View style={styles.modalContent}>
            <View style={styles.grabberContainer}>
              <View style={styles.grabber} />
            </View>

            <View style={styles.modalContainer}>
              <Text style={styles.modalContainerText}>Log Out</Text>
              <Text style={styles.modalContainerText2}>Are you sure want to log out account
                ~thelakesuperadmin?</Text>
              <View style={[styles.profilBottomBtnContainer, { marginTop: hp('2.9%') }]}>
                <TouchableOpacity style={[styles.profilBottomBtn, { backgroundColor: '#EBEDF2' }]} onPress={toggleModal}>
                  <Text style={[styles.profilBottomBtnText, { color: '#202A44' }]}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.profilBottomBtn, { backgroundColor: '#202A44' }]} >
                  <Text style={[styles.profilBottomBtnText, { color: '#FFFFFF' }]}>Log Out</Text>
                </TouchableOpacity>
              </View>

            </View>

          </View>
        </Modal>
        {/* Modal */}

        <View style={styles.profilBottomBtnContainer}>
          <TouchableOpacity style={styles.profilBottomBtn} onPress={toggleModal}>
            <Text style={styles.profilBottomBtnText}>Log Out</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.profilBottomBtn} onPress={() => navigation.navigate('Change Password')}>
            <Text style={styles.profilBottomBtnText}>Change Password</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

export default ProfileScreen;
const styles = StyleSheet.create({
  scrollViewStyle: {
    flex: 1,
    backgroundColor: '#F6F8FB', // Set the background color for ScrollView
  },
  profileContainer: {

    backgroundColor: '#F6F8FB',
    padding: wp('5.55%'),
  },
  profile: {
    width: '100%',
    height: 'auto',
    // height: hp('23.8%'),
    borderRadius: wp('2.5%'),
    backgroundColor: '#FFFFFF',
    paddingVertical: hp('2.9%'),
    paddingHorizontal: wp('3.55%'),
    marginBottom: hp('2.9%'),
  },
  logo: {
    backgroundColor: '#FFBA4D',
    height: wp('16.67%'),
    width: wp('16.67%'),
    borderRadius: wp('9.33%'),
  },
  headingText: {
    color: '#202A44',
    fontSize: wp('5.55%'),
    fontFamily: 'Geologica-Bold',
  },
  subheadingText: {
    color: '#7E7E7E',
    fontSize: wp('3.88%'),
    fontFamily: 'Geologica-Regular',
  },
  profileBtnContainer: {
    marginTop: hp('3.33%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  profileBtn: {
    backgroundColor: '#202A44',
    height: 33,
    width: wp('39%'),
    borderRadius: wp('5.55%'),
    alignItems: 'center',
    justifyContent: 'center'
  },
  profileBtnText: {
    color: '#FFFFFF',
    fontSize: wp('3.8%'),
    fontFamily: 'Geologica-Regular'
  },
  keyText: {
    color: '#202A44',
    fontSize: wp('3.9%'),
    fontFamily: 'Geologica-SemiBold'
  },
  valueText: {
    color: '#8E8E8E',
    fontSize: wp('3.05%'),
    fontFamily: 'Geologica-Regular'
  },
  profilBottomBtnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  profilBottomBtn: {
    backgroundColor: '#EBEDF2',
    width: wp('42.67%'),
    height: hp('5.8%'),
    borderRadius: wp('7.4%'),
    alignItems: 'center',
    justifyContent: 'center'
  },
  profilBottomBtnText: {
    color: '#202A44',
    fontSize: wp('4%'),
    fontFamily: 'Geologica-Medium'
  },
  fullScreenModal: {
    margin: 0,  // Removes any default margin which might prevent the modal from fully expanding
    justifyContent: 'flex-end',
    // alignItems: 'center',
    width: '100%',  // Ensures the modal takes up the full width
    height: '100%'  // Ensures the modal takes up the full height
  },
  modalContent: {
    width: '100%',
    height: hp('30.6%'),
    backgroundColor: '#FFFFFF',  // Example background color, can be adjusted as needed
    borderTopLeftRadius: wp('10%'),
    borderTopRightRadius: wp('10%'),
    elevation: 5
  },
  grabberContainer: {
    width: '100%', // Ensures the container spans the full width of the modal
    alignItems: 'center', // Centers the grabber horizontally
    paddingVertical: 10, // Provides padding around the grabber
  },
  grabber: {
    width: 40, // Width of the grabber
    height: 5, // Height of the grabber
    backgroundColor: '#ccc', // Light grey color for the grabber
    borderRadius: 2.5, // Fully rounded ends
  },
  modalContainer: {
    // backgroundColor: 'red',
    height: '100%',
    padding: wp('5.55%'),
  },
  modalContainerText: {
    color: '#202A44',
    fontSize: wp('5%'),
    fontFamily: 'Geologica-Bold'
  },
  modalContainerText2: {
    color: '#8E8E8E',
    marginTop: hp('2.9%'),
    width: wp('87.5%'),
    fontSize: wp('4.17%'),
    fontFamily: 'Geologica-Medium',
    lineHeight: hp('3.03%'),
  },

});