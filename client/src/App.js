import './App.css';
import AppNavbar from './components/AppNavBar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Profile from './components/pages/Profile';
import PrivateRoute from './components/routes/PrivateRoute';

import { useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { getAuthUser } from './actions/authActions';
import {getBiens} from './actions/biensActions';
import RegisterModal from './components/auth/RegisterModal';
import ListBiens from './components/Biens/ListBiens'; 
import AdminRoute from './components/routes/AdminRoute';
import { getAllUsers } from './actions/userActions';
import { getRdv } from './actions/rdvActions';
import ListBien from './components/Admin/GererBiens/ListBien';
import RdvList from './components/Admin/GererRdv/RdvList';
import AllUsers from './components/Admin/GererUsers.js/AllUsers';
import AdminDash from './components/AdminDash'
import AddBien from './components/Admin/GererBiens/AddBien';
import LoginModal from './components/auth/LoginModal';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Services from './components/pages/Services';


function App() {
  const dispatch = useDispatch();
  
  const getUser = () => dispatch(getAuthUser());
  const getBien =()=> dispatch(getBiens());
  const getRdvv =()=> dispatch(getRdv());
  const getAllUser =()=> dispatch(getAllUsers());

  useEffect(() => {
    getUser();
    getBien();
    getRdvv();
    getAllUser();
  }, []);
  
  


  return (
    <BrowserRouter>
     
      <AppNavbar  />
      <Switch>
      
      <Route exact path="/" component={Home} />
      <Route  path="/nav" component={AppNavbar} />
        <PrivateRoute path="/profile" component={Profile} />
        <PrivateRoute  exact path="/Admin"  component={AdminDash} />
        <Route path="/register" render={() => <RegisterModal />} />
        <Route path="/login" render={() => <LoginModal />} />
        <Route path="/listeBiens" render={() => <ListBiens />} />
        <Route path="/About" render={() => <About />} />
        <Route path="/contact" render={() => <Contact />} />
        <Route path="/services" render={() => <Services />} />
        <PrivateRoute path="/gererBiens" render={() => <ListBien />} />
        <PrivateRoute path="/getRdv" render={() => <RdvList />} />
        <PrivateRoute path="/getUsers" render={() => <AllUsers />} />
        <PrivateRoute path="/addbien" render={() => <AddBien />} />
        
      </Switch>
      
      </BrowserRouter>
  );
}

export default App;
