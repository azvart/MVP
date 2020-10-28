import React,{useContext,useState} from 'react';
import {Link} from 'react-router-dom';
import './index.scss';
import {Context} from '../../store/context';
import Task from '../tasks/index';
const Page =(props)=>{
    
    const{state,dispatch} = useContext(Context);
    const{store} = props;
    const dif = [1,2,3,4,5,6,7,8,9,10];
    const type=['Java','JS','C++','C#','PHP','Python','TypeScript','Other'];
    const[add,setAdd]= useState(false);
    const[task,setTask]=useState({
        time:'',
        text:'',
        idUser:state.authUser.map((e)=>e.id),
        nameUser:state.authUser.map((e)=>e.name),
        type:'',
        difficult:'',
        name:'',
        rightAnswer:''


    });
    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch({
            type:'ADD',
            payload:{
                allTask:[{...task},...state.allTask],

            }
        });

    
    }
    
    return(
        <div className='auth'>
            <div className='info'>
                <div className='name'>
                    <h1>{state.authUser.map((e)=>e.name)}</h1>
                </div>
                <div className='raiting'>
                    <h1>Рейтинг: {state.authUser.map((e)=>e.raiting)}</h1>
                </div>
                <div className='email'>
                    <p>{state.authUser.map((e)=>e.email)}</p>
                </div>
                <div className='status'>

                        {
                           store[0].user && (
                               <p>User</p>
                           )
                        }      
                        {
                            store[0].hr && (
                                <p>HR</p>
                            )
                        }
        
                </div>
              
              
            </div>
            
            <div className='task-container'>
                <div className='btn'>
                    <button onClick={()=>setAdd(!add)}>+</button>
                </div>
                { add && 
                    <form onSubmit={handleSubmit}>
                        <div className='name-task'>
                            <label htmlFor="name">Название</label>
                            <input 
                            type="text" 
                            value={task.name}
                            onChange={(e)=>setTask({
                                time:task.time,
                                text:task.text,
                                idUser:state.authUser.map((e)=>e.id),
                                nameUser:state.authUser.map((e)=>e.name),
                                type:task.type,
                                difficult:task.difficult,
                                name:e.target.value,
                                rightAnswer:task.rightAnswer,
                                
                            })}
                            />
                        </div>
                        <div className='type-task'>
                            <label htmlFor="type">Направление:</label>
                                <select name="type" onChange={(e)=>setTask({
                                           time:task.time,
                                           text:task.text,
                                           idUser:state.authUser.map((e)=>e.id),
                                           nameUser:state.authUser.map((e)=>e.name),
                                           type:e.target.value,
                                           difficult:task.difficult,
                                           name:task.name,
                                           rightAnswer:task.rightAnswer,
                                })}>
                                    {type.map(e=><option>{ e}</option>)}
                                </select>
                            </div>
                        <div className='difficult-task'>
                            <label htmlFor="dif">Сложность задачи</label>
                            <select name="dif" onChange={(e)=>setTask({
                                     time:task.time,
                                     text:task.text,
                                     idUser:state.authUser.map((e)=>e.id),
                                     nameUser:state.authUser.map((e)=>e.name),
                                     type:task.type,
                                     difficult:e.target.value,
                                     name:task.name,
                                     rightAnswer:task.rightAnswer,
                            })}>
                                {dif.map((e)=><option>{e}</option>)}
                            </select>
                        </div>
                        <div className="time">
                            <label htmlFor="time">Время</label>
                            <input type="text" name='time' placeholder='Введите время в минутах' value={task.time} onChange={(e)=>setTask({
                                     time:e.target.value,
                                     text:task.text,
                                     idUser:state.authUser.map((e)=>e.id),
                                     nameUser:state.authUser.map((e)=>e.name),
                                     type:task.type,
                                     difficult:task.difficult,
                                     name:task.name,
                                     rightAnswer:task.rightAnswer,
                            })}/>
                        </div>
                        <div className="text">
                            <textarea 
                            name="text"  
                            cols="30" rows="10" 
                            placeholder='Введите условие'
                            value={task.text}
                            onChange={(e)=>setTask({
                                time:task.time,
                                text:e.target.value,
                                idUser:state.authUser.map((e)=>e.id),
                                nameUser:state.authUser.map((e)=>e.name),
                                type:task.type,
                                difficult:task.difficult,
                                name:task.name,
                                rightAnswer:task.rightAnswer,
                            })}
                            ></textarea>
                        </div>
                        <div className='right-answer'>
                            <textarea name="text"  cols="30" rows="10"
                            placeholder='Напишите правильный ответ'
                            value={task.rightAnswer}
                            onChange={(e)=>setTask({
                                time:task.time,
                                text:task.text,
                                idUser:state.authUser.map((e)=>e.id),
                                nameUser:state.authUser.map((e)=>e.name),
                                type:task.type,
                                difficult:task.difficult,
                                name:task.name,
                                rightAnswer:e.target.value,
                                
                            })}
                            ></textarea>
                        </div>
                        <div className='btn'>
                            <button type='submit'>Добавить задачу</button>
                        </div>
                    </form>
                }
                
           
           </div>

                <Task dif={dif}/>
        </div>
    )
}



export default Page;