import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import Default from './src/screens/tabs';
import {colors} from './src/utils';
import {StatusBar} from 'react-native';
import NewsDetails from './src/screens/newsDetails';

const Stack = createSharedElementStackNavigator();
const Tab = createMaterialTopTabNavigator();

const Tabs = () => (
  <Tab.Navigator>
    <Tab.Screen name="Technology" component={Default} />
    <Tab.Screen name="Science" component={Default} />
  </Tab.Navigator>
);

function App() {
  return (
    <>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
      <NavigationContainer theme={{dark: false, colors}}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Tabs}
            options={{title: 'News'}}
          />
          <Stack.Screen
            name="NewsDetails"
            component={NewsDetails}
            sharedElementsConfig={(route) => {
              const {news} = route.params;
              return [`news.${news.id}`];
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
