import React, {useState, useRef} from 'react';
import { Card, ButtonToolbar, ButtonGroup, Button, Overlay } from 'react-bootstrap';

const ItemCount = ({stock, initial}) => {
    const [initialValue, setInitialValue] = useState(initial);
    const [stockValue, setStockValue] = useState(stock - initial);

    /* 
        estos estados son para componente 
        Overlay toolpit de  react-bootstrap
    */ 
    const [show, setShow] = useState(false);
    const target = useRef(null);
    /* */

    const onAdd = () => {
        setInitialValue(stockValue > 0 && initialValue + 1);
        setStockValue(stockValue > 0 && stockValue - 1 );
    }

    const onSubstract = () => {
        setInitialValue(initialValue - 1 );
        setStockValue(initialValue > 0 && stockValue + 1 );
    }

    return (
        <div>
            <Card style={{ width: '18rem', margin: 20}}>
                <Card.Body>
                    <Card.Title>Libro programacion Java</Card.Title>
                    <h5>Cantidad: </h5> 
                    <div class="container bg-light">
                        <div class="col-md-12 text-center">             
                        <ButtonToolbar aria-label="Toolbar with button groups" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 20}}>                    
                            <ButtonGroup className="me-2" aria-label="First group"> 
                                {/* cuando initialValue == 0 bloquea button substract */}
                                {initialValue == 0 ? <Button onClick={onSubstract} disabled> - </Button>: <Button onClick={onSubstract}> - </Button> }                       
                            </ButtonGroup>
                                <h2 style={{margin: 20}}> {initialValue} </h2>     
                            <ButtonGroup className="me-2" aria-label="Second group">
                                {/* cuando stock == 0 bloquea button add */}
                                {stockValue == 0 ? <Button onClick={onAdd} disabled> + </Button>: <Button onClick={onAdd}> + </Button>}                     
                            </ButtonGroup>
                            stock: {stockValue}
                        </ButtonToolbar>
                        <Button variant="primary" variant="danger" ref={target} onClick={() => setShow(!show)}>Agregar al carrito</Button>
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
                                Todavia no hace nada
                            </div>
                            )}
                        </Overlay>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )

}

export default ItemCount;