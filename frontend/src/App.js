import logo from './logo.svg';
import './App.css';

function App() {
    const handleMenuClick = () => {
        const menuIcon = document.querySelector(".menu-icon");
        const navLista = document.querySelector("ul");
        menuIcon.classList.toggle("active");
        navLista.classList.toggle("active");
    };
    return (
        <div>
            <nav>
                <div className="logo">
                    <a href="#">Materiales de Construcción</a>
                </div>
                <ul>
                    <li><a href="#">Buscar</a></li>
                    <li><a href="#">Mis Pedidos</a></li>
                    <li><a href="#">Mi Carrito</a></li>
                    <li><a href="#">Mis Listas</a></li>
                    <li><a href="#">Iniciar Sesión</a></li>
                </ul>
                <div className="menu-icon" onClick={handleMenuClick}></div>
            </nav>
            <div className="baseContenido">
                <div className="opciones">
                    <ul>
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Categorías</a></li>
                        <li><a href="#">Información</a></li>
                        <li><a href="#">Contacto</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Vende con Devs Up</a></li>
                    </ul>
                </div>
                <div className="contenido">
                    Contenido de la base de datos
                </div>
            </div>
            <footer>
                &copy; 2024 Trivia Game. All rights reserved.
            </footer>
        </div>
    );
}

export default App;
