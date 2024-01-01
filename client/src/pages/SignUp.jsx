import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import OAuth from '../components/OAuth';
import AnimationWrapper from '../components/AnimationWrapper';
import { Toaster, toast } from 'react-hot-toast';
const SignUp = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; //Regex for email
  let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/; //Regex for password
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    //Regex Conditions
    const { fullname, email, password } = formData;
    if (fullname) {
      if (fullname.length < 3) {
        return toast.error('Fullname must be at least 3 letters long ');
      }
    }

    if (!emailRegex.test(email)) {
      return toast.error('Email is invalid');
    }
    if (!passwordRegex.test(password)) {
      return toast.error(
        'Password should be 6 to 20 characters long with a numeric, 1 lowercase and 1 uppercase letters'
      );
    }
    try {
      setLoading(true);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      navigate('/sign-in');
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };
  return (
    <AnimationWrapper>
      <div className="p-3 max-w-lg mx-auto min-h-screen">
        <h1 className="text-3xl text-center font-semibold my-7 text-emerald-900">
          {' '}
          Sign Up
        </h1>
        <Toaster />
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
        >
          <input
            type="text"
            placeholder="fullname"
            className="border p-3 rounded-lg"
            id="fullname"
            onChange={handleChange}
          />
          <input
            type="email"
            placeholder="email"
            className="border p-3 rounded-lg"
            id="email"
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="password"
            className="border p-3 rounded-lg"
            id="password"
            onChange={handleChange}
          />
          <button
            disabled={loading}
            className="bg-emerald-500 uppercase p-3 rounded-full text-emerald-100 hover:opacity-95 disabled:opacity-80"
          >
            {loading ? 'Loading...' : 'Sing Up'}
          </button>
          <div className="relative w-full flex items-center gap-2 my-5 opacity-50 uppercase text-emerald-500 font-bold">
            <hr className="w-1/2 border-emerald-500" />
            <p>or</p>
            <hr className="w-1/2 border-emerald-500" />
          </div>
          <OAuth />
        </form>
        <div className="flex gap-2 mt-5">
          <p>Have an account?</p>
          <Link to={'/sign-in'}>
            <span className="text-emerald-500 underline">Sign in</span>
          </Link>
        </div>
        {error && <p className="text-red-500 mt-5">{error}</p>}
      </div>
    </AnimationWrapper>
  );
};

export default SignUp;
