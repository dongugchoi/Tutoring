//유저 정보의 상태관리 Recoil
import { atom, selector } from "recoil";

//로그인 성공 여부 전역상태
// 로그인 성공 여부 상태 (불리언)
export const loginsuccessAtom = atom({
    key: 'loginsuccess',
    default : false,
});

//clientNum 전역상태
// 클라이언트 번호 상태 (null 또는 숫자)
export const clientNumAtom = atom({
    key: 'clientNum',
    default: null,
});

// 유저 닉네임 상태 (null 또는 문자열)
export const userNicksuccessAtom = atom({
    key: 'userNicksuccess',
    default: null,
});


//세션스토리지를 통해 로그인성공여부상태 초기화
// 세션 스토리지를 통해 로그인 성공 여부를 확인
export const loginsuccessSelector = selector({
// 세션 스토리지를 통해 로그인 성공 여부를 확인
    key: 'loginsuccessSelector',
    get: () =>{
        return sessionStorage.getItem('loginsuccess') === 'true'; //로컬스토리지에서 로그인 상태 읽기
    }
})

//세션스토리지를 통해 clientNum 전역상태 초기화
// 세션 스토리지를 통해 클라이언트 번호를 확인
export const clientNumSelector = selector({
// 세션 스토리지를 통해 클라이언트 번호를 확인
    key: 'clientNumSelector',
    get: () => {
        return sessionStorage.getItem('clientNum') || null; //로컬 스토리지에서 클라이언트 넘버 읽기
    }
})


// Recoil 상태와 세션 스토리지 동기화 (유저 닉네임)
export const userNickSelector = selector({
// Recoil 상태와 세션 스토리지 동기화 (유저 닉네임)
    key: "userNickSelector",
    get: ({ get }) => {
// 유저 닉네임 상태 (null 또는 문자열)
      return get(userNicksuccessAtom); // Recoil 상태를 최우선으로 사용
    },
    set: ({ set }, newValue) => {
// 유저 닉네임 상태 (null 또는 문자열)
      set(userNicksuccessAtom, newValue); // Recoil 상태 업데이트
      if (newValue) {
        sessionStorage.setItem("userNick", newValue); // 로컬 스토리지 동기화
      }
    },
  });
  
  
//formData
// 회원가입 폼 데이터 상태
export const formDataAtom = atom({
// 회원가입 폼 데이터 상태
    key: 'formDataAtom', // 고유한 key
    default: {
        userName: "",
        userId: "",
        userPwd: "",
        confirmPwd:"",
        userNick: "",
        userEmail: "",
        userPnum: "",
        phoneCom: "",
    },
});

//메세지
// 일반 메시지 상태
export const messageAtom = atom({
    key: "message",
    default: "",
})

//서버메세지
// 일반 메시지 상태
// 서버 메시지 상태
export const smessageAtom = atom({
    key: 'smessage',
    default: "",
})

//유저 닉네임
// 유저 닉네임 상태
export const userNickAtom = atom({
    key: "userNick",
    default: "",
})

//유저 아이디
// 유저 ID 상태
export const userIdAtom = atom({
    key: 'userId',
    default: '',
})

//유저 비밀번호
// 유저 비밀번호 상태
export const userPwdAtom = atom({
    key: 'userPwd',
    default: '',
})

//비밀번호확인 (findUserPwd)
// 비밀번호 확인 상태
export const confirmPwdAtom = atom({
    key: 'confirmPwd',
    default: "",
})


// 입력 검증 메시지 상태
export const validationMessageAtom = atom({
    key: 'validationMessage',
    default: {
      userName: "이름을 입력해주세요(한글만 가능).",
      userId: "아이디를 입력해주세요. (영문자와 숫자만 가능,4~20자)",
      userPwd: "비밀번호를 입력해주세요. (영문자,숫자,특수문자 포함 6~20자)",
      userNick: "닉네임을 입력해주세요.",
      userEmail: "이메일형식이 잘못되었습니다.",
      userPnum: "전화번호를 입력해주세요.(ex:01012345678)",
      phoneCom: "통신사를 선택해주세요.",
    },
  });
  
  // 정규식 상태
// 정규식 검증 상태
  export const validationRegexAtom = atom({
    key: 'validationRegex',
    default: {
      userNameRegex: /^[가-힣]{2,20}$/,
      userIdRegex: /^[a-zA-Z0-9]{4,20}$/,
      userPwdRegex: /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[\W_]).{6,20}$/,
      userEmailRegex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      userPnumRegex : /^01[0-9]\d{8}$/,
    },
  });

// 폼 데이터를 검증하는 함수
  export const validateForm = (formData, validationMessage, validationRegex, setMessage) => {
    for (let key in validationMessage) {
      const value = formData[key] || ""; // 기본값으로 빈 문자열 처리
      const regex = validationRegex[key + "Regex"]; // 동적으로 정규식 접근
  
      // 빈 값 확인
      if (!value.trim()) {
        setMessage(validationMessage[key]);
        return false;
      }
  
      // 정규식 검증
      if (regex && !regex.test(value)) {
        setMessage(validationMessage[key]);
        return false;
      }
    }
    return true;
  };
  
