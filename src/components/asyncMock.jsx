const productos = [

   {
      id: '1',
      title: 'X-Men',
      price: 18000,
      categoria: 'Juegos',
      pictureUrl: 'https://i.blogs.es/cf5a58/x-men-en-marvel-future-fight/1024_682.webp',
      stock: 10,
      description: 'Juego de PlayStation 4'
   },
   {
      id: '2',
      title: 'Xiaomi 14 Ultra',
      price: 480000,
      categoria: 'Celulares',
      pictureUrl: 'https://i.blogs.es/c1217b/oneplus-ultra-7/1024_2000.webp',
      stock: 10,
      description: 'Xiaomi redmi 14 ultra '
   },

]

export const getProductos = () => {
   return new Promise((resolve) => {
      setTimeout(() => {
         resolve(productos)
      }, 2000)
   })
}

export const getProductoId = (productoId) => {
   return new Promise((resolve) => {
      setTimeout(() => {
         resolve(productos.find(producto => producto.id === productoId))
      }, 1000)
   })
}
