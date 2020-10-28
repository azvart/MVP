import React,{useReducer,useEffect} from 'react';
import './app.scss';

import{Route,Switch,Redirect,BrowserRouter} from 'react-router-dom';
import {Context} from './store/context';
import {Store } from './store/store';
import {Reducer} from './store/reducer';
import Header from './components/header/index';
import Page from './components/page/index';

const App =()=>{
  const[state,dispatch] = useReducer(Reducer,Store);
  
  



  return(
    <Context.Provider value={{dispatch,state}}>
         
         

        
          <BrowserRouter>
          
          <Route exact path="/" render={()=><Header />} />
          { state.authUser.map((e)=>e.id ) != '' &&
          <Switch>
          <Route path={`/${state.authUser.map((e)=>e.id)}`} render={()=><Page store={state.authUser} />}/>
          <Redirect from='/' to={`/${state.authUser.map((e)=>e.id)}`} />
          </Switch>
          }
          </BrowserRouter>
      
          
  
    
    </Context.Provider>
  )
}

export default App;
