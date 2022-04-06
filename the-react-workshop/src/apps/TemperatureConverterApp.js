import React, { Component } from 'react';
import './TemperatureConverter.css';

const StatusContext = React.createContext();
const StatusConsumer =StatusContext.Consumer;
const StatusProvider = StatusContext.Provider;

class TemperatureConverter extends Component {
    constructor(props) {
        super(props);
        const defaultCelsius = 20;
        this.state = {
            celsius : defaultCelsius,
            fahrenheit : this.getFahrenheit(defaultCelsius)
        };
    };

    getFahrenheit = (celsius) => {
        return parseInt((celsius*9)/5 + 32);
    };

    getCelsius = (fahrenheit) => {
        return parseInt((fahrenheit-32)*5/9);
    };

    updateTemperature = (convertTo, value) => {
        let newState;
        if (['', ' ', '-', NaN].includes(value)){
            newState = {
                celsius : '',
                fahrenheit : ''
            };
        }
        else if (convertTo === 'celsius'){
            newState = {
                celsius : this.getCelsius(value),
                fahrenheit : parseInt(value)
            };
        }
        else {
            newState = {
                celsius : parseInt(value),
                fahrenheit : this.getFahrenheit(value)
            };
        };

        this.setState(newState);
        console.log(this.state)
    };

    render() {
        return (
            <div>
                <div className='container'>
                    <h1>Temperature Converter</h1> 
                    <StatusProvider value={this.state.celsius}>
                        <TemperatureForm temperature={this.state} updateTemperature={this.updateTemperature.bind(this)}/>
                        <WrapperComponent />
                    </StatusProvider>
                </div>
            </div>
        )
    };
};

const withStatus = WrapperComponent => {
    return () => {
        return <StatusConsumer>{props => <WrapperComponent context={props} />}</StatusConsumer>;
    };
};

const TemperatureStatus = ({context}) => {
    return (
        // <StatusConsumer>
        //     {props => (
        //         <div className='status'>
        //             Status : {props < 10 ? 'Cool' : 'Warm'}
        //         </div>
        //     )}
        // </StatusConsumer>
        <div className='status'>
            Status : {context < 10 ? 'Cool' : 'Warm'}
        </div>
    )
}

const WrapperComponent = withStatus(TemperatureStatus);

const TemperatureForm = ({temperature, updateTemperature}) => {
    return (
        <div>
            <TemperatureInput temperature={temperature.celsius} updateTemperature={updateTemperature} convertTo='fahrenheit' />
            <TemperatureInput temperature={temperature.fahrenheit} updateTemperature={updateTemperature} convertTo='celsius'/>
        </div>
    )
};

class TemperatureInput extends Component{

    handleTemperature = (event) => {
        const {value} = event.target;
        this.props.updateTemperature(this.props.convertTo, value);
    };

    render() {
        const {convertTo, temperature, updateTemperature} = this.props;
        return (
            <div>
                <div>
                    <label>{convertTo === 'celsius' ? 'Fahrenheit' : 'Celsius'} : </label>
                    <input type='number' name='temperature' value={temperature} onChange={(this.handleTemperature)}/>
                </div>
            </div>
        )
    }
};


            
export default TemperatureConverter;