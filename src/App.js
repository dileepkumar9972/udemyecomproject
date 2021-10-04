import React from 'react';
import HomePage from './pages/homepage/homepage.component'
import './App.css';
import { Route,Switch } from 'react-router-dom';
import ShopPage from'./pages/shop/shop.component';
import Header from './Components/header/header.component'
const HatsPage = () => {
  return(
  <div>
    <h1>HATS PAGE</h1>
  </div>
  )
}
function App() {
 
  return (
    <div className="App">
      <Header/>
      <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route path="/shop" component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
