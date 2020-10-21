import React,{useState,useEffect} from 'react';
import Time from '../time/index';

const Item =(props)=>{
    const{state,dispatch}=props;
    const{name,description,id} = props;
    const[visible,setVisible] = useState(false);
    const handleAddTask=()=>{
            dispatch({
                type:'ANSWER',
                payload:{
                    answer:[{}]
                }
            })
    }
    const[time,setTime]= useState({
        time:0,
        running:false
    });
    let startTime;
    let timeOut;

    const update=(running)=>{
        setTime({
            time:+new Date() - startTime,
            
        })
    };
    const tick=()=>{
        update(true);
         timeOut = setTimeout(tick());
    }
    const toggle=(e)=>{
        e.preventDefault();
        if(!time.running){
            startTime = +new Date();
            tick();
        }else{
            update(false);
            clearTimeout(timeOut);
        }
    }
    return(
        <ul className='task-item'>
            <li className='item' onClick={()=>setVisible(!visible)}>{name}</li>
            { visible &&
                <ul>
                    <li>{description}</li>
                    <form>
                        <div className='answer'>
                            <textarea 
                            name="" 
                            id="" 
                            cols="30" 
                            rows="10"
                            placeholde='Write answer'
                            >

                            </textarea>
                        </div>
                        <Time time={time.time} />
                        <div className='btn'>
                            <button onClick={toggle}>
                                Начать решать
                            </button>
                        </div>
                        <div className='btn'>
                            <button onClick={handleAddTask}>Отправить результат</button>
                        </div>
                    </form>
                </ul>
            }
        </ul>
    )
}


export default Item;