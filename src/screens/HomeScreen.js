import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import ToastManager from 'toastify-react-native';

import {COLORS} from '../constants';

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

      <View style={{flex: 1}}>
        <Text>Home Screen</Text>
      </View>
    </>
  );
};

export default HomeScreen;
