
import * as React from 'react';
import { Component } from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import Colors from '../constants/Colors';
import { Text, View } from 'react-native'; // '../components/Themed';
import { TouchableOpacity } from 'react-native';

import ListComponent from "./list.component";

let padToTwo = (number) => (number <= 9 ? `0${number}`:number);

const colors = {
  celeste: "#B1F8F2",
  dark: "#2E3532",
  purple: "#94849B",
  lightOrange: "#F2B880",
  darkOrange: "#EA9010",
};
class TimerContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			min: 0,
			sec: 0,
			msec: 0,
			test: 'test',
		}

		this.interval = null;
		this.intervalArr = [];
	}

	handleToggle = () => {
		this.setState(
		{
			start: !this.state.start
		},
		() => this.handleStart()
		);
	};

	handleStart = () => {
		if (this.state.start) {
			this.interval = setInterval(() => {
				if (this.state.msec !== 99) {
					this.setState({
						msec: this.state.msec + 1
					});
				} else if (this.state.sec !== 59) {
					this.setState({
						msec: 0,
						sec: ++this.state.sec
					});
				} else {
					this.setState({
						msec: 0,
						sec: 0,
						min: ++this.state.min
					});
				}
			}, 1);
		} else {
			clearInterval(this.interval);
		}
	};

	handleReset =  (min, sec, msec) => {

		this.intervalArr = [
			...this.intervalArr, 
			{min, sec, msec}
		]

		this.setState({
			min:0,
			sec:0,
			msec:0,
			start: false
		});
		clearInterval(this.interval);
	};

	render() {
		return(
			// display time
			<View style={styles.container}>

				 <View style={styles.parent}>
				 	<Text style={styles.child}>{padToTwo(this.state.min) + ' : '}</Text>
				 	<Text style={styles.child}>{padToTwo(this.state.sec) + ' : '}</Text>
				 	<Text style={styles.child}>{padToTwo(this.state.msec) + ' : '}</Text>
				 </View>	

				 <View style={styles.buttonParent}>
				 	<TouchableOpacity style={styles.button} onPress={this.handleToggle}><Text style={styles.buttonText}>{!this.state.start? 'Start': 'Stop'}</Text></TouchableOpacity>
				 	<TouchableOpacity style={styles.button} onPress={this.handleReset}><Text style={styles.buttonText}>Reset</Text></TouchableOpacity>
				 </View>

				 <ListComponent interval={this.intervalArr}/>
			</View>

		);

	}
}

const styles= StyleSheet.create({
	parent: {
		display: "flex",
		flexDirection: "row",
		borderWidth:1,
		borderRadius: 80,
		borderColor: "#694966",
		backgroundColor: colors.dark,
		paddingLeft:"8%",
		paddingRight:"8%",
		paddingBottom: ".5%",
	},

	child: {
		fontSize: 40,
		color: Colors.celeste,
	},

	buttonParent: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-around",
		marginTop: "12%",
	},

	button: {
		backgroundColor: colors.dark,
		paddingTop: "5%",
		paddingBottom: "5%",
		paddingLeft: "15%",
		paddingRight: "15%",
		display: "flex",
		borderRadius: 20,
		borderWidth: 2,
		borderColor: "#694966",
		height: 60,
	},

	buttonText: {
		color:colors.lightOrange,
		fontSize: 20,
		alignSelf: "center"

	}
});

export default TimerContainer;


