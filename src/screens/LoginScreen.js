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

import {COLORS, IMAGES, ROUTES} from '../constants';

const LoginScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor={COLORS.tertiary}
        translucent={true}
      />

      <ImageBackground
        source={IMAGES.brand}
        style={{width: 250, height: 200}}
        imageStyle={{}}
      />

      <View style={styles.card}>
        <Text style={styles.subtitle}>Gali taleefon kaaga</Text>
        <TextInput
          keyboardType="phone-pad"
          style={styles.inputField}
          placeholder="Gali nambarkaga si'aad uhesho otp code"
        />
        <TouchableOpacity
          onPress={() => navigation.navigate(ROUTES.VERIFY)}
          style={styles.primaryBtn}>
          <Text style={styles.primaryBtnText}>Dir</Text>
        </TouchableOpacity>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginTop: 14,
            marginLeft: 4,
          }}>
          <Text style={{fontSize: 16, marginRight: 5}}>
            Akoon hadaadan lahayn?
          </Text>
          <TouchableOpacity
            onPress={() => ''}>
            <Text
              style={{
                fontSize: 17,
                fontWeight: 'bold',
                textDecorationLine: 'underline',
                color: COLORS.primary,
              }}>
              Samayso
            </Text>
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
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: 40,
    overflow: 'hidden',
    padding: 30,
  },
  subtitle: {
    fontSize: 24,
    color: COLORS.black,
    marginBottom: 20,
  },
  inputField: {
    backgroundColor: COLORS.gray2,
    borderRadius: 20,
    marginBottom: 12,
    padding: 10,
  },
  primaryBtn: {
    backgroundColor: COLORS.primary,
    height: 50,
    borderRadius: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: COLORS.white,
  },
  primaryBtnText: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
