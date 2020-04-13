import { connect } from 'react-redux'; 
import AltNavbar from './alt_navbar';
import { logout } from '../../actions/session_actions';

const mapStateToProps = ({ entities: { users }, session }) => {
    return {
        currentUser: users[session.id]
    };
}; 

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AltNavbar);