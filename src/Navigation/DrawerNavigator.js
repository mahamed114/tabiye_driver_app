import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {COLORS, ROUTES} from '../constants';
import CustomDrawer from '../components/CustomDrawer';
import HomeScreen from '../screens/HomeScreen';

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name={ROUTES.HOME}
        component={HomeScreen}
        options={{
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
          title: 'Tabiye',
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
