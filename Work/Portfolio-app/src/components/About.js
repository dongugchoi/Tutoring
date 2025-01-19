import React from "react";
import { FaUser, FaBirthdayCake, FaPhone, FaEnvelope, FaGithub } from "react-icons/fa";
import {
  Title,
  Section,
  ProfileSection,
  ProfileImage,
  ProfileText,
  InfoSection,
  InfoList,
  InfoItem,
  Content,
  ProfilePictureWrapper,
  InfoContainer,
  SectionTitle,
  InlineContent,
  StyledLink,
  SelfIntroText,
  IconWrapper
} from "../styles/AboutStyles";

const About = () => {
  return (
    <Section id="about">
      {/* 제목 */}
      <Title>About</Title>
      <ProfileSection>
        {/* 왼쪽: 프로필 사진과 한 줄 소개 */}
        <ProfilePictureWrapper>
          <ProfileImage />
          <ProfileText>넓은 바다처럼 끝없이 성장하고 변화하는 최동욱입니다.</ProfileText>
        </ProfilePictureWrapper>

        {/* 오른쪽: 내 소개와 정보 구분 */}
        <InfoContainer>
          {/* 왼쪽상단 :  내 소개 */}
          <InfoSection>
            <SectionTitle>프로필</SectionTitle>
            <InfoList>
              <InfoItem>
                <IconWrapper><FaUser /></IconWrapper>
                <Content>최동욱</Content>
              </InfoItem>
              <InfoItem>
                <IconWrapper><FaBirthdayCake /></IconWrapper>
                <Content>1996-12-10</Content>
              </InfoItem>
              <InfoItem>
                <IconWrapper><FaPhone /></IconWrapper>
                <Content>010-8012-0077</Content>
              </InfoItem>
              <InfoItem>
                <IconWrapper><FaEnvelope /></IconWrapper>
                <Content>ehddnr7321@gmail.com</Content>
              </InfoItem>
              <InfoItem>
                <IconWrapper><FaGithub /></IconWrapper>
                <StyledLink href="https://github.com/dongugchoi" target="_blank" rel="noopener noreferrer">
                  github.com/dongugchoi
                </StyledLink>
              </InfoItem>
            </InfoList>

          </InfoSection>




          {/* 오른쪽 위: 자기 소개 */}
          <InfoSection>
            <SectionTitle>자기소개</SectionTitle>
            <SelfIntroText>
              저는 다양한 경험을 통해 문제 해결 능력과 팀워크의 중요성을 깊이 깨달았다고 생각합니다.
              군 복무를 통해 인내심과 자기 관리 능력을 키웠으며, 이후 사회생활을 통해
              팀워크의 가치를 배우며 협력의 중요성을 느꼈습니다.
              이후 IT 분야로 전환하기 위해 다양한 기술을 학습하고 자격증을 취득하며 꾸준히 역량을 키웠습니다.
              프론트엔드 개발 과정에서 직면한 기술적 문제를 해결하기 위해 관련 문서를 찾아보고,
              온라인 자료와 검색을 적극적으로 활용하며 문제를 해결해왔습니다.
              저는 이러한 경험을 바탕으로 프로젝트에서 발생할 수 있는 다양한 문제를 해결하고,
              팀과 함께 최상의 결과를 만들어가고자 합니다.
              지속적인 자기 개발과 협업을 통해 성장하는 모습을 보여드리겠습니다.
            </SelfIntroText>
          </InfoSection>

          {/* 왼쪽 아래: 자격증 정보 */}
          <InfoSection>
            <SectionTitle>자격증</SectionTitle>
            <InfoList>
              <InfoItem>
                <div>
                  <InlineContent>2023.12: 네트워크관리사 2급</InlineContent>
                  <InlineContent>2023.08: 정보처리산업기사 ※ 필기합격</InlineContent>
                  <InlineContent>2022.12: 컴퓨터활용능력 1급</InlineContent>
                  <InlineContent>2022.05: 전산세무 2급, 전산회계 1급</InlineContent>
                  <InlineContent>2022.05: TAT 2급, FAT 1급</InlineContent>
                  <InlineContent>2021.04: ITQ (한글 A, PPT A, 엑셀 A)</InlineContent>
                </div>
              </InfoItem>
            </InfoList>
          </InfoSection>


          {/* 오른쪽 아래 : 교육사항 */}
          <InfoSection>
            <SectionTitle>교육사항</SectionTitle>
            <InfoList>
              <InfoItem>
                <div>
                  <InlineContent>19.05~25.02: 학점은행제 (컴퓨터공학) 학사 ※ 졸업 예정</InlineContent>
                  <InlineContent>24.07~25.01: 공공데이터 및 AWS 클라우드 활용 풀스택</InlineContent>
                  <InlineContent>23.10~24.05: React 기반 프론트엔드 개발 과정</InlineContent>
                  <InlineContent>23.08~23.10: Python 기초 이론 및 실습 과정</InlineContent>
                  <InlineContent>22.02~22.05: 전산회계 1급 및 전산세무 2급 과정</InlineContent>
                  <InlineContent>21.11~22.01: 컴퓨터활용능력 1급 준비 과정 (필기+실기)</InlineContent>
                </div>
              </InfoItem>
            </InfoList>
          </InfoSection>
        </InfoContainer>
      </ProfileSection>
    </Section>
  );
};

export default About;
