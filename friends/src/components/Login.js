import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';


class Login extends React.Component{
    state={
        credentials:{
            username: '',
            password: ''
        }
    }


    render(){
        return(
            <form onSubmit={this.login}>
                <input 
                    type="text"
                    name='username'
                    value="this.state.username"
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
export default Login;