import React from 'react';
import { useDispatch } from 'react-redux';
import { startDeleting } from '../../actions/users';


export const TableElement = ({id,name,lastname,email,phone,zip}) => {

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch( startDeleting( id ) );
  }

  return (
    <>
      <tr tabIndex="0" className="focus:outline-none h-16 border border-gray-100 rounded">
        <td className="">
          <div className="flex items-center pl-5">
            <p className="text-base font-medium leading-none text-gray-700 mr-2">{ name } { lastname }</p>
          </div>
        </td>
        <td className="pl-24">
          <div className="flex items-center">
            <i className="fa-solid fa-at w-5 h-5"></i>
            <p className="text-sm leading-none text-gray-600 ml-0">{ email }</p>
          </div>
        </td>
        <td className="pl-5">
          <div className="flex items-center">
            <i className="fa-solid fa-phone w-5 h-5"></i>
            <p className="text-sm leading-none text-gray-600 ml-0">{ phone }</p>
          </div>
        </td>
        <td className="pl-5">
          <button className="py-3 px-3 text-sm focus:outline-none leading-none text-red-700 bg-red-100 rounded">{ zip }</button>
        </td>
        <td className="pl-4">
          <button
            onClick={ handleDelete }
            className="focus:ring-2 focus:ring-offset-2 focus:ring-red-300 text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none">Remove</button>
        </td>
      </tr>
      <tr className="h-3"></tr>
    </>
  )
}
