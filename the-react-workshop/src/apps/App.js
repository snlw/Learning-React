// We need to import the React library so that we can start building out our component.
import {React, Component} from 'react';

import Greeting from "../components/Greeting";
import InventoryItem from '../components/BuyStuff';

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
};

class BuyStuffApp extends Component {
  constructor(props) {
    super(props);
    this.title = "BuyStuff";
  };

  render() {
    return (
      <div>
      <h1>{this.title}</h1>
      <InventoryItem itemName="Shoe" itemQuantity="5" />
      <InventoryItem itemName="Sock" itemQuantity="3" />
    </div>
    )
  };

};

class ConditionalRenderingApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      showSecret  : false
    };
    this.toggleSecretMessage = this.toggleSecretMessage.bind(this);
  };
  
  displaySecretMessage() {
    // Guard clause is a simple statement at the top of the function that verifies input, properties
    // or state and returns early to avoid unnecessary work.
    if (!this.state.showSecret){
      return;
    }
    return (
      <p>There is no secret.</p>
    );
  };
  
  toggleSecretMessage(event) {
    const showSecret = !this.state.showSecret;
    this.setState({showSecret});
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <button
          style = {{
            fontWeight : "bold",
            height : "10em"
          }}
          onClick = {this.toggleSecretMessage}
          >Click to show the secret message!</button>
          {this.state.showSecret ? this.displaySecretMessage() : ""}
      </div>
    );
  }
}

class UnderstandingLifecycleApp extends Component {
  // First part of the mount lifecycle.
  constructor(props) {
    super(props);
    console.log('Constructor');
    this.state = {
      messages : [],
      loading : true
    };
  };

  renderProfile() {
    if (this.state.loading){
      return (<div>
        Loading...
      </div>)
    }
    if (this.state.messages.length > 0){
      return (
        <ul>
          {this.state.messages.map((msg, idx)=> <li key={`msg-${idx}`}>{msg}</li>)}
        </ul>
      )
    }
    else {
      return (
        <ul>
          No Messages
        </ul>
      );
    };
  };

  // Last part of the mount lifecycle
  componentDidMount() {
    console.log('Component Did Mount');
    setTimeout(() => this.setState({
      messages : ['hi', 'yo'],
      loading : false
    }), 10000);
  };

  // Last part of the update lifecycle
  componentDidUpdate(prevProps, prevState) {
    console.log(`prevProps : ${prevProps}`);
    console.log(`prevState : ${prevState}`);
  };

  render() {
    // Second part of the mount lifecycle.
    console.log('Render')
    return (
      <div>
        <h1>User Profile</h1>
        <hr />
        {this.renderProfile()}
        
      </div>
    )
  }
}

export {
  FunctionalApp,
  ClassApp,
  BuyStuffApp,
  ConditionalRenderingApp,
  UnderstandingLifecycleApp
};
