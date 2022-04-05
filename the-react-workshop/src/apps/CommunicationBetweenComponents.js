import {React, Component} from 'react';

class App extends Component {
    render() {
        const details = [
            {
                name : "Cat 1",
                number : 1000,
                endangered : true,
                photo : "https://http.cat/101"
            },
            {
                name : "Cat 2",
                number : 100000,
                endangered : false,
                photo : "https://http.cat/102"
            },
        ];

        return(
            <Animal details={details}>
                <h1>Cool Cats</h1>
            </ Animal>
        );
    };
};

// Receiving data from a child class component.
class Animal extends Component {
    render() {
        const details = this.props.details;

        return (
            <div>
                {this.props.children}
                {details.map((detail, index) => (
                    <AnimalDetails 
                        detail={detail} 
                        key={index}
                        image={<Photo path={detail.photo} name={detail.name} />} />
                ))}
            </div>
        );
    };
};

const AnimalDetails = (props) => {
    const {name, number, endangered, photo} = props.detail;
    return (
        <div>
            <p>Animal : {name}</p>
            <p>Numbers in the wild : {number}</p>
            <p>{endangered ? 'Endangered' : 'Not endangered'}</p>
            <img src={photo} alt={name} />
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
}

export default App;