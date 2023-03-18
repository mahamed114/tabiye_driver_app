import React from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import ToastManager from 'toastify-react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {COLORS, IMAGES} from '../constants';

const HomeScreen = () => {
  return (
    <>
      <ToastManager />
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor={COLORS.tertiary}
        translucent={true}
      />

      <ScrollView style={{flex: 1, padding: 20}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: COLORS.primary,
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 10,
          }}>
          <Image source={IMAGES.bookmark2} style={{width: 28, height: 28}} />
          <Text
            style={{
              fontSize: 22,
              marginLeft: 14,
              color: COLORS.white,
              fontWeight: '500',
            }}>
            Dalabaadka
          </Text>
        </View>
        <TouchableOpacity
          style={{
            marginTop: 30,
            height: 180,
            backgroundColor: COLORS.gray4,
            borderRadius: 10,
            paddingVertical: 10,
            paddingHorizontal: 14,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
            }}>
            <View>
              <Text
                style={{
                  fontWeight: '700',
                  fontSize: 22,
                  color: COLORS.tertiary,
                }}>
                Dalab #2100
              </Text>
              <Text
                style={{
                  marginTop: 2,
                  fontWeight: '300',
                  fontSize: 15,
                  color: COLORS.black,
                }}>
                January 15, 2023
              </Text>
            </View>
            <TouchableOpacity onpress={() => ''} style={{padding: 3}}>
              <Image source={IMAGES.call2} style={{width: 28, height: 28}} />
            </TouchableOpacity>
          </View>
          <View
            style={{marginTop: 15, flexDirection: 'row', alignItems: 'center'}}>
            <Text
              style={{
                fontSize: 16,
                color: COLORS.secondary,
              }}>
              Iska Roggo Dhagax Jay-madow
            </Text>
            <Text
              style={{
                marginLeft: 5,
                fontWeight: '300',
                fontSize: 16,
                color: COLORS.black,
              }}></Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-end',
              marginTop: 20,
            }}>
            <TouchableOpacity onPress={() => ''}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  backgroundColor: COLORS.white,
                  paddingHorizontal: 14,
                  paddingVertical: 6,
                  borderRadius: 10,
                }}>
                <View
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: 100,
                    backgroundColor: 'red',
                    padding: 3,
                    alignItems: 'center',
                    // marginRight:5,
                    left: -6,
                  }}>
                  <Icon
                    name="remove"
                    size={20}
                    color={'white'}
                    style={{marginTop: -2}}
                  />
                </View>
                <Text
                  style={{
                    fontSize: 17,
                    fontWeight: '300',
                    color: COLORS.black,
                  }}>
                  Ma Aqbalin
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => ''}
              style={{
                marginLeft: 10,
                backgroundColor: COLORS.tertiary,
                paddingHorizontal: 14,
                paddingTop: 6,
                paddingBottom: 8,
                borderRadius: 8,
              }}>
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: '400',
                  color: COLORS.white,
                }}>
                Aqbal
              </Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
};

export default HomeScreen;
