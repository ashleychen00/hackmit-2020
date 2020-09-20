import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import 'react-native-svg';
import ProgressCircleExample from '../components/circle'
import {loadSettings} from './storage/dataStorage'


export default class YourDay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hours:'', mins: '', secs:''}
  }

  async componentDidMount() {
    try {
      let state = await loadSettings();
      this.setState({hours: state.hours})
    } catch (error) {
      console.log('Error fetching time data', error);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>hi there</Text>
        <Text>{this.state.hours}</Text>

        <ProgressCircleExample></ProgressCircleExample>
      </View>
    );
  }
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
