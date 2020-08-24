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
            clipboard: {
                matchVisual: false
            },
            toolbar: [
              [{ font: [] }],
              [{ size: ["small", false, "large", "huge"] }],
              ["bold", "italic", "underline"],
              [{ list: "ordered" }, { list: "bullet" }],
              [{ align: [] }],
              [{ color: [] }, { background: [] }],
              ["clean"]
            ]
          };
      
          this.formats = [
            "font",
            "size",
            "bold",
            "italic",
            "underline",
            "list",
            "bullet",
            "align",
            "color",
            "background"
          ];

    }

    handleSubmit(e) {
        e.preventDefault();
        // let parsed = this.state.body;
        // this.setState({body: parsed});
        // debugger
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
                {this.props.formType === "Post your question" ? (
                    <p>Ask a public question</p>) : null}
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
                                theme="snow"
                                modules={this.modules}
                                formats={this.formats}
                                onChange={this.handleChange}
                                value={this.state.body}
                            />
                        </div> 
                        {this.renderErrors()}
                        <button id="qform-button">{this.props.formType}</button>
                    </form>

                </div>
                <div className="qform-tips">

                </div>
            </div>
            <div className="qformfooter"><Footer/></div>

        </>
        );
    }

}

export default QuestionForm;
