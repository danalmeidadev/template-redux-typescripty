/**
 * Actions types
 */

export enum RepositoriesTypes {
  FETCH_REQUEST = '@repositories/FETCH_REQUEST',
  FETCH_SUCCESS = '@repositories/FETCH_SUCCESS',
  FETCH_FAIL = '@repositories/FETCH_FAIL',
}

/**
 * Data Types
 */

export interface Repository {
  id: number;
  name: string;
}

/**
 * State types
 */

export interface RepositoriesState {
  readonly data: Repository[];
  readonly loading: boolean;
  readonly error: boolean;
}
