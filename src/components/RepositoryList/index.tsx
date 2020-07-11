import React, { Component, useEffect, useCallback } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { Repository } from '../../store/ducks/repositories/types';
import { ApplicationState } from '../../store';

import * as RepositoriesActions from '../../store/ducks/repositories/actions';
import RepositoryItem from '../RepositoryItem';

const RepositoryList: React.FC = () =>  {
  const dispatch1 = useDispatch();

  const {data: repo} = useSelector((state: ApplicationState) => state.repositories)


  const teste = useCallback(() => {
    dispatch1(RepositoriesActions.loadRequest())
  }, [dispatch1])

 const teste2 =  useEffect(() => {
    teste()
  }, [teste])


    return (
      <ul>
        {repo.map(repository => (
          <RepositoryItem key={repository.id} repository={repository} />
        ))}
      </ul>
    );
}

export default RepositoryList;
