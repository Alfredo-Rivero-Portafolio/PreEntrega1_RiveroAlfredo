import './NavBar.css'
import logo from '../../assets/img/logo.png'
import CartWidget from "../CartWidget/CartWidget"


const NavBar = () => {
   return (
      <div className="NavBar">
         <div className="nav-logo">
            <img className='logo' src={logo} alt='logo'></img>
         </div>
         <h2 className="nav-titulo">Mundo Virtual</h2>
         <div className="nav-items">
            <button><a href="#">Inicio</a></button>
            <button><a href="#">Categoria</a></button>
            <button><a href="#">Contactanos</a></button>
            <CartWidget />
         </div>
      </div>
   )
}
export default NavBar