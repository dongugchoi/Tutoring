//유저 정보의 상태관리 Recoil
import { atom, selector } from "recoil";

//로그인 성공 여부 전역상태
export const loginsuccessAtom = atom({
    key: 'loginsuccess',
    default : false,
});

//clientNum 전역상태
export const clientNumAtom = atom({
    key: 'clientNum',
    default: null,
});


//로컬스토리지를 통해 로그인성공여부상태 초기화
export const loginsuccessSelector = selector({
    key: 'loginsuccessSelector',
    get: () =>{
        return localStorage.getItem('loginsuccess') === 'true'; //로컬스토리지에서 로그인 상태 읽기
    }
})

//로컬스토리지를 통해 clientNum 전역상태 초기화
export const clientNumSelector = selector({
    key: 'clientNumSelector',
    get: () => {
        return localStorage.getItem('clientNum') || null; //로컬 스토리지에서 클라이언트 넘버 읽기
    }
})

//formData
export const formDataAtom = atom({
    key: 'formDataAtom', // 고유한 key
    default: {
        userName: "",
        userId: "",
        userPwd: "",
        userNick: "",
        userEmail: "",
        userPnum: "",
        phoneCom: "",
    },
});

//메세지
export const messageAtom = atom({
    key: "message",
    default: "",
})

//서버메세지
export const smessageAtom = atom({
    key: 'smessage',
    default: "",
})

//유저 닉네임
export const userNickAtom = atom({
    key: "userNick",
    default: "",
})

//유저 아이디
export const userIdAtom = atom({
    key: 'userId',
    default: '',
})

//유저 비밀번호
export const userPwdAtom = atom({
    key: 'userPwd',
    default: '',
})

//비밀번호확인 (findUserPwd)
export const confirmPwdAtom = atom({
    key: 'confirmPwd',
    default: "",
})

//유저 휴대폰 번호
export const userPnumAtom = atom({
    key: 'userPnum',
    default: "",
})

//인증번호 요청 여부
export const isCondeSentAtom = atom({
    key: 'isCondeSent',
    default: false,
})

//인증번호 확인
export const vericationCodeAtom = atom({
    key: 'vericationCode',
    default: ""
})

//error
export const errorAtom = atom({
    key: 'error',
    default: "",
})
