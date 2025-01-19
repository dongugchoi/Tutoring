
// import {Fragment} from 'react';

// [1]
// function Welcome(props){
//     return(
//         <p>Welcom to {props.city} (인구 수 : {props.population} 만명)</p>
//     )              
// }

// export default Welcome;

// [2]
// const Welcome = function(props){
//     return(
//         <p>Welcom to {props.city} (인구 수 : {props.population} 만명)</p>
//     )
// }

// export default Welcome;

// [3] Arrow Function 선호
const Welcome = ( { city, population }) => {
    return(
        <p>Welcom to {city} (인구 수 : {population} 만명)</p>
    ) 
}

export default Welcome;

// [4] 선호
// Fragement를 사용하면 의미없는 태그의 삽입을 방지할 수 있음 => import가 필요함. ==> 축약형으로 생략가능 <></>
// export default function Wlecome(props){
//     return(
//         <Fragment>
//             <p>Welcom to {props.city} (인구 수 : {props.population} 만명)</p>
//         </Fragment>
//     )
// }

