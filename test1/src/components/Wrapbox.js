//children
//부모컴포넌트의 하위컴포넌트를 사용하려면 children으로 props전달을 해줘야 한다.

//props.children
//1. 컴포넌트간 합성이 가능하다.
//2. 하위(자식) 컴포넌트나 HTML li와 같은 엘리먼트가 얼마나 있는지 모르는 상황에서 화면에 표시해야 할 때

const Wrapbox = ({children}) => {
    return(
        <div>
            {children}
        </div>
    )
}

export default Wrapbox;