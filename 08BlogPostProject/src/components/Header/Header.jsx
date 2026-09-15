import React from 'react'
import { Container, Logo, LogoutBtn } from '../../components'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {

    const authStatus = useSelector((state) => state.auth.status)

    const navigate = useNavigate()

    const menuItems = [
        {
            name: 'Home',
            slug: '/',
            status: true
        },
        {
            name: 'Login',
            slug: '/login',
            status: !authStatus
        },
        {
            name: 'Signup',
            slug: '/signup',
            status: !authStatus
        },
        {
            name: 'All Posts',
            slug: '/all-posts',
            status: authStatus
        },
        {
            name: 'Add Posts',
            slug: '/add-posts',
            status: authStatus
        }
    ]

    return (
        <div className='w-full flex justify-between items-center p-4 bg-gray-700'>
            <Container>
                <nav className='flex justify-between items-center'>
                    <div className='flex mr-3'>
                        <Logo width="100px" />
                    </div>
                    <ul className='flex'>
                        {menuItems.map((item)=>
                            item.status ? 
                               <li className='p-2' key={item.name}>
                                    <button
                                    onClick={()=>navigate(item.slug)}
                                    className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                                    >{item.name}</button>
                                </li>
                                :null                            
                        )}
                        {authStatus && (<li>
                            <LogoutBtn />
                        </li>)}
                    </ul>
                </nav>
            </Container>
        </div>
    )
}

export default Header