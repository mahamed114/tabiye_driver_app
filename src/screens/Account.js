import React from 'react';
import {
  View,
  TextInput,
  SafeAreaView,
  Image,
  Text,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Account = () => {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#1CAF90"
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
            source={require('../assets/avatar.png')}
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
              color: '#1CAF90',
            }}>
            Magacaaga
          </Text>
          <TextInput
            keyboardType="default"
            style={{
              backgroundColor: '#EBEBEB',
              borderRadius: 20,
              marginBottom: 12,
              padding: 10,
            }}
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
              color: '#1CAF90',
            }}>
            Nambarkaaga
          </Text>
          <TextInput
            keyboardType="default"
            style={{
              backgroundColor: '#EBEBEB',
              borderRadius: 20,
              marginBottom: 12,
              padding: 10,
            }}
            placeholder="Nambarkaaga..."
          />
        </View>
        <TouchableOpacity
          onPress={() => console.log('complete')}
          style={{
            backgroundColor: '#15E4B8',
            height: 50,
            borderRadius: 20,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
          }}>
          <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
            Keydi
          </Text>
        </TouchableOpacity>
        <View
          style={{
            marginVertical: 40,
            marginHorizontal: 10,
            height: 0.8,
            backgroundColor: '#888888',
          }}></View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 5,
          }}>
          <MaterialIcons name="done" size={28} color={'#15E4B8'} />
          <Text
            style={{
              marginLeft: 10,
              fontSize: 18,
              fontWeight: '600',
              color: '#08265A',
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
          <MaterialIcons name="star" size={28} color={'#15E4B8'} />
          <Text
            style={{
              marginLeft: 10,
              fontSize: 18,
              fontWeight: '600',
              color: '#08265A',
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
          <MaterialIcons name="shopping-bag" size={28} color={'#15E4B8'} />
          <Text
            style={{
              marginLeft: 10,
              fontSize: 18,
              fontWeight: '600',
              color: '#08265A',
            }}>
            500 dhibcood
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Account;
