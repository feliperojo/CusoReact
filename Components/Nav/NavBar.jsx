
import React from 'react'
import { Cartwidget } from '../Cart/Cartwidget'
import { GiDinosaurRex } from "react-icons/gi";
export const NavBar = () => {
  return (
    <nav className='navegador bg-gray-800 py-6 relative'>
        <div className=' container mx-auto flex'>
                  <div className='logo flex flex-grow justify-start text-white'>
                      <a href="#"><GiDinosaurRex fontSize="30"/></a>
                  </div>
              <div className=' flex flex-grow justify-between'>
                
                    <div className=' texto text-white font-medium space-x-4'>
                      <a href="#">Inicio</a>
                      <a href="#">Repuestos</a>
                      <a href="#">Contactenos</a>
                      <a href="#">Soporte</a>
                    </div>
                
                <div className='carrito'>
                  <Cartwidget/>
                </div>
              </div>
        </div>
    </nav>
  )
}
