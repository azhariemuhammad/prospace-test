import { combineReducers } from 'redux';
import * as types from '../types';


const initialState = {
  companies: []
}

function company(state=initialState, action) {
  switch (action.type) {
    case types.GET_COMPANY_SUCCESS: 
      return { ...state, companies: action.payload.companies}
    case types.GET_COMPANY_FAILURE:
      return action.payload.error
    case types.CREATE_COMPANY_SUCCESS:
      return { ...state, companies: action.payload.company}
      case types.CREATE_COMPANY_FAILURE:
      return action.payload.error
    default: 
      return state
  }
}



export default company