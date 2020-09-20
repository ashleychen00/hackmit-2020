import React, { Component } from 'react';
import {TouchableOpacity, Keyboard, TextInput, ScrollView, Button, StyleSheet, Text, View } from 'react-native';
import { loadSettings, saveSettings} from './storage/dataStorage';
import AsyncStorage from '@react-native-community/async-storage';




export default class SettingsScreen extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = { date:'', hours: '', mins: '' }
  
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  } 

  async componentDidMount() {
    const initialState = await loadSettings();
    this.setState(initialState);
  }

  handleNameChange(hours) {
    this.setState({ hours });
    console.log(hours);
  };

  handleSubmit() {
    saveSettings(this.state);
    console.log(this.state);
    this.setState({
      hours: ''
    });
  }; 




  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.header}>hi Activity</Text>
          <ScrollView>
            <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Time?"
              maxLength={20}
              onBlur={Keyboard.dismiss}
              value={this.state.hours}
              onChangeText={this.handleNameChange}
            />
            <TouchableOpacity
              style={styles.saveButton}
              onPress={this.handleSubmit}>
              <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 45,
    backgroundColor: 'black',
  },
  header: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold',
    color: 'white'
  },
  inputContainer: {
    paddingTop: 15
  },
  textInput: {
    borderColor: '#CCCCCC',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: 50,
    fontSize: 25,
    paddingLeft: 20,
    paddingRight: 20,
    color: '#FFFFFF'
  },
  saveButton: {
    borderWidth: 1,
    borderColor: '#007BFF',
    backgroundColor: '#007BFF',
    padding: 15,
    margin: 5
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
    textAlign: 'center'
  }
});