import React from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    
    backgroundblack: {
        backgroundColor: "#000000"
    },  
    whiteTitle: {
        color:'white',
        textAlign: 'center',
        fontSize: "4rem",
        paddingTop: theme.spacing(20),
    },
  })); 

  const Home = (props) => {
    const classes = useStyles();

    return (
<div
    style={{
        backgroundColor: 'black',
        width: '100%',
        height: '100vh'
        }}>

    <div className = {classes.backgroundblack}>
        <div className = {classes.whiteTitle}> 
            GIPHY
        </div>
    </div>
</div>
    )
}

export default Home; 