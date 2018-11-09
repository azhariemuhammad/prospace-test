import { combineReducers } from 'redux';
import company from './company'
import office from './office'

export const rootReducer = combineReducers({
  company,
  office
});