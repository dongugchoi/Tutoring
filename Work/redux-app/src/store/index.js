
import { createStore} from 'redux';
//리덕스라는 도구에서 createStore라는 기능을 가져와
import rootReducer from '../reducer';
//rootReducer를 ../reducer에서 가져와
const store = createStore(rootReducer);
//rootReducer로 store라는 저장소를 만들어

store.subscribe(() =>{
    console.log(store.getState()); //스토어 안에 겟스테이트는 전체스테이트
    //"저장소에 변화가 생기면 console.log로 새로운 상태를 보여줘!"
    
})

export default store;


