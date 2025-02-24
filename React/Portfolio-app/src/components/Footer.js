import React from "react";
import styled from "styled-components";

// 스타일 컴포넌트 정의
const FooterWrapper = styled.footer`
  color: white;
  text-align: center;
  padding: 20px;
  font-size: 0.9rem;
  z-index: 0;

  /* 1080px 이하 화면 */
  @media (max-width: 1080px) {
    font-size: 0.8rem; /* 글씨 크기 축소 */
    padding: 18px; /* 패딩 축소 */
  }

  /* 768px 이하 화면 */
  @media (max-width: 768px) {
    font-size: 0.7rem; /* 글씨 크기 더 축소 */
    padding: 15px; /* 패딩 더 축소 */
  }

  /* 480px 이하 화면 */
  @media (max-width: 500px) {
    font-size: 0.6rem; /* 글씨 크기 대폭 축소 */
    padding: 10px; /* 패딩 최소화 */
  }
`;

const FooterContent = styled.div`
  color: white; /* 기본 텍스트 색상 */
`;

const FooterLink = styled.a`
  color: #1a234e; /* 링크 색상 */
  text-decoration: none;
  margin: 0 10px;

  &:hover {
    text-decoration: underline;
  }
`;

// 컴포넌트 정의
const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        © 2025 DongUgChoi. All rights reserved. |{" "}
        <FooterLink href="mailto:ehddnr7321@gmail.com">Email</FooterLink> |{" "}
        <FooterLink
          href="https://github.com/dongugchoi"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </FooterLink>{" "}
      </FooterContent>
    </FooterWrapper>
  );
};

export default Footer;
