import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 3.75rem;
  margin-top:3.75rem;
  align-items: center;
  z-index: 1;


  /* 1080px 이하 화면 */
  @media (max-width: 1080px) {
    font-size: 0.8rem; /* 글씨 크기 축소 */
    padding: 18px; /* 패딩 축소 */
    margin-top: 80px; /* 상단 여백 축소 */
  }

  /* 768px 이하 화면 */
  @media (max-width: 768px) {
    font-size: 0.7rem; /* 글씨 크기 더 축소 */
    padding: 15px; /* 패딩 더 축소 */
    margin-top: 60px; /* 상단 여백 더 축소 */
  }

  /* 480px 이하 화면 */
  @media (max-width: 480px) {
    font-size: 0.6rem; /* 글씨 크기 대폭 축소 */
    padding: 10px; /* 패딩 최소화 */
    margin-top: 50px; /* 상단 여백 최소화 */
  }
`;

//project 제목 스타일
export const Title = styled.h1`
  font-size: 3rem;
  color: rgba(255, 255, 255, 0.6);
  z-index: 1;
  text-shadow: 
    2px 2px 5px rgba(0, 0, 0, 0.8), /* 더 두꺼운 검은색 그림자 */
    -2px -2px 5px rgba(255, 215, 0, 0.7); /* 더 두꺼운 금색 그림자 */
  margin:30px 0 30px 0;

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

//로고와 제목 컨테이너
export const ProjectTitleWrapper = styled.div`
  display: flex;
  align-items: center; /* 수직 정렬 */
  justify-content: center; /* 가로 정렬 */
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: row; /* 모바일에서 세로 정렬 */
  }
`;
//로고
export const ProjectLogo = styled.img`
  width: 70px; /* 로고 크기 조정 */
  height: auto;
  margin-right: 20px; /* 제목과 로고 간 간격 */
  cursor: pointer;

  @media (max-width: 768px) {
    width: 50px; 
    margin-right: 10px; 
  }

`;

//프로젝트 이름
export const ProjectName = styled.h2`
  font-size: 2.5rem;
  color: black;
  margin: 10px 0 10px 0;
  text-align: center;
  font-family: 'SSFlowerRoad', sans-serif;

   /* 1080px 이하 화면 */
  @media (max-width: 1080px) {
    font-size: 2.2rem; /* 글씨 크기 축소 */
    margin: 9px 0 9px 0; /* 여백 약간 축소 */
  }

  /* 768px 이하 화면 */
  @media (max-width: 768px) {
    font-size: 1.8rem; /* 글씨 크기 축소 */
    margin: 8px 0 8px 0; /* 상하 여백 축소 */
  }

  /* 480px 이하 화면 */
  @media (max-width: 480px) {
    font-size: 1.5rem; /* 더 작은 글씨 크기 */
    margin: 5px 0 5px 0; /* 여백 더 축소 */
  }
`;

//나야, 농 동영상 컨테이너
export const ProjectCard = styled.div`
  // border:rgba(255, 255, 255, 0.5) solid 1px;
  // box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding:15px 15px 15px 15px;
  width: 90%;
  max-width: 1300px;
  box-sizing: border-box;
  z-index: 1;
`;

//나야, 농 동영상
export const ProjectVideo = styled.video`
  display: block; /* 비디오를 블록 요소로 변경 */
  margin: 0 auto; /* 가로 중앙 정렬 */
  text-align: center;
  width: 100%;
  max-width: 800px;
  border-radius: 8px;
  margin-bottom: 20px;
  overflow-x: hidden;

  /* 1080px 이하 화면 */
  @media (max-width: 1080px) {
    max-width: 90%; /* SectionContent와 동일한 너비 */
    margin-bottom: 18px; /* 하단 여백 축소 */
  }

  /* 868px 이하 화면 */
  @media (max-width: 868px) {
    max-width: 90%; /* SectionContent와 동일한 너비 */
    margin-bottom: 16px; /* 하단 여백 조정 */
  }

  /* 769px 이하 화면 */
  @media (max-width: 769px) {
    max-width: 95%; /* SectionContent와 동일한 너비 */
    margin-bottom: 14px; /* 하단 여백 조정 */
  }

  /* 768px 이하 화면 */
  @media (max-width: 768px) {
    max-width: 90%; /* SectionContent와 동일한 너비 */
    margin-bottom: 12px; /* 하단 여백 축소 */
  }

  /* 480px 이하 화면 */
  @media (max-width: 500px) {
    max-width: 90%; /* 화면 너비에 맞춤 */
    margin-bottom: 10px; /* 하단 여백 더 축소 */
    border-radius: 5px; /* 둥근 모서리 더 축소 */
  }
`;



// 동영상 아래에있는 네비게이션 컨테이너
export const NavBar = styled.nav`
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  gap: 45px;
  flex-wrap: wrap; /* 글씨가 내려가지 않도록 설정 */
  max-width:1200px;
  margin:0 auto;
  padding-bottom: 20px;

  /* 1080px 이하 화면 */
  @media (max-width: 1080px) {
    gap: 30px; /* 간격 축소 */
    padding-bottom: 15px; /* 하단 여백 줄이기 */
  }

  /* 768px 이하 화면 */
  @media (max-width: 833px) {
    gap: 10px; /* 간격 더 줄이기 */
    padding-bottom: 10px; /* 하단 여백 축소 */
  }


  @media (max-width: 832px) {
    gap: 65px; /* 간격 최소화 */
    padding-bottom: 8px; /* 하단 여백 축소 */
    max-width: 90%; /* 화면 너비에 맞게 조정 */
    row-gap: 10px; /* 줄 간 간격 추가 */
    justify-content: space-between; /* 가로 정렬: 간격 균등 분배 */
    align-content: space-evenly; /* 여러 줄 간격 균등 분배 */
  }

  /* 480px 이하 화면 */
  @media (max-width: 500px) {
    gap: 15px; /* 간격 최소화 */
    padding-bottom: 8px; /* 하단 여백 더 축소 */
    max-width: 90%; /* 화면 너비에 맞게 조정 */
    row-gap: 10px; /* 줄 간 간격 추가 */
    align-content: space-evenly;
    justify-content: space-between; 
  }
`;

// 동영상아래에있는 네비게이션 각각의 메뉴들
export const NavItem = styled.button`
  font-size: 1rem;
  color:white;
    text-shadow: 
    1px 1px 4px rgba(0, 0, 0, 0.7), /* 검은색 그림자 */
   -1px -1px 4px rgba(255, 215, 0, 0.6); /* 금색 그림자 */
  text-decoration: ${({ $isActive }) => ($isActive ? "underline" : "none")};
  font-weight: bold;
  cursor: pointer;
  background: none;
  border: none;
  white-space: nowrap; /* 줄바꿈 방지 */

  &:hover {
    text-decoration: underline;
    transform: scale(1.1); /* 호버 시 버튼 커짐 */
  }

  /* 1080px 이하 화면 */
  @media (max-width: 1080px) {
    font-size: 0.9rem; /* 글씨 크기 약간 줄이기 */
  }

  /* 768px 이하 화면 */
  @media (max-width: 768px) {
    font-size: 0.8rem; /* 글씨 크기 더 줄이기 */
  }

  /* 480px 이하 화면 */
  @media (max-width: 480px) {
    font-size: 0.7rem; /* 글씨 크기 대폭 축소 */
    text-shadow: 
      1px 1px 3px rgba(0, 0, 0, 0.8), /* 검은색 그림자 강화 */
      -1px -1px 3px rgba(255, 215, 0, 0.7); /* 금색 그림자 강화 */
  }
`;

//네비(개요, 주요기능, 사용기술, 예제 아이디) 컨테이너
export const ProjectDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; /* 세로 중앙 정렬 */
  align-items: center; /* 가로 중앙 정렬 */
  text-align: center; /* 내부 텍스트 중앙 정렬 */
  width: 100%; 
  height: auto; 
  margin: 0 auto;
  z-index: 1;

   /* 1080px 이하 화면 */
  @media (max-width: 1080px) {
    width: 90%; /* 너비 축소 */
    text-align: left; /* 텍스트를 왼쪽 정렬 */
  }

  /* 768px 이하 화면 */
  @media (max-width: 768px) {
    width: 85%; /* 더 작은 화면에서 너비 축소 */
    padding: 10px; /* 패딩 추가 */
    text-align: left; /* 텍스트를 왼쪽 정렬 */
  }

  /* 480px 이하 화면 */
  @media (max-width: 480px) {
    width: 100%; /* 화면 전체 너비 사용 */
    padding: 5px; /* 더 작은 패딩 */
    text-align: left; /* 텍스트를 왼쪽 정렬 */
  }
`;



export const SectionContentWrapper = styled.div`
  display: ${({ $isVisible }) => ($isVisible ? "flex" : "none")}; /* flex로 변경 */
`;

// 주요 기능
export const FeatureContent = styled.ul`
  display: flex;
  flex-wrap: wrap; /* 여러 줄로 배치 가능 */
  list-style: none; /* 기본 불릿 제거 */
  padding: 0;
  margin-bottom:15px;
  gap: 20px; /* 아이템 간 간격 */

  min-width: 800px;
  max-width: 800px;

  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  text-align: left;

  border: rgba(255, 255, 255, 0.5) solid 1px;
  border-radius: 8px;

 /* 1080px 이하 화면 */
  @media (max-width: 1080px) {
    font-size: 1.1rem; /* 글씨 크기 줄임 */
    line-height: 1.5; /* 줄 간격 조정 */
    min-width: 99%; /* 최소 너비 조정 */
    max-width: 99%; /* 최대 너비 조정 */
    gap: 15px; /* 간격 축소 */
  }

  /* 768px 이하 화면 */
  @media (max-width: 768px) {
    font-size: 1rem; /* 글씨 크기 더 줄임 */
    line-height: 1.4; /* 줄 간격 더 줄임 */
    min-width: 99%; /* 작은 화면에서 전체 너비 */
    max-width: 99%; /* 작은 화면에서 전체 너비 */
    gap: 10px; /* 간격 더 축소 */
    padding: 10px; /* 내부 패딩 추가 */
  }

  /* 480px 이하 화면 */
  @media (max-width: 500px) {
    font-size: 0.9rem; /* 글씨 크기 대폭 축소 */
    line-height: 1.3; /* 줄 간격 최소화 */
    min-width: 90%; /* 부모 컨테이너 크기에 맞춤 */
    max-width: 90%; /* 부모 컨테이너 크기에 맞춤 */
    gap: 8px; /* 간격 최소화 */
    padding: 8px; /* 내부 패딩 축소 */
  }
`;
//주요기능동영상
export const FeatureItem = styled.ul`
  flex: 1 1 calc(33.333% - 20px); /* 한 줄에 3개 */
  box-sizing: border-box;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  margin: 10px 0 0;
  padding-bottom: 10px;

  &:hover {
    text-decoration: underline;
    transform: scale(1.1); /* 호버 시 버튼 커짐 */
  }

  @media (max-width: 768px) {
    font-size: 0.9rem; /* 작은 화면에서 폰트 크기 줄임 */
  }

  @media (max-width: 415px) {
    font-size: 0.8rem; /* 더 작은 화면에서 폰트 크기 조정 */
  }
`;

//개요 내용p태그
export const SectionContent = styled.div`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  width: 100%;
  min-width: 770px;
  max-width: 770px;
  padding: 15px;
  border: rgba(255, 255, 255, 0.5) solid 1px;
  border-radius: 8px;
  text-align: left;

  /* 1080px 이하 화면 */
  @media (max-width: 1080px) {
    font-size: 1.05rem; /* 글씨 크기 약간 축소 */
    line-height: 1.5; /* 줄 간격 조정 */
    min-width: 100%;
    max-width: 100%;
    padding: 12px;
  }

  /* 868px 이하 화면 */
  @media (max-width: 868px) {
    font-size: 1.05rem; /* 글씨 크기 약간 축소 */
    line-height: 1.5;
    min-width: 100%;
    max-width: 100%;
    padding: 12px;
  }

  /* 769px 이하 화면 */
  @media (max-width: 769px) {
    font-size: 1.05rem;
    line-height: 1.5;
    min-width: 100%;
    max-width: 100%;
    padding: 12px;
  }

  /* 768px 이하 화면 */
  @media (max-width: 768px) {
    font-size: 1rem; /* 글씨 크기 더 축소 */
    line-height: 1.4;
    min-width: 100%;
    max-width: 100%;
    padding: 10px;
  }

  /* 480px 이하 화면 */
  @media (max-width: 500px) {
    font-size: 0.8rem; /* 글씨 크기 대폭 축소 */
    line-height: 1.3;
    min-width: 100%; /* 화면 전체 너비 */
    max-width: 100%;
    padding: 8px; /* 패딩 최소화 */
    text-align: left;
  }
`;

// 개요 개발기간 센터정렬
export const Center = styled.div`
  text-align: center;
  width:100%;
`;

//하단 네비바 컨테이너
export const LinkContainer = styled.div`
  display: flex;
  justify-content: center; /* 내부 콘텐츠 가로 정렬 */
  align-items: center; /* 내부 콘텐츠 세로 정렬 */
  gap: 50px; /* 버튼 간격 */
  margin: 0 auto; /* 가로 중앙 정렬 */
  margin-bottom:10px;
  width: 90%;
  max-width: 1200px;


  border-radius: 8px;
  padding:0px;

 /* 1080px 이하 화면 */
  @media (max-width: 1080px) {
    max-width: 1000px; /* 최대 너비 축소 */
    gap: 40px; /* 간격 축소 */
    padding: 8px; /* 내부 여백 조정 */
  }

  /* 768px 이하 화면 */
  @media (max-width: 768px) {
    flex-wrap: wrap; /* 모바일에서 줄바꿈 */
    gap: 20px; /* 버튼 간격 축소 */
    padding: 8px 0; /* 상하 여백 조정 */
    max-width: 90%; /* 최대 너비를 화면 비율에 맞춤 */
  }

  /* 480px 이하 화면 */
  @media (max-width: 480px) {
    flex-wrap: wrap; /* 줄바꿈 허용 */
    gap: 15px; /* 버튼 간격 더 축소 */
    padding: 5px 0; /* 상하 여백 더 축소 */
    max-width: 90%; /* 최대 너비를 화면 전체로 */
  }
`;



// 프로젝트 보기, 회의록 및 정리사항, 기술문서 컨테이너
export const ProjectLink = styled.a`
  display: inline-block;
  padding: 8px 0;
  color: white;
    text-shadow: 
    1px 1px 4px rgba(0, 0, 0, 0.7), /* 검은색 그림자 */
    -1px -1px 4px rgba(255, 215, 0, 0.6); /* 금색 그림자 */
  text-decoration: none;
  font-weight: bold;
  text-align: center;
  flex: 1;
  max-width: 150px;

  &:hover {
    text-decoration: underline;
    transform: scale(1.1); /* 호버 시 버튼 커짐 */
  }

 /* 1080px 이하 화면 */
  @media (max-width: 1080px) {
    font-size: 0.9rem; /* 글씨 크기 축소 */
    padding: 6px 10px; /* 내부 여백 축소 */
    max-width: 140px; /* 버튼 너비 축소 */
  }

  /* 768px 이하 화면 */
  @media (max-width: 768px) {
    font-size: 0.8rem; /* 글씨 크기 축소 */
    padding: 5px 8px; /* 버튼 크기 줄이기 */
    max-width: 120px; /* 모바일에서 버튼 너비 축소 */
    white-space: nowrap;
  }

  /* 480px 이하 화면 */
  @media (max-width: 480px) {
    font-size: 0.6rem; /* 글씨 크기 더 축소 */
    padding: 4px 6px; /* 버튼 크기 더 줄이기 */
    max-width: 100px; /* 더 작은 화면에서 버튼 너비 축소 */
    white-space: nowrap;
  }
`;





export const IconGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  gap: 20px;
  margin-top: 15px;
`;

//로고
export const IconItem = styled.div`
  position: relative;
  cursor: pointer;
  margint:10px; 0 10px; 0;

  img {
    width: 50px;
    height: 50px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  img:hover {
    transform: scale(1.2);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  &::after {
    content: attr(data-title);
    position: absolute;
    bottom: -25px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.8);
    color: #fff;
    font-size: 12px;
    padding: 5px 8px;
    border-radius: 4px;
    opacity: 0;
    transition: opacity 0.3s ease;
    white-space: nowrap;
  }

  &:hover::after {
    opacity: 1;
  }

  /* 1080px 이하 화면 */
  @media (max-width: 1080px) {
    img {
      width: 45px; /* 아이콘 크기 축소 */
      height: 45px;
    }

    &::after {
      font-size: 11px; /* 툴팁 텍스트 크기 축소 */
      bottom: -20px; /* 툴팁 위치 조정 */
    }
  }

  /* 768px 이하 화면 */
  @media (max-width: 768px) {
    img {
      width: 40px; /* 아이콘 크기 더 축소 */
      height: 40px;
    }

    &::after {
      font-size: 10px; /* 툴팁 텍스트 크기 더 축소 */
      bottom: -18px; /* 툴팁 위치 더 조정 */
    }
  }

  /* 480px 이하 화면 */
  @media (max-width: 480px) {
    img {
      width: 35px; /* 아이콘 크기 대폭 축소 */
      height: 35px;
    }

    &::after {
      font-size: 9px; /* 툴팁 텍스트 크기 대폭 축소 */
      bottom: -15px; /* 툴팁 위치 최소화 */
      padding: 4px 6px; /* 툴팁 여백 축소 */
    }
  }

`;


//사용기술 설명 텍스트
export const TechDescription = styled.div`
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  
  /* 강조된 텍스트 */
  strong {
    color: #333; /* 강조 텍스트 색상 */
    font-weight: bold;
  }


  /* 1080px 이하 화면 */
  @media (max-width: 1080px) {
    font-size: 0.95rem; /* 글씨 크기 약간 축소 */
    line-height: 1.5; /* 줄 간격 조정 */
  }

  /* 768px 이하 화면 */
  @media (max-width: 768px) {
    font-size: 0.9rem; /* 작은 화면에서 글씨 크기 더 줄이기 */
    line-height: 1.4; /* 줄 간격 더 축소 */
  }

  /* 480px 이하 화면 */
  @media (max-width: 480px) {
    font-size: 0.8rem; /* 글씨 크기 대폭 축소 */
    line-height: 1.3; /* 줄 간격 최소화 */
    padding: 5px; /* 텍스트와 경계 사이 여백 추가 */
    text-align: left; /* 작은 화면에서도 텍스트 정렬 유지 */
  }
`;

//큰제목,부제목 컨테이너
export const Category = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left; /* 큰 제목과 내용 모두 중앙 정렬 */
  margin-bottom: 20px;
  width: 100%;
`;

//큰제목
export const LargeTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: bold;
  margin: 20px 0 0 0;
  color: rgba(255, 255, 255, 0.9);
  text-align: left; /* 제목 중앙 정렬 *
  white-space: nowrap; /* 줄바꿈 방지 *//

/* 1080px 이하 화면 */
  @media (max-width: 1080px) {
    font-size: 1.2rem; /* 글씨 크기 약간 축소 */
    margin: 15px 0 0 0; /* 상단 여백 축소 */
  }

  /* 768px 이하 화면 */
  @media (max-width: 768px) {
    font-size: 1rem; /* 글씨 크기 더 축소 */
    margin: 10px 0 0 0; /* 상단 여백 더 축소 */
    white-space: nowrap; /* 줄바꿈 방지 */
  }

  /* 480px 이하 화면 */
  @media (max-width: 500px) {
    font-size: 0.9rem; /* 글씨 크기 대폭 축소 */
    margin: 8px 0 0 0; /* 상단 여백 최소화 */
    text-align: center; /* 작은 화면에서 제목 중앙 정렬 */
    white-space: nowrap; /* 줄바꿈 방지 */
    
  }
`;
//부제목(내용)
export const CategoryContent = styled.div`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin: 0;
  text-align: left;
  position: relative; /* 가상 요소 위치 조정을 위해 필요 */
  padding-top:10px;

  /* 본문 텍스트 */
  @media (max-width: 1080px) {
    font-size: 1rem; /* 글씨 크기 축소 */
    line-height: 1.5; /* 줄 간격 조정 */
  }

  @media (max-width: 768px) {
    font-size: 0.8rem; /* 글씨 크기 더 축소 */
    line-height: 1.4; /* 줄 간격 축소 */
  }

  @media (max-width: 480px) {
    font-size: 0.7rem; /* 글씨 크기 대폭 축소 */
    line-height: 1.3; /* 줄 간격 최소화 */
    padding-top: 8px; /* 패딩 축소 */
    
  }

  /* 선과 그림자 */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px; /* 선의 높이 */
    background-color: rgba(196, 185, 185, 0.7); /* 선 색상 */
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.3); /* 아래쪽 그림자 추가 */
    opacity:1;
  }
`;


//사용 기술에 텍스트와 로고 같이 붙여넣기
export const TitleWrapper = styled.div`
  display: flex;
  align-items: center; /* 세로 정렬 */
  justify-content: left; /* 가로 중앙 정렬 */
  gap: 20px; /* 텍스트와 로고 사이 간격 */
  margin-bottom: 10px;

  /* 480px 이하 화면 */
  @media (max-width: 480px) {
    flex-direction: row; /* 가로 방향으로 정렬 */
    justify-content: left; /* 중앙 정렬 */
    flex-wrap: nowrap; /* 줄바꿈 방지 */
    width: 100%; /* 부모 크기에 맞춤 */
    overflow: hidden; /* 넘치는 내용 숨김 */
    
  }
`;
