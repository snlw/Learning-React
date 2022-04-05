import {React, Component} from 'react';
import './LoadingIcon.css'

const spinnerSize = 100;

class LoadingIcon extends Component {
    render() {
        return (
            <div className='spinner'>
                <svg 
                    focusable='false'
                    width={spinnerSize}
                    height={spinnerSize}
                    viewBox={`0 0 ${spinnerSize} ${spinnerSize}`}>
                        <circle
                            cx={spinnerSize/2}
                            cy={spinnerSize/2}
                            r={spinnerSize/2-10} />
                </svg>
            </div>
        )
    }
};

export default LoadingIcon;