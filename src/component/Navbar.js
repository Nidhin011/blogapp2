// import React from 'react';
// import { AppBar, Toolbar, Typography, Button } from '@mui/material';
// import { Link } from 'react-router-dom';


// const Navbar = () => {

 
//   return (
//     <AppBar position="static">
//       <Toolbar>
//         <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//           BlogApp
//         </Typography>
//         <Button color="inherit" component={Link} to="/login">Login</Button>
//         <Button color="inherit" component={Link} to="/signup">Signup</Button>
//         <Button color="inherit" component={Link} to="/add">Add Blog</Button>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;

import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          BlogApp
        </Typography>
        <Button color="inherit" component={Link} to="/">Login</Button>
        <Button color="inherit" component={Link} to="/signup">Signup</Button>
        <Button color="inherit" component={Link} to="/layout/add">Add Blog</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

