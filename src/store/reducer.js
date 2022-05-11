import {addUser, changeUser, deleteUser} from './action';
import {createReducer} from '@reduxjs/toolkit';

const initialState = {
    users: [],
  }

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addUser, (state, action)=>{
        state.users = [...state.users, action.payload];
    })
    .addCase(deleteUser, (state, action)=>{
        state.users =  state.users.filter((item)=> item.id!==action.payload);
    })
    .addCase(changeUser, (state, action)=>{
        state.users =  action.payload;
    })
})

export {reducer}