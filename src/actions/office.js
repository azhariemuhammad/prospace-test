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
        console.log('ini bro', res.data)
        return dispatch(getOfficeByCompanySuccess(res.data))
      }
    })
  }
}

export const createOffice = (data) => {
  console.log('create office bro', data)
  return (dispatch, getState) => {
    return baseService().createOffice(data).then(res => {
      if (res.status === 201) {
        return dispatch(createCompanySuccess(res.data.name));
        console.log('data coy', data)
      }
    })
    .catch(() => {
      // return dispatch(getCompanyFailure({error: 'Oops! Something went wrong and we couldn\'t get list of companies'}));
    });
  }
}


export const createCompanySuccess = (name) => {
  return {
    type: types.CREATE_OFFICE_SUCCESS,
    payload: `success add new office: ${name}`
  }
}

// export const createCompanyFailure = (error) => {
//   return {
//     type: types.CREATE_COMPANY_FAILURE,
//     error
//   }
// }

// export const createCompany = (data) => {
//   return (dispatch, getState) => {
//     dispatch(createCompanyRequest(data))
//     return companyService().createCompany(data).then((res) => {
//       if (res.status === 200) {
//         return dispatch(createCompanySuccess(res.data))
//       }
//     })
//     .catch(() => {
//       return dispatch(createCompanyFailure({error: 'Oops! Something went wrong and we couldn\'t create company'}));
//     })
//   }
// }


// export const removeCompanySuccess = (id) => {
//   return {
//     type: types.REMOVE_COMPANY_SUCCESS,
//     id
//   }
// }

// export const removeCompanyFailure = (error) => {
//   return {
//     type: types.REMOVE_COMPANY_FAILURE,
//     error
//   }
// }

// export const removeCompany = (id) => {
//   console.log('action', id)
//   return (dispatch, getState) => {

//     return companyService().destroyCompany(id).then((res) => {
//       if (res.status === 200) {
//         return dispatch(removeCompanySuccess(res.data.id))
//         // console.log('hello ', res.data)
//       }
//     })
//     .catch(() => {
//       return dispatch(removeCompanyFailure({error: 'Oops! Something went wrong and we couldn\'t remove company'}));
//     })
//   }
// }
