import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { startLoginEmailPassword } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';

export const LoginScreen = () => {

  const dispatch = useDispatch();
  const { loading } = useSelector(state => state.ui);

  const [ formvalues,handleInputChange ] = useForm({
    email: 'luis@gmail.com',
    password: '12345678'
  });

  const { email,password } = formvalues;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch( startLoginEmailPassword(email,password) );
  }

  return (
    <section className="h-screen bg-slate-100 overflow-hidden flex items-center justify-center p-4">
      <div className="flex flex-col max-w-4xl md:h-56 bg-white rounded-lg shadow-lg overflow-hidden md:flex-row my-10">
        <div className="md:flex items-center justify-center md:w-1/2 bg-blue-500">
          <div className="py-6 px-8 md:py-0">
            <h2 className="text-white text-2xl font-bold md:text-white">Hello Again!</h2>
            <p className="mt-2 text-white md:text-white">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa.</p>
          </div>
        </div>
        <div className="flex items-center justify-center pb-6 pt-6 md:py-0 md:w-1/2">
          <form onSubmit={ handleLogin }>
            <div className="rounded flex flex-col rounded-lg overflow-hidden sm:flex-row mb-5">
              <input
                className="appearance-none block w-full bg-gray-100 text-grey-darker border border-grey-lighter rounded py-3 px-4"
                type="text" name="email" onChange={ handleInputChange } value={ email } placeholder="E-mail" />
            </div>
            <div className="rounded flex flex-col rounded-lg overflow-hidden sm:flex-row">
              <input
                className="appearance-none block w-full bg-gray-100 text-grey-darker border border-grey-lighter rounded py-3 px-4"
                type="password" name="password" onChange={ handleInputChange } value={ password } placeholder="Password" />
              <button
                type='submit'
                disabled={ loading }
                className="py-3 px-4 bg-blue-500 text-gray-100 font-semibold uppercase hover:bg-blue-600 disabled:bg-gray-400">Login</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
