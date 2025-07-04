import { useEffect, useRef, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { Link } from 'react-router-dom'
import avatarPlaceholder from '../assets/placeholderAvatar.jpg';


export default function BurgerMenu(){
    const { isLoggedIn, logout } = useAuth()
    const [isOpen, setIsOpen] = useState(false)
    const menuRef = useRef(null)

    function toggleDropdown(){
        setIsOpen(prev => !prev)
    }

    function handleLogout(){
        console.log("LogOut!")
        logout()
        setIsOpen(false)
    }

    const guestLinks = [
        { name: 'Sign Up', path: '/signup' },
        { name: 'Login', path: '/login' },
        { name: 'Host', path: '/host' },
        { name: 'Help', path: '/help' },
    ];
    
    const userLinks = [
        { name: 'Bookings', path: '/bookings' },
        { name: 'Favorites', path: '/favorites' },
        { name: 'Host', path: '/host' },
        { name: 'Account', path: '/account' },
        { name: 'Help', path: '/help' },
    ];

    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false)
            }
        }

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside)
        } else {
            document.removeEventListener('mousedown', handleClickOutside)
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [isOpen])

    return(
        <div className="relative" ref={menuRef}>
            <button onClick={toggleDropdown} className="flex items-center justify-between w-[86px] h-[48px] px-3 py-2 rounded-full border shadow-sm hover:shadow-md transition">
                <span className="text-lg">☰</span>
                <img
                    src={avatarPlaceholder}
                    alt="User"
                    className="w-6 h-6 rounded-full object-cover"
                />
            </button>
            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg py-2 z-50">
                    {(isLoggedIn ? userLinks : guestLinks).map(({name, path}) => (
                        <Link
                            key={name}
                            to={path}
                            onClick={() => setIsOpen(false)}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                            {name}
                        </Link>
                    ))}
                    {isLoggedIn && (
                        <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-100"
                        >
                        Logout
                        </button>
                    )}
                </div>
            )}
        </div>
    )
}