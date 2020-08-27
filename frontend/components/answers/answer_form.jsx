import React from 'react';
import ReactQuill from 'react-quill';
import { withRouter } from 'react-router-dom';


class AnswerForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.answer;
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

    componentDidMount() {
        this.props.getQuestion(this.props.questionId);
    }

    handleChange(value) {
        this.setState({ body: value });
    }

    handleSubmit(e) {
        e.preventDefault();
        debugger
        this.props.action(this.state, this.props.questionId)
    }
    
    render() {
        return (
            <>
            <form className="answer-form" onSubmit={this.handleSubmit}>
                <p>Your Answer</p>
                <ReactQuill
                    theme="snow"
                    modules={this.modules}
                    onChange={this.handleChange}
                    value={this.state.body || ""}
                />
                <br/>
                <button type="submit">Submit</button>
            </form>
            </>
          
          

            // <form className="qform" onSubmit={this.handleSubmit}>
            
            // <div className="qform-body">
            //     <label className="qform-label"><strong>Body</strong>
            //         <p>Include all the information someone would need to answer your question</p>
            //     </label>
            //     <ReactQuill
            //         theme="snow"
            //         modules={this.modules}
            //         onChange={this.handleChange}
            //         value={this.state.body}
            //     />
            // </div> 
            // {this.renderErrors()}
            // <button id="qform-button">{this.props.formType}</button>
            // </form>

        )
  }

}

export default withRouter(AnswerForm);