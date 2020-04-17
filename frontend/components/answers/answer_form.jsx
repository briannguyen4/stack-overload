import React from 'react';
import ReactQuill from 'react-quill';

class AnswerForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.answer;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.getQuestion(this.props.questionId);
    }

    handleChange(value) {
        this.setState({ body: value });
    }

    handleSubmit(e) {
        e.preventDefault();
        const answer = Object.assign({}, this.state);
        this.props.createAnswer(answer, this.props.questionId);
    }

    render() {
        return (
            <div id="answer-form">
                <form onSubmit={this.handleSubmit}>
                    <ReactQuill
                        onChange={this.handleChange}
                        value={this.state.body}
                    />
                    <br/>
                    <button type="submit">Submit</button>
                </form>
          </div>
        )
  }
}

export default AnswerForm;