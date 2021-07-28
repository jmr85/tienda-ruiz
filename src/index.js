import React from "react";
import ReactDOM from "react-dom";
import NavBar from './components/NavBar'
import "./index.css";

const App = () => {
  return (
    <div id="nueva">    
      <h2 style={{textAlign: "center"}}>
        <i class="circular users icon"></i> 
        <br/>
        Tienda JMRuiz
      </h2>
      <NavBar/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
