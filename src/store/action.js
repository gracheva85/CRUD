import {createAction} from '@reduxjs/toolkit';  

const Action = {
    ADD_USER: 'ADD_USER',
    DELETE_USER: 'DELETE_USER',
    CHANGE_USER: 'CHANGE_USER',
  }
  
const addUser = createAction(Action.ADD_USER);
const deleteUser = createAction(Action.DELETE_USER);
const changeUser = createAction(Action.CHANGE_USER);

  export {Action, addUser, deleteUser, changeUser};