import * as types from '../types';


const initialState = {
  offices: []
}

function office(state=initialState, action) {
  switch (action.type) {
    case types.GET_OFFICE_BY_COMPANY_SUCCESS: 
      return { ...state, offices: action.payload.offices}
    case types.GET_OFFICE_BY_COMPANY_FAILURE:
      return action.payload.error
    case types.CREATE_OFFICE_SUCCESS:
       return alert(action.payload)
    case types.CREATE_OFFICE_FAILURE:
      return alert(action.payload.error)
    default:
      return state
  }
}



export default office