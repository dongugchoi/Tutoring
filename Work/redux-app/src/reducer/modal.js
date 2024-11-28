export const TOGGLE_MODAL = "TOGGLE_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";
export const OPEN_MODAL = "OPEN_MODAL";

//앱전체에서 공용으로 사용하는 하나의 큰 객체
const initialState =  {
  
        isShow : false,
    
}

/**
 * 루트 리듀서 
 * @param {*} state : 현재 상태 
 * @param {*} action : 액션 상태(함수를 호출하는 주문)
 * @returns 
 */
const modalReducer = (state = initialState, action) => {
    switch(action.type){ // 액션
        case 'TOGGLE_MODAL':
            return {
                ...state,
                    isShow :!state.modal.isShow,
    
            }
        case "CLOSE_MODAL":
            return {
                ...state,
                 isShow : false,

            }
        case "OPEN_MODAL":
            return {
                ...state,
                 isShow : true,
                
            }
        default:
            return state;
    }
}

export default modalReducer;