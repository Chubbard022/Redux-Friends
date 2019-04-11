import React from 'react';
import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE
} from '../actions'

const initialState = {
    deletingFriend: false,
    fetchingFriends: false,
    friends: [],
    loggingIn: false,
    savingFriends: false,
    updatingFriend: false,
    error: null
}

const reducer = (state=initialState, action) =>{
    switch(action.type){
        case LOGIN_START:
        return{
            ...state,
            deletingFriend: false,
            fetchingFriends: false,
            loggingIn: true,
            savingFriends: false,
            updatingFriend: false,
            error: null
        }
        case LOGIN_SUCCESS:{
        return{}
        }
        default:
      return state;
    }
}
export default reducer;