import { useState,useEffect } from "react"
import Row from 'react-bootstrap/Row'

import Button from 'react-bootstrap/Button'

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

    return(
        <div style={{color:"#e2e2e2"}}>
        <Row >
        <p>Categories:</p>
            {data.map((e)=>
            <Button variant="outline-light" size="sm" style={{marginTop:'5px',marginBottom:'5px'}} onClick={()=>{selectCategory(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${e.strCategory}`)}}>{e.strCategory}</Button>
            )
            }
        </Row>
        </div>
    )

}
export default Categories