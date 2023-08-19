
import { useLocation } from 'react-router-dom';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/public/Home';
import PrivateFull from './layouts/PrivateFull';
import Group from './pages/private/Group';
import Explore from './pages/private/explore/Explore';
import AllGroup from './pages/private/all-group/AllGroup';
import Profile from './pages/private/profile/Profile';

function App() {
  const location = useLocation();
  return (
    <section className='font-body w-[100%] h-[100%]'>
      <Routes location={location} key={location.pathname} >
        <Route index element={<Home />} />

        <Route path="private" element={<PrivateFull />}>
          <Route path="explore" element={<Explore />} />
          <Route path="group" element={<Group />} />
          <Route path="groups" element={<AllGroup />} />
          <Route path="profile/:id" element={<Profile/>} />
          
          <Route path='*' element={<Navigate replace to="/private/explore" />} />
        </Route>

        <Route path='*' element={<Navigate replace to="/" />} />
      </Routes>
    </section>
  );
}

export default App;
