import React from 'react';
import 'react-native-svg';
import { ProgressCircle } from 'react-native-svg-charts';


export function ProgressCircleExample(data) {
    console.log(data);
    return (
        <ProgressCircle
            style={ { height: 200 } }
            progress={parseInt(data.hours)/12}
            progressColor={'rgb(134, 65, 244)'}
            startAngle={ -Math.PI * 0.8 }
            endAngle={ Math.PI * 0.8 }
        />
    )

  }


export default ProgressCircleExample;

