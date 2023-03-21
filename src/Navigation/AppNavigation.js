import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {COLORS, ROUTES} from '../constants';
import {
  Account,
  BooyadOrderScreen,
  CagafOrderScreen,
  DameerOrderScreen,
  DrawerScreen,
  HomeScreen,
  IskaRogoOrderScreen,
  LoginScreen,
  VerifyScreen,
  XamuulOrderScreen,
} from '../screens';

const Stack = createStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={ROUTES.DRAWER}>
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
        <Stack.Screen
          name={ROUTES.ACCOUNT}
          component={Account}
          options={{
            headerShown: true,
            title: 'Akoonkaaga',
            headerStyle: {
              backgroundColor: COLORS.primary,
            },
          }}
        />
        <Stack.Screen
          name={ROUTES.ISKAROGOORDER}
          component={IskaRogoOrderScreen}
          options={{
            headerShown: true,
            title: '',
            headerStyle: {
              backgroundColor: COLORS.primary,
            },
          }}
        />
        <Stack.Screen
          name={ROUTES.BOOYADORDER}
          component={BooyadOrderScreen}
          options={{
            headerShown: true,
            title: '',
            headerStyle: {
              backgroundColor: COLORS.primary,
            },
          }}
        />
        <Stack.Screen
          name={ROUTES.XAMUULORDER}
          component={XamuulOrderScreen}
          options={{
            headerShown: true,
            title: '',
            headerStyle: {
              backgroundColor: COLORS.primary,
            },
          }}
        />
        <Stack.Screen
          name={ROUTES.DAMEERORDER}
          component={DameerOrderScreen}
          options={{
            headerShown: true,
            title: '',
            headerStyle: {
              backgroundColor: COLORS.primary,
            },
          }}
        />
        <Stack.Screen
          name={ROUTES.CAGAFORDER}
          component={CagafOrderScreen}
          options={{
            headerShown: true,
            title: '',
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
