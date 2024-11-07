//props값 구조분해할당 문법으로 적용하기

const Box3 = ({color, name}) => {
    return (
        <>
           {/* 
                구조분해할당(Destructuring Assignment)
                -App.js에서 사용 시 => 매개변수를 전달 받을 때 => 객체로 처음부터 받음
                -props 대신 => {color, name} 변경.
                -단, CSS스타일 경우 속성 이름과 값이 같아야 제대로 변경이 된다.
           */}

           <div className ="box" style={{backgroundColor:color, color}}>
                { name }
           </div>
        </>
    )
}



export default Box3;