import React from 'react';
import ReactDOM from "react-dom";
import AltNavbarContainer from '../navbar/alt_navbar_container';
import Footer from '../main/footer'; 
import ReactQuill, { Quill } from "react-quill";

class QuestionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.question;
        this.handleInput = this.handleInput.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.modules = {   
            toolbar: [
              ["bold", "italic"],
              [{ font: [] }],
              ['link'],
              ['blockquote', 'code-block', 'image'],
              [{ size: ["small", false,  "large"] }],
              [{ list: "ordered" }, { list: "bullet" }],
              [{ color: [] }, { background: [] }],
              [{ align: [] }],
              ["clean"]
            ]
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state)
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
  
    componentWillUnmount() {
        this.props.clearErrors();
    }
    
    renderErrors() {
        return (
            <div className="question-form__container__form__errors">
            {this.props.errors.map((error, i) => (
                <div key={`error-${i}`}>{error}</div>
            ))}
        </div> 
        );
    }

    render() {
        return (
        <>
        <div className="question-form-page">
            <AltNavbarContainer />
            <div className="question-form">
                <div className='question-form__header'>
                {this.props.formType === "Post your question" ? (
                    <p>Ask a public question</p>) : null}
                </div>
                <div className="question-form__container">
                    <form className="question-form__container__form" onSubmit={this.handleSubmit}>
                        <label className="question-form__container__form__label"><strong>Title</strong>
                            <p>Be specific and imagine you're asking a question to another person</p>
                            <input type="text" 
                            name="title"
                            onChange={this.handleInput("title")} 
                            value={this.state.title} 
                            placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
                            />
                        </label>
                        <div>
                            <label className="question-form__container__form__label"><strong>Body</strong>
                                <p>Include all the information someone would need to answer your question</p>
                            </label>
                            <ReactQuill
                                className="question-form__container__form__quill"
                                theme="snow"
                                modules={this.modules}
                                onChange={this.handleChange}
                                value={this.state.body}
                            />
                        </div> 
                        <div className="button-area">
                            {this.renderErrors()}
                        </div>
                        <button className="question-form__container__form__btn">{this.props.formType}</button>
                    </form>

                </div>
            </div>
        </div>
        <div className="qformfooter"><Footer/></div>

        </>
        );
    }

}

export default QuestionForm;
