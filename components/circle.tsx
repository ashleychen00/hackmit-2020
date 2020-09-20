import React from 'react';
import 'react-native-svg';
import { ProgressCircle } from 'react-native-svg-charts';

class ProgressCircleExample extends React.Component {
    render() {
        return (
            <ProgressCircle
                style={ { height: 200 } }
                progress={ 0.2}
                progressColor={'rgb(134, 65, 244)'}
                startAngle={ -Math.PI * 0.8 }
                endAngle={ Math.PI * 0.8 }
            />
        )
    }
}




export default ProgressCircleExample

