import React, {useEffect, useState} from 'react'
import { useDispatch } from 'react-redux'
import DefaultLayout from '../components/DefaultLayout'
import axios from 'axios'
import {DeleteOutlined, EditOutlined} from '@ant-design/icons'
import { Button, Table } from 'antd'


export default function ItemsPage() {

  const dispatch = useDispatch()
  const [itemData, setItemData] = useState([])
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

  const columns = [
    {title: 'Name', dataIndex: 'name'},
    {title: 'Image', dataIndex: 'image',
render:(image, record) => <img src={image} alt={record.name} height='60' width='60' />},
{title: 'Price', dataIndex: 'price'},

{title: 'Actions', dataIndex: '_id', render: (id, record) => <div>
    <DeleteOutlined style={{cursor:'pointer'}} /> <EditOutlined />
  </div>
}
]
   
  return (
    <DefaultLayout>
      <div className='d-flex justify-content-between'>
        <h1>Items Page</h1>
        <Button type='primary'>Add Item</Button>
      </div>        
        <Table columns={columns} dataSource={itemData} bordered  />
    </DefaultLayout>
  )
}
