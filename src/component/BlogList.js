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
  Box,
  Tooltip,
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
  button: {},
  icon: {
    fontSize: 20,
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

const staticData = [
  {
    id: 1,
    title: "Sample Blog 1",
    description: "This is a sample blog description.",
    coverImage: "/images/img1.jpeg", // Path relative to public folder
  },
  {
    id: 2,
    title: "Sample Blog 2",
    description: "This is another sample blog description.",
    coverImage: "/images/img2.jpeg", // Path relative to public folder
  },
  // Add more static data as needed
];


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
    navigate(`/layout/edit/${id}`);
  };

  const handleView = (id) => {
    navigate(`/layout/blog/${id}`);
  };

  const handleChangePage = (event, value) => {
    setCurrentPage(value);
  };

  const truncateText = (text, maxChars) => {
    if (text.length <= maxChars) return text;
    const truncatedText = text.substr(0, maxChars);
    const lastSpace = truncatedText.lastIndexOf(" ");
    return truncatedText.substr(0, lastSpace) + "...";
  };

  return (
    <>
      <Grid
        container
        spacing={3}
        className={classes.container}
        style={{ marginTop: "30px" }}
      >
        {blogs.length === 0
          ? staticData.map((blog) => (
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
                      {truncateText(blog.description, 100)}
                    </Typography>
                  </CardContent>
                  <div className={classes.actions}>
                    <Box className={classes.box}>
                      <Button
                        className={classes.button}
                        variant="text"
                        component="span"
                        onClick={() => handleEdit(blog.id)}
                      >
                        <Tooltip title="Edit">
                          <EditIcon className={classes.icon} />
                        </Tooltip>
                      </Button>
                      <Button
                        className={classes.button}
                        variant="text"
                        component="span"
                        onClick={() => handleView(blog.id)}
                      >
                        <Tooltip title="View">
                          <VisibilityIcon className={classes.icon} />
                        </Tooltip>
                      </Button>
                      <Button
                        className={classes.button}
                        variant="text"
                        component="span"
                        onClick={() => {
                          handleDelete(blog.id);
                        }}
                      >
                        <Tooltip title="Delete">
                          <DeleteIcon className={classes.icon} />
                        </Tooltip>
                      </Button>
                    </Box>
                  </div>
                </Card>
              </Grid>
            ))
          : blogs.map((blog) => (
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
                      {truncateText(blog.description, 100)}
                    </Typography>
                  </CardContent>
                  <div className={classes.actions}>
                    <Box className={classes.box}>
                      <Button
                        className={classes.button}
                        variant="text"
                        component="span"
                        onClick={() => handleEdit(blog.id)}
                      >
                        <Tooltip title="Edit">
                          <EditIcon className={classes.icon} />
                        </Tooltip>
                      </Button>
                      <Button
                        className={classes.button}
                        variant="text"
                        component="span"
                        onClick={() => handleView(blog.id)}
                      >
                        <Tooltip title="View">
                          <VisibilityIcon className={classes.icon} />
                        </Tooltip>
                      </Button>
                      <Button
                        className={classes.button}
                        variant="text"
                        component="span"
                        onClick={() => {
                          handleDelete(blog.id);
                        }}
                      >
                        <Tooltip title="Delete">
                          <DeleteIcon className={classes.icon} />
                        </Tooltip>
                      </Button>
                    </Box>
                  </div>
                </Card>
              </Grid>
            ))}
      </Grid>

      {/* Pagination */}
      {blogs.length > 0 && (
        <Pagination
          count={Math.ceil(blogs.length / itemsPerPage)}
          page={currentPage}
          onChange={handleChangePage}
          className={classes.pagination}
        />
      )}
    </>
  );
};

export default BlogList;
