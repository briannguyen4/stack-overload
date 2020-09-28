import { connect } from 'react-redux';
import QuestionSearch from './question_search';
import { getQuestions } from './../../actions/question_actions';

const mapStateToProps = (state) => {
    return {
        searchQuery: ownProps.match.params.searchQuery
        };
};

const mapDispatchToProps = dispatch => {
    return {
        getQuestions: () => dispatch(getQuestions())
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(QuestionSearch);