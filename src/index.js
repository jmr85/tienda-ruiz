import React from "react";
import ReactDOM from "react-dom";
import NavBar from './components/NavBar';
import ItemCount from './components/ItemCount';
import "./index.css";

const greeting = 'Bienvenido a la tienda';

const App = () => {
  return (
    <div id="nueva">    
      <h2 style={{textAlign: "center"}}>
        <i class="circular users icon"></i> 
        <br/>
        Tienda JMRuiz
      </h2>
      <NavBar/>
      <ItemCount stock={5} initial={1}/>
    </div>
  );
};

 




ReactDOM.render(<App />, document.getElementById("root"));
