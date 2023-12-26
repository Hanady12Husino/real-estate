import { useSelector } from 'react-redux';
import SideBar from '../components/SideBar';
import { Link } from 'react-router-dom';

const UserProfile = () => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className="flex">
      <SideBar />

      <div className="flex-1 p-3 sm:p-7">
        <h1 className="text-emerald-900 font-semibold text-xl lg:text-3xl boerder-b mt-2">
          Profile
        </h1>
        <h2 className="text-[14px] text-emerald-500 py-3">
          Welcome Back {currentUser.fullname}
        </h2>
        <div className="flex mt-[20px] gap-4 flex-col ">
          <img
            src={currentUser.avatar}
            alt="listing cover"
            className="h-20 w-20 object-cover rounded-full"
          />
          <div className="flex flex-col gap-6">
            <div className="flex gap-4">
              <label className="whitespace-nowrap uppercase font-semibold text-emerald-900">
                Full Name:
              </label>
              <label className="whitespace-nowrap uppercase  text-emerald-900">
                {currentUser.fullname}
              </label>
            </div>
            <div className="flex gap-4">
              <label className="whitespace-nowrap uppercase font-semibold text-emerald-900">
                User Name:
              </label>
              <label className="whitespace-nowrap uppercase  text-emerald-900">
                {currentUser.username}
              </label>
            </div>
            <div className="flex gap-4">
              <label className="whitespace-nowrap uppercase font-semibold text-emerald-900">
                Email:
              </label>
              <label className="whitespace-nowrap uppercase  text-emerald-900">
                {currentUser.email}
              </label>
            </div>
            <Link to={'/update-profile'}>
              <button className="bg-emerald-500 text-emerald-100 duration-500 px-6 py-2 hover:bg-emerald-900 rounded-full ">
                Update Profile
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
