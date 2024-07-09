import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBlog, updateBlog } from "../redux/blogSlice";
import { useNavigate, useParams } from "react-router-dom";
import { Container, TextField, Button } from "@mui/material";

const AddBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

 
  const blogs = useSelector((state) => state.blog);
  const existingBlog = blogs.find((blog) => blog.id === Number(id)) || null;

  
  const [title, setTitle] = useState(existingBlog ? existingBlog.title : "");
  const [description, setDescription] = useState(
    existingBlog ? existingBlog.description : ""
  );
  const [coverImage, setCoverImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(
    existingBlog ? existingBlog.coverImage : null
  );


  useEffect(() => {
    if (existingBlog) {
      setTitle(existingBlog.title);
      setDescription(existingBlog.description);
      setImagePreview(existingBlog.coverImage);
    }
  }, [existingBlog]);

 
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCoverImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

 
  const handleSubmit = (e) => {
    e.preventDefault();

    const blogData = {
      id: existingBlog ? existingBlog.id : Date.now(),
      title,
      description,
      coverImage: imagePreview, 
    };

    console.log("Submitting blog:", blogData);

    if (existingBlog) {
      dispatch(updateBlog(blogData));
    } else {
      dispatch(addBlog(blogData));
    }

    navigate("/layout/blogList"); 
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          margin="normal"
          required
          multiline
          rows={4}
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          style={{ margin: "10px 0" }}
        />
        {imagePreview && (
          <img
            src={imagePreview}
            alt="Preview"
            style={{ maxWidth: "100%", maxHeight: "200px", marginTop: "10px" }}
          />
        )}
        <Button type="submit" variant="contained" color="primary">
          {existingBlog ? "Update" : "Add"} Blog
        </Button>
      </form>
    </Container>
  );
};

export default AddBlog;
