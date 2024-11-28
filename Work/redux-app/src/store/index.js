
import { createStore} from 'redux';
import rootReducer from '../reducer';
const store = createStore(rootReducer);

store.subscribe(() =>{
    console.log(store.getState()); //스토어 안에 겟스테이트는 전체스테이트
    
})

export default store;


