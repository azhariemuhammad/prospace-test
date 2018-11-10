import * as types from '../types';


const initialState = {
  companies: []
}

const createCompany = (state, action) => {
  switch (action.type) {
    case types.CREATE_COMPANY_REQUEST:
      return {
        id: state.length + 1,
        name: action.name,
        address: action.address,
        revenue: action.revenue,
        phone: action.phone
      }
    default:
      return state;
  }
}

function company(state=initialState, action) {
  switch (action.type) {
    case types.GET_COMPANY_SUCCESS: 
      return { ...state, companies: action.payload.companies}
    case types.GET_COMPANY_FAILURE:
      alert(action.error.error)
      return 
    case types.CREATE_COMPANY_REQUEST:
      return {...state, companies: [...state.companies, createCompany(state.companies, action)] }
    case types.CREATE_COMPANY_SUCCESS:
      window.confirm(action.payload)
      return state
    case types.CREATE_COMPANY_FAILURE:
      return action.payload.error
    case types.REMOVE_COMPANY_REQUEST:
    return {...state, companies: state.companies.filter(({id}) => id !== action.id)}
    case types.REMOVE_COMPANY_SUCCESS:
      return state
    default:
      return state
  }
}



export default company