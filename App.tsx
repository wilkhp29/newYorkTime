import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Technology from './src/screens/tabs/technology';
import Science from './src/screens/tabs/science';

const Tab = createMaterialTopTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Technology" component={Technology} />
        <Tab.Screen name="Settings" component={Science} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
