import React,{useContext,useState,useEffect} from 'react';
import {Context} from '../../store/context';

const Tasks =(props)=>{
    const{state,dispatch} = useContext(Context);
    const[visible,setVisible] = useState(false);
    let step = (state.allTask.map((e)=>e.difficult) - state.authUser.map((e)=>e.raiting)) / 400;
    let rait = 1/(1+ Math.pow(10, step ) );
    let raitFinal = state.authUser.map((e)=>e.raiting) + (0.4*(0.5-rait));
    console.log(raitFinal);
    const[answer,setAnswer] = useState({
        txt:'',
        idUser:state.authUser.map((e)=>e.id),
        nameUser:state.authUser.map((e)=>e.name),

    });
    const{dif} = props;
useEffect(()=>{

},[rait]);
    ///timer
 
 
    ///
    ///answer
    
    const handleAnswer=(e)=>{
        e.preventDefault();
        dispatch({
            type:'ADD_ANSWER_USER',
            payload:{
                Answer:[{...answer},...state.Answer]
            }
        });
        dispatch({
            type:'UPDATE_RAITING',
            payload:{
                authUser:[...state.authUser,state.authUser.map((e)=>e.raiting=raitFinal)]
            }
        })
    }
    ///
    return(
        <div className='task'>
                {state.allTask.map((e,index)=><div key={index} className='tasks'>
                <h1>Задача № {index}</h1>
                    <div className="info-task">
                        <h3>Направление {e.type}</h3>
                        <p>{e.name}</p>
                        <p>Сложность:{e.difficult}</p>
                        <button onClick={()=>setVisible(!visible)}>Решать</button>
                    </div>
                    {visible && 
                    <div className='text'>
                        <p>{e.text}</p>
                        <form className='anser' onSubmit={handleAnswer}>
                            <div className="answer-task">
                                <textarea 
                                value={answer.txt}
                                onChange={(e)=>setAnswer({
                                    txt:e.target.value,
                                    idUser:state.authUser.map((e)=>e.id),

                                    nameUser:state.authUser.map((e)=>e.name),
                                })}
                               placeholder='Тут писать решение'
                               ></textarea>
                            </div>
                            <div className='time'>
                                
                            </div>
                            <div className='yourdifTask'>
                                <label htmlFor="udif">Сложность на ваш взгляд:</label>
                                <select name="udif">
                            {dif.map((e)=><option>{e}</option>)}
                                </select>
                            </div>
                            <div className='btn'>
                                    <button type='submit'>Отправить результат</button>
                            </div>
                        </form>
                    </div>
                    }
                </div>)}
        </div>
    )
}

export default Tasks;