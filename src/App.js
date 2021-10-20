import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Shared/Header/Header';
import Home from './Home/Home/Home';
import Footer from './Shared/Footer/Footer';
import Services from './Pages/Services/Services';
import NotFound from './Shared/NotFound/NotFound';
import Login from './Pages/Login/Login'
import AuthProvider from './Contexts/AuthProvider';
import Register from './Pages/Register/Register';
import Submit from './Pages/SubmitForm/Submit';
import PrivateRoute from './Private/PrivateRoute';
import SingleService from './Pages/SingleService/SingleService';
function App() {
  return (

    <AuthProvider>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/services">
            <Services></Services>
          </PrivateRoute>
          <Route path="/singleservice/:serviceId">
            <SingleService></SingleService>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/submit">
            <Submit></Submit>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
