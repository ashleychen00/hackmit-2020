

import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

import TimerContainer from "./timer.container";

export default function TimerScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Timer</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/Timer.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    backgroundColor: '#DBD053',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: "8%",
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "#74526C",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
