import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import About from './pages/About';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import CreateListing from './pages/CreateListing';
import UpdateListing from './pages/updateListing';
import Listing from './pages/Listing';
import Search from './pages/Search';
import Contact from './pages/Contact';
import PageNotFound from './pages/PageNotFound';
import Admin from './pages/Admin';
import { useSelector } from 'react-redux';
import Footer from './components/Footer';
import Terms from './pages/Terms';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Properties from './pages/Properties';
import Dashboard from './pages/Dashboard';
import Agents from './pages/Agents';
const App = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/sign-in"
          element={<SignIn />}
        />
        <Route
          path="/sign-up"
          element={<SignUp />}
        />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/contact-us"
          element={<Contact />}
        />
        <Route
          path="/search"
          element={<Search />}
        />
        <Route
          path="/listing/:listingId"
          element={<Listing />}
        />
        <Route
          path="/terms"
          element={<Terms />}
        />
        <Route
          path="/privacy-police"
          element={<PrivacyPolicy />}
        />
        <Route
          path="*"
          element={<PageNotFound />}
        />
        <Route
          path={'/users'}
          element={<Agents />}
        />
        <Route element={<PrivateRoute />}>
          {currentUser?.isAdmin === true && (
              <Route
                path={'/admin'}
                element={<Admin />}
              />
            ) && (
              <Route
                path={'/dashboard'}
                element={<Dashboard />}
              />
            )}

          <Route
            path="/profile"
            element={<Profile />}
          />
          <Route
            path="/properties"
            element={<Properties />}
          />
          <Route
            path="/create-listing"
            element={<CreateListing />}
          />
          <Route
            path="/update-listing/:listingId"
            element={<UpdateListing />}
          />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
