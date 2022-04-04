import {React, Component} from 'react';

class BlogApp extends Component {
    constructor(props){
        super(props);
        this.title = "Blog Post Writer";
        this.introduction = "Write your post here";
        this.characterLimit = 100;
        this.state = {
            post : "",
            characterCount : 0,
        };
        this.displayCharacterCount = this.displayCharacterCount.bind(this);
        this.displayInputBox = this.displayInputBox.bind(this);
        this.validateSubmission = this.validateSubmission.bind(this);
    };

    displayTextWithCharacterLimit = (limit) => {
        return <p>Must be at least {limit} characters</p>
    };

    displayInputBox = () => {
        return (
        <textarea  
            type='text'
            style={{
                height: "200px",
                width : "1000px",
                fontSize : "14px"
            }}
            onChange={this.displayCharacterCount}></textarea >)
    };

    displayCharacterCount(event) {
        const post = event.target.value;
        const characterCount = post.length;
        this.setState({post, characterCount});
    };

    validateSubmission() {
        const characterCount = this.state.characterCount;
        if(characterCount>this.characterLimit){
            alert(`Unable to submit because the character limit was exceeded.`)
        }
        else {
            alert(`Successfully submitted post!`);
        };
    }

    render() {
        return (
            <div>
                <p style={{fontSize : "24px",fontWeight : "bold"}}>{this.title}</p>
                <hr />
                <p style={{fontSize : "18px",fontWeight : "bold"}}>{this.introduction}</p>
                {this.displayTextWithCharacterLimit(this.characterLimit)}
                {this.displayInputBox()}
                <p>{this.state.characterCount} character{this.state.characterCount > 1 ? "s" : ""}!</p>
                <button 
                    onClick={this.validateSubmission}>Submit</button>
            </div>
            
        );
    };
};

export default BlogApp;