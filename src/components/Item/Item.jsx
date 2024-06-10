
import React from 'react';
import './Item.css'


const Item = ({ id, title, description, price, pictureUrl, stock, categoria }) => {
   return (
      <div className='container'>
         <article className='producto'>
            <h3>{title}</h3>
            <img src={pictureUrl} alt={title} />
            <section>
               <p>Categoría: {categoria}</p>
               <p>{description}</p>
               <p>Disponible en Stock: {stock} </p>
            </section>
            <footer>
               <p>Precio: ${price}</p>
               <button>Ver Detalle</button>
            </footer>
         </article>
      </div>
   )
}

export default Item
