import React, {useState, useEffect} from 'react'

const Count = () => {

    const[count, setCount] = useState(0);

    //useEffect Hook
    //1. 컴포넌트가 (시작 될때)마운트 될 때 실행. 여러 개 컴포넌트면 각각 실행.
    //2. 일단 기본 틀이 되는 골격은 무조건 암기.
    //3. [] 빈 배열을 작성하면 매번 호출되지는 않음. 단, 최초 1번은 실행된다.
    //4. [] 배열안에 명시적으로 상태관리하는 변수명을 입력하면 해당 변수의 상태가 변경되었을 때만 업데이트 됨.
    


    useEffect(() => {
        console.log('마운트');
        
    }, [count])
    //------------------------------------------------------------------------------------------------



    const PluseClick = () => {
        setCount(count + 1);
    };

    const MinusClick =() =>{
        if(count == 0){
            alert('0보다 내려갈 수 없음');
            return;
        }
        setCount(count - 1);
    }

  return (
    <div>
     <p>count : {count}</p>
      <button onClick={PluseClick}>+</button>
      <button onClick={MinusClick}>-</button>
    </div>
  )
}

export default Count
