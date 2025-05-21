import { IoMenu } from "react-icons/io5"
import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <>
    {/**desktop Navbar */}
    <div class="navbar bg-base-100 shadow-sm">
        <div class="flex-1">
            <img src="https://i.ibb.co/FLXmmxqR/game-logo.jpg" alt="GameNest-logo" className=""/>
        </div>
        <div class="flex-none">
            <div>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/reviews'}>All Reviews</NavLink>
            </div>
        </div>
    </div>
    </>
  )
}

export default Navbar