import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import { useState } from 'react'
const Cart = (props) =>{
    // const [precio,setPrecio] = useState(0)
    // const updatePrice = () =>{

    //     setPrecio(props.counter.price)
    // }
const ItemLister = () =>{
    return props.items.map((e)=>
    <Dropdown.Item> {e.name} {e.price} <img src={e.img} style={{width:'50px'}} />x{e.qty}</Dropdown.Item>
    
    )
     }

    return(
        <div>
            <Dropdown autoClose={false}>
                <Dropdown.Toggle  variant="success" id="dropdown-basic">
                    <i className="fas fa-shopping-cart" 
                    style={{fontSize: '1.5em'}}></i>
                        <i style={{ 
                                backgroundColor:'red', 
                                borderRadius:"50%",
                                border:'2px solid black',
                                paddingLeft:'5px',
                                paddingRight:'5px',
                                fontStyle: 'normal'}}>
                                {props.counter.quantity}</i>
                                
                </Dropdown.Toggle>
            <Dropdown.Menu>
                <ItemLister/>
                <Dropdown.Item><strong>Total: ${props.counter.price}</strong></Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown> 
            
        </div>
    )
}
export default Cart