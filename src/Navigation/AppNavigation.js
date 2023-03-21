import React from 'react';
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
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Verify" component={VerifyScreen} />
        <Stack.Screen
          name="Drawer"
          component={DrawerScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: '#15E4B8',
            },
          }}
        />
        <Stack.Screen
          name="Account"
          component={Account}
          options={{
            headerShown: true,
            title: 'Akoonkaaga',
            headerStyle: {
              backgroundColor: '#15E4B8',
            },
          }}
        />
        <Stack.Screen
          name="Iskarogo"
          component={IskaRogoOrderScreen}
          options={{
            headerShown: true,
            title: '',
            headerStyle: {
              backgroundColor: '#15E4B8',
            },
          }}
        />
        <Stack.Screen
          name="Booyad"
          component={BooyadOrderScreen}
          options={{
            headerShown: true,
            title: '',
            headerStyle: {
              backgroundColor: '#15E4B8',
            },
          }}
        />
        <Stack.Screen
          name="Xamuul"
          component={XamuulOrderScreen}
          options={{
            headerShown: true,
            title: '',
            headerStyle: {
              backgroundColor: '#15E4B8',
            },
          }}
        />
        <Stack.Screen
          name="Dameer"
          component={DameerOrderScreen}
          options={{
            headerShown: true,
            title: '',
            headerStyle: {
              backgroundColor: '#15E4B8',
            },
          }}
        />
        <Stack.Screen
          name="Cagaf"
          component={CagafOrderScreen}
          options={{
            headerShown: true,
            title: '',
            headerStyle: {
              backgroundColor: '#15E4B8',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
