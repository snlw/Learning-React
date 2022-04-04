// We need to import the React library so that we can start building out our component.
import {React, Component} from 'react';

import Greeting from "./components/Greeting";

const FunctionalApp = () => (
  <div>
    <h1> The React Workshop App</h1>
    <Greeting name="Sean" />
    <Greeting name="Keith" />
  </div>
);

class ClassApp extends Component {
  constructor(props) {
    super(props);
    // Declare title value 
    this.title = "Sean's App";
    // Declare initial state value 
    this.state = {
      clickCounter : 0
    };
  };

  renderClickCount() {
    return <p>I have been clicked {this.state.clickCounter} times.</p>;
  };

  render() {
    return (
      <div>
      <h1>{this.title}</h1>
      <Greeting name="Sean" />
      <Greeting name="Keith" />
      <br />
      {this.renderClickCount()}
    </div>
    )
  };
}

export {
  FunctionalApp,
  ClassApp
};
