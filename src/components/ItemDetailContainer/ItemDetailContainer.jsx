import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import { getProductoId } from '../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
   const [producto, setProducto] = useState(null)

   useEffect(() => {
      getProductoId('1')
         .then((res) => {
            setProducto(res)
         })
      .catch((error) => {
         console.error(error)
      })
   }, [])

   return (
      <div>
         <ItemDetail {...producto} />
      </div>
   )
}

export default ItemDetailContainer