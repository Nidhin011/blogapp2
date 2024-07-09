import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Card,
  CardContent,
  Typography,
  Button,
  CardMedia,
  Grid,
  Pagination,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteBlog } from "../redux/blogSlice";
import { useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
    overflow: "hidden",
  },
  media: {
    height: 200,
    objectFit: "cover",
  },
  content: {
    padding: theme.spacing(2),
    flexGrow: 1,
  },
  actions: {
    display: "flex",
    justifyContent: "space-between",
    padding: theme.spacing(1),
  },
  button: {
    textTransform: "none",
  },
  container: {
    padding: theme.spacing(2),
  },
  pagination: {
    marginTop: theme.spacing(3),
    display: "flex",
    justifyContent: "center",
  },
}));

const defaultImage = "/default-image.jpg"; // Path to your default image

const BlogList = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const blogs = useSelector((state) => state.blog);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const handleDelete = (id) => {
    dispatch(deleteBlog({ id }));
  };

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };
  const handleView = (id) => {
    navigate(`/blog/${id}`);
  };

  const handleChangePage = (event, value) => {
    setCurrentPage(value);
  };

  const indexOfLastBlog = currentPage * itemsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - itemsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  return (
    <>
      <Grid
        container
        spacing={3}
        className={classes.container}
        style={{ marginTop: "30px" }}
      >
        {currentBlogs.length === 0 && (
          <Grid item xs={12}>
            <Typography variant="h6">No blogs found.</Typography>
          </Grid>
        )}
        {currentBlogs.map((blog) => (
          <Grid item xs={12} sm={6} md={3} key={blog.id}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                component="img"
                image={blog.coverImage || defaultImage}
                alt={blog.title}
              />
              <CardContent className={classes.content}>
                <Typography variant="h5" component="div">
                  {blog.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {blog.description}
                </Typography>
              </CardContent>
              <div className={classes.actions}>
                <Button
                  className={classes.button}
                  startIcon={<EditIcon />}
                  onClick={() => handleEdit(blog.id)}
                  variant="outlined"
                  color="primary"
                >
                  Edit
                </Button>
                <Button
                  className={classes.button}
                  startIcon={<DeleteIcon />}
                  onClick={() => handleDelete(blog.id)}
                  variant="outlined"
                  color="secondary"
                >
                  Delete
                </Button>
                <Button
                  className={classes.button}
                  startIcon={<VisibilityIcon />}
                  onClick={() => handleView(blog.id)}
                  variant="outlined" // Example: Ensure variant is specified
                  color="secondary" // Example: Ensure color is specified
                >
                  View
                </Button>
              </div>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Pagination
        count={Math.ceil(blogs.length / itemsPerPage)}
        page={currentPage}
        onChange={handleChangePage}
        className={classes.pagination}
      />
    </>
  );
};

export default BlogList;
