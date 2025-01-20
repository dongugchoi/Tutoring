// props 디폴트 값

const Box4 = (props) => {

    const style={
        backgroundColor : props.color,
        border : '10px solid blue'
    };

    return (
        <>
            <div className='box' style={style}>
                {props.name}
            </div>
        </>
    )
}


//props 디폴트값 설정하기
Box4.defaultProps = {
    color: 'red',
    name : '빨강'
}

export default Box4;