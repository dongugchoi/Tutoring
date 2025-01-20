import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const ScrollContainer = styled.div`
  position: fixed;
  inset:0;
  width: 100%;
  height: 4px;
  background: rgba(0, 0, 0, 0.2);
  z-index: 9999;
  max-width: 100%; /* 가로 확장 방지 */
`;

const ScrollBar = styled.div`
  height: 100%;
  background: linear-gradient(to bottom, #1a234e, #ffab91); /* 위쪽은 어두운 하늘색, 아래쪽은 연분홍 */
  width: ${({ $scrollWidth }) => $scrollWidth}%;
  transition: width 0.1s ease;
  max-width: 100%; /* 가로 확장 방지 */
`;

const HorizontalScroll = () => {
  const [scrollWidth, setScrollWidth] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = Math.min((scrollTop / scrollHeight) * 100, 100);
      setScrollWidth(scrollPercentage);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ScrollContainer>
      <ScrollBar $scrollWidth={scrollWidth} />
    </ScrollContainer>
  );
};

export default HorizontalScroll;
