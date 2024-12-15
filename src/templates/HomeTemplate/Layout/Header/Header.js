import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom'
import { history } from '../../../../App'
import { useSelector } from 'react-redux';
import _ from 'lodash';

export default function Header(props) {

    const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer);

    const renderLogin = () => {
        if (_.isEmpty(userLogin)) {
            return <Fragment>
                <button onClick={() => {
                    history.push('/login')
                }} className="self-center px-8 py-3 rounded">Sign in</button>
                <button onClick={() => {
                    history.push('/register')
                }} className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-600 dark:text-gray-50">Sign up</button>
            </Fragment>
        }
        return <button onClick={() => {
            history.push('/profile')
        }} className="self-center px-8 py-3 rounded">Hello ! {userLogin.taiKhoan}</button>
    }

    return (
        <header className="p-4 bg-coolGray-100 text-coolGray-800 bg-black bg-opacity-40 text-white fixed w-full z-10" >
            <div className="container flex justify-between h-16 mx-auto">
                <NavLink to="/" aria-label="Back to homepage" className="flex items-center p-2">
                    <img style={{ height: '70px', width: '70px' }} src='https://danteaxe.com/wp-content/uploads/2022/02/ahri5.jpg' alt='logoAhri' />
                </NavLink>
                <ul className="items-stretch hidden space-x-3 lg:flex">
                    <li className="flex">
                        <NavLink activeClassName='border-b-2 border-white' to='/home' className="flex items-center px-4 -mb-1 border-b-2 border-black">Home</NavLink>
                    </li>
                    <li className="flex">
                        <NavLink activeClassName='border-b-2 border-white' to='/contact' className="flex items-center px-4 -mb-1 border-b-2  border-black ">Contact</NavLink>
                    </li>
                    <li className="flex">
                        <NavLink activeClassName='border-b-2 border-white' to='/news' className="flex items-center px-4 -mb-1 border-b-2  border-black ">News</NavLink>
                    </li>
                </ul>
                <div className="items-center flex-shrink-0 hidden lg:flex">
                    {renderLogin()}
                </div>
                <button className="p-4 lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-800">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </header>
    )
}
