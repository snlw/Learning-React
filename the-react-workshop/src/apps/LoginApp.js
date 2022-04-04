import {React, Component} from 'react';

import {
    validateFieldIsNotEmpty,
    validateEmailFormat
} from '../components/Login/validateFieldValue';

class LoginApp extends Component {
    constructor(props){
        super(props);
        this.title = "Login";
        this.state = {
          username : "",
          password : "",
          passwordConfirmation : "",
          email : "",
          errors : []
        };
        this.validateEmailOnBlur = this.validateEmailOnBlur.bind(this);
        this.validatePasswordConfirmationOnBlur = this.validatePasswordConfirmationOnBlur.bind(this);
        this.validatePasswordOnBlur = this.validatePasswordOnBlur.bind(this);
        this.validateUsernameOnBlur = this.validateUsernameOnBlur.bind(this);
    };

    validateUsernameOnBlur(event) {
        const username = event.target.value;
        const errors = this.state.errors;
        console.log(`Validating username input ${username}...`);
        errors.push(validateFieldIsNotEmpty("Username", username));
        this.setState({
            username, 
            errors
            });
    };

    validatePasswordOnBlur(event) {
        const password = event.target.value;
        const errors = this.state.errors;
        console.log(`Validating password input ${password}...`);
        errors.push(validateFieldIsNotEmpty("Password", password));
        this.setState({
            password, 
            errors
        });
    };

    validateEmailOnBlur(event) {
        const email = event.target.value;
        const errors = this.state.errors;
        console.log(`Validating email input ${email}...`);
        errors.push(validateEmailFormat("Email", email));
        this.setState({
            email, 
            errors
        });
    };

    validatePasswordConfirmationOnBlur(event) {
        const passwordConfirmation = event.target.value;
        const errors = this.state.errors;
        console.log(`Validating password confirmation input ${passwordConfirmation}...`);
        if (passwordConfirmation !== this.state.password){
            errors.push("Password Confirmation must matched password")
        };
        this.setState({
            passwordConfirmation,
            errors
        });
    }

  displayErrors(){
      return (
          <div className = "errors" style={{color : 'red'}}>
              {this.state.errors.map((error, i) => <p key={`error-${i}`}>{error}</p>)}
          </div>
      );
  };

  displayForm() {
    return (
      <div>
        Username : <input type="text" onBlur={this.validateUsernameOnBlur}/><br />
        Password : <input type="text" onBlur={this.validatePasswordOnBlur}/><br />
        Password Confirmation : <input type="text" onBlur={this.validatePasswordConfirmationOnBlur}/><br />
        Email : <input type="text" onBlur={this.validateEmailOnBlur}/><br />
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
        <hr />
        {this.displayErrors()}
    </div>
      
  )}
;}

export default LoginApp;