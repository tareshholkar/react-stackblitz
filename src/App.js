import React, {Component} from "react";
import {BrowserRouter , Route, Switch} from "react-router-dom";
import Home from "./components/home";
import Register from "./components/register";
import Details from "./components/details";
import Error from "./components/error";
import Header from "./components/header";
import './App.css';



class App extends Component{    
  render(){
    return(
      <BrowserRouter>
      <Header />    
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/home' exact component={Home}  />
            <Route path='/register' component={Register}  />
            <Route path='/details' component={Details} />
            <Route component={Error} />          
        </Switch>
      </BrowserRouter>
     
    );
  }
}

export default App;
