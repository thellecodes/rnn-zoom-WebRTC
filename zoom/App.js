import React, {useState, useEffect} from 'react';
import {View, Dimensions, ScrollView, StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {connect} from 'react-redux';
const {height, width} = Dimensions.get('window');

import Peer from 'peerjs';

import {useDispatch} from 'react-redux';
import InCallManager from 'react-native-incall-manager';

const Stack = createStackNavigator();

import LoginScreen from './src/components/LoginScreen';
import CallScreen from './src/components/CallScreen';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            options={{
              headerShown: false,
            }}
            component={LoginScreen}
          />
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Call"
            component={CallScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
