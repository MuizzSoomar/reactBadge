import Home from "./Home";
import Trending from "./Trending";
import Feedback from "./Feedback";
import React from "react";
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
    block: {
        display: "block"
    },  
    appBar: {
        background: 'black',
        borderBottom: "3px solid #555"
    },
    buttons: {
        edge: "start",
        fontSize: 18,
        fontWeight: "bold",
        color: "white",
    }
  })); 


function MenuBar() {
const classes = useStyles();

  return (
    <Router>
      <div>
            <AppBar position="static" className = {classes.appBar}>
                <Toolbar className = {classes.AppBar}>
                        <Link to = "/">
                            <Button className= {classes.buttons}>
                                Home
                            </Button>
                        </Link>
                        <Link to = "/trending">
                            <Button  className= {classes.buttons}>
                                Trending
                            </Button>
                        </Link>
                        <Link to = "/feedback">
                            <Button  className= {classes.buttons}>
                                Feedback
                            </Button>    
                        </Link>
                </Toolbar>
            </AppBar>  
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/trending">
            <Trending />
          </Route>
          <Route path="/feedback">
            <Feedback />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default MenuBar;
