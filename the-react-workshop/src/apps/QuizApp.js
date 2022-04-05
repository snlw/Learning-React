import {React, Component} from 'react';

class QuizApp extends Component {
    constructor(props){
        super(props);
        this.state = {
            questions : [
                {
                    question : 'What animal barks?',
                    options : ['dog', 'cat'],
                    answer : 'dog',
                    choice : ""
                },
                {
                    question : 'What animal meows?',
                    options : ['snake', 'cat'],
                    answer : 'cat',
                    choice : ""
                }
            ],
            score : 0
        };
    };

    updatePlayerScore() {
        const allQuestions = this.state.questions;
        const playerScore = allQuestions.filter(question => question.choice && question.answer === question.choice).length;
        console.log(playerScore);
        this.setState({score : playerScore});
    };

    checkAnswer(index,choice) {
        const answeredQuestion = this.state.questions[index];
        answeredQuestion.choice = choice;
        const allQuestions = this.state.questions;
        allQuestions[index] = answeredQuestion;
        this.setState({questions : allQuestions}, () => this.updatePlayerScore());
    };

    displayQuestion(index) {
        const question = this.state.questions[index];
        return (
            <div>
                <div className="score">
                    <p>Score : {this.state.score}</p>
                </div>
                <div className="questions">
                    <p>Question : {question.question}</p>
                    <button onClick = {() => this.checkAnswer(0, question.options[0])}>{question.options[0]}</button>
                    <button onClick = {() => this.checkAnswer(1, question.options[1])}>{question.options[1]}</button>
                </div>
            </div>
        );
    };

    renderQuestions() {
        return this.state.questions.map((question, index) => this.displayQuestion(index));
    };

    render() {
        return (
            <div>
                <p> Quiz App</p>
                {this.renderQuestions()}
            </div>
        )
    };

};

export default QuizApp;