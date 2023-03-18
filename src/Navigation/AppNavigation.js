import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {ROUTES} from '../constants';
import {LoginScreen, VerifyScreen} from '../screens';

const Stack = createStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={ROUTES.LOGIN}>
        <Stack.Screen name={ROUTES.LOGIN} component={LoginScreen} />
        <Stack.Screen name={ROUTES.VERIFY} component={VerifyScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
