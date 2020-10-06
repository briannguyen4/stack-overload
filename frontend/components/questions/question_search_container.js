import { connect } from 'react-redux';
import QuestionSearch from './question_search';
import { searchQuestions, clearQuestionSearch } from './../../actions/question_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        searchQuery: ownProps.match.params.searchQuery,
        questions: Object.values(state.entities.questions)
        };
};

const mapDispatchToProps = dispatch => {
    return {
        search: (searchQuery) => dispatch(searchQuestions(searchQuery)),
        clearSearch: () => dispatch(clearQuestionSearch())
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(QuestionSearch);