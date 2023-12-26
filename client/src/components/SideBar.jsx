import { useDispatch, useSelector } from 'react-redux';
import {
  signOutUserFailure,
  signOutUserStart,
  signOutUserSuccess,
} from '../redux/user/userSlice';
import { FaBuilding, FaCog, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const SideBar = () => {
  const { error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleSignOut = async () => {
    try {
      dispatch(signOutUserStart());
      const res = await fetch('/api/auth/signout');
      const data = await res.json();
      if (data.success === false) {
        dispatch(signOutUserFailure(error.message));
        return;
      }
      dispatch(signOutUserSuccess(data));
    } catch (error) {
      dispatch(signOutUserFailure(error.message));
    }
  };
  return (
    <div className="py-7 px-3 lg:px-7 border-r-2 min-h-screen flex flex-col gap-4 ">
      <Link to="/properties">
        <div className="flex gap-2">
          <FaBuilding className="text-xl text-emerald-900 hover:scale-125" />

          <label className="whitespace-nowrap hidden lg:inline font-semibold text-emerald-900 hover:underline cursor-pointer">
            My Property
          </label>
        </div>
      </Link>
      <Link to="/dashboard">
        <div className="flex gap-2">
          <FaUser className="text-xl text-emerald-900 hover:scale-125" />

          <label className="whitespace-nowrap hidden lg:inline font-semibold text-emerald-900 hover:underline cursor-pointer">
            Profile
          </label>
        </div>
      </Link>
      <Link to="/profile">
        <div className="flex gap-2">
          <FaCog className="text-xl text-emerald-900 hover:scale-125" />

          <label className="whitespace-nowrap hidden lg:inline font-semibold text-emerald-900 hover:underline cursor-pointer">
            Settings
          </label>
        </div>
      </Link>

      <div
        onClick={handleSignOut}
        className="flex gap-2"
      >
        <FaSignOutAlt className="text-xl text-emerald-900 hover:scale-125" />

        <label className="whitespace-nowrap hidden lg:inline font-semibold text-emerald-900 hover:underline cursor-pointer">
          Log Out
        </label>
      </div>
    </div>
  );
};

export default SideBar;
