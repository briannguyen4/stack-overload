import React from 'react';
import AltNavbarContainer from '../navbar/alt_navbar_container';
import ReactQuill from 'react-quill';


class QuestionForm extends React.Component {
    constructor(props) {
        super(props);
        const author_id = this.props.author_id;
        this.state = {title: '', body: '', author_id: author_id};
        this.handleInput = this.handleInput.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const question = Object.assign({}, this.state);
        this.props.createQuestion(question)
         .then(({question})=> this.props.history.push(`/questions/${question.id}`)
      )
    }

    handleInput(type) {
        return (e) => {
            this.setState({
                [type]: e.target.value
            })
        };
    }

    handleChange(value) {
        this.setState({ body: value });
    }
  
    render() {
        return (
        <>
            <AltNavbarContainer />
            <div className="question-form-page">
                <p>Ask a public question</p>
                <form className="question-form" onSubmit={this.handleSubmit}>
                    <div className="question-form-title">
                        <label>Title
                            <p>Be specific and imagine you're asking a question to another person</p>
                            <input type="text" 
                            name="title"
                            onChange={this.handleInput("title")} 
                            value={this.state.title} 
                            />
                        </label>
                    </div>
                    <div className="question-form-body">
                        <label>Body
                            <p>Include all the information someone would need to answer your question</p>
                        </label>
                        <ReactQuill
                        value={this.state.body}
                        onChange={this.handleChange}
                        />
                    </div> 
                    <button>Post your question</button>
                </form>
            </div>
        </>
        );
    }

}

export default QuestionForm;
