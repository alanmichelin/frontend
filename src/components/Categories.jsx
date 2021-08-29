import { useState,useEffect } from "react"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import fetchData from "./fetchData"
const Categories = ({selectCategory}) =>{
    const [data,setData] = useState([])

    useEffect(()=>{
        getData()
        
    },[])


    const getData = async () =>{
        const gettingData = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        const res = await gettingData.json()
        setData(res.categories)
    }
    console.log(data)

    // 'https://www.themealdb.com/api/json/v1/1/filter.php?c='
    return(

        <div style={{color:"#e2e2e2"}}>
        <p>Categories:</p>
        <Row className="justify-content-md-center" >
            {data.map((e)=>
            
            <Col xs lg="2">
            {/* <a href='#' onClick={()=>{fetchData(`c=${e.strCategory}`)}}>{e.strCategory}</a> */}
            <Button variant="outline-light" size="sm" style={{marginTop:'5px',marginBottom:'5px'}} onClick={()=>{selectCategory(`c=${e.strCategory}`)}}>{e.strCategory}</Button>
            </Col>
           
            
            )
            }
        </Row>
        </div>
    )

}
export default Categories