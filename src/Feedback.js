import React from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    labels: {
        color: "white"
    },
    app: {
        height: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
    },
    input: {
        padding: "10px",
        width: "300px",
        maxWidth: "90%",
        fontSize: "1rem",
        letterSpacing: "1px"
    },
    btn: {
        marginTop: "1 rem",
        padding: "10px 40px",
        background: "white",
        color: "black",
        textTransform: "uppercase",
    },
    messages: {
        color: "red",
        fontSize: "16px",
    }
  })); 

const Feedback = (props) => {
    const classes = useStyles();
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [feedback, setFeedback] = React.useState("");

    const handleSubmit = (event) => {
        console.log(`
          Firstname: ${firstName}
          Lastname: ${lastName}
          Email: ${email}
          Feedback: ${feedback}
        `);

        event.preventDefault();
    }    

    return (
        <div
        style={{
            backgroundColor: 'black',
            width: '100%',
            height: '100vh'
          }}>

    <div  className = {classes.app} > 
        <form onSubmit= {handleSubmit}>
                <p>
                    <input placeholder= "First Name" className = {classes.input} name = "firstName" type = "text" value = {firstName} onChange={e => setFirstName(e.target.value)} required></input>
                </p>
                <p>
                    <input placeholder= "Last Name" className = {classes.input} name = "lastName" type = "text" value = {lastName} onChange={e => setLastName(e.target.value)} required ></input>
                </p>
                <p>
                    <input placeholder= "Email" className = {classes.input} name = "email" type = "email" value = {email} onChange={e => setEmail(e.target.value)} required ></input>
                </p>
                <p>
                    <input placeholder= "Feedback" className = {classes.input} name = "feedback" type = "text" value = {feedback} onChange={e => setFeedback(e.target.value)} required ></input>
                </p>

            <button className = {classes.btn} data-testid= "submit-button" type = "submit" >
                Submit
            </button>
            
        </form>
    </div>
  </div>
    )
}

export default Feedback; 