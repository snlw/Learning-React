import React ,{Component} from 'react';

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            details : [
                {
                    name : "Cat 1",
                    number : 1000,
                    endangered : true,
                    photo : "https://http.cat/101",
                    donation : 100,
                    id : 1
                },
                {
                    name : "Cat 2",
                    number : 100000,
                    endangered : false,
                    photo : "https://http.cat/102",
                    donation : 5,
                    id : 2
                },
            ]
        };
    };

    removeList(id) {
        this.setState(prevState => {
            const list = prevState.details.filter(item => item.id !== id);
            return {prevState, details : list};
        });
    };

    addList(details) {
        this.setState(prevState => {
            const newId = prevState.details.length + 1;
            const newDetails = {...details, id : newId};
            return {...prevState, details : [...prevState.details, newDetails]};
        });
    };

    render() {

        return(
            // React.Fragment (but it doesnt work)
            // A common pattern in React is for a component to return multiple elements. Fragments 
            // let you group a list of children without adding extra nodes to the DOM
            <React.Fragment>
                <Animal 
                    details={this.state.details}
                    removeList={this.removeList.bind(this)}>
                <h1>Cool Cats</h1>
                </ Animal>
                <AnimalForm addList={this.addList.bind(this)} />
            </React.Fragment>
        );
    };
};

// Receiving data from a child class component.
class Animal extends Component {
    render() {
        const details = this.props.details;

        const WrapperComponent = withDonationColor(AnimalDetails);

        return (
            <div>
                {this.props.children}
                {details.map((detail, index) => (
                    <WrapperComponent 
                        key={index}
                        detail={detail} 
                        image={<Photo path={detail.photo} name={detail.name} />}
                        removeList={this.props.removeList}/>
                ))}
            </div>
        );
    };
};

class AnimalForm extends Component {
    constructor(props) {
        super(props);
        this.state ={
            name : '',
            number : 0,
            endangered : false,
            photo : '',
            donation : 0
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChange(event) {
        const input = event.target;
        const inputValue = this.getInputValue(input);
        console.log(`Target ${input}`);
        console.log(`Value ${inputValue}`);
        const inputName = input.name;
        this.setState({ [inputName] : inputValue});
    };

    getInputValue(target) {
        if (target.type === 'radio'){
            return target.value === 'yes'
        };
        return target.value;
    };

    handleSubmit(event) {
        // To prevent a browser reload/refresh when submitting the form.
        event.preventDefault();
        this.props.addList(this.state);
    };

    render() {
        return (
            <form>
                <h2>Add new animal</h2>
                <label>
                    <div className='title'>Name :</div>
                    <input type='text' value={this.state.name} name='name' onChange={this.handleChange}/>
                </label>
                <label>
                    <div className='title'>Number :</div>
                    <input type='text' value={this.state.number} name='number' onChange={this.handleChange}/>
                </label>
                <label>
                    <div className='title'>Endangered? :</div>
                    <input type='text' value={this.state.endangered} name='endangered' onChange={this.handleChange}/>
                </label>
                <label>
                    <div className='title'>Donation :</div>
                    <input type='text' value={this.state.donation} name='donation' onChange={this.handleChange}/>
                </label>
                <label>
                    <div className='title'>Photo :</div>
                    <input type='text' value={this.state.photo} name='photo' onChange={this.handleChange}/>
                </label>
                <button onClick={this.handleSubmit}>Add to the list</button>
            </form>
        )
    }
}

const AnimalDetails = (props) => {
    const {id, name, number, endangered, photo, donation} = props.detail;
    return (
        <div>
            <p>Animal : {name}</p>
            <p>Numbers in the wild : {number}</p>
            <p>{endangered ? 'Endangered' : 'Not endangered'}</p>
            <img src={photo} alt={name} />
            <p style={{color : props.donationColor}}>Donation Amount : {donation}</p>
            <button
                onClick={()=> props.removeList(id)}>Remove from the list.</button>
        </div>
    );
}

// Receiving data from a child functional component.
const AnimalFunctional = (props) => {
    const {name, number, endangered} = props;

    return (
        <div>
            <p>Animal : {name}</p>
            <p>Numbers in the wild : {number}</p>
            <p>{endangered ? 'Endangered' : 'Not endangered'}</p>
        </div>
    )
}

const Photo = (props) => {
    return <img src={props.path} alt={props.name}/>;
};

const withDonationColor = WrapperComponent => {
    return class extends Component {
        constructor(props){
            super(props);
            this.state = {
                donationColor : 'black'
            };
        };
        componentDidMount() {
            const donationAmount = this.props.detail.donationAmount;
            const donationColor = donationAmount < 50 ? 'red' : 'green';
            this.setState({donationColor});
        };

        render() {
            return (
                <WrapperComponent {...this.props} donationColor={this.state.donationColor}/>
            );
        };
    };
};

export default App;