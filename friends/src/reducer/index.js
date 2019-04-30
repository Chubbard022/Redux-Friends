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
                error: '',
                loggingIn: true,
            }
        case LOGIN_SUCCESS:
            return{
                ...state,
                error: '',
                loggingIn: false
            }
        case LOGIN_FAILURE:
            return{
                ...state,
                loggingIn: false,
                error: action.payload.data.error
            }
        case FETCH_DATA_START:
            return{
                ...state,
                error: '',
                fetchingFriends: true,
            }
        case FETCH_DATA_SUCCESS:
            return{
                ...state,
                error: '',
                fetchingFriends: false,
            }
        case FETCH_DATA_FAILURE: 
            return{
                ...state,
                error:action.payload.data.error
            }
        default:
      return state;
    }
}
export default reducer;