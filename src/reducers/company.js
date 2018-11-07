import { combineReducers } from 'redux';
import * as types from '../types';

const createCompany = (state = {}, action) => {
  console.log('ini createCompany Reducer', action)
  switch (action.type) {
    case types.CREATE_COMPANY_REQUEST:
      console.log('fdfjdiofjdofjdofjoi')
      return {
        name: action.name,
        address: action.address,
        revenue: action.revenue,
        phone: action.phone
      }
    default:
      return state;
  }
}

const initialState = {
  companies: []
}

function company(state=initialState, action) {
  switch (action.type) {
    case types.GET_COMPANY_SUCCESS: 
      return { ...state, companies: action.payload.companies}
    case types.GET_COMPANY_FAILURE:
      return action.payload.error
    case types.CREATE_COMPANY_REQUEST:
      return {...state, companies: [...state.companies, createCompany(undefined, action)] }
    case types.CREATE_COMPANY_SUCCESS:
       return { ...state, companies: action.payload}
      case types.CREATE_COMPANY_FAILURE:
      return action.payload.error
    default: 
      return state
  }
}



export default company