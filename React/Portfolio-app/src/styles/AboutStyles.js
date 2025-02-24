import styled from "styled-components";

//어바웃 페이지 전체컨테이너
export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-bottom: 3.75rem;
  z-index: 0;
  padding: 0 30px 0 20px;
  overflow-x: hidden;
`;

//about 제목스타일
export const Title = styled.h1`
  font-size: 3rem;
  color: rgba(255, 255, 255, 0.6);
  text-shadow: 
    2px 2px 5px rgba(0, 0, 0, 0.8), /* 더 두꺼운 검은색 그림자 */
    -2px -2px 5px rgba(255, 215, 0, 0.7); /* 더 두꺼운 금색 그림자 */
  text-align: center;
  margin:30px 0 20px 0;
  z-index: 1;
  
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

//프로필 컨테이너
export const ProfileSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center; /* 수직 중앙 정렬 */
  gap: 20px;
  width: 100%;
  max-width: 1350px;
  z-index: 2;

  /* 태블릿 화면 */
  @media (max-width: 1080px) {
    flex-direction: column; /* 모바일에서는 세로 정렬 */
    align-items: center;
    gap: 30px;
    padding: 20px; /* 내부 여백 추가 */
  }

  /* 작은 모바일 화면 */
  @media (max-width: 480px) {
    gap: 15px; /* 더 작은 화면에서는 간격 줄이기 */
    padding: 15px; /* 여백을 더 줄임 */
  }
`;


//프로필 이미지, 텍스트 컨테이너
export const ProfilePictureWrapper = styled.div`
  max-width: 400px; /* 프로필 사진 섹션 최대 너비 */
  flex: 1; /* 부모 높이를 채움 */
  display: flex;
  flex-direction: column; /* 세로로 정렬 */
  align-items: center; /* 가로 중앙 정렬 */
  justify-content: center; /* 세로 중앙 정렬 */
  border-radius: 10px;
  min-height: 700px; /* 최소 높이 추가 */
  overflow: hidden; /* 자식 요소가 넘치지 않도록 설정 */
  padding: 20px; /* 텍스트와 경계 사이 여백 추가 */ 

    @media (max-width: 1080px) {
    max-width: 300px; /* 최대 너비를 줄임 */
    min-height: 500px; /* 최소 높이를 줄임 */
    padding: 15px; /* 여백을 줄임 */
  }

  /* 모바일 화면 */
  @media (max-width: 480px) {
    max-width: 250px; /* 더 작은 화면에서 최대 너비 */
    min-height: 300px; /* 최소 높이를 더 줄임 */
    padding: 10px; /* 여백을 더 줄임 */
  }
`;

//프로필 이미지
export const ProfileImage = styled.div`
  width: 100%;
  height: 400px; /* 고정 높이 설정 */
  background-image: url("${process.env.PUBLIC_URL}/dongug.jpg"); /* 이미지 배경 추가 */
  background-size: cover; /* 이미지를 섹션에 맞게 조정 */
  background-position: center; /* 이미지를 중앙 정렬 */
  border-radius: 10px;
  margin-bottom: 15px; /* 텍스트와 이미지 사이 간격 */

    @media (max-width: 1080px) {
    height: 350px; /* 모바일에서 높이 줄임 */
  }

  @media (max-width: 480px) {
    height: 250px; /* 더 작은 화면에서 높이 더 줄임 */
  }
`;

//프로필 이미지 밑텍스트
export const ProfileText = styled.p`
  text-align: center;
  font-weight: bold;
  font-size: 15px;
  height: 50px;
  line-height: 50px; /* 높이와 동일하게 설정하여 중앙 정렬 */
  color: white;
  border-radius: 5px;
  margin: 0;
  width: 100%;
  color:black;
   text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); /* 그림자 추가 */


     @media (max-width: 1080px) {
    font-size: 11px; /* 모바일에서 글씨 크기 작게 */
    line-height: 40px; /* 높이에 맞게 중앙 정렬 */
    white-space: nowrap;
    width:100%;
  }

  @media (max-width: 480px) {
    font-size: 9px; /* 더 작은 화면에서 글씨 크기 더 작게 */
    line-height: 35px;
     white-space: nowrap;
  }
`;



//프로필, 자기소개, 자격증, 교육사항 컨테이너
export const InfoSection = styled.div`
  border: rgba(255, 255, 255, 0.5) solid 1px;
  padding: 10px; /* 내부 여백 최소화 */
  border-radius: 10px;
  color: white;
  flex: 1;
  width: 100%; /* 부모 너비에 맞춤 */
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 2;
  background-color: rgba(255, 255, 255, 0.1); /* 보라색 배경 표시 */
  overflow: hidden; /* 내용 넘침 방지 */


   /* 태블릿 화면 */
  @media (max-width: 1080px) {
    padding: 8px; /* 내부 여백 축소 */
    border-radius: 8px; /* 모서리 둥글기 감소 */
    background-color: rgba(255, 255, 255, 0.1); /* 배경 투명도를 조금 더 줄임 */
  }

  /* 작은 모바일 화면 */
  @media (max-width: 480px) {
    padding: 6px; /* 여백 최소화 */
    border-radius: 5px; /* 더 작은 모서리 둥글기 */
    background-color: rgba(255, 255, 255, 0.1); /* 배경 투명도 더 낮게 설정 */
    border: rgba(255, 255, 255, 0.3) solid 1px; /* 경계선 투명도 낮춤 */
  }
`;


// 컨테이너 안의 제목밑에 내용
export const InfoList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  height: 100%; /* 부모 높이에 맞춤 */
  width: 100%; /* 부모 너비에 맞춤 */
  box-sizing: border-box;

    /* 태블릿 화면 */
  @media (max-width: 1080px) {
    gap: 10px; /* 항목 간 간격 추가 */
    
  }

  /* 작은 모바일 화면 */
  @media (max-width: 480px) {
    gap: 8px; /* 더 작은 화면에서 간격 줄임 */
    padding: 0 10px; /* 양옆에 약간의 여백 추가 */
  }
`;

//프로필안의 아이콘과 내용 컨테이너
export const InfoItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  &:last-child {
    margin-bottom: 0;
  }

    /* 태블릿 화면 */
  @media (max-width: 1080px) {
    gap: 10px; /* 아이템 간 간격 추가 */
    flex-wrap: wrap; /* 긴 내용이 줄바꿈되도록 설정 */
  }

  /* 작은 모바일 화면 */
   @media (max-width: 480px) {
    gap: 0px; /* 간격 축소 */
  }
`;

// 프로필, 자기소개, 자격증, 교육사항 안에 글
export const Content = styled.span`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.6);
  flex: 2; /* 내용이 더 많은 공간을 차지 */
  text-align: left;
   border:rgba(255, 255, 255, 0.5) solid 1px;
   margin: 0px 20px 15px 0px;
   border-radius: 5px;
   padding: 5px;
   text-align: center;

   /* 태블릿 화면 */
  @media (max-width: 1080px) {
    font-size: 1rem; /* 글씨 크기 축소 */
    margin: 0px 15px 10px 0px; /* 여백 축소 */
    padding: 5px; /* 패딩 유지 */
    border-radius: 4px; /* 테두리 둥글기 축소 */
  }

  /* 작은 모바일 화면 */
  @media (max-width: 480px) {
    font-size: 0.9rem; /* 글씨 크기 더 축소 */
    margin: 0px 10px 13px 0px; /* 여백 최소화 */
    padding: 4px; /* 패딩 더 축소 */
    border-radius: 3px; /* 테두리 둥글기 축소 */
  }
`;

// 프로필, 자기소개, 자격증, 교육사항 컨테이너
export const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr; /* 2열 레이아웃 */
  row-gap: 15px; /* 행 간 간격 (Y축) */
  column-gap: 37px; 
  width: 100%;
  max-width: 800px; /* 최대 너비 확대 */
  margin: 0 auto; /* 중앙 정렬 */

   /* 태블릿 화면 */

  @media (max-width: 1080px) {
    grid-template-columns: 1fr 1fr; /* 2열 유지 */
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* 작은 화면에서는 1열 */
    gap: 15px; /* 행과 열의 간격 통합 */
    max-width: 90%; /* 너비를 화면에 맞게 줄임 */
  }

  /* 작은 모바일 화면 */
  @media (max-width: 480px) {
    gap: 10px; /* 간격 축소 */
    padding: 0 10px; /* 양쪽에 약간의 여백 추가 */

  }
`;

//소개 컨테이너안의 제목
export const SectionTitle = styled.h2`
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.7);
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.7); /* 검은색 그림자 추가 */
  text-align: center;
  margin-bottom: 20px;
  border-bottom: 2px solid rgba(255, 255, 255, 0.3);

    /* 중간 화면 (1080px 이하) */
  @media (max-width: 1080px) {
    font-size: 1.4rem; /* 글씨 크기 약간 축소 */
    margin-bottom: 18px; /* 하단 여백 줄임 */
    border-bottom: 1.5px solid rgba(255, 255, 255, 0.4); /* 테두리 두께 조정 */
  }

  /* 태블릿 화면 (768px 이하) */
  @media (max-width: 768px) {
    font-size: 1.3rem; /* 글씨 크기 더 축소 */
    padding-bottom:7px;
    margin-bottom: 15px; /* 하단 여백 더 줄임 */
    border-bottom: 1.5px solid rgba(255, 255, 255, 0.4); /* 테두리 유지 */
  }

  /* 작은 모바일 화면 (480px 이하) */
  @media (max-width: 480px) {
    font-size: 1.2rem; /* 더 작은 화면에서 글씨 크기 축소 */
    padding-bottom:5px;
    margin-bottom: 12px; /* 하단 여백 최소화 */
    border-bottom: 1px solid rgba(255, 255, 255, 0.5); /* 테두리 두께 더 얇게 */
  }
`;

// 자격증, 교육사항 내용 
export const InlineContent = styled.span`
  display: inline-block;
  font-size: 0.9rem; /* 텍스트 크기를 줄임 */
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 5px;
  white-space: nowrap; /* 줄바꿈 방지 */
  overflow: hidden; /* 넘치는 텍스트 숨김 */
  text-overflow: ellipsis; /* 잘린 텍스트 뒤에 "..." 표시 */
  padding: 3px; /* 여백 최소화 */
  border: rgba(255, 255, 255, 0.5) solid 1px;
  border-radius: 5px;
  text-align: center;
  width: 100%; /* 부모 컨테이너 너비에 맞춤 */
   white-space: normal;
    box-sizing: border-box;

  &:last-child {
    margin-bottom: 0;
  }

    /* 태블릿 화면 */
  @media (max-width: 768px) {
    font-size: 0.85rem; /* 텍스트 크기 축소 */
    padding: 2px; /* 패딩 축소 */
    border-radius: 4px; /* 테두리 둥글기 축소 */
    margin-bottom: 4px; /* 간격 축소 */
  }

  /* 작은 모바일 화면 */
  @media (max-width: 480px) {
    font-size: 0.8rem; /* 더 작은 화면에서 글씨 크기 축소 */
    border-radius: 3px; /* 테두리 둥글기 더 축소 */
    margin-bottom: 3px; /* 여백 더 축소 */
  }
`;



// 깃허브 주소이동
export const StyledLink = styled(Content).attrs({ as: "a" })`
  text-decoration: none; /* 밑줄 제거 */
  color: rgba(255, 255, 255, 0.7); /* 링크 색상 */
  &:hover {
    color: rgba(255, 255, 255, 1); 
    text-decoration: underline;
  }
`;

// 자기소개 내용
export const SelfIntroText = styled.div`
  display: inline-block;
  font-size: 0.9rem; /* 텍스트 크기를 줄임 */
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 5px;
  white-space: nowrap; /* 줄바꿈 방지 */
  overflow: hidden; /* 넘치는 텍스트 숨김 */
  text-overflow: ellipsis; /* 잘린 텍스트 뒤에 "..." 표시 */
  padding: 3px; /* 여백 최소화 */
  border: rgba(255, 255, 255, 0.5) solid 1px;
  border-radius: 5px;
  text-align: left;
  width: 100%; /* 부모 컨테이너 너비에 맞춤 */
   white-space: normal;
    box-sizing: border-box;

  &:last-child {
    margin-bottom: 0;
  }

    /* 태블릿 화면 */
  @media (max-width: 1080px) {
    font-size: 1rem; /* 텍스트 크기 축소 */
    padding: 2px; /* 패딩 축소 */
    border-radius: 4px; /* 테두리 둥글기 축소 */
    margin-bottom: 4px; /* 간격 축소 */
  }

  /* 작은 모바일 화면 */
  @media (max-width: 480px) {
    font-size: 0.8rem; /* 더 작은 화면에서 글씨 크기 축소 */
    border-radius: 3px; /* 테두리 둥글기 더 축소 */
    margin-bottom: 3px; /* 여백 더 축소 */
  }
`;


export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem; /* 아이콘 크기 */
  color: rgba(255, 255, 255, 0.8);
  margin-right: 10px;
  width: 30px; /* 아이콘 정렬을 위한 고정 크기 */
  border: rgba(255, 255, 255, 0.5) solid 1px;
   margin: 0px 20px 15px 0px;
   border-radius: 5px;
   padding: 5px;

    @media (max-width: 1080px) {
    font-size: 1.2rem; /* 아이콘 크기 축소 */
    width: 25px; /* 너비 축소 */
    height: 25px; /* 높이 축소 */
    margin: 0px 15px 10px 0px; /* 여백 축소 */
    border-radius: 4px; /* 둥글기 축소 */
    padding: 4px; /* 패딩 축소 */
  }

    /* 태블릿 화면 */
  @media (max-width: 768px) {
    font-size: 1.2rem; /* 아이콘 크기 축소 */
    width: 25px; /* 너비 축소 */
    height: 25px; /* 높이 축소 */
    margin: 0px 15px 10px 0px; /* 여백 축소 */
    border-radius: 4px; /* 둥글기 축소 */
    padding: 4px; /* 패딩 축소 */
  }

  /* 작은 모바일 화면 */
  @media (max-width: 480px) {
    font-size: 1rem; /* 더 작은 화면에서 아이콘 크기 축소 */
    width: 20px; /* 너비 축소 */
    height: 20px; /* 높이 축소 */
    margin: 0px 10px 13px 0px; /* 여백 더 축소 */
    border-radius: 3px; /* 둥글기 더 축소 */
    padding: 3px; /* 패딩 더 축소 */
  }
`;
