import * as types from '../types';
import { companyService } from '../services';
import { dispatch } from 'rxjs/internal/observable/range';


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
  console.log('wooowjoijoijo')
  return (dispatch, getState) => {
    return companyService().getCompany().then(res => {
      if (res.status === 200) {
        return dispatch(getCompanySuccess(res.data));
      }
    })
    .catch(() => {
      return dispatch(getCompanyFailure({error: 'Oops! Something went wrong and we couldn\'t get list of companies'}));
    });
  }
}

export const createCompanySuccess = (company) => {
  console.log('dapat nin ', company)
  return {
    type: types.CREATE_COMPANY_SUCCESS,
    payload: {company}
  }
}

export const createCompanyFailure = (error) => {
  return {
    type: types.CREATE_COMPANY_FAILURE,
    error
  }
}

export const createCompany = (data) => {
  return (dispatch, getState) => {
    return companyService().createCompany(data).then((res) => {
      if (res.status === 200) {
        return dispatch(createCompanySuccess(res.data))
      }
    })
    .catch(() => {
      return dispatch(createCompanyFailure({error: 'Oops! Something went wrong and we couldn\'t get list of companies'}));
    })
  }
}