import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';

import AppNavigation from './src/Navigation/AppNavigation';

export default function App() {
  useEffect(() => {
    
    SplashScreen.hide();
  }, []);

  return <AppNavigation />;
}
