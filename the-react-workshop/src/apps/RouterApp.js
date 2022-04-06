import React, {Component} from 'react';
import { BrowserRouter, Routes, Route, useLocation, Link, useMatch } from "react-router-dom";

class RouterApp extends Component {
    render() {
        return (
            // <div>
            //     <h1>Router App</h1>
            //     <hr />
            //     <p> href : {window.location.href} </p>
            //     <p> href : {window.location.pathname} </p>
            //     {RouteTo(window.location.pathname)}
            // </div>
            <BrowserRouter>
                <NavigationBar />
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/about' element={<AboutPage />} />
                    <Route path='/search' element={<Search />} />
                    <Route path='*' element={<NotFoundPage />} />
                </Routes>
            </BrowserRouter>
        )
    }
};

const RouteTo = path => {
    const paths = path.split('/').map(p => p.toLowerCase()).slice(1);
    switch (paths[0]){
        default:
            return (
                <div className='defaultRoute'>
                    Default Route {paths[0]}
                </div>
            )
    };
};

const AboutPage = () => {
    const {path, url} = useMatch();
    console.log(path);
    return (
        <BrowserRouter>
            <div className='AboutPage'>
                <h1>About</h1>
                <hr />
                <p>Hi I am Sean</p>
            </div>
            
            <Route path={`${path}/contact`}>
                <ContactPage />
            </Route>
        </BrowserRouter>
    );
};

const HomePage = () => {
    return (
        <div className='HomePage'>
            <h1>Home Page</h1>
            <hr />
            <p>Welcome</p>
        </div>
    );
};

const NotFoundPage =() => {
    return (
        <div className='HomePage'>
            <h1>Not Found</h1>
            <hr />
            <p>404</p>
        </div>
    );
};

const NavigationBar = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            &nbsp;
            <Link to="/about">About</Link>
        </div>
    );
};

const ContactPage =() => {
    return (
        <div className='ContactPage'>
            <h2>Contact Me</h2>
            <hr />
            <p>12345678</p>
        </div>
    );
};

const Search = props => {
    const query = new URLSearchParams(useLocation().search);
    const term = query.get('q');
    const animals = [
        'cat', 'dog', 'snake', 'cat'
    ];
    const returned = animals.filter(animal => animal === term);
    return (
        <div className='SearchPage'>
            <h1>Search Results</h1>
            <hr />
            <p>Found {returned.length} results</p>
            <ul>
                {returned.map(t => {
                    return (
                        <li key={t}>
                            {t}
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}

export default RouterApp;