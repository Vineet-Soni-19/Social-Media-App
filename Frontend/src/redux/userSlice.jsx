import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: "",
    fullname: "",
    username: "",
    image: "",
    _id: "",
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginRedux: (state, action) => {
            console.log(action.payload.data+"hello")
            state._id = action.payload.data._id;
            state.fullname = action.payload.data.fullname;
            state.username = action.payload.data.username;
            state.email = action.payload.data.email;
            state.image = action.payload.data.image;
        },
        logoutRedux: (state,action)=>{
            state._id = "";
            state.fullname = "";
            state.username = "";
            state.email = "";
            state.image = "";
        }
    }
})

export const { loginRedux,logoutRedux } = userSlice.actions;
export default userSlice.reducer