
import { useLocation } from 'react-router-dom';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/public/Home';
import PrivateFull from './layouts/PrivateFull';
import Group from './pages/private/Group';
import Explore from './pages/private/explore/Explore';
import AllGroup from './pages/private/all-group/AllGroup';
import Users from './pages/private/users/users';
import Auth from './pages/public/auth/Auth';
import Profile from './pages/private/profile/Profile';
import MyGroups from './pages/private/my-groups/MyGroups';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';

function App() {
  const location = useLocation();
  return (
    <section className='font-body w-[100%] h-[100%]'>
      <Routes location={location} key={location.pathname} >
        {/* <Route index element={<Home />} /> */}
        <Route index element={<Navigate replace to="/public/auth" />} />

        <Route path="private" element={<PrivateFull />}>
          <Route index element={<Explore />} />
          <Route path="explore" element={<Explore />} />
          <Route path="group/:id" element={<Group />} />
          <Route path="groups" element={<AllGroup />} />
          <Route path="my-groups" element={<MyGroups />} />
          <Route path="students" element={<Users />} />
          <Route path="profile/:id" element={<Profile/>} />
          
          <Route path='*' element={<Navigate replace to="/private/explore" />} />
        </Route>
        <Route path="public">
          <Route path="auth" element={<Auth />} />
        </Route>

        <Route path='*' element={<Navigate replace to="/public/auth" />} />
      </Routes>
      
      <ToastContainer />
    </section>
  );
}

export default App;
