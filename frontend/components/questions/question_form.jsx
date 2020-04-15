import React from 'react';
import AltNavbarContainer from '../navbar/alt_navbar_container';
import ReactQuill from 'react-quill';


class QuestionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {title: '', body: ''};
    }
  
    render() {
        return (
            <>
            <AltNavbarContainer />
            <div className="question-form-body">
                <ReactQuill
                modules={{ toolbar: toolbarOptions }}
                value={this.state.body}
                />
            </div>
            </>
        );
    }

}

export default QuestionForm;
