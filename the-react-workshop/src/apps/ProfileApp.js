import React from 'react';
import Profile from '../components/Profile';
import LoadingIcon from '../components/LoadingIcon';

const user = {
    name : 'Cat',
    age : 1,
    image : "https://http.cat/100",
    color : 'black'
};

const App = () => {
    return (
        <div>
            <Profile user = {user}/>
            <LoadingIcon />
        </div>
    );
};

export default App;
