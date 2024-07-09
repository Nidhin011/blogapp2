import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from './component/Layout';
import AddBlog from './component/AddBlog';
import BlogList from './component/BlogList';
import SinglePage from './component/SinglePage';
import Signup from './pages/Signup';
import Login from '../src/pages/Login';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Default route to redirect to login */}
      <Route path="/" element={<Navigate to="/login" />} />

      {/* Login and Signup routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Nested layout route */}
      <Route path="/layout" element={<Layout />}>
        {/* Default route under /layout */}
        <Route index element={<Navigate to="blogList" />} />

        {/* Nested routes under /layout */}
        <Route path="blogList" element={<BlogList />} />
        <Route path="add" element={<AddBlog />} />
        <Route path="edit/:id" element={<AddBlog />} />
        <Route path="blog/:id" element={<SinglePage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
