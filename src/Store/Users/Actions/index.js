import {
    USER_CREATE_SUCCESS,
    USER_CREATE_ERROR,
    USER_CREATE_START,
    USERS_GET_START,
    USERS_GET_SUCCESS,
    USERS_GET_ERROR,
    SINGLE_USER_GET_START,
    SINGLE_USER_GET_ERROR,
    SINGLE_USER_GET_SUCCESS
} from './Constants';
import {createUser, fetchUsers, fetchSingleUser} from '../../../API/Requests';

export const createNewUser = ( nome = '', idade = '', idCasa = '', informacaoAdicional = '', blackList = '') => {  
  return(dispatch) => {
      dispatch({ type: USER_CREATE_START });
      createUser(nome, idade, idCasa, informacaoAdicional, blackList)
      .then(Info => {
          dispatch({type: USER_CREATE_SUCCESS, payload: Info})
      })
      .catch(() => dispatch({type: USER_CREATE_ERROR}))
  }
}

export const getUsersList = () => {
  return (dispatch) => {
    dispatch({ type: USERS_GET_START });

    fetchUsers()
      .then(Users => {
        dispatch({ type: USERS_GET_SUCCESS, payload: Users })
      })
      .catch(() => dispatch({ type: USERS_GET_ERROR }))
  }
}

export const getSingleUser = (id) => {
  return (dispatch) => {
    dispatch({ type: SINGLE_USER_GET_START });

    fetchSingleUser(id)
      .then(User => {
        dispatch({ type: SINGLE_USER_GET_SUCCESS, payload: User })
      })
      .catch(() => dispatch({ type: SINGLE_USER_GET_ERROR }))
  }
}