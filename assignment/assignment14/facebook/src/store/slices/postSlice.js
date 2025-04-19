import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const getPost = createAsyncThunk(
    "post/getPost",
    async()=>{
        const postData = await fetch('https://dummyjson.com/posts')
        const result = await postData.json();
        return result.posts;
    }
)

export const deletes = createAsyncThunk(
    "post/deletes",
    async()=>{
        const postData = await fetch('https://dummyjson.com/posts')
        const result = await postData.json();
        return result;
    }
)


const initialState = {
    post: [],
    error: false,
    loading: false,
}


const postSlice = createSlice({
    name: "post",
    initialState,
    reducers:{},
    extraReducers: (builder) =>{
        builder
        .addCase(getPost.pending ,(state)=>{
            state.error = false;
            state.loading = true
        })
        .addCase(getPost.fulfilled ,(state, action)=>{
            state.loading = false;
            state.post = action.payload
        })
        .addCase(getPost.rejected ,(state, action)=>{
            state.loading = false;
            state.error = true
        })
    }
    
})


export default postSlice.reducer