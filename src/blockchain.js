import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function Blockchain(){

  const styles = {
    container: {
      borderRadius: "5px",
      maxHeight: "100%",
      height: "70vh",
      margin: "0 auto",
      background: "#151414",
      display: "flex",
      flexDirection: "column",
      maxWidth: "950px",
    },
    chatContainer: {
      border: "1px solid #e0e0e0",
      borderRadius: "5px",
      maxHeight: "100%",
      height: "60vh",
      margin: "0px",
      background: "#514f62",
      display: "flex",
      flexDirection: "column",
      overflowY: "scroll",
    },

    navBar: {
      position: "fixed",
      bottom: 0,
      left: 0,
      width: "100%",
      background: "#282727",
      display: "flex",
      justifyContent: "space-around",
      padding: "10px 0",
    },

    navLink: {
      color: "white",
      textDecoration: "none",
    },

    logo: {
      width: "55px",
      height: "55px",
    },

    overflow: {
      overflowY: "scroll",
    },
    card: {
      borderRadius: "5px",
      paddingLeft: "20px",
      paddingRight: "20px",
      background: "#282727",
    },
    cardContent: {
      marginBottom: "0",
    },
    inputField: {
      marginBottom: "20px",
    },
    inputText: {
      border: "1px solid #e0e0e0",
      padding: "2px",
      borderRadius: "5px",
      width: "99.5%",
      marginTop: "15px",
      height: "3em",
      touchAction: "manipulation",
      WebkitTapHighlightColor: "transparent",

    },

  

    label: {
      fontWeight: "bold",
      color: "white",
    },
    centerAlign: {
      textAlign: "center",
    },
    button: {
      backgroundColor: "#4caf50",
      color: "white",
      padding: "15px 20px",
      borderRadius: "5px",
      cursor: "pointer",
      width: "100%",
    },
    buttonHover: {
      backgroundColor: "#45a049",
    },
    messageContainer: {
      marginBottom: "1px",
    },
    userMessage: {
      fontWeight: "bold",
      color: "white",
      paddingLeft: "40px",
      paddingRight: "40px",
     backgroundColor: "#62606f",
     paddingBottom: "30px",
     paddingTop: "10px",
     margin: "0px",
     
    },
    userName: {
      fontWeight: "bold",
      color: "lightblue",
     backgroundColor: "#62606f",
     paddingLeft: "20px",
     paddingTop: "10px",
     margin: "0px",
    
    },
    botMessage: {
      fontWeight: "bold",
      color: "#25c925",
      background: "#3f3e54",
      paddingLeft: "40px",
      paddingRight: "40px",
      whiteSpace: "pre-wrap", // Add this line to preserve line breaks
      paddingBottom: "30px",
      paddingTop: "5px",
      margin: "0px",
    },

    botName: {
      fontWeight: "bold",
      color: "lightblue",
      background: "#3f3e54",
      paddingLeft: "20px",
      paddingTop: "10px",
      margin: "0px",
      whiteSpace: "pre-wrap", // Add this line to preserve line breaks

    },

    title: {
      color: "white", // Add this line to preserve line breaks

    },

    
    botMessagePre: {
      backgroundColor: "#282727",
      padding: "10px",
      whiteSpace: "pre-wrap",
      color: "#25c925",
      paddingLeft: "20px",
      margin: "0px",
    },
  };


<div className="container" >
  {/* Your existing code... */}
  <div style={styles.navBar}>
    <Link to="/" style={styles.navLink}>
      Home
    </Link>
    <Link to="/chat" style={styles.navLink}>
      Chat
    </Link>
    <Link to="/blockchain" style={styles.navLink}>
      Blockchain
    </Link>
  </div>
</div>


}

export default Blockchain;