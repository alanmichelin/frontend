import Item from './components/item.jsx'
import NavigationBar from './components/navbar.jsx';
import './App.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useState,  } from 'react';
import Cart from './components/Cart'
import products from './components/items.jsx';
import Filter from './components/Filter'
import Notification from './components/notification'
import ItemDescription from './components/ItemDescription'
import Categories from './components/Categories'
// import fetchData from "./components/fetchData"
var counter = {quantity:0,price:0};
function App() {
  
  const [cartItems,setCartItems] = useState([])
  const [items,setItems] = useState([])
  const [notification,setNotification] = useState({name: null,state:false})
  const [modalVisiblity,setModalVisibility] = useState(false)
  const [description,setDescription] = useState({})
  const agregarItem = (producto) =>{
    producto.price = parseInt(producto.price)
    setNotification({name:producto.name , state:true})
    setTimeout(()=>{setNotification({name:null , state:false})},1000)
    var repeated = cartItems.find(e=>e.name===producto.name)
    counter.quantity++
    console.log(counter.price += producto.price)
        if(repeated!==undefined){
          cartItems.splice(cartItems.indexOf(repeated),1)
          producto.qty=repeated.qty+1
          setCartItems([...cartItems,producto])
          
        }else{
          console.log(producto)
          setCartItems([...cartItems,producto])
          
        }

  }

  const fetchData = async (params) =>{

    const gettingData = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?${params}`)
    const res = await gettingData.json()

    const meals = []
    res.meals.forEach(e=>{
      meals.push({name: e.strMeal, price: Math.floor(Math.random() * 1000) + 10, img: e.strMealThumb})
    })
    setItems(meals)
}



    const filteredItems = (filtered)=>{
      setItems(filtered)
    }
  
  const callModal = (props) =>{
    // console.log(props)
    setModalVisibility(!modalVisiblity)
    setDescription(props)
  }
  const Items = () =>{
    return items.map(e=>
      <Col>
      <Item agregar={agregarItem} details={callModal} name={e.name} price={e.price} img={e.img}/>
      </Col>
      )
  }

  return (
    
    <div>

    <Container className='container'>
    {modalVisiblity ? <ItemDescription description={description} info={callModal} /> : <div/>}
      <h1>Mi ecommerce</h1>
      <Row>
      <Col xs={12}><NavigationBar cart = {<Cart items={cartItems} counter={counter}/>}/></Col>
      <Row>

      <Col className="justify-content-md-center" >
        <br/>
      <Filter products={items} filteredItems={filteredItems}/>
      </Col>
      {/* <Categories selectCategory={()=>{setItems(fetchData)}}/> */}
      <Categories selectCategory={fetchData}/>
      </Row>
      </Row>
      {notification.state ? <Notification name={notification.name}/> : <div/>}
      <Row>
     
      <Items/>
      </Row>
      
    </Container>
    </div> 
  );
  
}

export default App;
