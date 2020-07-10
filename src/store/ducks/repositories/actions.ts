import { action } from 'typesafe-actions';
import { Repository, RepositoriesTypes } from './types';

export const fetchRequest = () => action(RepositoriesTypes.FETCH_REQUEST);
export const successRequest = (data: Repository[]) =>
  action(RepositoriesTypes.FETCH_SUCCESS, data);
export const failRequest = () => action(RepositoriesTypes.FETCH_FAIL);
