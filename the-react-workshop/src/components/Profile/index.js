import {React, Component} from 'react';
import "../../apps/Profile.css";

class Profile extends Component {
    render() {
        const {name, age, image, color} = this.props.user;
        return (
            <section className='profile'>
                <header>
                    <h1>{name}</h1>
                </header>
                <div>
                    <p>
                        <strong>Age : </strong>{age}</p>
                    <p>
                        <strong>Color : </strong>{color}</p>
                    <img src={image} />
                </div>
                <div className='loading'>

                </div>
            </section>
            
        );
    };
};

export default Profile;