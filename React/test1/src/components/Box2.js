// props 디폴트 값

const Box2 = (props) => {
    return (
        <>
            <div className='box' style={{backgroundColor : props.color}}>
                {props.name}
            </div>
        </>
    )
}


//props 디폴트값 설정하기
Box2.defaultProps = {
    color: 'red',
    name : '빨강'
}

export default Box2;