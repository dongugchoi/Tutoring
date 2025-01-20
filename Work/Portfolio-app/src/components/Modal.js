import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const ModalContent = styled.div`
  position: relative;
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 90%;
  max-width: 600px;
  text-align: center;
  overflow-y: auto; /* 세로 스크롤 활성화 */
  max-height: 90%; /* 최대 높이를 뷰포트 높이의 90%로 제한 */
  z-index:10000;

  /* 1080px 이하 화면 */
  @media (max-width: 1080px) {
    padding: 18px; /* 패딩 축소 */
    max-width: 500px; /* 최대 너비 축소 */
  }

  /* 768px 이하 화면 */
  @media (max-width: 768px) {
    padding: 15px; /* 패딩 더 축소 */
    max-width: 400px; /* 최대 너비 더 축소 */
    max-height: 80%; /* 최대 높이를 뷰포트 높이의 80%로 제한 */
  }

  /* 480px 이하 화면 */
  @media (max-width: 500px) {
    padding: 12px; /* 패딩 최소화 */
    max-width: 300px; /* 최대 너비 최소화 */
    font-size: 0.9rem; /* 글씨 크기 축소 */
    max-height: 75%; /* 최대 높이를 뷰포트 높이의 75%로 제한 */
  }
`;


const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: #333;
`;

const VideoWrapper = styled.video`
  width: 100%;
  max-height: 300px;
  margin-bottom: 20px;
  border-radius: 8px;
  outline: none;
`;

const Description = styled.div`
  text-align: left;
  margin-top: 10px;
  font-size: 14px;
  line-height: 1.6;
  color: #555;
`;

const NavigationButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;

  button {
    padding: 10px 20px;
    background:white;
    border: none;
    color: black;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;

    &:hover {
      background-color: black;
      color: white;
      text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.7);
    }
  }
`;

const Placeholder = styled.div`
  width: 80px; /* 이전/다음 버튼과 동일한 너비 */
`;


const Modal = ({
  isOpen,
  onClose,
  title,
  videoSrc,
  description,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
  ref,
  currentIndex
}) => {
  const videoRef = useRef(null);


  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.play(); // 모달 열릴 때 동영상 자동 재생
    }
  }, [isOpen, videoSrc]); // videoSrc 변경 시 자동 재생

  useEffect(() => {
    if (isOpen && ref?.current) {
      ref.current.scrollTo({ top: 0, behavior: "smooth" }); // 스크롤 최상단으로 이동
    }
  }, [currentIndex, isOpen]);
  
  if (!isOpen) return null;

  const formatDescription = (text) => {
    return text.split(".").join(".<br>");
  };

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent ref={ref} onClick={(e) => e.stopPropagation()}>
        <Title>{title}</Title>
        <VideoWrapper ref={videoRef} controls src={videoSrc} playsInline webkit-playsinline />
        <Description
          dangerouslySetInnerHTML={{ __html: formatDescription(description) }}
        />
        <NavigationButtons>
          {hasPrev ? (
            <button onClick={onPrev}>이전</button>
          ) : (
            <Placeholder /> /* 빈 자리 유지 */
          )}
          <button onClick={onClose}>닫기</button>
          {hasNext ? (
            <button onClick={onNext}>다음</button>
          ) : (
            <Placeholder /> /* 빈 자리 유지 */
          )}
        </NavigationButtons>
      </ModalContent>
    </ModalOverlay>
  );
};


export default Modal;
