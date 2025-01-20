const Box = (props) => {
    return (
        <>
            <div className='box' style={{backgroundColor : props.color}}>
                {props.name}
            </div>
        </>
    )
}

export default Box;