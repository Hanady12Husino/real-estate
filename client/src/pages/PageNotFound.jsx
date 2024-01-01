import AnimationWrapper from '../components/AnimationWrapper';
import notFound from '../images/notFound.png';
import { Link } from 'react-router-dom';
const PageNotFound = () => {
  return (
    <AnimationWrapper>
      <div className="p-3 max-w-lg mx-auto min-h-screen">
        <div className="flex flex-col gap-6 items-center text-center">
          <h1 className="text-3xl text-center font-semibold my-7 text-emerald-900">
            Page not found
          </h1>
          <img
            src={notFound}
            alt="Page not found"
            className=" mb-3"
          />
          <p className="text-emerald-500">
            The page you are looking for does not exsist.
          </p>
          <Link to={'/'}>
            <button className="bg-emerald-500 text-emerald-50 duration-500 px-6 py-2 hover:bg-emerald-900 hover:text-emerald-100 rounded-full underline">
              Back to home
            </button>
          </Link>
        </div>
      </div>
    </AnimationWrapper>
  );
};

export default PageNotFound;
