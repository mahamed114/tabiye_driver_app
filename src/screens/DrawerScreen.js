import React from 'react';
import {View} from 'react-native';

import DrawerNavigator from '../Navigation/DrawerNavigator';

const DrawerScreen = () => {
  return (
    <View style={{flex: 1}}>
      <DrawerNavigator />
    </View>
  );
};

export default DrawerScreen;
