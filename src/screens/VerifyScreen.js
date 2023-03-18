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
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {COLORS, IMAGES, ROUTES} from '../constants';
import {StatusBar} from 'react-native';

const VerifyScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor={COLORS.tertiary}
        translucent={true}
      />
      <TouchableOpacity
        style={{
          position: 'absolute',
          top: 40,
          left: 18,
        }}
        onPress={() => navigation.navigate(ROUTES.LOGIN)}>
        <ImageBackground
          source={IMAGES.back}
          style={{
            width: 28,
            height: 28,
          }}
          imageStyle={{}}
        />
      </TouchableOpacity>
      <ImageBackground
        source={IMAGES.brand}
        style={{width: 250, height: 200}}
        imageStyle={{}}
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
          onPress={() => navigation.navigate(ROUTES.DRAWER)}
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
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: 40,
    overflow: 'hidden',
    padding: 30,
  },
  subtitle: {
    fontSize: 20,
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
