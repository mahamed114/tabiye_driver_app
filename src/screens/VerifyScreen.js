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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const VerifyScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#1CAF90"
        translucent={true}
      />
      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => navigation.navigate('Login')}>
        <MaterialIcons name="arrow-back-ios" size={28} color={'black'} />
      </TouchableOpacity>
      <ImageBackground
        source={require('../assets/brand.png')}
        style={{width: 250, height: 200}}
      />
      <View style={styles.card}>
        <Text style={styles.subtitle}>
          Gali otp code moobilka kugusoo dirnay
        </Text>
        <TextInput
          keyboardType="number-pad"
          style={styles.inputField}
          placeholder="Gali koodhka 6 number kakooban"
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('Drawer')}
          style={styles.primaryBtn}>
          <Text style={styles.primaryBtnText}>Xaqiiji</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default VerifyScreen;

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
    fontSize: 20,
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
  backBtn: {
    position: 'absolute',
    top: 40,
    left: 18,
  },
});
