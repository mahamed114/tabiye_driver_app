import React from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#1CAF90"
        translucent={true}
      />
      <ScrollView style={{flex: 1, padding: 20}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#15E4B8',
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 10,
            marginBottom: 20,
          }}>
          <MaterialIcons name="bookmark-outline" size={28} color="white" />
          <Text
            style={{
              fontSize: 22,
              marginLeft: 14,
              color: 'white',
              fontWeight: '500',
            }}>
            Dalabaadka
          </Text>
        </View>
        <View
          style={{
            paddingHorizontal: 10,
            paddingVertical: 14,
            borderRadius: 10,
            backgroundColor: '#E3E3E3',
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
                  color: '#1CAF90',
                }}>
                Dalabka #2100
              </Text>
              <Text
                style={{
                  marginTop: 2,
                  fontWeight: '300',
                  fontSize: 15,
                  color: 'black',
                }}>
                January 15, 2023
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('Iskarogo')}
              style={{padding: 3, right: -7}}>
              <MaterialIcons name="more-vert" size={28} color="#08265A" />
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginTop: 15,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 16,
                color: '#08265A',
              }}>
              Iska Roggo Dhagax Jay-madow
            </Text>
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
                  backgroundColor: 'white',
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
                    left: -6,
                  }}>
                  <FontAwesome
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
                    color: 'black',
                  }}>
                  Ma Aqbalin
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onpress={() => ''}
              style={{
                marginLeft: 10,
                backgroundColor: '#1CAF90',
                paddingHorizontal: 14,
                paddingTop: 6,
                paddingBottom: 8,
                borderRadius: 8,
              }}>
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: '400',
                  color: 'white',
                }}>
                Aqbal
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default HomeScreen;
