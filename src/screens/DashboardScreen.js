import { PixelRatio, View, Text, TextInput, StyleSheet, Dimensions, Image, StatusBar, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';;
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native';




const { width, height } = Dimensions.get('screen');
const ws = width;
const hs = height;
console.log(`widthScreen : ${ws}`);
console.log(`heightScreen : ${hs}`);

const data = [
  { value: 100, label: 'PRW' },
  { value: 200, label: 'Dept' },
  { value: 300, label: 'Msc' },
  { value: 15, label: 'Act.Count' },
  { value: 100, label: 'RCWP' },
];

const DashboardScreen = () => {
  const logoSize = 50;
  const navigation = useNavigation();

  return (

    <View style={styles.container1}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={styles.upwardContainer}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 20 }}>
          <View>
            <Text style={{ color: '#202A44', fontSize: 24, fontFamily: 'Geologica-Bold' }}>Hi, The Lake Admin</Text>
            <Text style={{ color: '#7E7E7E', fontSize: 15, fontFamily: 'Geologica-Regular' }}>Last Sync- 6 Jan 2023</Text>
          </View>
          <Image source={require('../assets/ProfilePic.png')} style={styles.logo} />
        </View>
        <View style={styles.searchContainer}>

          <TextInput
            placeholder="06 Jun 2023"
            style={styles.input}
            placeholderTextColor="#7E7E7E"
          />
          <FontAwesome5 name='calendar-alt' color={'#202A44'} size={26} style={styles.icon} />
        </View>
      </View>
      <ScrollView style={{ marginTop: 0 }}>
        {/* <ScrollView style={{ marginTop: 10 }}> */}
        <View style={styles.middleContainer}>
          {/* Card 1 */}
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('MainDashboardScreen')}>
            <View style={styles.cardHeader}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={require('../assets/DarkBlue.jpg')} style={styles.logo} />
                <Text style={{ color: '#000000', fontFamily: 'Geologica-SemiBold', paddingLeft: 10 }}>The Lake</Text>
              </View>

              <Progress.Circle
                size={43}
                progress={0.7} // 60% progress
                indeterminate={false}
                thickness={5} // Thickness of the circle
                showsText={true} // Show text representation of progress
                direction="clockwise" // Progress direction
                strokeCap="butt"
                allowFontScaling={true}
                color="#202A44" // Set the filled color to dark blue
                unfilledColor="#F3F6FB" // Set the unfilled part to light gray
                startAngle={-Math.PI / 2} // Rotate the start angle by 90 degrees (to start from the top)
                style={styles.progress}
                borderWidth={null}
              />
            </View>
            <View style={styles.cardMiddle}>

              {data.map((item, index) => (
                <View key={index}>
                  <Text style={styles.cardMiddleTextValue}>{item.value}</Text>
                  <Text style={styles.cardMiddleTextLabel}>{item.label}</Text>
                </View>
              ))}

            </View>
            <View style={styles.cardBtn}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>60</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>60</Text>
              </TouchableOpacity>
            </View>
            <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={styles.cardBottomText}>Pending Areas Of Concern</Text>
              <Text style={styles.cardBottomText}>New Snag</Text>
            </View>
          </TouchableOpacity>
          {/* Card 2 */}
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={require('../assets/DarkBlue.jpg')} style={styles.logo} />
                <Text style={{ color: 'darkblue', fontWeight: 'bold', paddingLeft: 10 }}>The Lake</Text>
              </View>
              <Progress.Circle
                size={43}
                progress={0.61} // 60% progress
                indeterminate={false}
                thickness={5} // Thickness of the circle
                showsText={true} // Show text representation of progress
                direction="clockwise" // Progress direction
                strokeCap="butt"
                allowFontScaling={true}
                color="#202A44" // Set the filled color to dark blue
                unfilledColor="#F3F6FB" // Set the unfilled part to light gray
                startAngle={-Math.PI / 2} // Rotate the start angle by 90 degrees (to start from the top)
                style={styles.progress}
                borderWidth={null}
              />
            </View>
            <View style={styles.cardMiddle}>
              {data.map((item, index) => (
                <View key={index}>
                  <Text style={styles.cardMiddleTextValue}>{item.value}</Text>
                  <Text style={styles.cardMiddleTextLabel}>{item.label}</Text>
                </View>
              ))}
            </View>
            <View style={styles.cardBtn}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>60</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>60</Text>
              </TouchableOpacity>
            </View>
            <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={styles.cardBottomText}>Pending Areas Of Concern</Text>
              <Text style={styles.cardBottomText}>New Snag</Text>
            </View>
          </View>
          {/* Card 3 */}
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={require('../assets/DarkBlue.jpg')} style={styles.logo} />
                <Text style={{ color: 'darkblue', fontWeight: 'bold', paddingLeft: 10 }}>The Lake</Text>
              </View>
              <Progress.Circle
                size={43}
                progress={0.6} // 60% progress
                indeterminate={false}
                thickness={5} // Thickness of the circle
                showsText={true} // Show text representation of progress
                direction="clockwise" // Progress direction
                strokeCap="butt"
                allowFontScaling={true}
                color="#FFBA4D" // Set the filled color to dark blue
                unfilledColor="#F3F6FB" // Set the unfilled part to light gray
                startAngle={-Math.PI / 2} // Rotate the start angle by 90 degrees (to start from the top)
                style={styles.progress}
                borderWidth={null}
              />
            </View>
            <View style={styles.cardMiddle}>
              {/* {Array.from({ length: 5 }).map((_, index) => (
                <View key={index}>
                  <Text style={styles.cardMiddleText}>100</Text>
                  <Text style={styles.cardMiddleText}>PRW</Text>
                </View>
              ))} */}
              {data.map((item, index) => (
                <View key={index}>
                  <Text style={styles.cardMiddleTextValue}>{item.value}</Text>
                  <Text style={styles.cardMiddleTextLabel}>{item.label}</Text>
                </View>
              ))}
            </View>
            <View style={styles.cardBtn}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>60</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>60</Text>
              </TouchableOpacity>
            </View>
            <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={styles.cardBottomText}>Pending Areas Of Concern</Text>
              <Text style={styles.cardBottomText}>New Snag</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: '#F6F8FB',
  },
  upwardContainer: {
    width: '100%',
    height: hs / 5.5,
    // height: hs / 4.5,
    // backgroundColor: 'red',
  },
  logo: {
    backgroundColor: '#FFBA4D',
    height: 60,
    width: 60,
    borderRadius: 50,

  },
  searchContainer: {
    marginTop: 14,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%'

  },
  input: {
    flex: 1,

    height: 40,
    borderColor: '#7E7E7E',
    borderRadius: 10,
    paddingLeft: 10,
    backgroundColor: '#FFFFFF',
  },
  icon: {
    position: 'absolute',
    marginRight: 26,
    right: 0,
  },
  middleContainer: {

    marginTop: 14,

    marginHorizontal: 20,
  },
  card: {
    borderRadius: 9,
    backgroundColor: '#FFFFFF',
    paddingTop: 14,
    paddingRight: 14,
    paddingBottom: 19,
    paddingLeft: 14,
    marginBottom: 14,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  cardMiddle: {
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },

  cardMiddleTextValue: {
    color: '#202A44',
    fontSize: 13,
    fontFamily: 'Geologica-Medium',
    lineHeight: 13,
    paddingBottom: 10,
  },
  cardMiddleTextLabel: {
    color: '#8E8E8E',
    fontSize: 10,
    fontFamily: 'Geologica-Regular',
    lineHeight: 10,
  },
  cardBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    marginTop: 20,
    backgroundColor: '#FFBA4D',
    paddingVertical: 5,
    borderRadius: 5,
    alignItems: 'center',
    width: 100,
    borderRadius: 5,
  },
  buttonText: {
    color: '#202A44',
    fontFamily: 'Geologica-Bold',
    fontSize: 14,
  },
  cardBottomText: {
    color: '#8E8E8E',
    fontSize: 11,
    fontFamily: 'Geologica-Medium',
    lineHeight: 13.09
  }
});
