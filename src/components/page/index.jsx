import React,{useContext,useState} from 'react';
import {Link} from 'react-router-dom';
import './index.scss';
import {Context} from '../../store/context';
import Task from '../tasks/index';
const Page =(props)=>{
    const{store} = props;
    const{state,dispatch} = useContext(Context);
    const[task,setTask] = useState({
        name:'',
        description:'',
        id:store.map((e)=>e.id),
        user:store.map((e)=>e.user),
        hr:store.map((e)=>e.hr),
        difficult:''

    });
    const[add,setAdd]= useState(false);
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch({
            type:'ADD',
            payload:{
                allTask:[{...task},...state.allTask],

            }
        })
    
    }
    return(
        <div className='auth'>
            <div className='info'>
                <div className='name'>
                    <h1>{state.authUser.map((e)=>e.name)}</h1>
                </div>
                <div className='email'>
                    <p>{state.authUser.map((e)=>e.email)}</p>
                </div>
                <div className='status'>
                    {state.authUser.map((e)=>e.user) == true ? <p>User</p> : <p>HR</p>}
                </div>
                <div className='logout'>
                <button onClick={()=>{
                dispatch({
                    type:'LOG_OUT',
                    payload:{
                        authUser:[],
                        
                    }
                })
            }}>LogOut</button>
                </div>
                <div className='mainpage'>
                    <Link to='/'>На главную</Link>
                </div>
            </div>
            
            <div className='task-container'>
                <div className='btn'>
                    <button onClick={()=>setAdd(!add)}>+</button>
                </div>
                { add &&
                <form onSubmit={handleSubmit} >
                    <div className='add-task'>
                        <div className="input-task">
                            <input 
                            type="text" 
                            placeholde='Write taskName'
                            value={task.name}
                            placeholder='Write new task'
                            onChange={(e)=>setTask({
                                name:e.target.value,
                                description:task.description,
                                id:state.authUser.map((e)=>e.id),
                                user:state.authUser.map((e)=>e.user),
                                hr:state.authUser.map((e)=>e.hr),
                                difficult:task.difficult
                            })}
                            />
                        </div>
                        <div className='description'>
                            <textarea 
                            className='Write the description'
                            value={task.description}
                            placeholder='Write new description'
                            onChange={(e)=>setTask({
                                name:task.name,
                                description:e.target.value,
                                id:state.authUser.map((e)=>e.id),
                                user:state.authUser.map((e)=>e.user),
                                hr:state.authUser.map((e)=>e.hr),
                                difficult:task.difficult
                            })}
                            >

                            </textarea>
                        </div>
                        <div className='difficult'>
                            <input 
                            type="text" 
                            placeholder='Write difficult'
                            value={task.difficult}
                            onChange={(e)=>setTask({
                                name:task.name,
                                description:task.description,
                                id:state.authUser.map((e)=>e.id),
                                user:state.authUser.map((e)=>e.user),
                                hr:state.authUser.map((e)=>e.hr),
                                difficult:e.target.value
                            })}
                            />
                        </div>
                        <div className='btn'>
                            <button type='submit'>Add</button>
                        </div>
                    </div>
                    </form>
                }
            <Task />
           </div>

        </div>
    )
}



export default Page;