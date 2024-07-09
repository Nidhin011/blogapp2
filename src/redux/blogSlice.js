// import { createSlice } from '@reduxjs/toolkit';

// const initialState = [];

// const blogSlice = createSlice({
//   name: 'blog',
//   initialState,
//   reducers: {
//     addBlog: (state, action) => {
//       console.log('Adding blog:', action.payload);
//       state.push(action.payload);
//     },
//     updateBlog: (state, action) => {
//       console.log('Updating blog:', action.payload);
//       const { id, title, description, coverImage } = action.payload;
//       const existingBlog = state.find(blog => blog.id === id);
//       if (existingBlog) {
//         existingBlog.title = title;
//         existingBlog.description = description;
//         existingBlog.coverImage = coverImage; // Update coverImage if needed
//       }
//     },
//     deleteBlog: (state, action) => {
//       console.log('Deleting blog:', action.payload.id);
//       return state.filter(blog => blog.id !== action.payload.id);
//     },
//   },
// });

// export const { addBlog, updateBlog, deleteBlog } = blogSlice.actions;
// export default blogSlice.reducer;
// features/blog/blogSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    addBlog: (state, action) => {
      state.push(action.payload);
    },
    updateBlog: (state, action) => {
      const { id, title, description, coverImage } = action.payload;
      const existingBlog = state.find(blog => blog.id === id);
      if (existingBlog) {
        existingBlog.title = title;
        existingBlog.description = description;
        existingBlog.coverImage = coverImage;
      }
    },
    deleteBlog: (state, action) => {
      return state.filter(blog => blog.id !== action.payload.id);
    },
  },
});

export const { addBlog, updateBlog, deleteBlog } = blogSlice.actions;
export default blogSlice.reducer;
