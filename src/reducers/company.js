import { combineReducers } from 'redux';
import * as types from '../types';


const initialState = {
  companies: ["digshogi"]
}

function company(state=initialState, action) {
  console.log('woo', action.type)
  switch (action.type) {
    case types.GET_COMPANY_SUCCESS: 
      return { ...state, companies: action.payload.companies}
    case types.GET_COMPANY_FAILURE:
      return action.payload.error
    default: 
      return state
  }
}



export default company