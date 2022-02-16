import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../actions/auth';

export const NavBar = () => {

  const { name } = useSelector( state => state.auth );
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch( startLogout() );
  }

  return (
    <div className='absolute left-0 top-0 w-full h-auto bg-slate-100 flex items-center justify-end px-6 py-2'>
      <p className='text-gray-500 text-sm mr-4 font-bold'>{ name }</p>
      <button
        onClick={ handleLogout }
        className="border border-blue-500 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 mt-4 sm:mt-0 inline-flex items-center justify-center px-4 py-2 bg-blue-500 hover:bg-blue-600 text-sm focus:outline-none rounded">
        <span className="text-sm font-medium leading-none text-white">Logout</span>
      </button>
    </div>
  )
}
