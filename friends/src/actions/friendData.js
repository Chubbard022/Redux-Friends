import axios from 'axios';

import axiosWithAuth from "../utils/axiosAuth";

export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

const URL = "http://localhost:5000"

export const friendData = () =>dispatch =>{
    axiosWithAuth()
    .get(`${URL}api/friends`)
        .then(res=>{
            dispatch({type: FETCH_DATA_START, payload: res.data.data})
        })
        .catch(err=>{
            console.log(err.response)
            dispatch({type:FETCH_DATA_FAILURE,payload: err.response})
        })
    
}
