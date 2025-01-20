export const TOGGLE_MODAL = "TOGGLE_MODAL";
//TOGGLE_MODAL이라는 이름표를 만들고, 안에 "TOGGLE_MODAL"라는 값을 넣어
export const CLOSE_MODAL = "CLOSE_MODAL";
//CLOSE_MODAL이라는 이름표를 만들고, 안에 "CLOSE_MODAL"라는 값을 넣어
export const OPEN_MODAL = "OPEN_MODAL";
//OPEN_MODAL이라는 이름표를 만들고, 안에 "OPEN_MODAL"라는 값을 넣어

//앱전체에서 공용으로 사용하는 하나의 큰 객체
//처음 상태(initialState)는 isShow가 false상태야 라는걸 명시
const initialState =  {
        isShow : false,
}

/**
 * 루트 리듀서 
 * @param {*} state : 현재 상태 
 * @param {*} action : 액션 상태(함수를 호출하는 주문)
 * @returns 
 */

/*
modalReducer라는 함수 상태(state)랑 액션(action)을 받아서 새로운 상태를 알려준다.
설명: 상태를 바꾸는 규칙을 정하는 함수 액션에 따라 상태를 이렇게 바꾼다
*/
const modalReducer = (state = initialState, action) => {
    //어떤 일이 벌어져야 하는지(action.type)를 보고, 그에 맞게 상태를 바꾼다.
    switch(action.type){ // 액션
        //토글모달이라는 액션타입
        case 'TOGGLE_MODAL':
            return {
                //state는 현재 false고 false라는 이니셜스테이트 객체를 복사함
                ...state,
                //스테이트가 false일때 true로변환 true일때 false로 변환
                    isShow :!state.modal.isShow,
    
            }
            //클로즈 모달이라는 액션타입
        case "CLOSE_MODAL":
            return {
                //state는 현재 true고 버튼을 누르면 false로 변환
                ...state,
                 isShow : false,

            }
            //오픈 모달이라는 액션타입
        case "OPEN_MODAL":
            return {
                //state는 현재 false고 버튼을 누르면 true로 변환
                ...state,
                 isShow : true,
                
            }
        default:
            //아무런 액션에 해당하지않으면 false 반환
            return state;
    }
}

export default modalReducer;