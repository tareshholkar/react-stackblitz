import React, {Component} from "react";
import {BrowserRouter , Route, Switch} from "react-router-dom";
import Home from "./components/home";
import Register from "./components/register";
import Details from "./components/details";
import Error from "./components/error";
import Navigation from "./components/navigation";
import Header from "./components/header";
import Footer from "./components/footer";
import Sort from "./components/sort";
import './App.css';



class App extends Component{    
  render(){
    return(
      <BrowserRouter>
      <Header />
      <Navigation />    
        <Switch>
            <Route path='/' exact component={Sort} />
            <Route path='/home' exact component={Sort}  />
            <Route path='/register' component={Register}  />
            <Route path='/details' component={Details} />
            <Route component={Error} />          
        </Switch>
        <Footer /> 
      </BrowserRouter>
     
    );
  }
}

export default App;
