import React from "react";
import ReactDOM from "react-dom";
import NavBar from './components/NavBar';
import ItemCount from './components/ItemCount';
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import {Container, Row, Col} from 'react-bootstrap';
import "./index.css";

const App = () => {
  return (
    <div id="nueva">    
      <h2 style={{textAlign: "center"}}>
        <i class="circular users icon"></i> 
        <br/>
        Dev Bookstore
      </h2>
      <NavBar/>
      <Container>
        <Row>
          <Col xs={6} md={4}> <ItemListContainer/> </Col>
          <Col xs={6} md={4}> <ItemDetailContainer/> </Col>
          <Col xs={6} md={4}> <ItemCount stock={5} initial={1}/> </Col>
        </Row>
      </Container>
    </div>
  );
};

 




ReactDOM.render(<App />, document.getElementById("root"));
