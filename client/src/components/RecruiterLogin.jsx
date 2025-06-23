import React, { useContext, useState, useEffect } from 'react';
import { assets } from '../assets/assets';
import { AppContext } from '../context/AppContext';

const RecruiterLogin = () => {
  const [state, setState] = useState('Login'); // "Login" or "Signup"
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState(null);
  const [isTextDataSubmitted, setIsTextDataSubmitted] = useState(false);

  const { setShowRecruiterLogin } = useContext(AppContext);

  // Prevent background scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
      if (image) URL.revokeObjectURL(image); // Cleanup image URL
    };
  }, [image]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (state === "Signup" && !isTextDataSubmitted) {
      setIsTextDataSubmitted(true); // Step to upload image
    } else {
      console.log("Form submitted:", { name, email, password, image });
      // Handle login/signup API call here
    }
  };

  return (
    <div className='fixed inset-0 z-50 backdrop-blur-sm bg-black/30 flex justify-center items-center'>
      <form
        onSubmit={onSubmitHandler}
        className='relative bg-white p-8 rounded-lg w-80 shadow-md space-y-4'
      >
        <h1 className='text-2xl font-bold text-center'>Recruiter {state}</h1>
        <p className='text-center text-sm text-gray-600'>
          {state === "Login"
            ? "Welcome back! Please sign in to continue"
            : "Create your recruiter account to get started"}
        </p>

        {(state === "Signup" && isTextDataSubmitted) ? (
          <>
            {/* Company Logo Upload */}
            <div className='flex items-center gap-4 my-6'>
              <label htmlFor='image' className='cursor-pointer'>
                <img
                  src={image ? URL.createObjectURL(image) : assets.upload_area}
                  alt="Upload logo"
                  className='w-16 h-16 object-cover rounded-full border'
                />
                <input
                  type="file"
                  id='image'
                  hidden
                  accept="image/*"
                  onChange={e => setImage(e.target.files[0])}
                />
              </label>
              <p className='text-sm'>Upload company <br /> logo</p>
            </div>

            <button
              type='submit'
              className='w-full bg-blue-600 text-white py-2 rounded-full px-4'
            >
              Create Account
            </button>
          </>
        ) : (
          <>
            {state !== 'Login' && (
              <div className='flex items-center gap-2 border p-2 rounded'>
                <img src={assets.person_icon} alt="person" className='w-5 h-5' />
                <input
                  onChange={e => setName(e.target.value)}
                  value={name}
                  type="text"
                  placeholder='Company Name'
                  required
                  className='w-full outline-none text-sm'
                />
              </div>
            )}

            <div className='flex items-center gap-2 border p-2 rounded'>
              <img src={assets.email_icon} alt="email" className='w-5 h-5' />
              <input
                onChange={e => setEmail(e.target.value)}
                value={email}
                type="email"
                placeholder='Email'
                required
                className='w-full outline-none text-sm'
              />
            </div>

            <div className='flex items-center gap-2 border p-2 rounded'>
              <img src={assets.lock_icon} alt="lock" className='w-5 h-5' />
              <input
                onChange={e => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder='Password'
                required
                className='w-full outline-none text-sm'
              />
            </div>

            {state === "Login" && (
              <p className='text-sm text-blue-600 cursor-pointer text-end'>
                Forgot password?
              </p>
            )}

            <button
              type='submit'
              className='w-full bg-blue-600 text-white py-2 rounded-full px-4'
            >
              {state === 'Login'
                ? 'Login'
                : isTextDataSubmitted
                ? 'Create Account'
                : 'Next'}
            </button>
          </>
        )}

        {/* Login/Signup toggle */}
        <p className='text-sm text-center mt-4'>
          {state === 'Login'
            ? "Don't have an account?"
            : 'Already have an account?'}
          <span
            className='text-blue-600 cursor-pointer ml-1 underline'
            onClick={() => {
              setState(state === 'Login' ? 'Signup' : 'Login');
              setIsTextDataSubmitted(false);
            }}
          >
            {state === 'Login' ? 'Signup' : 'Login'}
          </span>
        </p>

        {/* Close button */}
        <img
          onClick={() => setShowRecruiterLogin(false)}
          className='absolute top-5 right-5 w-5 h-5 cursor-pointer'
          src={assets.cross_icon}
          alt="close"
        />
      </form>
    </div>
  );
};

export default RecruiterLogin;
