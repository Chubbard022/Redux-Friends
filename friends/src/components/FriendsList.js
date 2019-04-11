import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { friendData } from "../actions"

class FriendsList extends React.Component{
    componentDidMount(){
        this.props.getData();
    }
    render(){
        return(
        <div>
            hello
        </div>
        )
    }
}

export default FriendsList;