import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

// 별똥별 애니메이션 정의
const shootingStar = keyframes`
  0% {
    transform: translate(0, 0) rotate(30deg);
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  70%{
    opacity:0.3;
  }
  100% {
    transform: translate(50vw, 50vh) rotate(35deg);
    opacity: 0;
  }
`;

// 별 배경 컨테이너
const FallingStarsContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: linear-gradient(to bottom, #1a234e, #ffab91); /* 위쪽은 어두운 하늘색, 아래쪽은 연분홍 */
  z-index: -1;
`;


// 별똥별 스타일
const ShootingStar = styled.div`
  position: absolute;
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  background-color: white;
  border-radius: 50%;
  left: ${({ $left }) =>$left}%;
  top: ${({ $top }) => $top}px;
  animation: ${shootingStar} ${({ $duration }) => $duration}s ease-out infinite;

  /* 긴 그림자 */
  box-shadow: 4px 4px 10px 2px white, 6px 6px 20px 6px rgba(255, 255, 255, 0.6);

  &::after {
    content: '';
    position: absolute;
    width: 100px;
    height: 2px;
    background: linear-gradient(270deg, rgba(255, 255, 153, 0.8), transparent);
    top: 50%;
    left: -100px;
    transform: translateY(-50%);
    border-radius: 2px;
  }
`;

const FallingStars = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newStar = {
        id: Date.now(),
        size: Math.random() * 2 + 1.5, // 별 크기
        left: Math.random() * 100, // 랜덤한 x 위치
        top: Math.random() * 100 - 50, // 화면 위 또는 밖에서 시작
        duration: 1 + Math.random() * 5, // 애니메이션 지속 시간
      };

      setStars((prevStars) => [...prevStars, newStar]);

      // 오래된 별 제거
      setTimeout(() => {
        setStars((prevStars) => prevStars.filter((star) => star.id !== newStar.id));
      }, newStar.duration * 1000);
    }, 1000); // 별똥별 생성 간격

    return () => clearInterval(interval); // 컴포넌트 언마운트 시 정리
  }, []);

  return (
    <FallingStarsContainer>
      {stars.map((star) => (
        <ShootingStar
          key={star.id}
          $size={star.size}
          $left={star.left}
          $top={star.top}
          $duration={star.duration}
        />
      ))}
    </FallingStarsContainer>
  );
};

export default FallingStars;
