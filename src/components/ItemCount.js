import React, {useState} from 'react';
import { Card, ButtonToolbar, ButtonGroup, Button, Row, Col} from 'react-bootstrap';


const ItemCount = ({stock, initial, onAdd}) => {
    const [initialValue, setInitialValue] = useState(initial);
    const [stockValue, setStockValue] = useState(stock - initial);

    /* para mostrar cantidad seleccionada en boton Agregar al carrito */
    //const [addToCart, setAddToCart] = useState(initialValue);

    const onAddQty = () => {
        setInitialValue(stockValue > 0 && initialValue + 1);
        setStockValue(stockValue > 0 && stockValue - 1 );
        //setAddToCart(initialValue + 1);//setea la cantidad de prod agre al carrito
    }

    const onSubstractQty = () => {
        setInitialValue(initialValue - 1 );
        setStockValue(initialValue > 0 && stockValue + 1 );
        //setAddToCart(initialValue - 1);
    }

    return (
        <div>
            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            {/*<Card.Title>Libro programacion Java</Card.Title>*/}
                            <Card.Title>Cantidad</Card.Title>
                            <div className="container bg-light">
                                <div className="col-md-12 text-center">             
                                <ButtonToolbar aria-label="Toolbar with button groups" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 20}}>                    
                                    <ButtonGroup className="me-2" aria-label="First group"> 
                                        {/* cuando initialValue === 1 bloquea button substract */}
                                        {initialValue === 1 ? <Button onClick={onSubstractQty} disabled> - </Button>: <Button onClick={onSubstractQty}> - </Button> }                       
                                    </ButtonGroup>
                                        <h2 style={{margin: 20}}> {initialValue} </h2>     
                                    <ButtonGroup className="me-2" aria-label="Second group">
                                        {/* cuando stock === 0 bloquea button add */}
                                        {stockValue === 0 ? <Button onClick={onAddQty} disabled> + </Button>: <Button onClick={onAddQty}> + </Button>}                     
                                    </ButtonGroup>
                                    <br/>                              
                                </ButtonToolbar>
                                <Card.Text>
                                    stock: {stockValue}
                                </Card.Text>
                                <Button  onClick={() => {onAdd(initialValue)}}>Agregar al carrito</Button>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
           
           
        </div>
    )

}

export default ItemCount;