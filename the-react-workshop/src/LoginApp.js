import {React, Component} from 'react';

import validateUsername from './components/Login/validateUsername';

class LoginApp extends Component {
    title = "Login";
    state = {
      username : "",
      password : "",
      passwordConfirmation : "",
      email : "",
      errors : []
  };

  validateUsernameOnBlur = this.validateUsernameOnBlur.bind(this);

  validateUsernameOnBlur = (event) => {
      console.log(`Validating username input ${event.target.value}...`);
      this.setState();
  };

  displayForm() {
    return (
      <div>
        Username : <input type="text" onBlur={this.validateUsernameOnBlur}/><br />
        Password : <input type="text" /><br />
        Password Confirmation : <input type="text" /><br />
        Email : <input type="text" /><br />
        <button onClick={this.submitForm}>Submit</button>
      </div>
    )
  };

  submitForm(event) {
    console.log(event)
  };

  render() {
    return (
    <div >
        <p style={{ "textAlign": "left","fontSize" : "48px"}}>{this.title}</p>
        <hr />
      {this.displayForm()}
    </div>
      
  )}
;}

export default LoginApp;