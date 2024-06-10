import React, { useState, useEffect } from 'react'
import './ItemListContainer.css'
import { getProductos } from '../asyncMock'
import ItemList from '../ItemList/ItemList'


const ItemListContainer = ({ greeting }) => {

   const [productos, setProductos] = useState([])
   const [cargando, setCargando] = useState(true)

   useEffect(() => {
      getProductos()
         .then(res => {
            setProductos(res)
            setCargando(false)
         })
         .catch(error => {
            console.error(error);
            setCargando(false)
         })
   }, [])


   return (
      <div className="item-list">
         <h1>{greeting}</h1>
         {cargando ? (
            <p>Cargando productos ....</p>
         ) : (
            <ItemList productos={productos} />
         )}

      </div>
   )
}

export default ItemListContainer 
