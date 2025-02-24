import React from "react";
import styled from "styled-components";

// 스타일 정의
const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #333; /* 텍스트 기본 색상 */
  margin-top:3.75rem;
  margin-bottom: 3.75rem;

    /* 1080px 이하 화면 */
  @media (max-width: 1080px) {
    padding: 15px; /* 패딩 축소 */
  }

  /* 768px 이하 화면 */
  @media (max-width: 768px) {
    padding: 10px; /* 패딩 더 축소 */
  }

  /* 480px 이하 화면 */
  @media (max-width: 480px) {
    padding: 5px; /* 패딩 최소화 */
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  color: rgba(255, 255, 255, 0.6);
  z-index: 0;
  text-shadow: 
    2px 2px 5px rgba(0, 0, 0, 0.8), /* 더 두꺼운 검은색 그림자 */
    -2px -2px 5px rgba(255, 215, 0, 0.7); /* 더 두꺼운 금색 그림자 */

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


const Description = styled.p`
  font-size: 1.2rem;
  color: white;
  text-align: center;
  max-width: 800px;
  margin-bottom: 30px;
  line-height: 1.6;
  z-index:0;

  /* 1080px 이하 화면 */
  @media (max-width: 1080px) {
    font-size: 1.1rem; /* 글씨 크기 약간 축소 */
    max-width: 700px; /* 최대 너비 축소 */
    margin-bottom: 25px; /* 하단 여백 축소 */
    line-height: 1.5; /* 줄 간격 축소 */
  }

  /* 768px 이하 화면 */
  @media (max-width: 768px) {
    font-size: 1rem; /* 글씨 크기 더 축소 */
    max-width: 70%; /* 최대 너비 더 축소 */
    margin-bottom: 20px; /* 하단 여백 더 축소 */
    line-height: 1.4; /* 줄 간격 더 줄이기 */
  }

  /* 480px 이하 화면 */
  @media (max-width: 500px) {
    font-size: 0.8rem; /* 글씨 크기 대폭 축소 */
    max-width: 70%; /* 화면 너비에 맞게 조정 */
    margin-bottom: 15px; /* 하단 여백 최소화 */
    line-height: 1.3; /* 줄 간격 최소화 */
  }
`;

const ContactList = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
   z-index:0;
  

   /* 1080px 이하 화면 */
  @media (max-width: 1080px) {
    gap: 25px; /* 간격 축소 */
  }

  /* 768px 이하 화면 */
  @media (max-width: 768px) {
    flex-wrap: wrap; /* 모바일에서 줄바꿈 허용 */
    gap: 20px; /* 간격 더 축소 */
    justify-content: space-evenly; /* 요소 간 균등 배치 */
  }

  /* 480px 이하 화면 */
  @media (max-width: 500px) {
    flex-direction: column; /* 작은 화면에서는 세로 배치 */
    gap: 15px; /* 간격 최소화 */
    align-items: center; /* 세로 배치 시 중앙 정렬 */
  }
`;

const ContactItem = styled.a`
  display: inline-block;
  color: #fff; /* 텍스트 색상 */
  padding: 10px 20px;
  border-radius: 8px;
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;
  border:rgba(255, 255, 255, 0.5) solid 1px;
  transition: transform 0.3s ease, color 0.3s ease, border-color 0.3s ease;

  &:hover {
    transform: scale(1.15); /* 호버 시 버튼 커짐 */
    border-color:black; /* 테두리 색상 변경 */
    color: black; /* 텍스트 색상 변경 */
  }
`;



const Contact = () => {
  return (
    <Section id="contact">
      <Title>Contact</Title>
      <Description>
        저에게 궁금한 점이 있으시면 아래의 이메일 주소 <br/>또는 연락처를 통해 언제든 연락주세요.
      </Description>
      <ContactList>
        <ContactItem href="mailto:ehddnr7321@gmail.com">이메일 보내기</ContactItem>
        <ContactItem
          href="#"
          onClick={(e) => {
            e.preventDefault();
            const phoneNumber = "010-8012-0077"; // 복사할 전화번호
            navigator.clipboard
              .writeText(phoneNumber)
              .then(() => {
                alert("전화번호가 복사되었습니다."); // 복사 성공 시 알림
              })
              .catch((error) => {
                alert("복사에 실패했습니다. 다시 시도해주세요."); // 복사 실패 시 알림
                console.error(error);
              });
          }}
        >
          전화번호 복사
        </ContactItem>

        <ContactItem
          href="https://pf.kakao.com/_Wxjxdjn"
          target="_blank"
          rel="noopener noreferrer"
        >
          카카오톡 문의
        </ContactItem>
      </ContactList>
    </Section>
  );


};

export default Contact;
