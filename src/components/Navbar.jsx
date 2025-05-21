import { IoMenu } from "react-icons/io5"
import { NavLink } from "react-router-dom"
import ThemeController from "./ThemeController"
import { useContext } from "react"
import { AuthContext } from "../Provider/AuthProvider"

const Navbar = () => {
    const {user} = useContext(AuthContext);
    
  return (
    <>
    {/**desktop Navbar */}
    <div class="navbar bg-base-100 shadow-sm">
        <div class="flex-1">
            <img src="https://i.ibb.co/8gTFHCdb/game-nest-removebg-preview.png" alt="GameNest-logo" className="w-20 h-20"/>
        </div>
        <div class="flex-none">
            <div className="flex items-center gap-5">
                <NavLink to={'/'} className={'hover:text-violet-600 text-gray-500 font-semibold'} >Home</NavLink>
                <NavLink to={'/reviews'} className={'hover:text-violet-600 text-gray-500 font-semibold'}>All Reviews</NavLink>
                <div><ThemeController></ThemeController></div>
                {
                    user? 
                    (
                        <div className="flex gap-5"><NavLink to={'/login'} className={'btn bg-violet-600 text-white'}>Login</NavLink>
                        <NavLink to={'/register'} className={'btn bg-violet-600 text-white'}>Register</NavLink>
                        </div>
                    ):(
                       <NavLink className={'btn bg-violet-600 text-white'}>LogOut</NavLink> 
                    )
                }
            </div>
        </div>
    </div>
    </>
  )
}

export default Navbar