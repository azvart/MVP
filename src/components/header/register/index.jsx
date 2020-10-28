import React,{useState,useContext} from 'react';
import {Context} from '../../../store/context'


const Register =()=>{
    const{state,dispatch} = useContext(Context);

      const[register,setRegister]=useState({
          name:'',
          email:'',
          password:'',
          user:false,
          hr:false,
          raiting:0,
          id:'user'+Math.floor(Math.random()*100000),
          userTask:[],
          userAnswer:[]

      });
      
      const handleSubmit=(e)=>{
            e.preventDefault();
            dispatch({
                type:'REGISTER',
                payload:{
                    
                    user:[{...register,},...state.user]
                    
                    
                   
                }
            })
      }
    return(
    <div className='form'>
        <form onSubmit={handleSubmit} className='form-control'>
            <div className='input-control'>
                <label htmlFor="name">Name</label>
                <input 
                type="text" 
                name='name' 
                placeholder='Enter your name'
                value={register.name}
                onChange={(e)=>setRegister({
                    name:e.target.value,
                    email:register.email,
                    password:register.password,
                    user:false,
                    hr:false,
                    raiting:0,
                    id:'user'+Math.floor(Math.random()*100000),
                    userTask:[],
                    userAnswer:[]
                })}
                />
            </div>
            <div className='input-control'>
                <label htmlFor="emil">E-mail</label>
                <input 
                type="text" 
                name='email' 
                placeholder='Enter your E-mail'
                value={register.email}
                onChange={(e)=>setRegister({
                    name:register.name,
                    email:e.target.value,
                    password:register.password,
                    user:false,
                    hr:false,
                    raiting:0,
                    id:'user'+Math.floor(Math.random()*100000),
                    userTask:[],
                    userAnswer:[]
                })}
                />
            </div>
            <div className='input-control'>
                <label htmlFor="password">Password</label>
                <input 
                type="text" 
                name='password' 
                placeholder='Enter your Password'
                value={register.password}
                onChange={(e)=>setRegister({
                    name:register.name,
                    email:register.email,
                    password:e.target.value,
                    user:false,
                    hr:false,
                    raiting:0,
                    id:'user'+Math.floor(Math.random()*100000),
                    userTask:[],
                    userAnswer:[]
                })}
                />
            </div>
            <div className='input-control'>
                <label htmlFor="hr">HR</label>
                <input 
                type="checkbox"
                name='hr'
                checked={register.hr}
                onChange={()=>setRegister({
                    name:register.name,
                    email:register.email,
                    password:register.password,
                    user:false,
                    hr:!register.hr,
                    raiting:0,
                    id:'user'+Math.floor(Math.random()*100000),
                    userTask:[],
                    userAnswer:[]
                })}
                />
            </div>
            <div className='input-control'>
                <label htmlFor="user">User</label>
                <input 
                type="checkbox" 
                name='user'
                checked={register.user}
                onChange={()=>setRegister({
                    name:register.name,
                    email:register.email,
                    password:register.password,
                    user:!register.user,
                    hr:false,
                    raiting:0,
                    id:'user'+Math.floor(Math.random()*100000),
                    userTask:[],
                    userAnswer:[]
                })}
                />
            </div>
            <div className='btn'>
                <button type='submit'>REGISTER</button>
            </div>
        </form>
    </div>
    )
}


export default Register;