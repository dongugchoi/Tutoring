import { atom } from "recoil";
import itemMappings from "../assets/FarmData.json"

// p_startday 코드
const startDateState = new Date();
startDateState.setDate(startDateState.getDate() - 1);

const startDateStateString = startDateState.toISOString().split('T')[0]; // 'YYYY-MM-DD' 형식
// 조회 시작 날짜 상태 (기본값: 어제 날짜)
export const startDateStateAtom = atom({
    key: 'startDateState',  // 고유한 키
    default: startDateStateString,  // 기본값을 오늘 날짜로 설정
});


// p_endday 코드
const endDateState = new Date();
const endDateStateString = endDateState.toISOString().split('T')[0]; // 'YYYY-MM-DD' 형식
// 조회 종료 날짜 상태 (기본값: 오늘 날짜)
export const endDateStateAtom = atom({
    key: 'endDateState',  // 고유한 키
    default: endDateStateString,  // 기본값을 오늘 날짜로 설정
});


// 지역 코드
// 지역 코드 상태 (기본값: 빈 문자열)
export const countryCodeStateAtom = atom({
    key: 'countryCodeState',
    default: '',
});

// 반환 타입
// 데이터 반환 타입 상태 (기본값: JSON)
export const returnTypeState = atom({
// 데이터 반환 타입 상태 (기본값: JSON)
    key: 'returnTypeState',
    default: 'json',
});

// 요청 데이터
// 요청 데이터 상태 (DTO 형태)
export const priceRequestDTOAtom = atom({
    key: "priceRequestDTO",
    default: {
        p_startday: startDateStateString,// 조회 시작 날짜
        p_endday: endDateStateString,   // 조회 종료 날짜
        p_itemcategorycode: "",  // 부류 코드
        p_itemcode: "", // 품목 코드 
        p_kindcode: "",                   // 품종 코드
        p_productrankcode: "",  // 등급 코드
        p_countrycode: "",                // 지역 코드
        p_returntype: "json",             // 반환 타입
    }
});
// 일일 가격 데이터 상태 (배열)
// 하루 가격 데이터 상태 (priceDataAtom)
// 일일 가격 데이터 상태 (배열)
export const priceDataAtom = atom({
// 일일 가격 데이터 상태 (배열)
    key: "priceDataAtom", // 상태의 고유 키
    default: [],          // 기본값은 빈 배열
});

// 일주일 가격 데이터 상태
// 최근 7일 가격 데이터 상태 (배열)
export const recentSevenDaysDataAtom = atom({
// 최근 7일 가격 데이터 상태 (배열)
    key: "recentSevenDaysDataAtom",
    default: [],
});

// 농장 데이터 상태 (JSON 데이터)
export const farmDataAtom = atom({
// 농장 데이터 상태 (JSON 데이터)
    key: "farmDataAtom",
    default: itemMappings,
})

//선택된 아이템을 저장해주는 상태
// 선택된 아이템 상태 (null 또는 객체)
export const selectedItemAtom = atom({
// 선택된 아이템 상태 (null 또는 객체)
    key: "selectedItemAtom", 
    default: null, 
});

//도매와 소매를 관리해주는 상태
// 도매/소매 가격 코드 상태
export const priceTypeCodeStateAtom = atom({
// 도매/소매 가격 코드 상태
    key: 'priceTypeCodeStateAtom',
    default: '',
});

// 검색 결과 상태 (배열)
export const searchResultsAtom = atom({
// 검색 결과 상태 (배열)
    key: "searchResultsAtom",
    default: [], 
});

// 결과 제목 상태 (문자열)
export const titleAtom = atom({
// 결과 제목 상태 (문자열)
    key: "titleAtom",
    default: "평균 가격 결과", 
  });

// 평균 가격 상태 (숫자)
  export const averagePriceAtom = atom({
// 평균 가격 상태 (숫자)
    key: "averagePriceAtom", 
    default: 0, 
  });