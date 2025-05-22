import { IoMenu } from "react-icons/io5"
import { NavLink } from "react-router-dom"
import ThemeController from "./ThemeController"
import { useContext, useState } from "react"
import { AuthContext } from "../Provider/AuthProvider"
import { toast } from "react-toastify"
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
    const {user, signOutUser} = useContext(AuthContext);
    const [showMenu, setShowMenu] = useState(false);
    

    const logout =()=>{
        signOutUser()
        .then(()=>{
            toast.success('Logged out successfully')
        })
        .catch(error =>{
            toast.error('Logout failed!')
        })
    }
  return (
    <>
    {/**desktop Navbar */}
    <div class="navbar bg-base-100 shadow-sm md:fixed md:z-10">
        <div class="flex-1">
            <img src="https://i.ibb.co/8gTFHCdb/game-nest-removebg-preview.png" alt="GameNest-logo" className="w-20 h-20"/>
        </div>
        <div class="hidden md:flex">
            <div className="flex items-center gap-5">
                <NavLink to={'/'} className={'hover:text-violet-600 text-gray-500 font-semibold'} >Home</NavLink>
                <NavLink to={'/reviews'} className={'hover:text-violet-600 text-gray-500 font-semibold'}>All Reviews</NavLink>

                {
                    user && (
                        <div className="flex gap-5">
                            <NavLink to={'/addReview'}
                            className={'hover:text-violet-600 text-gray-500 font-semibold'} >Add Review</NavLink>
                            <NavLink to={'/myReviews'} className={'hover:text-violet-600 text-gray-500 font-semibold'} >My Reviews</NavLink>
                            <NavLink to={'/myWatchlist'} className={'hover:text-violet-600 text-gray-500 font-semibold'} >Game WatchList</NavLink>
                        </div>
                    )
                }
                <div><ThemeController></ThemeController></div>
                {
                    !user? 
                    (
                        <div className="flex gap-5">
                            <NavLink to={'/login'} className={'btn bg-violet-600 text-white'}>Login</NavLink>
                            <NavLink to={'/register'} className={'btn bg-violet-600 text-white'}>Register</NavLink>
                        </div>
                    ):(
                        <div className="flex items-center gap-5">
                            <div className="tooltip tooltip-bottom" data-tip={user?.displayName}><img src={user?.photoURL} alt="" className="rounded-full  w-12 h-12"/></div>
                            <NavLink onClick={logout} className={'btn bg-violet-600 text-white'}>LogOut</NavLink>
                       </div> 
                    )
                }
            </div>
        </div>



        {/**Mobile dropdown */}
        <div className="md:hidden navbar-end">
            <ThemeController></ThemeController>
        </div>
        <div className="md:hidden ml-4">
            <button onClick={()=> setShowMenu(!showMenu)} tabindex="0" role="button" class="m-1 text-3xl">
                {
                    showMenu? <RxCross2 /> : <IoMenu/>
                }
            </button>
        </div>
        {showMenu && (
            <div className="absolute top-20 left-0 w-screen bg-base-100 z-50 shadow-lg flex flex-col px-6 py-4 space-y-3 border border-gray-300 md:hidden">
                <NavLink to={'/'} className={'hover:bg-gray-300 text-gray-500 font-semibold'} >Home</NavLink>
                <NavLink to={'/reviews'} className={'hover:bg-gray-200 text-gray-500 font-semibold'}>All Reviews</NavLink>

                {
                user && (
                    <div className="flex flex-col space-y-3">
                    <NavLink to={'/addReview'} className={'hover:bg-gray-200 text-gray-500 font-semibold'} >Add Review</NavLink>
                    <NavLink to={'/myReviews'} className={'hover:bg-gray-200 text-gray-500 font-semibold'} >My Reviews</NavLink>
                    <NavLink to={'/myWatchlist'} className={'hover:bg-gray-200 text-gray-500 font-semibold'} >Game WatchList</NavLink>
                    </div>
                )
                }

                {
                !user ? (
                    <div className="flex flex-col space-y-3">
                    <NavLink to={'/login'} className={'font-semibold text-violet-600'}>Login</NavLink>
                    <NavLink to={'/register'} className={'font-semibold text-violet-600'}>Register</NavLink>
                    </div>
                ) : (
                    <div className="flex flex-col space-y-3">
                    <div class="tooltip tooltip-open tooltip-right w-10 tooltip-success" data-tip={`${user.displayName}`}>
                        <img src={user?.photoURL} alt="" className="rounded-full w-10 h-10" />
                    </div>
                    <NavLink onClick={logout} className={'font-semibold text-violet-600'}>LogOut</NavLink>
                    </div>
                )
                }
            </div>
         )}

    </div>

    </>
  )
}

export default Navbar