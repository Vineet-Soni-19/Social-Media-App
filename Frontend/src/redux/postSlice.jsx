import { createSlice } from "@reduxjs/toolkit";

const initialState={
    postList: []
}

export const postSlice=createSlice({
    name: 'post',
    initialState,
    reducers:{
        setDataPost: (state, action)=>{
            state.postList=[...action.payload]
        }
    }
})

export const { setDataPost } = postSlice.actions;
export default postSlice.reducer