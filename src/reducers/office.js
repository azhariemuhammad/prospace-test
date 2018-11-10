import * as types from '../types';


const initialState = {
  offices: []
}

function office(state=initialState, action) {
  switch (action.type) {
    case types.GET_OFFICE_BY_COMPANY_SUCCESS: 
      return { ...state, offices: action.payload.offices}
    case types.GET_OFFICE_BY_COMPANY_FAILURE:
      return action.error.error
    case types.CREATE_OFFICE_SUCCESS:
      return state
    case types.CREATE_OFFICE_FAILURE:
      alert(action.error)
      return state
    case types.REMOVE_OFFICE_REQUEST:
      return {...state, offices: state.offices.filter(({id}) => id !== action.id)}
    case types.REMOVE_OFFICE_SUCCESS:
      return state
    default:
      return state
  }
}



export default office