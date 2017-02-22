'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';

import RootNavigator from './Views/RootNavigator';
console.disableYellowBox = true;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  }
});

export default class socialApp extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <RootNavigator ref="RootNavigator" />
      </View>

    );
  }
}

AppRegistry.registerComponent('socialApp', () => socialApp);
