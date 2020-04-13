import React from 'react';
import AltNavbarContainer from '../navbar/alt_navbar_container';

class QuestionIndex extends React.Component {
    constructor(props) {
        super(props);
    }
  
    render() {
        return (
            <>
            <AltNavbarContainer />
            <div className="questions-body">
                <h1>Questions</h1>
            </div>
            </>
        );
    }

}

export default QuestionIndex;
