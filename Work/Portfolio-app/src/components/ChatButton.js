import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaArrowUp } from "react-icons/fa";

// Styled Components
const Container = styled.div`
  position: fixed;
  bottom: 30px;
  right: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
   z-index: ${({ $modalOpen }) => ($modalOpen ? 3 : 1)}; /* 모달 상태에 따라 z-index 변경 */

  @media (max-width: 1080px) {
    bottom: 15px;
    right: 30px;
    gap: 20px;
  }

  @media (max-width: 768px) {
    bottom: 15px;
    right: 20px;
    gap: 15px;
  }

  @media (max-width: 500px) {
    bottom: 20px;
    right: 6px;
    gap: 15px;
  }
`;

const Button = styled.button`
  background-color: #ffcd00; /* 카카오톡 버튼 색상 */
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #f4b900; /* 호버 시 색상 변경 */
  }

  @media (max-width: 768px) {
    width: 45px;
    height: 45px;
  }

  @media (max-width: 500px) {
    width: 40px;
    height: 40px;
  }
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;

  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
  }

  @media (max-width: 500px) {
    width: 18px;
    height: 18px;
  }
`;

const ScrollToTopButton = styled(Button)`
  background-color: #333; /* 맨 위로 버튼 색상 */
  color: white;

  &:hover {
    background-color: #555; /* 호버 시 색상 */
  }

  svg {
    width: 24px;
    height: 24px;

    @media (max-width: 768px) {
      width: 20px;
      height: 20px;
    }

    @media (max-width: 500px) {
      width: 18px;
      height: 18px;
    }
  }
`;


const ChatButton = ({modalOpen}) => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  const handleChatClick = () => {
    const userConfirmed = window.confirm("카카오톡 문의하기로 이동하시겠습니까?");
    if (userConfirmed) {
      window.open("https://pf.kakao.com/_Wxjxdjn", "_blank");
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setShowScrollButton(scrollTop > 100); // 300px 이상일 때 버튼 활성화
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // 초기 실행

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container>
      {/* 카카오톡 버튼 */}
      <Button onClick={handleChatClick}>
        <Icon
          src={`${process.env.PUBLIC_URL}/kakaotalk.png`}
          alt="카카오톡 문의하기"
        />
      </Button>

      {/* 맨 위로 버튼 */}
      {showScrollButton && (
        <ScrollToTopButton onClick={handleScrollToTop}>
          <FaArrowUp />
        </ScrollToTopButton>
      )}
    </Container>
  );
};

export default ChatButton;
