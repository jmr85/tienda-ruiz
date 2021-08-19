import React from "react";
import NavBar from './components/NavBar';
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import PageNotFound from './components/PageNotFound';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import "./index.css";

const App = () => {
  return (
    <Router>
        <div id="nueva">    
        <h2 style={{textAlign: "center"}}>
            <i className="circular users icon"></i> 
            <br/>
            Dev Bookstore
        </h2>
        
        <NavBar/>
        <Switch>
            <Route exact path="/" component={ItemListContainer} />
            <Route exact path="/category/:id" component={ItemListContainer} />
            <Route exact path="/item/:id" component={ItemDetailContainer} />
            <Route path="*" component={PageNotFound} />
        </Switch>
        
          
                    
            
       
        
        </div>
    </Router>
  );
};

export default App;