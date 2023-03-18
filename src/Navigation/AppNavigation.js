import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {COLORS, ROUTES} from '../constants';
import {DrawerScreen, HomeScreen, LoginScreen, VerifyScreen} from '../screens';

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
        <Stack.Screen
          name={ROUTES.DRAWER}
          component={DrawerScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={ROUTES.HOME}
          component={HomeScreen}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: COLORS.primary,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
