

import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ id, title, description, price, pictureUrl, stock, categoria }) => {
   return (
      <div className='container'>
         <article className='producto'>
            <h3>{title}</h3>
            <img src={pictureUrl} alt={title} />
            <section>
               <p>Categoría: {categoria}</p>
               <p>{description}</p>
               <p>Disponible en Stock: {stock} </p>
               <p>Precio: ${price}</p>
            </section>
            <footer>
               <ItemCount cantidadInicial={1} stock={stock} onAdd={(cantidad) => console.log('Cantidad Agregada al Carrito', cantidad)} />
               <button>Ver Detalle</button>
            </footer>
         </article>
      </div>
   )
}

export default ItemDetail


