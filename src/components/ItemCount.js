import React, {useState, useRef} from 'react';
import { Card, ButtonToolbar, ButtonGroup, Button, Overlay, Row , Col} from 'react-bootstrap';

const ItemCount = ({stock, initial}) => {
    const [initialValue, setInitialValue] = useState(initial);
    const [stockValue, setStockValue] = useState(stock - initial);

    /* para mostrar cantidad seleccionada en boton Agregar al carrito */
    const [addToCart, setAddToCart] = useState(initialValue);

    /* 
        estos estados son para componente 
        Overlay toolpit de  react-bootstrap
    */ 
    const [show, setShow] = useState(false);
    const target = useRef(null);
    /* */

    const onAddQty = () => {
        setInitialValue(stockValue > 0 && initialValue + 1);
        setStockValue(stockValue > 0 && stockValue - 1 );
        setAddToCart(initialValue + 1);//setea la cantidad de prod agre al carrito
    }

    const onSubstractQty = () => {
        setInitialValue(initialValue - 1 );
        setStockValue(initialValue > 0 && stockValue + 1 );
        setAddToCart(initialValue - 1);
    }

    const onAdd = () => {
        setShow(!show);
        alert('You clicked the button!');//alert de prueba
    }

    return (
        <div>
            <Row>
                <Col>
                <Card>
                <Card.Body>
                    {/*<Card.Title>Libro programacion Java</Card.Title>*/}
                    <h5>Cantidad: </h5>
                    <div className="container bg-light">
                        <div className="col-md-12 text-center">             
                        <ButtonToolbar aria-label="Toolbar with button groups" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 20}}>                    
                            <ButtonGroup className="me-2" aria-label="First group"> 
                                {/* cuando initialValue === 1 bloquea button substract */}
                                {initialValue === 0 ? <Button onClick={onSubstractQty} disabled> - </Button>: <Button onClick={onSubstractQty}> - </Button> }                       
                            </ButtonGroup>
                                <h2 style={{margin: 20}}> {initialValue} </h2>     
                            <ButtonGroup className="me-2" aria-label="Second group">
                                {/* cuando stock === 0 bloquea button add */}
                                {stockValue === 0 ? <Button onClick={onAddQty} disabled> + </Button>: <Button onClick={onAddQty}> + </Button>}                     
                            </ButtonGroup>
                            stock: {stockValue}
                        </ButtonToolbar>
                        
                        {
                            /* 
                                si valor es 0 desactiva boton
                            */
                            initialValue === 0 ?
                            <Button disabled variant="primary" ref={target} onClick={() => setShow(onAdd)}>Agregar al carrito</Button>: 
                            <Button variant="primary" ref={target} onClick={onAdd}>Agregar al carrito</Button>
                        }
                        <Overlay target={target.current} show={show} placement="right">
                            {({ placement, arrowProps, show: _show, popper, ...props }) => (
                            <div
                                {...props}
                                style={{
                                backgroundColor: 'rgba(255, 100, 100, 0.85)',
                                padding: '2px 10px',
                                color: 'white',
                                borderRadius: 3,
                                ...props.style,
                                }}
                            >
                               Se ha agregado {addToCart} producto/s
                            </div>
                            )}
                        </Overlay>
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