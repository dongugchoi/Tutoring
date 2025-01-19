import styled, { keyframes } from "styled-components";

export const growLine = keyframes`
  0% {
    height: 0;
  }
  100% {
    height: 100%;
  }
`;

export const slideInLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const slideInRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

// 타임라인 전체컨테이너
export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-bottom: 3.75rem;
  margin-top:3.75rem;
  z-index: 0;

 
/* 태블릿 화면 */
  @media (max-width: 1080px) {
    padding: 40px 15px; /* 패딩 축소 */
    margin-top: 80px; /* 상단 여백 축소 */
    margin-bottom: 3rem; /* 하단 여백 축소 */
  }

  /* 중간 태블릿 화면 */
  @media (max-width: 768px) {
    padding: 35px 12px; /* 패딩 축소 */
    margin-top: 70px; /* 상단 여백 축소 */
    margin-bottom: 2.8rem; /* 하단 여백 축소 */
  }

  /* 작은 모바일 화면 */
  @media (max-width: 480px) {
    padding: 30px 10px; /* 더 작은 패딩 */
    margin-top: 60px; /* 더 작은 상단 여백 */
    margin-bottom: 2.5rem; /* 더 작은 하단 여백 */
  }
`;

//타임라인 제목
export const Title = styled.h1`
  font-size: 3rem;
  color: rgba(255, 255, 255, 0.6);
  text-shadow: 
    2px 2px 5px rgba(0, 0, 0, 0.8), /* 더 두꺼운 검은색 그림자 */
    -2px -2px 5px rgba(255, 215, 0, 0.7); /* 더 두꺼운 금색 그림자 */
  text-align: center;
  margin:30px 0 20px 0;
  z-index: 0;
  
     /* 태블릿 화면 */
  @media (max-width: 1080px) {
    font-size: 2rem; /* 글씨 크기 축소 */
    margin: 20px 0 15px 0; /* 여백 조정 */
  }

  /* 작은 모바일 화면 */
  @media (max-width: 480px) {
    font-size: 1.5rem; /* 더 작은 화면에서 글씨 크기 축소 */
    margin: 15px 0 10px 0; /* 여백을 더 줄임 */
    text-shadow: 
      1px 1px 3px rgba(0, 0, 0, 0.7), /* 그림자 크기 축소 */
      -1px -1px 3px rgba(255, 215, 0, 0.6); /* 그림자 크기 축소 */
  }
`;

// 가운데 선
export const Timeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  margin-top: 50px;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 4px;
    height: 100%;
    background: linear-gradient(to bottom, #1a234e, #ffab91);
    z-index: 0;
   animation: ${growLine} ${({ $itemCount }) => $itemCount * 1}s ease-out forwards;
  }

    /* 태블릿 화면 */
  @media (max-width: 768px) {
    max-width: 600px; /* 너비 축소 */
    margin-top: 40px; /* 위쪽 여백 축소 */
    &:before {
      width: 3px; /* 중앙 선 너비 축소 */
    }
  }

  /* 작은 모바일 화면 */
  @media (max-width: 480px) {
    max-width: 100%; /* 너비를 화면에 맞게 조정 */
    margin-top: 30px; /* 위쪽 여백 더 축소 */
    &:before {
      width: 2px; /* 중앙 선 너비 더 축소 */
    }
`;

//타임라인에 보여지는 글씨
export const TimelineItem = styled.div`
  opacity: 0; /* 기본값 */
    transform: translateX(${({ $isOdd }) => ($isOdd ? "-100%" : "100%")});
  animation-delay: ${({ $delay }) => $delay}s;
  transition: opacity 0.8s ease-out, transform 0.8s ease-out; /* 애니메이션 추가 */

  &.visible {
    opacity: 1;
    transform: translateX(0);
  }

  /* 나머지 스타일 그대로 유지 */
  position: relative;
  margin: 40px 0;
  padding: 20px;
  width: 50%;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #ede7f6;
  z-index: 2;

  &:nth-child(odd) {
    left: 0;
    margin-left: auto;
    text-align: left;
  }

  &:nth-child(even) {
    right: 0;
    margin-right: auto;
    text-align: left;
  }

  &:nth-child(odd)::after,
  &:nth-child(even)::after {
    content: "";
    position: absolute;
    top: 12px;
    width: 12px;
    height: 12px;
    background-color: #ffab91;
    border: 2px solid #fff;
    border-radius: 50%;
    z-index: 2;
  }

  &:nth-child(odd)::after {
    right: -6px;
  }

  &:nth-child(even)::after {
    left: -6px;
  }

   /* 태블릿 화면 */
  @media (max-width: 768px) {
    width: 70%; /* 너비 축소 */
    margin: 30px auto; /* 양쪽 중앙 정렬 */
    text-align: center; /* 텍스트 중앙 정렬 */
    padding: 15px; /* 패딩 축소 */

    &:nth-child(odd),
    &:nth-child(even) {
      margin-left: auto;
      margin-right: auto;
    }

    &:nth-child(odd)::after,
    &:nth-child(even)::after {
      left: 50%; /* 점을 중앙으로 */
      transform: translateX(-50%);
    }
  }

  /* 작은 모바일 화면 */
@media (max-width: 480px) {
  opacity: 0;
  transform: translateX(${({ $isOdd }) => ($isOdd ? "-100%" : "100%")});
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;

  &.visible {
    opacity: 1;
    transform: translateX(0);
  }

  &:nth-child(odd)::after,
  &:nth-child(even)::after {
    left: 50%;
    transform: translateX(-50%);
  }
}

`;

//타임라인 날짜
export const Date = styled.div`
  font-size: 0.8rem;
  color: #555;
  margin-bottom: 8px;

  /* 태블릿 화면 */
  @media (max-width: 768px) {
    font-size: 0.75rem; /* 글씨 크기 축소 */
    margin-bottom: 6px; /* 하단 여백 축소 */
  }

  /* 작은 모바일 화면 */
  @media (max-width: 480px) {
    font-size: 0.7rem; /* 더 작은 글씨 크기 */
    margin-bottom: 5px; /* 하단 여백 더 축소 */
  }
`;

export const Description = styled.p`
  font-size: 0.9rem;
  line-height: 1.4;

  /* 태블릿 화면 */
  @media (max-width: 768px) {
    font-size: 0.85rem; /* 글씨 크기 축소 */
    line-height: 1.3; /* 줄 간격 축소 */
  }

  /* 작은 모바일 화면 */
  @media (max-width: 480px) {
    font-size: 0.8rem; /* 더 작은 글씨 크기 */
    line-height: 1.2; /* 줄 간격 더 축소 */
  }
`;
