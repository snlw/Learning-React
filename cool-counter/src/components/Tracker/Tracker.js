import './Tracker.css';

const Tracker = (props) => {
    return (
        <div className='Tracker'>
            <p>{props.value}</p>
        </div>
    )
};

export default Tracker;