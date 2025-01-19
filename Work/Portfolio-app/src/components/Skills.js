import React from "react";
import styled from "styled-components";

// Styled Components
const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 0;
  margin-bottom: 3.75rem;
  margin-top:3.75rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: rgba(255, 255, 255, 0.6);
  z-index: 0;
  text-shadow: 
    2px 2px 5px rgba(0, 0, 0, 0.8), 
    -2px -2px 5px rgba(255, 215, 0, 0.7);

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

const CategoryTitle = styled.h2`
  font-size: 2rem;
  color: rgba(255, 255, 255, 0.8);
  margin-top: 20px;
  text-align: center;
  z-index:0;
  border-bottom: 3px solid rgba(196, 185, 185, 0.7);


  /* 1080px 이하 화면 */
  @media (max-width: 1080px) {
    font-size: 1.8rem; /* 글씨 크기 약간 축소 */
    margin-top: 15px; /* 상단 여백 축소 */
  }

  /* 768px 이하 화면 */
  @media (max-width: 768px) {
    font-size: 1.5rem; /* 글씨 크기 더 축소 */
    margin-top: 10px; /* 상단 여백 더 축소 */
    border-bottom: 2px solid rgba(196, 185, 185, 0.6); /* 경계선 두께 축소 */
  }

  /* 480px 이하 화면 */
  @media (max-width: 500px) {
    font-size: 1.2rem; /* 작은 화면에서 글씨 크기 대폭 축소 */
    margin-top: 8px; /* 상단 여백 최소화 */
    border-bottom: 1px solid rgba(196, 185, 185, 0.5); /* 경계선 두께 더 축소 */
  }
`;

const SkillList = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
  z-index: 0;

    /* 1080px 이하 화면 */
  @media (max-width: 1080px) {
    gap: 15px; /* 요소 간 간격 축소 */
    margin-top: 15px; /* 상단 여백 축소 */
  }

  /* 768px 이하 화면 */
  @media (max-width: 768px) {
    gap: 10px; /* 간격 더 축소 */
    margin-top: 10px; /* 상단 여백 더 축소 */
  }

  /* 480px 이하 화면 */
  @media (max-width: 500px) {
    gap: 8px; /* 간격 최소화 */
    margin-top: 8px; /* 상단 여백 최소화 */
    justify-content: space-evenly; /* 작은 화면에서 요소 간 균등 배치 */
  }
`;

const SkillItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 10px;
  width: 100px;

    /* 1080px 이하 화면 */
  @media (max-width: 1080px) {
    width: 90px; /* 너비 축소 */
    gap: 8px; /* 요소 간 간격 축소 */
  }

  /* 768px 이하 화면 */
  @media (max-width: 768px) {
    width: 80px; /* 너비 더 축소 */
    gap: 6px; /* 요소 간 간격 더 축소 */
  }

  /* 480px 이하 화면 */
  @media (max-width: 500px) {
    width: 70px; /* 작은 화면에서 너비 대폭 축소 */
    gap: 5px; /* 요소 간 간격 최소화 */
  }
`;

const SkillLogo = styled.img`
  width: 50px;
  height: 50px;

  /* 1080px 이하 화면 */
  @media (max-width: 1080px) {
    width: 45px; /* 크기 약간 축소 */
    height: 45px;
  }

  /* 768px 이하 화면 */
  @media (max-width: 768px) {
    width: 40px; /* 크기 더 축소 */
    height: 40px;
  }

  /* 480px 이하 화면 */
  @media (max-width: 500px) {
    width: 35px; /* 작은 화면에서 크기 대폭 축소 */
    height: 35px;
  }
`;

const SkillName = styled.span`
  font-size: 1rem;
  color: #333;
  font-weight: bold;

   /* 1080px 이하 화면 */
  @media (max-width: 1080px) {
    font-size: 0.9rem; /* 글씨 크기 약간 축소 */
  }

  /* 768px 이하 화면 */
  @media (max-width: 768px) {
    font-size: 0.8rem; /* 글씨 크기 더 축소 */
  }

  /* 480px 이하 화면 */
  @media (max-width: 500px) {
    font-size: 0.7rem; /* 작은 화면에서 글씨 크기 대폭 축소 */
  }
`;

const Skills = () => {
    return (
        <Section id="skills">
            <Title>Skills</Title>

            {/* 프론트엔드 */}
            <CategoryTitle>Frontend</CategoryTitle>
            <SkillList>
                <SkillItem>
                    <SkillLogo src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React Logo" />
                    <SkillName>React</SkillName>
                </SkillItem>
                <SkillItem>
                    <SkillLogo
                        src="https://reactnative.dev/img/header_logo.svg"
                        alt="React Native Logo"
                    />
                    <SkillName>React Native</SkillName>
                </SkillItem>
                <SkillItem>
                    <SkillLogo src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5 Logo" />
                    <SkillName>HTML5</SkillName>
                </SkillItem>
                <SkillItem>
                    <SkillLogo src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3 Logo" />
                    <SkillName>CSS3</SkillName>
                </SkillItem>
                <SkillItem>
                    <SkillLogo src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript Logo" />
                    <SkillName>JavaScript</SkillName>
                </SkillItem>

            </SkillList>

            {/* 백엔드 */}
            <CategoryTitle>Backend</CategoryTitle>
            <SkillList>
                <SkillItem>
                    <SkillLogo src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" alt="Spring Boot Logo" />
                    <SkillName>Spring Boot</SkillName>
                </SkillItem>

                <SkillItem>
                    <SkillLogo src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java Logo" />
                    <SkillName>Java</SkillName>
                </SkillItem>
            </SkillList>

            <CategoryTitle>DataBase</CategoryTitle>
            <SkillList>
                <SkillItem>
                    <SkillLogo src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" alt="MySQL Logo" />
                    <SkillName>MySQL</SkillName>
                </SkillItem>
                <SkillItem>
                    <SkillLogo src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" alt="Oracle Logo" />
                    <SkillName>Oracle</SkillName>
                </SkillItem>
            </SkillList>

            {/* 툴 */}
            <CategoryTitle>Tools</CategoryTitle>
            <SkillList>
                <SkillItem>
                    <SkillLogo src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="Visual Studio Code Logo" />
                    <SkillName>VS Code</SkillName>
                </SkillItem>
                <SkillItem>
                    <SkillLogo src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg" alt="Android Studio Logo" />
                    <SkillName>Android Studio</SkillName>
                </SkillItem>
                <SkillItem>
                    <SkillLogo src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" alt="Postman Logo" />
                    <SkillName>Postman</SkillName>
                </SkillItem>
                <SkillItem>
                    <SkillLogo src="https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png" alt="AWS Logo" />
                    <SkillName>AWS</SkillName>
                </SkillItem>
            </SkillList>

            {/* 라이브러리 */}
            <CategoryTitle>Libraries</CategoryTitle>
            <SkillList>
                <SkillItem>
                    <SkillLogo src="https://recoiljs.org/img/logo.svg" alt="Recoil Logo" />
                    <SkillName>Recoil</SkillName>
                </SkillItem>
                <SkillItem>
                    <SkillLogo src={`${process.env.PUBLIC_URL}/axios.svg`} alt="Axios Logo" />
                    <SkillName>Axios</SkillName>
                </SkillItem>
                <SkillItem>
                    <SkillLogo src={`${process.env.PUBLIC_URL}/react-router.svg`} alt="React Router DOM" />
                    <SkillName>React Router DOM</SkillName>
                </SkillItem>
                <SkillItem>
                    <SkillLogo src="https://styled-components.com/logo.png" alt="Styled Components Logo" />
                    <SkillName>Styled Components</SkillName>
                </SkillItem>
                <SkillItem>
                <SkillLogo src={`${process.env.PUBLIC_URL}/react-icons.png`} alt="React Icons Logo" />

                    <SkillName>React Icons</SkillName>
                </SkillItem>
            </SkillList>
        </Section>
    );
};

export default Skills;
