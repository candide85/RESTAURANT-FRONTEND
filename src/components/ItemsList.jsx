import React from 'react'
import { Button, Card } from 'antd';
import {useDispatch} from 'react-redux'


const ItemsList = ({item}) => {
  const dispatch = useDispatch()

  // update cart handler
  const handleAddToCart = () => {
    dispatch({
      type:'Add_To_Cart',
      payload:{...item, quantity:1}
    })
  }

    const { Meta } = Card;
  return (
    <div>
         <Card
                      
            cover={<img alt={item.name} style={{width:220, height:150}} src={item.image}/>}
        >
            <Meta title={item.name} description={item.category} />
            <div className='item-button'>
              <Button onClick={() => handleAddToCart()}>Add to Card</Button>
            </div>
        </Card>
    </div>
  )
}

export default ItemsList