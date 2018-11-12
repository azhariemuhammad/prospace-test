import * as types from '../types';
import { baseService } from '../services';


export const getCompanySuccess = (companies) => {
  return {
    type: types.GET_COMPANY_SUCCESS,
    payload: {companies}
  }
}

export const getCompanyFailure = (error) => {
  return {
    type: types.GET_COMPANY_FAILURE,
    error
  }
}

export const getCompany = () => {
  return (dispatch, getState) => {
    return baseService().getCompany().then(res => {
      if (res.status === 200) {
        return dispatch(getCompanySuccess(res.data));
      }
    })
    .catch(() => {
      return dispatch(getCompanyFailure({error: 'Oops! Something went wrong and we couldn\'t get list of companies'}));
    });
  }
}

export const createCompanyRequest = (company) => {
  return {
    type: types.CREATE_COMPANY_REQUEST,
    name: company.name,
    address: company.address,
    revenue: company.revenue,
    phone: company.phone
  }
}

export const createCompanySuccess = (company) => {
  return {
    type: types.CREATE_COMPANY_SUCCESS,
    payload: `succes create company`
  }
}

export const createCompanyFailure = (error) => {
  return {
    type: types.CREATE_COMPANY_FAILURE,
    error
  }
}

export const createCompany = (data) => {
  data.phone = formatPhone(data.phone)
  return (dispatch, getState) => {
    dispatch(createCompanyRequest(data))
    return baseService().createCompany(data).then((res) => {
      if (res.status === 201) {
        return dispatch(createCompanySuccess(res.data))
      }
    })
    .catch(() => {
      return dispatch(createCompanyFailure({error: 'Oops! Something went wrong and we couldn\'t create company'}));
    })
  }
}


export const removeCompanySuccess = (id) => {
  return {
    type: types.REMOVE_COMPANY_SUCCESS,
    id
  }
}

export const removeCompanyFailure = (error) => {
  return {
    type: types.REMOVE_COMPANY_FAILURE,
    error
  }
}

export const removeCompanyRequest = (id) => {
  return {
    type: types.REMOVE_COMPANY_REQUEST,
    id
  }
}

export const removeCompany = (id) => {
  return (dispatch, getState) => {
    dispatch(removeCompanyRequest(id))
    return baseService().destroyCompany(id).then((res) => {
      if (res.status === 200) {
        return dispatch(removeCompanySuccess(res.data.id))
      }
    })
    .catch(() => {
      return dispatch(removeCompanyFailure({error: 'Oops! Something went wrong and we couldn\'t remove company'}));
    })
  }
}


const formatPhone = (state) => {
  const phone = `(${state.code}) ${state.number}`
  return phone
}