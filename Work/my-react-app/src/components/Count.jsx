import React , {useState} from 'react'
import count from '../css/count.css'


const Count = () => {
    const [num,setNum] = useState(0);
    const add = () => {
        setNum(num + 1);
    };

    const minus =() =>{
        if(num > 0){
            setNum(num - 1);
        }
    }
  return (
    <div>
      <span>{num}</span>
      <span className='btn' onClick={add}>+</span>
      <span className='btn' onClick={minus}>-</span>
    </div>
  )
}

export default Count
