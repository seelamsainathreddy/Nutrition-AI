import React, { useState } from 'react';
import PropTypes from 'prop-types';
import logo from '../assets/favicon.png';
import App from '../App';
import { Navigate, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


async function loginUser(credentials) {
  return fetch('http://127.0.0.1:8000/account/login', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
        },
    body: JSON.stringify(credentials)
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .catch(error => {
      console.error('Error:', error);
      throw error;
    });
}


export default function Login({ setToken }) {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  console.log(username, password);
  const handleSubmit = async e => {
    e.preventDefault();
    const resp = await loginUser({
      username,
      password
    });
    console.log(resp);
    setToken(resp.token);
    localStorage.setItem("token", resp.token)
    localStorage.setItem("userInfo", resp.user.username)
    console.log(localStorage)
    navigate('/profile');
  }

  return (
    <section className="gradient-form h-full bg-neutral-200 dark:bg-neutral-700 flex justify-center">
      <div className="container h-screen w-screen p-10 ">
        <div className="flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full">
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
              <div className="g-0 lg:flex lg:flex-wrap">
                <div className="px-4 md:px-0 lg:w-6/12">
                  <div className="md:mx-6 md:p-12">
                    {/* Logo */}
                    <div className="text-center">
                      <a href="">
                      <img
                        className="mx-auto w-48"
                        src={logo}
                        alt="logo"
                      /></a>
                      <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                      </h4>
                    </div>

                    <form onSubmit={handleSubmit}>
                      <p className="mb-4">Please login to your account</p>
                      {/* Username input */}
                      <div className="relative mb-4" data-te-input-wrapper-init>
                        <input
                          type="text"
                          className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                          id="exampleFormControlInput1"
                          placeholder="Username"
                          onChange={e => setUserName(e.target.value)}
                        />
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
                        >
                          Username
                        </label>
                      </div>

                      {/* Password input */}
                      <div className="relative mb-4" data-te-input-wrapper-init>
                        <input
                          type="password"
                          className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                          id="exampleFormControlInput11"
                          placeholder="Password"
                          onChange={e => setPassword(e.target.value)}
                        />
                        <label
                          htmlFor="exampleFormControlInput11"
                          className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
                        >
                          Password
                        </label>
                      </div>

                      {/* Submit button */}
                      <div className="mb-12 pb-1 pt-1 text-center">
                        <button
                          className="mb-3 bg-coral-red inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_#3b71ca] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                          type="submit"
                          data-te-ripple-init
                          data-te-ripple-color="light"
                        >
                          Log in
                        </button>

                        {/* Forgot password link */}
                        <a href="#!">Forgot password?</a>
                      </div>

                      {/* Register button */}
                      <Link to='/signup'>
                      <div className="flex items-center justify-between pb-6">
                        <p className="mb-0 me-2">Don't have an account?</p>
                        <button
                          type="button"
                          className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-danger-50/50 hover:text-danger-600 focus:border-danger-600 focus:bg-danger-50/50 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-rose-950 dark:focus:bg-rose-950"
                          data-te-ripple-init
                          data-te-ripple-color="light"
                        >
                          Register
                        </button>
                      </div>
                      </Link>
                    </form>
                  </div>
                </div>

                {/* Right column container with background and description */}
                <div
                  className="flex bg-coral-red items-center rounded-b-lg lg:w-6/12 lg:rounded-e-lg lg:rounded-bl-none"
                >
                  <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                    <h4 className="mb-6 text-xl font-semibold">
                      We are beatnik
                    </h4>
                    <p className="text-sm">
                    Beatnik is the ultimate online platform connecting artists with the gigs they deserve. Whether you're a musician, performer, or creative professional, Beatnik empowers you to discover opportunities tailored to your talent. From local showcases to big-stage events, we bring together a vibrant community of artists and venues to make gig-finding easy and rewarding. Join Beatnik and let your art find its stage!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};