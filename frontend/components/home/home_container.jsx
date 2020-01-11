import { connect } from 'react-redux';
import Home from './home';
import { logout } from '../../actions/session_actions';

const mSTP = (state) => ({
    currentUser: state.session.id
});

const mDTP = dispatch => ({
    logout: () => dispatch(logout())
})

export default connect(mSTP, mDTP)(Home);