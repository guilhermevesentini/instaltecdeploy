import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { isAuthenticated } from "./services/auth";
import Login from "./pages/Login/index";
import RecuperarSenha from "./pages/Recupararsenha/recuperarsenha";
import NovaSenha from "./pages/newpassword/NovaSenha";
import RegisterConfirm from "./pages/RegisterConfirm";
import Conversor from "./pages/MainPage/Conversor/index";
import Suporte from './pages/MainPage/Suporte/Suporte';
import Home from "./pages/HomePage/index";
import Dashboard from "./pages/MainPage/Dashboard/Dashboard";
import Form from "./pages/MainPage/Suporte/form";




const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to= '/Login' />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter >
    <Switch>
      <Route exact path={process.env.PUBLIC_URL + '/'} component={Home} />    
      <Route path="/Login" component={Login} />     
      <Route path="/Dashboard" component={Dashboard} />
      <Route path="/recuperarsenha" component={RecuperarSenha} />
      <Route path="/verification" component={RegisterConfirm} />
      <Route path="/NovaSenha" component={NovaSenha} />
      <Route path="/Conversor" component={Conversor} />
      <Route path="/Suporte" component={Suporte} /> 
      <Route path="/Form" component={Form} />     
      <Route path="*" component={() => <h1>Página não encontrada!</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;