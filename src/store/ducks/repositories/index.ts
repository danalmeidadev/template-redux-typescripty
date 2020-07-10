import {Reducer} from 'redux'
import {RepositoriesState, RepositoriesTypes} from './types';

const INITIAL_STATE: RepositoriesState = {
  data: [],
  loading: false,
  error: false,
}

const Reducer: Reducer<RepositoriesState> = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case RepositoriesTypes.FETCH_REQUEST:
      return {...state, loading: true};
      case RepositoriesTypes.FETCH_SUCCESS:
        return {...state, loading: false, error: false, data: action.type}
        case RepositoriesTypes.FETCH_FAIL:
          return {...state, loading: false, error: true, data: []}
          default:
          return state;
  }
}
