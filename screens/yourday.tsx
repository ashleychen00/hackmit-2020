import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import 'react-native-svg';
import ProgressCircleExample from '../components/circle'
  
export default function YourDay() {
  return (
    <View>
      <ProgressCircleExample></ProgressCircleExample>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center' ,
    // justifyContent: 'center',
    marginVertical: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
