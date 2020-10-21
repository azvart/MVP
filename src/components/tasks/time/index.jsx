import React from 'react'

const Time=(props)=>{
const{time} = props;
    const padNumber =(value)=>{
        return value > 9 ? String(value) : "0" + value;
    }
    const h = padNumber(Math.floor(time / 3600000));
    const m = padNumber(Math.floor(time / 60000) % 60);
    const s = padNumber(Math.floor(time / 1000) % 60);
    const c = padNumber(Math.round(time / 10) % 100);
    return(
        <div className='time'>
            {h}:{m}:{s}.<small>{c}</small>
        </div>
    )
}



export default Time;