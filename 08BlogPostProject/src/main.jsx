import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Login from './Pages/Login.jsx'
import {AuthLayout} from './components'
import AllPost from './Pages/AllPost.jsx'
import Signup from './Pages/Signup.jsx'
import EditPost from './Pages/EditPost.jsx'
import Post from './Pages/Post.jsx'
import AddPost from './Pages/AddPost.jsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/login',
                element: (
                    <AuthLayout authentication={false}>
                        <Login />
                    </AuthLayout>
                )
            },
            {
                path: '/signup',
                element: (
                    <AuthLayout authentication={false}>
                        <Signup />
                    </AuthLayout>
                )
            },
            {
                path: '/all-post',
                element: (
                    <AuthLayout authentication={false}>
                        <AllPost />
                    </AuthLayout>
                )
            },
            {
                path: '/add-post',
                element: (
                    <AuthLayout authentication={false}>
                        <AddPost />
                    </AuthLayout>
                )
            },
            {
                path: '/edit-post/:slug',
                element: (
                    <AuthLayout authentication={false}>
                        <EditPost />
                    </AuthLayout>
                )
            },
            {
                path: '/post/:slug',
                element: (
                    <AuthLayout authentication={false}>
                        <Post />
                    </AuthLayout>
                )
            }
        ]
    }
])
createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
)
