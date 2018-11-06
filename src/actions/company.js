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
  return dispatch => {
    console.log('wowowowowowo')
  }
  // return (dispatch, getState) => {
  //   return companyService.getCompany().then(res => {
  //     if (res.status === 200) {
  //       return dispatch(getCompanySuccess(res.data));
  //     }
  //   })
  //   .catch(() => {
  //     return dispatch(getCompanyFailure({error: 'Oops! Something went wrong and we couldn\'t get list of companies'}));
  //   });
  // }
}
