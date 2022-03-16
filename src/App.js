/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Platform,
} from 'react-native';

const App = () => {
  return (
    <>
      <SafeAreaView>
        <StatusBar barStyle="dark-content" />
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View style={styles.mainView}>
            <Text style={styles.highlight}>Hello World</Text>
          </View>
          <TouchableOpacity>
            <Text>CLICK ME</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: 'cyan',
    height: 400,
    padding: 30,
  },
  highlight: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;
