import React,{useContext,useState} from 'react';
import {Context} from '../../store/context';
import Item from './item/index';
const Tasks =()=>{
    const{state,dispatch} = useContext(Context);
    
    return(
        <div className='task'>
            {state.allTask.map((e,index)=><Item state={state.authUser} dispatch={dispatch} key={index} 
            name={e.name} 
            description={e.description} 
            id={e.id} />)}
        </div>
    )
}

export default Tasks;