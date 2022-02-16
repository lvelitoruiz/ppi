import React, { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { NavBar } from './NavBar';
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { startNewUser } from '../../actions/users';

export const FormScreen = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { users } = useSelector( state => state.users);
  const actualUsers = useRef( users );

  const [ formvalues,handleInputChange ] = useForm({
    name: 'Luis',
    lastname: 'Velito',
    email: 'luis@gmail.com',
    phone: '987654321',
    zip: '11-111111'
  });

  const { name,lastname,email,phone,zip } = formvalues;

  const handleAddUser = async (e) => {
    e.preventDefault();
    const user = {
      name,
      lastname,
      email,
      phone,
      zip
    }

    dispatch( startNewUser( user ) );
  }

  useEffect(() => {
    
    if( users !== actualUsers.current ) {
      navigate('/users/list');
    }
  
  }, [users,navigate])

  return (
    <section className="h-screen bg-slate-100 overflow-hidden flex items-center justify-center p-4">
      <NavBar />
      <div className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
        <h2 className="text-gray-700 text-2xl font-bold md:text-gray-600 mb-5">Add Candidate</h2>
        <form onSubmit={ handleAddUser }>
          <div className="-mx-3 md:flex mb-6">
            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="name">
                First Name
              </label>
              <input className="appearance-none block w-full bg-gray-100 text-grey-darker border border-grey-lighter rounded py-3 px-4" name="name" id="name" onChange={ handleInputChange } value={ name } type="text" placeholder="Jane" />
            </div>
            <div className="md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="lastname">
                Last Name
              </label>
              <input className="appearance-none block w-full bg-gray-100 text-grey-darker border border-grey-lighter rounded py-3 px-4" name="lastname" id="lastname" onChange={ handleInputChange } value={ lastname } type="text" placeholder="Doe" />
            </div>
          </div>
          <div className="-mx-3 md:flex mb-6">
            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="email">
                Email Address
              </label>
              <input className="appearance-none block w-full bg-gray-100 text-grey-darker border border-grey-lighter rounded py-3 px-4" name="email" id="email" type="email" onChange={ handleInputChange } value={ email } placeholder="Jane@lorem.com" />
            </div>
            <div className="md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="phone">
                Phone Number
              </label>
              <input className="appearance-none block w-full bg-gray-100 text-grey-darker border border-grey-lighter rounded py-3 px-4" name="phone" id="phone" type="text" onChange={ handleInputChange } value={ phone } placeholder="111111111" />
            </div>
          </div>
          <div className="-mx-3 md:flex mb-8">
            <div className="md:w-full px-3">
              <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="zip">
                Residential Zip Code
              </label>
              <input className="appearance-none block w-full bg-gray-100 text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3" name="zip" id="zip" type="text" onChange={ handleInputChange } value={ zip } placeholder="11-11111111" />
            </div>
          </div>
          <div className="-mx-3 md:flex">
            <div className="md:w-1/2 flex justify-end px-3">
              <Link
                to="/users/list"
                className="min-w-full border border-blue-500 text-blue-500 focus:ring-2 hover:text-white focus:ring-offset-2 focus:ring-indigo-600 mt-4 sm:mt-0 inline-flex items-center justify-center px-6 py-3 hover:bg-blue-600 focus:outline-none rounded">
                <span className="text-sm font-medium leading-none">Cancel</span>
              </Link>
            </div>
            <div className="md:w-1/2 px-3">
              <button
                className="min-w-full border border-blue-500 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 mt-4 sm:mt-0 inline-flex items-center justify-center px-6 py-3 bg-blue-500 hover:bg-blue-600 focus:outline-none rounded">
                <span className="text-sm font-medium leading-none text-white">Add</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}
