import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ImageBackground,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#1CAF90"
        translucent={true}
      />
      <ImageBackground
        source={require('../assets/brand.png')}
        style={{width: 250, height: 200}}
      />
      <View style={styles.card}>
        <Text style={styles.subtitle}>Gali taleefon kaaga</Text>
        <TextInput
          keyboardType="phone-pad"
          style={styles.inputField}
          placeholder="Gali nambarkaga si'aad uhesho otp code"
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('Verify')}
          style={styles.primaryBtn}>
          <Text style={styles.primaryBtnText}>Dir</Text>
        </TouchableOpacity>
        <View style={styles.notify}>
          <Text style={{fontSize: 16, marginRight: 5}}>
            Akoon hadaadan lahayn?
          </Text>
          <TouchableOpacity onPress={() => ''}>
            <Text style={styles.signUpCTA}>Samayso</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  card: {
    height: 450,
    width: Dimensions.get('window').width,
    backgroundColor: 'white',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: 40,
    overflow: 'hidden',
    padding: 30,
  },
  subtitle: {
    fontSize: 24,
    color: 'black',
    marginBottom: 20,
  },
  inputField: {
    backgroundColor: '#EBEBEB',
    borderRadius: 20,
    marginBottom: 12,
    padding: 10,
  },
  primaryBtn: {
    backgroundColor: '#15E4B8',
    height: 50,
    borderRadius: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  },
  primaryBtnText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  notify: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 14,
    marginLeft: 4,
  },
  signUpCTA: {
    fontSize: 17,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    color: '#15E4B8',
  },
});
