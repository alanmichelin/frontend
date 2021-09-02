
  import Item from './components/item.jsx'
  import NavigationBar from './components/navbar.jsx';
  import './App.css';
  import Container from 'react-bootstrap/Container'
  import Row from 'react-bootstrap/Row'
  import Col from 'react-bootstrap/Col'
  import { useState,  } from 'react';
  import Cart from './components/Cart'
  import Filter from './components/Filter'
  import Notification from './components/notification'
  import ItemDescription from './components/ItemDescription'
  import Categories from './components/Categories'
  import fetchData from "./components/fetchData"
  import {Link} from "react-router-dom";
  var counter = {quantity:0,price:0};
  const Store =() => {
    
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
  
  
      const getSpecificMeal= async (props) =>{
  
        
      const meals = []
      var data = await fetchData(props)
      // console.log(data)
      data.meals.forEach(e=>{
        meals.push({name: e.strMeal, price: Math.floor(Math.random() * 1000) + 10, img: e.strMealThumb})
      })
      setItems(meals)
      }
  
      
  
  
      const filteredItems = (filtered)=>{
        setItems(filtered)
      }
    const getItemDescription = async (props) =>{
      var data = await fetchData(props)
      var item = await data.meals[0]
      
      console.log(item)
        var getIngredients = Object.keys(item).filter(e=> e.includes('strIngredient'))
        var getMeasures = Object.keys(item).filter(e=> e.includes('strMeasure'))
  
        var fullRecipe = []
        for(var i =0; i<getIngredients.length;i++){
          if(item[getIngredients[i]]!=='' && item[getIngredients[i]]!=null){
            fullRecipe.push({ [item[getIngredients[i]]] : item[getMeasures[i]] })
          }
        }
  
  
      var desc = {name: item.strMeal, img: item.strMealThumb, desc: item.strInstructions, recipe: fullRecipe}
      setDescription(desc)
      callModal()
    }
    const callModal = () =>{
      setModalVisibility(!modalVisiblity)
      
    }
    const Items = () =>{
      return items.map(e=>
        <Col>
        <Item agregar={agregarItem} details={getItemDescription} name={e.name} price={e.price} img={e.img}/>
        </Col>
        )
    }
  
    return (
      
      <div>
  
      <Container className='container'>
      {modalVisiblity ? <ItemDescription description={description} info={callModal} /> : <div/>}
        <h1>RestORTrante</h1>
        
        <Row>
        <Col xs={12}><NavigationBar cart = {<Cart items={cartItems} counter={counter}/>}/></Col>
        <Row>
        <p>< Link to='/'> Ir al inicio</Link></p>
        <Col className="justify-content-md-center" >
          <br/>
       
        </Col>
  
        
        </Row>
        </Row>
  
        {notification.state ? <Notification  name={notification.name}/> : <div/>}
  
        <Row>
        {items.length===0 ? 
        <div>
        <i style={{fontSize:'5em'}}class="fas fa-exclamation-triangle"></i>
        <h1>Nada para mostrar :(</h1>
        <h2>Elegir una categoria para mostrar comidas</h2>
        </div> :<Items/>}
        </Row>
        
      </Container>
      
      <Container >
      
      <Col xs lg="1" fluid style={{ position: 'fixed', top:'20%', left:'5%'}}>
      <Filter products={items} filteredItems={filteredItems}/>
      
      <Categories  selectCategory={getSpecificMeal}/>
      
  
      </Col>
      </Container>
      </div> 
    );
    
  }
  
  export default Store;
  