import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";

export const getPosts=createAsyncThunk("posts/getPosts",async ()=>{
    return fetch("https://api.spacexdata.com/v3/launches").then((res)=>
    res.json()
);
});
const postSlice=createSlice({
    name: "posts",
    initialState:{
        posts: [],
        loading:false ,
        
    },
    
    extraReducers:{        
        [getPosts.fulfilled]:(state,action)=>{
            // state.loading=false;
            state.posts=action.payload;
            
        },
        
    },

    
});
export const {doSomething} = postSlice.actions
export default postSlice.reducer
