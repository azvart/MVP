import React,{useState} from 'react';
import './index.scss';
import Login from './auth/index';
import Register from './register/index';
import Task from '../tasks/index';
const Header =()=>{
  const[active,setActive]=useState(false);
    return(
        <header className='header'>
        <div className='btn'>
          <button onClick={()=>setActive(!active)} >Login </button>
          <button onClick={()=>setActive(!active)}>Register </button>
        </div>
        { !active ? <Login /> : <Register /> }
       
       
      </header>
    )
}



export default Header;