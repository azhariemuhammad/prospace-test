import * as types from '../types';
import { baseService } from '../services';


export const getOfficeByCompanySuccess = (offices) => {
  return {
    type: types.GET_OFFICE_BY_COMPANY_SUCCESS,
    payload: {offices}
  }
}

export const getOfficeFailure = (error) => {
  return {
    type: types.GET_OFFICE_BY_COMPANY_FAILURE,
    error
  }
}

export const getOfficeByCompany = (companyId) => {
  return (dispatch, getState) => {
    return baseService().getOfficeByCompany(companyId).then(res => {
      if (res.status === 200) {
        return dispatch(getOfficeByCompanySuccess(res.data))
      }
    })
    .catch(() => {
      return dispatch(getOfficeFailure({error: 'Oops! Something went wrong and we couldn\'t get list of office'}));
    });
  }
}

export const createOffice = (data) => {
  return (dispatch, getState) => {
    return baseService().createOffice(data).then(res => {
      if (res.status === 201) {
        return dispatch(createOfficeSuccess(res.data.name));
      }
    })
    .catch(() => {
        return dispatch(createOfficeFailure({error: 'Oops! Something went wrong and we couldn\'t get list of office'}));
    });
  }
}


export const createOfficeSuccess = (name) => {
  return {
    type: types.CREATE_OFFICE_SUCCESS,
    payload: `success add new office: ${name}`
  }
}

export const createOfficeFailure = (error) => {
  return {
    type: types.CREATE_OFFICE_FAILURE,
    error
  }
}



export const removeOfficeSuccess = (name) => {
  return {
    type: types.REMOVE_OFFICE_SUCCESS,
    payload: `success remove office: ${name}`
  }
}

export const removeOfficeFailure = (error) => {
  return {
    type: types.REMOVE_OFFICE_FAILURE,
    error
  }
}
export const removeOfficeRequest = (id) => {
  return {
    type: types.REMOVE_OFFICE_REQUEST,
    id
  }
}

export const removeOffice = (officeId, companyId) => {
  return (dispatch, getState) => {
    dispatch(removeOfficeRequest(officeId))
    return baseService().destroyOffice(officeId, companyId).then((res) => {
      if (res.status === 200) {
        return dispatch(removeOfficeSuccess(res.data.name))
      }
    })
    .catch(() => {
      return dispatch(removeOfficeFailure({error: 'Oops! Something went wrong and we couldn\'t remove company'}));
    })
  }
}
