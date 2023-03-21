import React from 'react';
import {StatusBar} from 'react-native';
import {
  View,
  TextInput,
  SafeAreaView,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {COLORS, IMAGES} from '../constants';

const Account = () => {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor={COLORS.tertiary}
        translucent={true}
      />

      <SafeAreaView
        style={{
          flex: 1,
          padding: 20,
        }}>
        <View
          style={{
            marginTop: 10,
            height: 120,
            width: 120,
            alignSelf: 'center',
          }}>
          <Image
            source={IMAGES.avatar}
            resizeMode="cover"
            style={{
              height: '100%',
              width: '100%',
              resizeMode: 'cover',
            }}
          />
        </View>
        <View style={{marginTop: 30, marginBottom: 3}}>
          <Text
            style={{
              marginLeft: 7,
              marginBottom: 7,
              fontSize: 16,
              fontWeight: '600',
              color: COLORS.tertiary,
            }}>
            Magacaaga
          </Text>
          <TextInput
            keyboardType="default"
            style={styles.inputField}
            placeholder="Magacaaga..."
          />
        </View>
        <View style={{marginBottom: 3}}>
          <Text
            style={{
              marginLeft: 7,
              marginBottom: 7,
              fontSize: 16,
              fontWeight: '600',
              color: COLORS.tertiary,
            }}>
            Nambarkaaga
          </Text>
          <TextInput
            keyboardType="default"
            style={styles.inputField}
            placeholder="Nambarkaaga..."
          />
        </View>
        <TouchableOpacity
          onPress={() => console.log('complete')}
          style={styles.primaryBtn}>
          <Text style={styles.primaryBtnText}>Keydi</Text>
        </TouchableOpacity>
        <View
          style={{
            marginVertical: 40,
            marginHorizontal: 10,
            height: 0.8,
            backgroundColor: COLORS.gray3,
          }}></View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 5,
          }}>
          <MaterialIcons name="done" size={28} color={COLORS.primary} />
          <Text
            style={{
              marginLeft: 10,
              fontSize: 18,
              fontWeight: '600',
              color: COLORS.secondary,
            }}>
            Waa la xaqiijiyey akoonkaaga
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 5,
          }}>
          <MaterialIcons name="star" size={28} color={COLORS.primary} />
          <Text
            style={{
              marginLeft: 10,
              fontSize: 18,
              fontWeight: '600',
              color: COLORS.secondary,
            }}>
            {'50'} Macmiil - {'4.0'}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 5,
          }}>
          <MaterialIcons name="shopping-bag" size={28} color={COLORS.primary} />
          <Text
            style={{
              marginLeft: 10,
              fontSize: 18,
              fontWeight: '600',
              color: COLORS.secondary,
            }}>
            500 dhibcood
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Account;

const styles = StyleSheet.create({
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
