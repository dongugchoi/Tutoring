import React, { useState, useEffect } from "react";
import styled from "styled-components";

const NavBar = styled.nav`
  position: fixed;
  top: 50%; /* 기본 웹에서 화면의 세로 중앙에 배치 */
  right: 0; /* 기본 웹에서 화면 오른쪽에 붙임 */
  transform: translateY(-50%); /* 세로 중앙 정렬 보정 */
  color: white;
  display: flex;
  flex-direction: column; /* 기본 웹에서 아이템을 세로로 나열 */
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  background-color: none;
  border-radius: 8px 0 0 8px; /* 왼쪽 모서리를 둥글게 */
  z-index: 1000; /* 다른 요소 위에 위치 */
  transition: top 0.3s ease-in-out; /* 부드러운 전환 */

  @media (max-width: 768px) {
    top: ${({ $isVisible }) => ($isVisible ? "0" : "-60px")};
    right: auto;
    left: 0;
    width: 100%; /* 전체 너비 차지 */
    transform: none; /* 중앙 정렬 보정 제거 */
    flex-direction: row; /* 모바일에서 아이템을 가로로 나열 */
    justify-content: center; /* 중앙 정렬 */
    background-color: none;
    border-radius: 0; /* 둥근 모서리 제거 */
  }
`;

const NavItem = styled.a`
  margin: 10px 0; /* 기본 웹에서 세로 간격 추가 */
  color: white;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
  margin: 0 10px 70px 0;

  &:hover {
    text-decoration: underline;
  }

   /* 태블릿 및 작은 화면 */
  @media (max-width: 1080px) {
    margin: 30px 10px; /* 모바일에서 가로, 세로 간격 조정 */
    font-size: 1rem; 
  }

    @media (max-width: 768px) {
    margin: 10px 15px; /* 모바일에서 가로, 세로 간격 조정 */
    font-size: 0.9rem; /* 모바일에서 글씨 크기 축소 */
      text-shadow: 
    2px 2px 4px rgba(0, 0, 0, 0.8), /* 검은색 진한 그림자 */
    -2px -2px 4px rgba(255, 215, 0, 0.6), /* 연한 노란색 그림자 */
    0px 0px 6px rgba(0, 0, 0, 0.5); /* 검은색 빛나는 효과 추가 */
}
  }

  /* 작은 모바일 화면 */
@media (max-width: 480px) {
  margin: 8px 10px; /* 작은 화면에서 간격 축소 */
  font-size: 0.8rem; /* 더 작은 화면에서 글씨 크기 축소 */
  color: white; /* 글씨 색상을 화이트로 설정 */
  text-shadow: 
    2px 2px 4px rgba(0, 0, 0, 0.8), /* 검은색 진한 그림자 */
    -2px -2px 4px rgba(255, 215, 0, 0.6), /* 연한 노란색 그림자 */
    0px 0px 6px rgba(0, 0, 0, 0.5); /* 검은색 빛나는 효과 추가 */
}
`;





const Header = () => {
  const [isVisible, setIsVisible] = useState(true); // 헤더가 보이는 상태
  const [lastScrollY, setLastScrollY] = useState(0); // 마지막 스크롤 위치

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      // 스크롤 내릴 때 헤더 숨김
      setIsVisible(false);
    } else {
      // 스크롤 올릴 때 헤더 표시
      setIsVisible(true);
    }

    setLastScrollY(currentScrollY); // 마지막 스크롤 위치 업데이트
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);


  return (
    <NavBar $isVisible={isVisible}>
      <NavItem href="#about">About</NavItem>
      <NavItem href="#skills">Skill</NavItem>
      <NavItem href="#projects">Projects</NavItem>
      <NavItem href="#contact">Contact</NavItem>
    </NavBar>
  );
};

export default Header;
