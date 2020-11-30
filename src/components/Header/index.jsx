import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },

  link: {
    color: 'white',
    textDecoration: 'none',
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>

          <NavLink exact to="/" className={`${classes.title} ${classes.link}`}>
            <Button color="inherit">Home</Button>
          </NavLink>

          <NavLink className={classes.link} to="/box">
            <Button color="inherit">Box</Button>
          </NavLink>

          <NavLink className={classes.link} to="/rendering">
            <Button color="inherit">Rendering</Button>
          </NavLink>

          <NavLink className={classes.link} to="/students">
            <Button color="inherit">Students</Button>
          </NavLink>

          <NavLink className={classes.link} to="/todos">
            <Button color="inherit">Todos</Button>
          </NavLink>

          <a
            className={classes.link}
            href="https://zingmp3.vn/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button color="inherit">Go to Zing MP3</Button>
          </a>
        </Toolbar>
      </AppBar>
    </div>
  );
}
