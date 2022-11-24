import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: null,
  posts: null,
  // copy: false,
}

const baseSlice = createSlice({
  name:'base',
  initialState,
  reducers:{
    addCategories : (state,action) =>{
      state.categories = action.payload
      console.log(state.categories)
    },
    addPosts: (state,action) =>{
      state.posts = action.payload
      console.log(state.posts)
    },
    // setCopy:(state,action)=>{
    //   state.copy = action.payload
    //   console.log(state.copy)
    // }
  }
})

export default baseSlice.reducer
export const {addCategories, addPosts} = baseSlice.actions