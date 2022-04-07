import PropTypes from "prop-types";

const DisplayDetails = (props) => {
    return (
        <div>
            <h1>Name : {props.name}</h1>
            <p>Age : {props.age}</p>
            <p>Married : {props.isMarried ? 'Yes' : 'No'}</p>
        </div>
    )
};

DisplayDetails.PropTypes ={
    name : PropTypes.string,
    age : PropTypes.number,
    isMarried : PropTypes.bool
};

export default DisplayDetails;