import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const BooyadOrderScreen = () => {
  return (
    <ScrollView
      style={{
        flex: 1,
        padding: 16,
      }}>
      <Text
        style={{
          fontWeight: '700',
          fontSize: 20,
          color: '#1CAF90',
          marginBottom: 15,
        }}>
        Kusaabsan Dalabka
      </Text>
      <View style={{flexDirection: 'row', marginBottom: 8, flexWrap: 'wrap'}}>
        <Text
          style={{
            fontWeight: '700',
            fontSize: 18,
            color: '#888888',
            marginRight: 10,
          }}>
          Sumada:
        </Text>
        <Text
          style={{
            fontWeight: '500',
            fontSize: 18,
            color: '#444444',
          }}>
          #4450
        </Text>
      </View>
      <View style={{flexDirection: 'row', marginBottom: 8, flexWrap: 'wrap'}}>
        <Text
          style={{
            fontWeight: '700',
            fontSize: 18,
            color: '#888888',
            marginRight: 10,
          }}>
          Taariikhda:
        </Text>
        <Text
          style={{
            fontWeight: '500',
            fontSize: 18,
            color: '#444444',
          }}>
          August 10, 2023
        </Text>
      </View>
      <View style={{flexDirection: 'row', marginBottom: 8, flexWrap: 'wrap'}}>
        <Text
          style={{
            fontWeight: '700',
            fontSize: 18,
            color: '#888888',
            marginRight: 10,
          }}>
          Adeega:
        </Text>
        <Text
          style={{
            fontWeight: '500',
            fontSize: 18,
            color: '#444444',
          }}>
          Booyad Biyo
        </Text>
      </View>
      <Text
        style={{
          fontWeight: '700',
          fontSize: 20,
          color: '#1CAF90',
          marginTop: 20,
          marginBottom: 10,
        }}>
        Kusaabsan Macmiil
      </Text>
      <Text
        style={{
          fontWeight: '500',
          fontSize: 18,
          color: '#444444',
          flexWrap: 'wrap',
        }}>
        Cumar aw maxamuud abdulaahi
      </Text>
      <Text
        style={{
          fontWeight: '500',
          fontSize: 18,
          color: '#444444',
          flexWrap: 'wrap',
        }}>
        0915000000
      </Text>
      <TouchableOpacity
        style={{
          marginTop: 40,
          flexDirection: 'row',
          backgroundColor: '#1CAF90',
          paddingRight: 18,
          paddingLeft: 10,
          borderRadius: 4,
          paddingVertical: 5,
          justifyContent: 'center',
        }}>
        <MaterialIcons
          name="call"
          size={30}
          color="white"
          style={{marginTop: 1}}
        />
        <Text
          style={{
            fontWeight: '700',
            fontSize: 22,
            color: 'white',
            left: 8,
          }}>
          Wac
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => ''} style={{marginTop: 30}}>
        <Text
          style={{
            fontSize: 17,
            fontWeight: 'bold',
            textDecorationLine: 'underline',
            color: '#888888',
          }}>
          Iska Saar
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default BooyadOrderScreen;
