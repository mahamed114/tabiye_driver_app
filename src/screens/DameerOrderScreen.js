import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {COLORS} from '../constants';
import {TouchableOpacity} from 'react-native';

const DameerOrderScreen = () => {
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
          color: COLORS.tertiary,
          marginBottom: 15,
        }}>
        Kusaabsan Dalabka
      </Text>
      <View style={{flexDirection: 'row', marginBottom: 8, flexWrap: 'wrap'}}>
        <Text
          style={{
            fontWeight: '700',
            fontSize: 18,
            color: COLORS.gray3,
            marginRight: 10,
          }}>
          Sumada:
        </Text>
        <Text
          style={{
            fontWeight: '500',
            fontSize: 18,
            color: COLORS.gray1,
          }}>
          #2450
        </Text>
      </View>
      <View style={{flexDirection: 'row', marginBottom: 8, flexWrap: 'wrap'}}>
        <Text
          style={{
            fontWeight: '700',
            fontSize: 18,
            color: COLORS.gray3,
            marginRight: 10,
          }}>
          Taariikhda:
        </Text>
        <Text
          style={{
            fontWeight: '500',
            fontSize: 18,
            color: COLORS.gray1,
          }}>
          August 10, 2023
        </Text>
      </View>
      <View style={{flexDirection: 'row', marginBottom: 8, flexWrap: 'wrap'}}>
        <Text
          style={{
            fontWeight: '700',
            fontSize: 18,
            color: COLORS.gray3,
            marginRight: 10,
          }}>
          Adeega:
        </Text>
        <Text
          style={{
            fontWeight: '500',
            fontSize: 18,
            color: COLORS.gray1,
          }}>
          Dameer Qadiye
        </Text>
      </View>
      <View style={{flexDirection: 'row', marginBottom: 8, flexWrap: 'wrap'}}>
        <Text
          style={{
            fontWeight: '700',
            fontSize: 18,
            color: COLORS.gray3,
            marginRight: 10,
          }}>
          Goobta laga qaadayo:
        </Text>
        <Text
          style={{
            fontWeight: '500',
            fontSize: 18,
            color: COLORS.gray1,
          }}>
          sheekh nuur ciise meesha bajaajta lagaga dego dhankeeda bari, jijiga
        </Text>
      </View>
      <View style={{flexDirection: 'row', marginBottom: 8, flexWrap: 'wrap'}}>
        <Text
          style={{
            fontWeight: '700',
            fontSize: 18,
            color: COLORS.gray3,
            marginRight: 10,
          }}>
          Goobta la geynayo:
        </Text>
        <Text
          style={{
            fontWeight: '500',
            fontSize: 18,
            color: COLORS.gray1,
          }}>
          sheekh nuur ciise meesha bajaajta lagaga dego dhankeeda bari, jijiga
        </Text>
      </View>
      <Text
        style={{
          fontWeight: '700',
          fontSize: 20,
          color: COLORS.tertiary,
          marginTop: 20,
          marginBottom: 10,
        }}>
        Kusaabsan Macmiil
      </Text>
      <Text
        style={{
          fontWeight: '500',
          fontSize: 18,
          color: COLORS.gray1,
          flexWrap: 'wrap',
        }}>
        Cumer aw maxamuud abdulaahi
      </Text>
      <Text
        style={{
          fontWeight: '500',
          fontSize: 18,
          color: COLORS.gray1,
          flexWrap: 'wrap',
        }}>
        0915000000
      </Text>
      <TouchableOpacity
        style={{
          marginTop: 40,
          flexDirection: 'row',
          backgroundColor: COLORS.tertiary,
          paddingRight: 18,
          paddingLeft: 10,
          borderRadius: 4,
          paddingVertical: 5,
          justifyContent: 'center',
        }}>
        <MaterialIcons
          name="call"
          size={30}
          color={COLORS.white}
          style={{marginTop: 1}}
        />
        <Text
          style={{
            fontWeight: '700',
            fontSize: 22,
            color: COLORS.white,
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
            color: COLORS.gray3,
          }}>
          Iska Saar
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default DameerOrderScreen;
