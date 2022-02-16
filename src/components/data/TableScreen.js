import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { reLoadingUsers } from '../../actions/users';
import { useForm } from '../../hooks/useForm';
import { NavBar } from '../form/NavBar';
import { TableElement } from './TableElement';

export const TableScreen = () => {

  const { users } = useSelector( state => state.users);
  const { uid } = useSelector( state => state.auth );
  const dispatch = useDispatch();

  const [ formvalues,handleInputChange ] = useForm({
    term: ''
  });

  const { term } = formvalues;

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch( reLoadingUsers( uid,term ) ); 
    // setUserList(userList.filter( user => JSON.stringify(user).toLocaleLowerCase().includes( 'luis' ) ));
  }

  return (
    <section className="h-screen bg-slate-100 overflow-auto pt-16 flex flex-col items-center justify-center">
      <NavBar />
      <div className="sm:px-6 w-full overflow-auto">
        <div className="shadow-lg bg-white rounded-lg py-4 md:py-7 px-4 md:px-8 xl:px-10">
          <h2 className="text-gray-700 text-2xl font-bold md:text-gray-600 mb-5">Candidates</h2>
          <div className="sm:flex items-center justify-between">
            <div className="flex items-center max-w-md bg-white rounded-lg " x-data="{ search: '' }">
              <div className="w-full">
                <input type="search" className="appearance-none block w-full bg-gray-100 text-grey-darker border border-grey-lighter rounded py-3 px-4"
                  placeholder="search" name="term" onChange={ handleInputChange } value={ term } />
              </div>
              <div>
                <button type="submit" onClick={ handleSearch } className="flex items-center bg-blue-500 justify-center w-12 h-12 text-white rounded-r-lg">
                  <i className='w-5 h-5 fa-solid fa-magnifying-glass'></i>
                </button>
              </div>
            </div>
            <button
              className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-blue-500 hover:bg-blue-600 focus:outline-none rounded">
              <Link to="/users/create" className="text-sm font-medium leading-none text-white">Add Candidate</Link>
            </button>
          </div>
          <div className="mt-7 overflow-x-auto">
            <table className="w-full whitespace-nowrap">
              <tbody>
                {
                  (users.length) ?
                    users.map( (element) => (<TableElement {...element} key={ element.id } />)) :
                    (<tr>
                      <td><p className='w-full text-center text-xl text-gray-600 font-bold py-4'>Theres no elements that match your consult.</p></td>
                    </tr>)
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section >
  )
}
