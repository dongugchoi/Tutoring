import { atom } from "recoil";

//게시글 내용
// 게시글 내용 상태 (문자열)
export const contentAtom = atom({
    key: "content",
    default: "",
})

//작성일자
// 게시글 작성일 상태 (날짜 또는 null)
export const dateAtom = atom({
    key: 'date',
    default: null,
})

//사이드 바
// 사이드바 표시 여부 상태 (불리언)
export const isSidebarVisibleAtom = atom({
    key: 'isSidebarVisible',
    default: false,
})

// 게시판 번호 상태 (숫자 또는 null)
export const bodNumAtom = atom({
// 게시판 번호 상태 (숫자 또는 null)
    key: 'bodNumAtom',
    default: null,
})

//검색결과 저장 
// 검색 결과 저장 상태 (배열)
export const searchboardResultsAtom = atom({
// 검색 결과 저장 상태 (배열)
    key: "searchboardResultsAtom",
    default: [], 
});

