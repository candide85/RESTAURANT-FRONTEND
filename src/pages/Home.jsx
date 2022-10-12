import React, {useState, useEffect} from 'react'
import axios from 'axios'
import DefaultLayout from '../components/DefaultLayout'
import {useDispatch} from 'react-redux'
import { Col, Row } from 'antd';
import ItemsList from '../components/ItemsList';


const Home = () => {

    const [itemData, setItemData] = useState([])
    const dispatch = useDispatch()
    useEffect(() => {
        const getAllItems = async () => {
            try {
                dispatch({
                    type:'SHOW_LOADING'
                })
                const data = await axios.get('http://localhost:5000/api/items/get_items')
                // .then((response) => console.log(response.data))
                setItemData(data.data)
                dispatch({
                    type:'HIDE_LOADING'
                })
                // console.log(data.data)            
                
            } catch (error) {
                console.log(error);
            }
        }
        getAllItems()
    }, [dispatch])

  return (
    
        < DefaultLayout>
            <Row>
                {itemData.map(item => (
                    <Col xs={24} lg={6} md={12} sm={6} style={{padding:10}}>
                        <ItemsList item={item} />
                    </Col>
                ))}
            </Row>
        </DefaultLayout>
    
  )
}

export default Home