import AuthProvider from './context/AuthProvider';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import NotFound from './Components/NotFound/NotFound';
import Placeorder from './Components/Placeorder/Placeorder';
import Orders from './Components/Orders/Orders';
import Manage from './Components/Manage/Manage';
import AddService from './Components/AddService/AddService';
function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Header>

        </Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/spots/:id">
            <Placeorder></Placeorder>
          </PrivateRoute>
          <Route exact path='/login'>
            <Login></Login>
          </Route>
          <PrivateRoute exact path="/add">
            <AddService></AddService>
          </PrivateRoute>
          <PrivateRoute exact path="/manage">
            <Manage></Manage>
          </PrivateRoute>
          <PrivateRoute exact path="/orders">
            <Orders></Orders>
          </PrivateRoute>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>

      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
