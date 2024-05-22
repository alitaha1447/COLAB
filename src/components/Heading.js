import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const Heading = () => {
  return (
    <View style={styles.upwardContainer}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 20 }}>
        <View>
          <Text style={{ color: '#202A44', fontSize: 24, fontFamily: 'Geologica-Bold' }}>Hi, The Lake Admin</Text>
          <Text style={{ color: '#7E7E7E', fontSize: 15, fontFamily: 'Geologica-Regular' }}>Last Sync- 6 Jan 2023</Text>
        </View>
        <Image source={require('../assets/ProfilePic.png')} style={styles.logo} />
      </View>
    </View>
  )
}

export default Heading;
const styles = StyleSheet.create({
  upwardContainer: {
    width: '100%',
    // height: hs / 4.5,
  },
  logo: {
    backgroundColor: '#FFBA4D',
    height: 60,
    width: 60,
    borderRadius: 50,
  },
});
