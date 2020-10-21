
import React,{useContext,useState} from 'react';
import {Context} from '../../../store/context';

const Login =() =>{
    const{state,dispatch} = useContext(Context);
    const[value,setValue]=useState({
        email:'',
        password:''
    });
 
    const handleLoginSubmit=(e)=>{
        e.preventDefault();
        if(((state.user.filter(word=>word.email == value.email))&&(state.user.filter(word=>word.password ==value.password)))&&((value.email !== '')||(value.password !== ''))){
            setValue({
                email:'',
                password:'',
               
            })
            dispatch({
                type:'AUTH',
                payload:{
                    authUser:[...state.user.filter(word=>word.email == value.email)]
                }
            });
        }
            
            
        
        

    }
    return(
        <div className='form'>
            <form 
            onSubmit={handleLoginSubmit} 
            className='form-control'>
                <div className='input-control'>
                    <label htmlFor="emil">E-mail</label>
                    <input 
                    type="text" 
                    name='email' 
                    placeholder='Enter your E-mail'
                    value={value.email}
                    onChange={(e)=>setValue({
                        email:e.target.value,
                        password:value.password
                    })}

                    />
                </div>
                <div className='input-control'>
                    <label htmlFor="password">Password</label>
                    <input 
                    type="text" 
                    name='password' 
                    placeholder='Enter your Password'
                    value={value.password}
                    onChange={(e)=>setValue({
                        email:value.email,
                        password:e.target.value
                    })}
                    />
                </div>
                <div className='btn'>
                <button type='submit'>Login</button>
                </div>
            </form>
        
        </div>
    )
}


export default Login;