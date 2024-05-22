import { View, Text, Image, Dimensions, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');
console.log(height * 0.20);

const LoginScreen = () => {
  const navigation = useNavigation();


  return (
    <View style={styles.container1}>
      <View style={styles.upwardContainer}>
        <Image source={require('../assets/loginLogo.png')} style={styles.logo} />
        {/* <Image source={require('../assets/logo2.jpg')} style={styles.logo} /> */}
      </View>
      <View style={styles.downwardContainer}>
        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Log In</Text>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>User Name</Text>
            <TextInput
              placeholder="Enter User Name"
              style={styles.input}
              placeholderTextColor="#888"
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              placeholder="Enter Password"
              style={styles.input}
              placeholderTextColor="#888"
              secureTextEntry
            />
          </View>
          <TouchableOpacity>
            <Text style={{ color: 'black', alignSelf: 'flex-end', textDecorationLine: 'underline', lineHeight: 14, fontFamily: 'Geologica-Regular' }}>Forgot Password? Reset</Text>
          </TouchableOpacity>
          <View style={{ alignItems: 'center' }}>
            <TouchableOpacity style={styles.loginButton} onPress={() =>
              navigation.navigate('Dashboard', { name: 'Jane' })
            }>
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: '#F6F8FB',
  },
  upwardContainer: {
    alignItems: 'center',
    paddingTop: height * 0.15,
  },
  logo: {
    width: 186,
    height: 59,
    resizeMode: 'contain',
  },
  downwardContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 14, // Added horizontal padding


  },
  loginContainer: {
    width: '100%', // Adjusted to take full width
    height: "auto",
    padding: 14,
    // margin: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 9,
  },
  loginText: {
    color: 'black',
    fontSize: 26,
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: 'Geologica-SemiBold'
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    color: '#202A44',
    fontSize: 16,
    marginBottom: 14,
    lineHeight: 16,
    fontFamily: 'Geologica-Medium'
  },
  input: {
    width: '100%',
    height: 48.96,
    borderColor: 'gray',
    borderRadius: 8,
    backgroundColor: '#F6F8FB',
    paddingTop: 9,
    paddingRight: 13,
    paddingBottom: 9,
    paddingLeft: 13,
    fontFamily: 'Geologica-Regular'
  },
  loginButton: {
    margin: 30,
    backgroundColor: '#FFBA4D',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: 150,
    borderRadius: 40
  },
  loginButtonText: {
    color: '#202A44',
    fontSize: 16,
    fontFamily: 'Geologica-Medium'
  },
});
