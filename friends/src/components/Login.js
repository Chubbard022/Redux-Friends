import React from 'react';
import { connect } from 'react-redux';
import { LOGIN_START,LOGIN_SUCCESS,LOGIN_FAILURE} from "../actions";
import { login } from '../actions';


class Login extends React.Component{
    state={
        credentials: {
            username: '',
            password: ''
          }
    }

    handleChange = event => {
        this.setState({
            credentials: {
            ...this.state.credentials,
            [event.target.name]: event.target.value
        }});
    };
    login = event =>{
        event.preventDefault();

        this.props.login(this.state.credentials).then(()=>{
            this.props.history.push('/protected')
        })
    }

    render(){
        return(
            <form className="form" onSubmit={this.login}>
                <input 
                    type="text"
                    name='username'
                    value={this.state.username}
                    onChange={this.handleChange}
                />
                <input 
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                />
                <button>Login</button>
            </form>
        )
    }
}
const mapStateToProps = ({ loggingIn }) => ({loggingIn});
export default connect(mapStateToProps,{ login })(Login);
  