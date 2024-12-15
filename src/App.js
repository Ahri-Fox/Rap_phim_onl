import './App.css';
import { createBrowserHistory } from 'history'
import { Router } from 'react-router-dom'
import { HomeTemplate } from './templates/HomeTemplate/HomeTemplate';
import Home from './pages/Home/Home';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom';
import Contact from './pages/Contact/Contact';
import News from './pages/News/News';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Detail from './pages/Detail/Detail';
import CheckOut from './pages/CheckOut/CheckOut';
// import { Suspense, lazy } from 'react'
import CheckOutTemplate from './templates/CheckOutTemplate/CheckOutTemplate';
import { UserTemplate } from './templates/UserTemplate/UserTemplate';
import LoadingComponent from './components/LoadingComponent/LoadingComponent';
import Profile from './pages/Profile/Profile';
import AdminTemplate from './templates/AdminTemplate/AdminTemplate';
import ShowTime from './pages/Admin/ShowTime/ShowTime';
import Films from './pages/Admin/Films/Films';
import AddNew from './pages/Admin/Films/AddNew/AddNew';
import EditFilm from './pages/Admin/Films/EditFilm/EditFilm';
import Users from './pages/Admin/Users/Users';
import NewUser from './pages/Admin/Users/NewUser/NewUser';
import EditUser from './pages/Admin/Users/EditUser/EditUser';

// const CheckOutTemplateLazy = lazy(() => import('./templates/CheckOutTemplate/CheckOutTemplate'))

export const history = createBrowserHistory();



function App() {
  return (
    <Router history={history}>
      <LoadingComponent />
      <Switch>
        <HomeTemplate path='/home' exact Component={Home} />
        <HomeTemplate path='/contact' exact Component={Contact} />
        <HomeTemplate path='/news' exact Component={News} />
        <HomeTemplate path='/detail/:id' exact Component={Detail} />
        <CheckOutTemplate path='/checkout/:id' exact Component={CheckOut} />
        <Route path='/profile' exact component={Profile} />


        {/* <Suspense fallback={<h1>LOADING...</h1>}>
          <CheckOutTemplateLazy path='/checkout/:id' exact Component={CheckOut} />
        </Suspense> */}

        <UserTemplate path='/login' exact Component={Login} />
        <UserTemplate path='/register' exact Component={Register} />

        <AdminTemplate path="/admin" exact Component={Users} />
        <AdminTemplate path="/admin/films" exact Component={Films} />
        <AdminTemplate path="/admin/films/addnew" exact Component={AddNew} />
        <AdminTemplate path="/admin/films/edit/:id" exact Component={EditFilm} />
        <AdminTemplate path="/admin/users" exact Component={Users} />
        <AdminTemplate path="/admin/users/newuser" exact Component={NewUser} />
        <AdminTemplate path="/admin/users/edit/:taikhoan" exact Component={EditUser} />


        <AdminTemplate path="/admin/films/showtime/:id/:tenphim" exact Component={ShowTime} />

        <HomeTemplate path='/' exact Component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
