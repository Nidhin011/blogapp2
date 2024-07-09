import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Container, Typography, CardMedia, Box } from '@mui/material';

const SinglePage = () => {
  const { id } = useParams(); 
  const blogs = useSelector(state => state.blog);
  
 
  const blog = blogs.find(blog => blog.id === Number(id));


  if (!blog) {
    return (
      <Container>
        <Typography variant="h4" component="h1" gutterBottom>
          Blog not found
        </Typography>
      </Container>
    );
  }

  return (
    <Container>
      <Typography variant="h5" component="h1" sx={{marginTop:"10px"}}>
        {blog.title}
      </Typography>
    
        <CardMedia
          component="img"
          image={blog.coverImage}
          alt={blog.title}
          style={{ maxWidth: '100%', maxHeight: '400px', objectFit: 'cover',margin:"50px",border:"1px solid gray"}}
        />
     
      <Typography variant="body2" component="p">
        {blog.description}
      </Typography>
    </Container>
  );
};

export default SinglePage;
