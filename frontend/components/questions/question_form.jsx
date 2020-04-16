import React from 'react';
import AltNavbarContainer from '../navbar/alt_navbar_container';
import ReactQuill from 'react-quill';
import { Link } from 'react-router-dom';

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
  
    renderErrors() {
        debugger
        return (
          <ul className="qerrors">
            {this.props.errors.map((error, i) => (
              <li key={i}>{error}</li>
            ))}
          </ul>
        );
      }
    
    render() {
        return (
        <>
            <AltNavbarContainer />
            <div className="question-form-page">
                <div className='form-header'>
                    <p>Ask a public question</p>
                </div>
                <div className="qform-container">
                    <form className="qform" onSubmit={this.handleSubmit}>
                        <div className="qform-title">
                            <label className="qform-label"><strong>Title</strong>
                                <p>Be specific and imagine you're asking a question to another person</p>
                                <input type="text" 
                                name="title"
                                onChange={this.handleInput("title")} 
                                value={this.state.title} 
                                placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
                                />
                            </label>
                        </div>
                        <div className="qform-body">
                            <label className="qform-label"><strong>Body</strong>
                                <p>Include all the information someone would need to answer your question</p>
                            </label>
                            <ReactQuill
                            className="quill"
                            value={this.state.body}
                            onChange={this.handleChange}
                            />
                        </div> 
                        {this.renderErrors()}
                        <button id="qform-button">Post your question</button>
                    </form>

                </div>
                <div className="qform-tips">

                </div>
            </div>
        </>
        );
    }

}

export default QuestionForm;
